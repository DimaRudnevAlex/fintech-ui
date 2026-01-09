import * as XLSX from 'xlsx';

import { triggerDownloadFile } from './trigger-download-file';
import { ExcelExportConfig, ExcelValue } from './types';

export function exportByConfig<T>(config: ExcelExportConfig<T>, data: T[]) {
  try {
    const workbook = XLSX.utils.book_new();

    config.sheets.forEach((sheet) => {
      const rows = data.map((row) => {
        const result: Record<string, ExcelValue> = {};

        sheet.columns.forEach((col) => {
          const value =
            typeof col.accessor === 'function'
              ? col.accessor(row)
              : (row[col.accessor] as ExcelValue);

          result[col.header] = value;
        });

        return result;
      });

      const worksheet = XLSX.utils.json_to_sheet(rows);

      worksheet['!cols'] = sheet.columns.map((col) => ({
        wch: col.width ?? 20,
      }));

      XLSX.utils.book_append_sheet(workbook, worksheet, sheet.name);
    });

    const buffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    triggerDownloadFile(blob, `${config.fileName}.xlsx`);

    config.onSuccess?.();
  } catch (e) {
    config.onError?.(e as Error);
  }
}
