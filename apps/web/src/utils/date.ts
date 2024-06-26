import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';

import { Duration } from '@web/types';

dayjs.extend(duration);
dayjs.extend(utc);

export const getDuration = (dateUtc: Date): Duration => {
  const now = dayjs.utc();
  const duration = dayjs.duration(now.diff(dateUtc));

  return {
    years: Math.abs(duration.years()),
    days: Math.abs(duration.days()),
    hours: Math.abs(duration.hours()),
    minutes: Math.abs(duration.minutes()),
    seconds: Math.abs(duration.seconds()),
  };
};

export const formatTimeUnit = (unit: number, singular: string, plural: string) =>
  `${unit} ${unit === 1 ? singular : plural}`;

export const getElapsedTime = (dateUtc: Date): string => {
  const duration = getDuration(dateUtc);
  if (duration.years > 0) {
    return formatTimeUnit(duration.years, 'year', 'years') + ' ago';
  }
  if (duration.days > 0) {
    return formatTimeUnit(duration.days, 'day', 'days') + ' ago';
  }
  if (duration.hours > 0) {
    return formatTimeUnit(duration.hours, 'hour', 'hours') + ' ago';
  }
  if (duration.minutes > 0) {
    return formatTimeUnit(duration.minutes, 'minute', 'minutes') + ' ago';
  }
  if (duration.seconds > 0) {
    return formatTimeUnit(duration.seconds, 'second', 'seconds') + ' ago';
  }
  return 'now';
};
