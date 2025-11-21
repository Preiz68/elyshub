import { add, startOfWeek } from "date-fns";
import { create } from "zustand";

interface SidebarState {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

const today = new Date();
const start = startOfWeek(today, { weekStartsOn: 1 });

export type ViewMode = "day" | "week" | "month" | "year";

export type Appointment = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location?: string;
  color: "blue" | "green" | "orange" | "red";
  attendees?: boolean;
  extraDetails?: string;
};

type CalendarState = {
  view: ViewMode;
  currentDate: Date;
  appointments: Appointment[];
  nextWeek: () => void;
  prevWeek: () => void;
  setView: (v: CalendarState["view"]) => void;
  addAppointment: (a: Appointment) => void;
};

export const useSidebar = create<SidebarState>((set) => ({
  open: true,
  toggle: () => set((s) => ({ open: !s.open })),
  close: () => set({ open: false }),
}));

export const useCalendarStore = create<CalendarState>((set) => ({
  view: "week",
  currentDate: new Date(),

  appointments: [
    {
      id: "1",
      title: "Hilary Wilton x John",
      start: add(start, { days: 0, hours: 9 }),
      end: add(start, { days: 0, hours: 9, minutes: 30 }),
      color: "blue",
    },
    {
      id: "2",
      title: "Hilary Wilton x John",
      start: add(start, { days: 1, hours: 10 }),
      end: add(start, { days: 1, hours: 11 }),
      color: "green",
      location: "Cottage Medicare H...",
      attendees: true,
    },
    {
      id: "3",
      title: "Hilary Wilton x John",
      start: add(start, { days: 2, hours: 8 }),
      end: add(start, { days: 2, hours: 10 }),
      color: "orange",
      location: "Cottage Medicare H...",
      extraDetails: "Consultation Call",
      attendees: true,
    },
    {
      id: "4",
      title: "Hilary Wilton x John",
      start: add(start, { days: 3, hours: 11 }),
      end: add(start, { days: 3, hours: 12 }),
      color: "blue",
      location: "Cottage Medicare H...",
      attendees: true,
    },
    {
      id: "5",
      title: "Hilary Wilton x John",
      start: add(start, { days: 4, hours: 9, minutes: 30 }),
      end: add(start, { days: 3, hours: 10 }),
      color: "orange",
      location: "Cottage Medicare H...",
    },
    {
      id: "6",
      title: "Hilary Wilton x John",
      start: add(start, { days: 5, hours: 11, minutes: 30 }),
      end: add(start, { days: 4, hours: 13, minutes: 30 }),
      color: "orange",
      location: "Cottage Medicare H...",
      attendees: true,
      extraDetails: "Consultation Call",
    },
    {
      id: "7",
      title: "Hilary Wilton x John",
      start: add(start, { days: 6, hours: 9 }),
      end: add(start, { days: 4, hours: 11 }),
      color: "blue",
      location: "Cottage Medicare H...",
      attendees: true,
      extraDetails: "Consultation Call",
    },
    {
      id: "8",
      title: "Hilary Wilton x John",
      start: add(start, { days: 0, hours: 13 }),
      end: add(start, { days: 0, hours: 14 }),
      color: "orange",
      location: "Cottage Medicare H...",
      attendees: true,
    },
    {
      id: "9",
      title: "Consultation Call",
      start: add(start, { days: 2, hours: 13 }),
      end: add(start, { days: 2, hours: 13, minutes: 30 }),
      color: "green",
      attendees: true,
    },
    {
      id: "10",
      title: "Hilary Wilton x John",
      start: add(start, { days: 4, hours: 14 }),
      end: add(start, { days: 4, hours: 15 }),
      color: "orange",
      location: "Cottage Medicare H...",
      attendees: true,
    },
    {
      id: "11",
      title: "Consultation Call",
      start: add(start, { days: 6, hours: 14 }),
      end: add(start, { days: 6, hours: 14, minutes: 30 }),
      color: "blue",
      attendees: true,
    },
  ],

  nextWeek: () =>
    set((state) => ({
      currentDate: new Date(
        state.currentDate.getFullYear(),
        state.currentDate.getMonth(),
        state.currentDate.getDate() + 7
      ),
    })),

  prevWeek: () =>
    set((state) => ({
      currentDate: new Date(
        state.currentDate.getFullYear(),
        state.currentDate.getMonth(),
        state.currentDate.getDate() - 7
      ),
    })),

  setView: (v) => set({ view: v }),

  addAppointment: (a) =>
    set((state) => ({
      appointments: [...state.appointments, a],
    })),
}));
