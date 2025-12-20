export type KV<T> = { [key: string]: T };

export type WithChildren = Readonly<{
  children: React.ReactNode;
}>;

export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
