import { CSSProperties } from 'react';

import { Column } from '@tanstack/react-table';

export const getCommonPinningStyles = <T>(column: Column<T>): CSSProperties => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn =
    isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn =
    isPinned === 'right' && column.getIsFirstColumn('right');

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-6px 0 6px -6px var(--color-grey-light) inset, inset 0 -1px 0 var(--color-grey-easy)'
      : isFirstRightPinnedColumn
        ? '6px 0 6px -6px var(--color-grey-light) inset, inset 0 -1px 0 var(--color-grey-easy)'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    opacity: isPinned ? 0.95 : 1,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
    userSelect: 'none',
  };
};
