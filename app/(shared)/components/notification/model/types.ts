export type NotificationType = 'success' | 'error' | 'warning';

export type Notification = {
  id: number;
  title: string;
  description?: string;
  type?: NotificationType;
};
