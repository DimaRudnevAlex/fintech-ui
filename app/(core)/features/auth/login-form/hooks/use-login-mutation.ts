import { useRouter } from 'next/navigation';

import { useLogin } from '@/(shared)/api/hooks/auth/use-login';
import { ROUTES } from '@/(shared)/constants/routes';
import { useNotification } from '@/(shared)/lib/providers/notification-provider';

export const useLoginMutation = () => {
  const router = useRouter();
  const notify = useNotification();

  const { mutate } = useLogin({
    mutationKey: ['login'],
    onSuccess: () => router.push(ROUTES.TRANSFER_FIAT),
    onError: () =>
      notify({
        type: 'error',
        title: 'Ошибка',
        description: 'Ну удалось авторизоваться',
      }),
  });

  return { mutate };
};
