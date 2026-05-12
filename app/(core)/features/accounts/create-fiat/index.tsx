'use client';

import { useMemo } from 'react';

import { useCreateFiatAccount } from '@/(shared)/api/hooks/account/use-create-fiat-account';
import { useGetFiatCurrencies } from '@/(shared)/api/hooks/currencies/use-get-fiat-currencies';
import { BaseButton } from '@/(shared)/components/button';
import { useAppForm } from '@/(shared)/hooks/form';
import { useNotification } from '@/(shared)/lib/providers/notification-provider';

import { defaultValues } from '@/(core)/features/accounts/create-fiat/model/constansts';
import { schema } from '@/(core)/features/accounts/create-fiat/model/schema';

const CreateFiat: React.FC = () => {
  const { data, isLoading } = useGetFiatCurrencies();
  const notify = useNotification();
  const { mutate, isPending } = useCreateFiatAccount({
    onSuccess: () =>
      notify({
        title: 'Успех',
        type: 'success',
        description: 'Открыт новый счет',
      }),
    onError: () =>
      notify({
        title: 'Ошибка',
        type: 'error',
        description: 'Не удалось открыть новый счет',
      }),
    onSettled: (data, error, variables, onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: ['account-list'] });
    },
  });

  const options = useMemo(() => {
    return data?.map((c) => ({ value: c.code, label: c.name })) ?? [];
  }, [data]);

  const form = useAppForm({
    defaultValues: defaultValues,
    onSubmit: ({ value }) => {
      mutate({
        account_type: 'fiat',
        currency: value.currency?.value as string,
      });
    },
    validators: {
      onChange: schema,
    },
  });

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <form.AppField
          name="currency"
          children={(field) => (
            <field.SelectField
              label="Выберите валюту"
              placeholder="Выберите валюту"
              options={options}
              isLoading={isLoading}
            />
          )}
        />
        <BaseButton
          size="lg"
          style={{ marginTop: 20 }}
          isLoading={isPending}
          type="button"
          onClick={() => {
            form.validate('change');
            form.handleSubmit();
          }}
        >
          {'Открыть счет'}
        </BaseButton>
      </form>
    </div>
  );
};

export default CreateFiat;
