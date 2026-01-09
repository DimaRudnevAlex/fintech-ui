import React, { memo } from 'react';

import { FileDown } from 'lucide-react';

import { IconButton } from '@/(shared)/components/button';
import { useExcelExport } from '@/(shared)/hooks/expoter-file';
import { useNotification } from '@/(shared)/lib/providers/notification-provider';

import { fiatExcelConfig } from '../../model/config-export';
import { Data } from '../../model/types';

import { ExportFileFiatProps } from './model/type';

const ExportFileFiat: React.FC<ExportFileFiatProps<Data>> = ({
  data,
  disabled,
}) => {
  const notify = useNotification();

  const exportData = useExcelExport({
    ...fiatExcelConfig,
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

export default memo(ExportFileFiat);
