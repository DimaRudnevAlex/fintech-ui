type Tab = {
  id: string;
  label: string;
  disabled?: boolean;
};

export type TabsProps = {
  tabs: Tab[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
  layoutId?: string;
};
