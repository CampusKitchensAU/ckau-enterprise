export type SheetList = {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  data: Sheet[];
};

export type Sheet = {
  id: number;
  accessLevel: string;
  createdAt: string;
  modifiedAt: string;
  name: string;
  permalink: string;
  version: number;
  source: Source;
};

export type Source = {
  id: number;
  type: string;
};
