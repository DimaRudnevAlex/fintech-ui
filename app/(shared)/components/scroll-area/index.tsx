'use client';

import { useCallback, useRef, useState } from 'react';

import * as ScrollAreaSrc from '@radix-ui/react-scroll-area';
import { clsx } from 'clsx';

import { DragData, ScrollAreaProps } from './model/types';

import styles from './styles.module.scss';

const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  dragScroll = false,
  className,
  allowHorizontalScroll = true,
}) => {
  const viewportRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [suppressClick, setSuppressClick] = useState(false);

  const dragData = useRef<DragData>({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
    button: 0,
    hasMoved: false,
  });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!dragScroll || e.button === 1) return;
      const viewport = viewportRef.current;
      if (!viewport) return;

      dragData.current.button = e.button;
      dragData.current.startX = e.pageX - viewport.offsetLeft;
      dragData.current.startY = e.pageY - viewport.offsetTop;
      dragData.current.scrollLeft = viewport.scrollLeft;
      dragData.current.scrollTop = viewport.scrollTop;
      dragData.current.hasMoved = false;

      setIsDragging(true);
    },
    [dragScroll],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragData.current.button === 1) return;

      const viewport = viewportRef.current;
      if (!isDragging || !viewport) return;

      const deltaX = e.pageX - dragData.current.startX;
      const deltaY = e.pageY - dragData.current.startY;

      viewport.scrollLeft = dragData.current.scrollLeft - deltaX;
      viewport.scrollTop = dragData.current.scrollTop - deltaY;

      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        dragData.current.hasMoved = true;
      }

      e.preventDefault();
    },
    [isDragging],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);

    if (dragData.current.hasMoved) {
      setSuppressClick(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => setIsDragging(false), []);

  const handleClickCapture = useCallback(
    (e: React.MouseEvent) => {
      if (suppressClick) {
        e.stopPropagation();
        e.preventDefault();
        setSuppressClick(false);
      }
    },
    [suppressClick],
  );

  return (
    <ScrollAreaSrc.Root className={clsx(styles.root, className)}>
      <ScrollAreaSrc.Viewport
        ref={viewportRef}
        className={clsx(
          styles.viewport,
          !allowHorizontalScroll && styles['no-horizontal'],
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClickCapture={handleClickCapture}
      >
        {children}
      </ScrollAreaSrc.Viewport>

      <ScrollAreaSrc.Scrollbar
        className={styles.scrollbar}
        orientation="vertical"
      >
        <ScrollAreaSrc.Thumb className={styles.thumb} />
      </ScrollAreaSrc.Scrollbar>

      {allowHorizontalScroll && (
        <ScrollAreaSrc.Scrollbar
          className={styles.scrollbar}
          orientation="horizontal"
        >
          <ScrollAreaSrc.Thumb className={styles.thumb} />
        </ScrollAreaSrc.Scrollbar>
      )}

      <ScrollAreaSrc.Corner className={styles.corner} />
    </ScrollAreaSrc.Root>
  );
};

export default ScrollArea;
