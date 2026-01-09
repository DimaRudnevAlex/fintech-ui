export type ExcelColumn<T, K extends keyof T = keyof T> = {
  header: string;
  accessor: K | ((row: T) => ExcelValue);
  width?: number;
};

export type ExcelValue = string | number | boolean | Date | null | undefined;

export type ExcelSheet<T> = {
  name: string;
  columns: ExcelColumn<T>[];
};

export type ExcelExportConfig<T> = {
  fileName: string;
  sheets: ExcelSheet<T>[];
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};
