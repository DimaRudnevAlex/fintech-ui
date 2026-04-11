'use client';

import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { useAllDictionaries } from '@/(shared)/api/hooks/dictionaries/use-all-dictionaries';
import { useCreateUser } from '@/(shared)/api/hooks/user/use-create-user';
import { BaseButton } from '@/(shared)/components/button';
import { useAppForm } from '@/(shared)/hooks/form';
import { useNotification } from '@/(shared)/lib/providers/notification-provider';

import { defaultFormValues } from '@/(core)/features/profile/create-user/model/constants';
import { getScheme } from '@/(core)/features/profile/create-user/model/scheme';
import Address from '@/(core)/features/profile/create-user/steps/address';
import IdentityDocument from '@/(core)/features/profile/create-user/steps/identity-document';
import PersonalDate from '@/(core)/features/profile/create-user/steps/personal-data';
import TaxInfo from '@/(core)/features/profile/create-user/steps/tax-info';
import UserType from '@/(core)/features/profile/create-user/steps/user-type';
import { mapper } from '@/(core)/features/profile/create-user/utils/mapper';

import styles from './styles.module.scss';

const CreateUser: React.FC = () => {
  const notify = useNotification();
  const queryClient = useQueryClient();
  const [step, setStep] = useState(0);

  const { data, isLoading } = useAllDictionaries();

  const { mutate, isPending } = useCreateUser({
    onSuccess: async () => {
      notify({
        type: 'success',
        title: 'Профиль успешно заполнен',
        description: 'Теперь вы можете пользоваться Arckat, поздравляем!',
      });
      await queryClient.invalidateQueries({ queryKey: ['me'] });
    },
    onError: () => {
      notify({
        type: 'error',
        title: 'не удалось создать профиль',
        description: 'Попробуйте позже, приносим свои извинения',
      });
    },
  });

  const form = useAppForm({
    defaultValues: defaultFormValues,
    onSubmit: ({ value }) => {
      mutate(mapper(value));
    },
    validators: {
      onSubmit: ({ value }) => {
        const schema = getScheme(step as 0 | 1 | 2 | 3 | 4);
        const result = schema.safeParse(value);
        if (result.success) {
          if (step === 4) return;
          setStep(step + 1);
          return;
        }
        return {
          fields: Object.fromEntries(
            result.error.issues.map((err) => {
              const path = err.path.join('.');
              const message = err.message;
              console.log({ path, message });
              return [path, message];
            }),
          ),
        };
      },
    },
  });

  return (
    <div className={styles.content}>
      <form onSubmit={(e) => e.preventDefault()}>
        <form.AppForm>
          {step === 0 && (
            <UserType
              form={form}
              options={data?.user_types}
              isLoading={isLoading}
            />
          )}
          {step === 1 && (
            <PersonalDate form={form} options={data?.messengers} />
          )}
          {step === 2 && (
            <IdentityDocument form={form} options={data?.document_types} />
          )}
          {step === 3 && <Address form={form} />}
          {step === 4 && <TaxInfo form={form} />}
        </form.AppForm>
      </form>
      <div className={styles.actions}>
        <BaseButton
          onClick={() => setStep((prev) => prev - 1)}
          size="lg"
          isLoading={isPending}
        >
          Назад
        </BaseButton>
        {step === 4 ? (
          <BaseButton
            onClick={() => form.handleSubmit()}
            size="lg"
            isLoading={isPending}
          >
            Отправить на проверку
          </BaseButton>
        ) : (
          <BaseButton onClick={() => form.validate('submit')} size="lg">
            Далее
          </BaseButton>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
