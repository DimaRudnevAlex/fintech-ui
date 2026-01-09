import { memo } from 'react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('historyFiat.notify');
  const notify = useNotification();

  const exportData = useExcelExport({
    ...cryptoExcelConfig,
    onSuccess: () =>
      notify({
        type: 'success',
        description: t('successExportFile'),
        title: t('success'),
      }),
    onError: () =>
      notify({
        type: 'error',
        description: t('failExportFile'),
        title: t('error'),
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
