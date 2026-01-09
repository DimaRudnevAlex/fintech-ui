type HistoryTab = 'fiat' | 'crypto';

export type HistoryTabsProps = {
  activeTab: ItemsTab;
  onChange: (tab: ItemsTab) => void;
  tabs: ItemsTab[];
};

export type ItemsTab = {
  label: string;
  value: HistoryTab;
};
