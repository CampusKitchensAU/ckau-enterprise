interface FilterTab {
  title: string;
  searchFn: () => void;
}

const filterTabs: FilterTab[] = [
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

export default filterTabs;
