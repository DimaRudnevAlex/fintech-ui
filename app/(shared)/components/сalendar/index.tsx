'use client';

import { DayPicker } from 'react-day-picker';

import { ru } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'react-day-picker/style.css';
import styles from './styles.module.scss';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={ru}
      showOutsideDays={showOutsideDays}
      className={
        className ? `${styles.calendar} ${className}` : styles.calendar
      }
      classNames={{
        months: styles.months,
        month: styles.month,
        month_caption: styles.caption, // было: caption
        caption_label: styles.captionLabel,
        nav: styles.nav,
        button_previous: styles.navButtonPrevious, // было: nav_button_previous
        button_next: styles.navButtonNext, // было: nav_button_next
        month_grid: styles.table, // было: table
        weekdays: styles.headRow, // было: head_row
        weekday: styles.headCell, // было: head_cell
        week: styles.row, // было: row
        day: styles.cell, // было: cell (td-обёртка)
        day_button: styles.day, // было: day (сама кнопка)
        selected: styles.daySelected, // было: day_selected
        today: styles.dayToday, // было: day_today
        outside: styles.dayOutside, // было: day_outside
        disabled: styles.dayDisabled, // было: day_disabled
        range_middle: styles.dayRangeMiddle, // было: day_range_middle
        hidden: styles.dayHidden, // было: day_hidden
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === 'left' ? (
            <ChevronLeft width={30} height={30} className={styles.chevron} />
          ) : (
            <ChevronRight width={30} height={30} className={styles.chevron} />
          ),
      }}
      {...props}
    />
  );
}

Calendar.displayName = 'Calendar';

export { Calendar };
