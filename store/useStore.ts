import { create } from "zustand";

interface SidebarState {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

export const useSidebar = create<SidebarState>((set) => ({
  open: true,
  toggle: () => set((s) => ({ open: !s.open })),
  close: () => set({ open: false }),
}));
