/** Need this file because I need different filter functions for shifts than
I do with contacts. */
interface FilterTab {
  title: string;
  searchFn: () => void;
}

const ShiftFilterTabs: FilterTab[] = [
  {
    title: "All",
    searchFn: () => {
      return;
    },
  },
  {
    title: "Pickup",
    searchFn: () => {
      return;
    },
  },
  {
    title: "Packaging",
    searchFn: () => {
      return;
    },
  },
  {
    title: "Delivery",
    searchFn: () => {
      return;
    },
  },
];

export default ShiftFilterTabs;
