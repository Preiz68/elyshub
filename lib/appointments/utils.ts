import {
  startOfWeek,
  addDays,
  eachHourOfInterval,
  formatISO,
  startOfDay,
} from "date-fns";

export function weekRangeFrom(date: Date) {
  const start = startOfWeek(new Date(date), { weekStartsOn: 1 });
  const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));
  return days;
}

export function hoursOfDay() {
  // 24 hours, but UI shows 8am-6pm typically; we'll return 24 and render a subset in UI
  return eachHourOfInterval({
    start: startOfDay(new Date()),
    end: addDays(startOfDay(new Date()), 0),
  });
}

export const formatTime = (d: Date) => {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
