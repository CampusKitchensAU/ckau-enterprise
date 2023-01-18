interface FilterTab {
  title: string;
  searchFn: () => void;
}

const FilterTabs: FilterTab[] = [
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

export default FilterTabs;
