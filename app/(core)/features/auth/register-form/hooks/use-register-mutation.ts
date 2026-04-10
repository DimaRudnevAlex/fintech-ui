import { useRouter } from 'next/navigation';

import { useLogin } from '@/(shared)/api/hooks/auth/use-login';
import { useRegister } from '@/(shared)/api/hooks/auth/use-register';
import { ROUTES } from '@/(shared)/constants/routes';
import { useNotification } from '@/(shared)/lib/providers/notification-provider';

export const useRegisterMutation = () => {
  const router = useRouter();
  const notify = useNotification();

  const login = useLogin({
    mutationKey: ['login'],
    onSuccess: () => router.push(ROUTES.TRANSFER_FIAT),
    onError: () =>
      notify({
        type: 'error',
        title: 'Ошибка',
        description: 'Ну удалось авторизоваться',
      }),
  });

  const { mutate, isPending } = useRegister({
    onSuccess: async (data, meta) => {
      login.mutate({ username: meta.username, password: meta.password });
    },
    onError: () =>
      notify({
        type: 'error',
        title: 'Ошибка',
        description: 'Ну удалось зарегистрироваться',
      }),
  });

  return { mutate, isPending };
};
