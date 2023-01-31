export type shiftData = {
  id: number;
  name: string;
  type: number;
  day: string;
  time: string;
};

export type fullShiftData = {
  id: number;
  name: string;
  day: string;
  time: string;
  type: number;
  location: string;
  slots: number;
  contactName: string;
  contactPhone: string;
  assignedIds: number[];
  summary: string;
};
