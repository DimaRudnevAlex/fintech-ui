import { WithChildren } from '@/(shared)/types/general';

export type ScrollAreaProps = {
  dragScroll?: boolean;
  allowHorizontalScroll?: boolean;
  className?: string;
} & WithChildren;

export type DragData = {
  startX: number;
  startY: number;
  scrollLeft: number;
  scrollTop: number;
  button: number;
  hasMoved: boolean;
};
