import { memo } from 'react';

import { FileDown } from 'lucide-react';

import { IconButton } from '@/(shared)/components/button';
import { useExcelExport } from '@/(shared)/hooks/expoter-file';
import { useNotification } from '@/(shared)/lib/providers/notification-provider';

import { cryptoExcelConfig } from '../../model/config-export';
import { Data } from '../../model/types';

import { ExportFileCryptoProps } from './model/type';

const ExportFileCrypto: React.FC<ExportFileCryptoProps<Data>> = ({
  data,
  disabled,
}) => {
  const notify = useNotification();

  const exportData = useExcelExport({
    ...cryptoExcelConfig,
    onSuccess: () =>
      notify({
        type: 'success',
        description: 'Файл успешно выгружен',
        title: 'Готово',
      }),
    onError: () =>
      notify({
        type: 'error',
        description: 'Не удалось выгрузить файл',
        title: 'Ошибка',
      }),
  });

  return (
    <IconButton
      disabled={disabled || !data?.length}
      onClick={() => exportData(data)}
      icon={<FileDown />}
    />
  );
};

export default memo(ExportFileCrypto);
