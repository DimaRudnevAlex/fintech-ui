import { useRouter } from 'next/navigation';

import { useRegister } from '@/(shared)/api/hooks/auth/use-register';
import { ROUTES } from '@/(shared)/constants/routes';
import { useNotification } from '@/(shared)/lib/providers/notification-provider';

export const useRegisterMutation = () => {
  const router = useRouter();
  const notify = useNotification();

  const { mutate, isPending } = useRegister({
    onSuccess: () => router.push(ROUTES.TRANSFER_FIAT),
    onError: () =>
      notify({
        type: 'error',
        title: 'Ошибка',
        description: 'Ну удалось зарегистрироваться',
      }),
  });

  return { mutate, isPending };
};
