'use client';

import { useCallback } from 'react';

import { exportByConfig } from '@/(shared)/lib/excel/excel-exporter';
import { ExcelExportConfig } from '@/(shared)/lib/excel/types';

export function useExcelExport<T>(config: ExcelExportConfig<T>) {
  return useCallback(
    (data: T[]) => {
      exportByConfig(config, data);
    },
    [config],
  );
}
