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

export type AllDashboardQueryParams = {
  queryParameters: {
    accessApiLevel?: number;
    includeAll?: boolean;
    modifiedSince?: string | number;
    numericDates?: boolean;
    page?: number;
    pageSize?: number;
  };
};

export type DashboardList = {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  data: Dashboard[];
};

export type Dashboard = {
  createdAt: string;
  modifiedAt: string;
  id: number;
  accessLevel: string;
  permalink: string;
  name: string;
};
