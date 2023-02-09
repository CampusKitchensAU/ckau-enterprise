/* ## ENUMS ## */
export enum AccessLevel {
  ADMIN = "ADMIN",
  COMMENTER = "COMMENTER",
  EDITOR = "EDITOR",
  EDITOR_SHARE = "EDITOR_SHARE",
  OWNER = "OWNER",
  VIEWER = "VIEWER",
}

export enum AttachmentType {
  BOX_COM = "BOX_COM",
  DROPBOX = "DROPBOX",
  EGNYTE = "EGNYTE",
  FILE = "FILE",
  GOOGLE_DRIVE = "GOOGLE_DRIVE",
  LINK = "LINK",
  ONEDRIVE = "ONEDRIVE",
  SMARTSHEET = "SMARTSHEET",
}

export enum AttachmentSubType {
  DOCUMENT = "DOCUMENT",
  DRAWING = "DRAWING",
  FOLDER = "FOLDER",
  PDF = "PDF",
  PRESENTATION = "PRESENTATION",
  SPREADSHEET = "SPREADSHEET",
}

export enum ColumnTypes {
  ABSTRACT_DATETIME = "ABSTRACT_DATETIME",
  CHECKBOX = "CHECKBOX",
  CONTACT_LIST = "CONTACT_LIST",
  DATE = "DATE",
  DATETIME = "DATETIME",
  DURATION = "DURATION",
  MULTI_CONTACT_LIST = "MULTI_CONTACT_LIST",
  MULTI_PICKLIST = "MULTI_PICKLIST",
  PICKLIST = "PICKLIST",
  PREDECESSOR = "PREDECESSOR",
  TEXT_NUMBER = "TEXT_NUMBER",
}

export enum DataLabelsType {
  NONE = "NONE",
  PERCENT = "PERCENT",
  VALUE = "VALUE",
}

export enum LineType {
  CURVED = "CURVED",
  STEPPED = "STEPPED",
  STRAIGHT = "STRAIGHT",
}

export enum Locations {
  BOTTOM = "BOTTOM",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  NONE = "NONE",
}

export enum ObjectType {
  FOLDER = "FOLDER",
  REPORT = "REPORT",
  SHEET = "SHEET",
  SIGHT = "SIGHT",
  TEMPLATE = "TEMPLATE",
  WORKSPACE = "WORKSPACE",
}

export enum Operators {
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  EQUAL = "EQUAL",
  FUTURE = "FUTURE",
  GREATER_THAN = "GREATER_THAN",
  IS_BLANK = "IS_BLANK",
  IS_CHECKED = "IS_CHECKED",
  IS_DATE = "IS_DATE",
  IS_NUMBER = "IS_NUMBER",
  IS_NOT_BLANK = "IS_NOT_BLANK",
  IS_NOT_CHECKED = "IS_NOT_CHECKED",
  IS_NOT_DATE = "IS_NOT_DATE",
  IS_NOT_NUMBER = "IS_NOT_NUMBER",
  LAST_N_DAYS = "LAST_N_DAYS",
  LESS_THAN = "LESS_THAN",
  NEXT_N_DAYS = "NEXT_N_DAYS",
  NOT_EQUAL = "NOT_EQUAL",
  PAST = "PAST",
  TODAY = "TODAY",
  AND = "AND",
  OR = "OR",
}

export enum PredecessorType {
  FF = "FF",
  FS = "FS",
  SF = "SF",
  SS = "SS",
}

export enum ProofStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  PROOF_DELETED = "PROOF_DELETED",
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export enum ProofType {
  DOCUMENT = "DOCUMENT",
  IMAGE = "IMAGE",
  MIXED = "MIXED",
  NONE = "NONE",
  VIDEO = "VIDEO",
}

export enum SeriesType {
  AREA = "AREA",
  BAR = "BAR",
  COLUMN = "COLUMN",
  LINE = "LINE",
  PIE = "PIE",
  SCATTER = "SCATTER",
}

export enum ShortcutType {
  SHORTCUT = "SHORTCUT",
  SHORTCUTICON = "SHORTCUTICON",
  SHORTCUTLIST = "SHORTCUTLIST",
}

export enum Status {
  BLOCKED = "BLOCKED",
  BROKEN = "BROKEN",
  CIRCULAR = "CIRCULAR",
  DISABLED = "DISABLED",
  INACCESSIBLE = "INACCESSIBLE",
  INVALID = "INVALID",
  NOT_SHARED = "NOT_SHARED",
  OK = "OK",
}

export enum SummaryPermissions {
  ADMIN = "ADMIN",
  READ_DELETE = "READ_DELETE",
  READ_ONLY = "READ_ONLY",
  READ_WRITE = "READ_WRITE",
}

export enum SystemColumns {
  AUTO_NUMBER = "AUTO_NUMBER",
  CREATED_BY = "CREATED_BY",
  CREATED_DATE = "CREATED_DATE",
  MODIFIED_BY = "MODIFIED_BY",
  MODIFIED_DATE = "MODIFIED_DATE",
}

export enum Tags {
  CALENDAR_END_DATE = "CALENDAR_END_DATE",
  CALENDAR_START_DATE = "CALENDAR_START_DATE",
  CARD_DONE = "CARD_DONE",
  GANTT_ALLOCATION = "GANNTT_ALLOCATION",
  GANTT_ASSIGNED_RESOURCE = "GANTT_ASSIGNED_RESOURCE",
  GANTT_DISPLAY_LABEL = "GANTT_DISPLAY_LABEL",
  GANTT_DURATION = "GANTT_DURATION",
  GANTT_END_DATE = "GANTT_END_DATE",
  GANTT_PERCENTAGE_COMPLETE = "GANTT_PERCENTAGE_COMPLETE",
  GANTT_PREDECESSOR = "GANTT_PREDECESSOR",
  GANTT_START_DATE = "GANTT_START_DATE",
  BASELINE_START_DATE = "BASELINE_START_DATE",
  BASELINE_END_DATE = "BASELINE_END_DATE",
  BASELINE_VARIANCE = "BASELINE_VARIANCE",
}

export enum TooltipsType {
  NONE = "NONE",
  PERCENT = "PERCENT",
  X_SERIES_Y = "X_SERIES_Y",
  X_Y_PERCENT = "X_Y_PERCENT",
  Y = "Y",
  Y_PERCENT = "Y_PERCENT",
}

export enum Type {
  ABSTRACT_DATETIME = "ABSTRACT_DATETIME",
  CONTACT = "CONTACT",
  DATE = "DATE",
  DATETIME = "DATETIME",
  DURATION = "DURATION",
  MULTI_CONTACT = "MULTI_CONTACT",
  MULTI_PICKLIST = "MULTI_PICKLIST",
  PREDECESSOR_LIST = "PREDECESSOR_LIST",
}

export enum WidgetType {
  CHART = "CHART",
  GRIDGANTT = "GRIDGANTT",
  IMAGE = "IMAGE",
  METRIC = "METRIC",
  RICHTEXT = "RICHTEXT",
  SHEETSUMMARY = "SHEETSUMMARY",
  SHORTCUT = "SHORTCUT",
  TITLE = "TITLE",
  WEBCONTENT = "WEBCONTENT",
}
/* ## END ENUMS ## */
/* ############################ */
/* ## GENERAL TYPES ## */
export type Attachment = {
  id: number;
  parentId: number;
  attachmentType: AttachmentType;
  attachmetSubType: AttachmentSubType;
  mimeType: string;
  parentType: string;
  createdAt: string;
  createdBy: User;
  name: string;
  sizeInKb: number;
  url: string;
  urlExpiresInMillis: number;
};

export type Axis = {
  location: Locations;
  title: string;
  titleInfo: ColumnTypes;
  axisLabelFormat: string;
  includeZero: boolean;
};
export type AutoNumberFormat = {
  fill: string;
  prefix: string;
  startingNumber: number;
  suffix: string;
};

export type ContentType =
  | Chart
  | Metric
  | Image
  | Report
  | RichText
  | Shortcut
  | Title
  | WebContent;

export type Error = {
  refId: string;
  errorCode: number; //https://smartsheet.redoc.ly/#section/Error-Code-List
  message: string;
};

export type Hyperlink = {
  interactionType: string;
  folderId: number;
  reportId: number;
  sheetId: number;
  sightId: number;
  url: string;
  workspaceId: number;
};

export type Legend = {
  location: Locations;
  legendFormat: string;
};

export type LinkInFromCell = {
  columnId: number;
  rowId: number;
  sheetId: number;
  sheetName: string;
  status: Status;
};

export type ObjectValue = {
  objectType: ObjectType;
};

export type Scope = {
  sheets: Sheet[];
  workspaces: Workspace[];
};

export type User = {
  id: string;
  email: string | null;
  name: string | null;
};

export type UserPermissions = {
  summaryPermissions: SummaryPermissions;
};

export type UserSettings = {
  criticalPathEnabled: boolean;
  displaySummaryTasks: boolean;
};

export type Source = {
  id: number;
  type: string;
};

export type Content = {
  type: string;
  reportId: number;
  sheetId: number;
  axes: Axis[];
  hyperlink: Hyperlink;
  includedColumnIds: number[];
  legend: Legend;
  selectionRanges: SelectionRange[];
  series: Series[];
  verticalGridLines: VerticalGridLines;
  horizontalGridLines: HorizontalGridLines;
};

export type Series = {
  title: string;
  titleInfo: ColumnTypes;
  seriesTitleFormat: string;
  seriesType: SeriesType;
  dataLabels: DataLabels;
  tooltips: Tooltips;
  lineType: LineType;
  holeSize: number;
  isFilled: boolean;
  isHalf: boolean;
  isStacked: boolean;
  xFormat: string;
  yFormat: string;
  color: string;
  axisLocationX: Locations;
  axisLocationY: Locations;
  yColumnInfo: YColumnInfo;
  xColumnInfo: XColumnInfo;
  seriesSelectionOrder: "COLUMNS" | "ROWS";
  seriesData: SeriesData[];
  selectionRanges: SelectionRange[];
};

export type DataLabels = {
  labelType: DataLabelsType;
};

export type Tooltips = {
  labelType: TooltipsType;
};

export type YColumnInfo = {
  type: string;
};

export type XColumnInfo = {
  type: string;
};

export type SeriesData = {
  x: number;
  y: number;
  xFormat: string;
  yFormat: string;
  color: string;
};

export type VerticalGridLines = {
  lineStyle: "SOLID" | "DASHED" | "DOTTED";
};

export type HorizontalGridLines = {
  lineStyle: "SOLOID" | "DASHED" | "DOTTED";
};

export type SourceSheet = {
  id: number;
  fromId: number;
  ownerId: number;
  accessLevel: string;
  attachments: Attachment[];
  columns: Column[];
  createdAt: string;
  crossSheetReferences: CrossSheetReference[];
  dependenciesEnabled: boolean;
  discussions: Discussion[];
  effectiveAttachmentOptions: string[];
  favorite: boolean;
  ganttEnabled: boolean;
  hasSummaryFields: boolean;
  modifiedAt: string;
  name: string;
  owner: string;
  permalink: string;
  projectSettings: ProjectSettings;
  readOnly: boolean;
  resourceManagementEnabled: boolean;
  rows: Row[];
  showParentRowsForFilters: boolean;
  source: Source;
  summary: Summary;
  totalRowCount: number;
  userPermissions: UserPermission;
  userSettings: UserSetting;
  version: number;
  workspace: Workspace;
};

export type ProjectSettings = {
  lengthOfDay: number;
  nonWorkingDays: string[];
  workingDays: string[];
};

export type Summary = {
  fields: Field[];
};

export type Field = {
  id: number;
  contactOptions: User[];
  createdAt: string;
  createdBy: User;
  displayValue: string;
  format: string;
  formula: string;
  hyperlink: Hyperlink;
  image: Image;
  index: number;
  locked: boolean;
  lockedForUser: boolean;
  modifiedAt: string;
  modifiedBy: User;
  ObjectValue: ObjectValue;
  options: string[];
  symbol: string;
  title: string;
  type: string;
  validation: boolean;
};

export type UserPermission = {
  summaryPermissions: string;
};

export type UserSetting = {
  criticalPathEnabled: boolean;
  displaySummaryTasks: boolean;
};
/* ## END GENERAL TYPES ## */
/* ############################ */
/* ## CONTENTS ## */
export type Chart = {
  type: "CHART";
  reportId: number;
  sheetId: number;
  axes: Axis[];
  hyperlink: Hyperlink;
  includedColumnIds: number[];
  legend: Legend;
  selectionRanges: SelectionRange[];
  series: Series[];
  verticalGridLines: VerticalGridLines;
  horizontalGridLines: HorizontalGridLines;
};

export type Metric = {
  type: "METRIC" | "SHEETSUMMARY";
  sheetId: number;
  cellData: CellData[];
  columns: Column[];
  hyperlink: Hyperlink;
};

export type RichText = {
  type: "RICHTEXT";
  htmlContent: string;
};

export type Shortcut = {
  type: ShortcutType;
  shorcutData: ShortcutData;
};

export type ShortcutData = {
  attachmentType: AttachmentType;
  hyperlink: Hyperlink;
  label: string;
  labelFormat: string;
  mimeType: string;
  order: number;
};

export type Title = {
  type: "TITLE";
  backgroundColor: string;
  htmlContent: string;
};

export type WebContent = {
  type: "WEB_CONTENT";
  url: string;
};
/* ## CONTENTS ## */
/* ############################ */
/* ## CELLS ## */
export type Cell = {
  columnId: number;
  columnType: string;
  conditionalFormat: string;
  displayValue: string;
  format: string;
  formula: string;
  hyperlink: Hyperlink;
  image: Image;
  linkInFromCell: LinkInFromCell;
  linksOutToCells: LinkInFromCell[];
  objectValue: ObjectValue;
  overrideValidation: boolean;
  strict: boolean;
  value: string | number | boolean;
};

export type CellData = {
  columnId: number;
  rowId: number;
  sheetId: number;
  ObjectValue: boolean | number | string;
  cell: Cell;
  dataSource: "CELL" | "SUMMARY_FIELD";
  inheritCellValue: boolean;
  label: string;
  labelFormat: string;
  order: number;
  profileField: string;
  valueFormat: string;
};

export type CellHistory = {
  modifiedAt: string | number;
  modifiedBy: User;
  columnId: number;
  columnType: string;
  conditionalFormat: string;
  displayValue: string;
  format: string;
  formula: string;
  hyperlink: CellHyperlink;
  image: Image;
  linkInFromCell: LinkInFromCell;
  linksOutToCells: LinkInFromCell[];
  objectValue: ObjectValue;
  overrideValidation: boolean;
  strict: boolean;
  value: string | number | boolean;
};

export type CellLink = {
  columnId: number;
  rowId: number;
  sheetId: number;
  sheetName: string;
  status: Status;
};

export type Duration = {
  days: number;
  elapsed: boolean;
  hours: number;
  milliseconds: number;
  minutes: number;
  negative: boolean;
  objectType: "DURATION";
  seconds: number;
  weeks: number;
};

export type CellHyperlink = {
  reportId: number;
  sheetId: number;
  sightId: number;
  url: string;
};

export type Predecessor = {
  rowId: number;
  type: PredecessorType;
  inCriticalPath: boolean;
  invalid: boolean;
  lag: Duration;
  rowNumber: number;
};

export type PredecessorList = {
  objectType: "PREDECESSOR_LIST";
  predecessors: Predecessor[];
};
/* ## END CELLS ## */
/* ############################## */
/* ## IMAGES ## */
export type Image = {
  altText: string;
  height: number;
  id: number;
  width: number;
};

export type ImageUrl = {
  imageId: number;
  error: Error;
  height: number;
  url: string;
  width: number;
};

export type ImageUrlMap = {
  imageUrls: ImageUrl[];
  urlExpiresInMillis: number;
};
/* ## END IMAGES ## */
/* ############################## */
/* ## COLUMN ## */
export type Column = {
  autoNumberFormat: AutoNumberFormat;
  contactOptions: User[];
  description: string;
  format: string;
  hidden: boolean;
  id: number;
  index: number;
  locked: boolean;
  lockedForUser: boolean;
  options: string[];
  primary: boolean;
  symbol: string;
  systemColumnType: SystemColumns;
  tags: Tags[];
  title: string;
  type: ColumnTypes;
  validation: boolean;
  version: number;
  width: number;
};
/* ## END COLUMN ## */
/* ############################## */
/* ## COMMENTS ## */
export type Comment = {
  attachments: Attachment[];
  createdAt: string | number;
  createdBy: User;
  discussionId: number;
  id: number;
  modifiedAt: string | number;
  text: string;
};
/* ## END COMMENTS ## */
/* ############################## */
/* ## CROSS SHEET ## */
export type CrossSheetReference = {
  endColumnId: number;
  endRowId: number;
  id: number;
  name: string;
  startColumnId: number;
  startRowId: number;
  status: Status;
  sourceSheetId: number;
};
/* ## END CROSS SHEET ## */
/* ############################## */
/* ## DASHBOARDS ## */
export type Sight = {
  backgroundColor: string;
  columnCount: number;
  favorite: boolean;
  source: Source;
  widgets: Widget[];
  workspace: Workspace;
  createdAt: string | number;
  modifiedAt: string | number;
  id: number;
  accessLevel: AccessLevel;
  permalink: string;
  name: string;
};

export type SightPublish = {
  readOnlyFullAccesibleBy: string;
  readOnlyFullEnabled: boolean;
  readOnlyFullUrl: string;
};

export type Widget = {
  id: number;
  type: WidgetType;
  contents: ContentType;
  height: number;
  showTitle: boolean;
  showTitleIcon: boolean;
  title: string;
  titleFormat: string;
  version: number;
  viewMode: number;
  width: number;
  xPosition: number;
  yPosition: number;
};

export type CellLinkWidgetContent = {
  type: "METRIC" | "SHEETSUMMARY";
  sheetId: number;
  cellData: CellData[];
  columns: Column[];
  hyperlink: Hyperlink;
};

export type SelectionRange = {
  sourceColumnId1: number;
  sourceColumnId2: number;
  sourceRowId1: number;
  sourceRowId2: number;
};
/* ## END DASHBOARDS ## */
/* ############################## */
/* ## DISCUSSIONS ## */
export type Discussion = {
  accessLevel: AccessLevel;
  id: number;
  comments: Comment[];
  commentAttachments: Attachment[];
  commentCount: number;
  createdBy: User;
  lastCommentedAt: string | number;
  lastCommentedUser: User;
  parentId: number;
  parentType: "ROW" | "SHEET";
  readonly: boolean;
  title: string;
};
/* ## END DISCUSSIONS ## */
/* ############################## */
/* ## EVENTS ## */
export type Event = {
  eventId: string;
  objectType: ObjectType;
  action: string;
  objectId: string;
  eventTimeStamp: string;
  userId: number;
  requestUserId: number;
  source: string;
  additionalDetails: string;
};

export type StreamResult = {
  nextStreamPosition: string;
  moreAvailable: boolean;
};
/* ## END EVENTS ## */
/* ############################## */
/* ## FAVORITES ## */
export type Favorite = {
  objectId: number;
  type: ObjectType;
};
/* ## END FAVORITES ## */
/* ############################## */
/* ## FOLDERS ## */
export type Folder = {
  id: number;
  favorite: boolean;
  folders: Folder[];
  name: string;
  permalink: string;
  reports: Report[];
  sheets: Sheet[];
  sights: Sight[];
  templates: Template[];
};
/* ## END FOLDERS ## */
/* ############################## */
/* ## GROUPS ## */
export type Group = {
  id: number;
  name: string;
  description: string;
  owner: string;
  ownerId: number;
  createdAt: string | number;
  modifiedAt: string | number;
};
/* ## END GROUPS ## */
/* ############################## */
/* ## GROUP MEMBER ## */
export type GroupMember = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
};
/* ## END GROUP MEMBER ## */
/* ############################## */
/* ## HOME ## */
export type Home = {
  folders: Folder[];
  reports: Report[];
  sheets: Sheet[];
  sights: Sight[];
  templates: Template[];
  workspaces: Workspace[];
};
/* ## END HOME ## */
/* ############################## */
/* ## PROOFS ## */
export type Proof = {
  id: number;
  originalId: number;
  name: string;
  proofType: ProofType;
  proofRequestUrl: string;
  version: number;
  lastUpdatedAt: string | number;
  lastUpdatedBy: User;
  isCompleted: boolean;
  attachments: Attachment[];
  discussions: Discussion[];
};

export type ProofRequest = {
  id: number;
  proofId: number;
  sentBy: User;
  sentAt: string | number;
  isDownloadable: boolean;
  status: ProofStatus;
  ccMe: boolean;
  message: string;
  sendTo: User[];
  subject: string;
};

export type ProofRequestAction = {
  user: User;
  actionStatus: ProofStatus;
};
/* ## END PROOFS ## */
/* ############################## */
/* ## REPORTS ## */
export type Report = {
  scope: Scope;
  sourceSheets: Sheet[];
  isSummaryReport: boolean;
  proofs: Proof[];
  id: number;
  fromId: number;
  ownerId: number;
  accessLevel: AccessLevel;
  attachments: Attachment[];
  columns: Column[];
  createdAt: string | number;
  crossSheetReferences: CrossSheetReference[];
  dependenciesEnabled: boolean;
  discussions: Discussion[];
  effectiveAttachmentOptions: string[];
  favorite: boolean;
  ganttEnabled: boolean;
  hasSummaryFields: boolean;
  modifiedAt: string | number;
  name: string;
  owner: string;
  permalink: string;
  projectSettings: ProjectSettings;
  readonly: boolean;
  resourceManagementEnabled: boolean;
  rows: Row[];
  showParentRowsForFilters: boolean;
  source: Source;
  summary: Summary;
  totalRowCount: number;
  userPermissions: UserPermissions;
  userSettings: UserSettings;
  version: number;
  workspace: Workspace;
};

export type ReportCell = {
  virtualColumnId: number;
  columnId: number;
  columnType: string;
  conditionalFormat: string;
  displayValue: string;
  format: string;
  formula: string;
  hyperlink: Hyperlink;
  image: Image;
  linkInFromCell: LinkInFromCell;
  linksOutToCells: LinkInFromCell[];
  objectValue: ObjectValue;
  overrideValidation: boolean;
  strict: boolean;
  value: string | number | boolean;
};

export type ReportColumn = {
  virtualId: number;
  sheetNameColumn: boolean;
  autoNumberFormat: AutoNumberFormat;
  contactOptions: User[];
  description: string;
  format: string;
  hidden: boolean;
  id: number;
  index: number;
  locked: boolean;
  lockedForUser: boolean;
  options: string[];
  primary: boolean;
  symbol: string;
  systemColumnType: SystemColumns;
  tags: Tags[];
  title: string;
  type: ColumnTypes;
  validation: boolean;
  version: number;
  width: number;
};

export type ReportRow = {
  sheetId: number;
  id: number;
  accessLevel: AccessLevel;
  attachments: Attachment[];
  cells: ReportCell[];
  columns: Column[];
  conditionalFormat: string;
  createdAt: string | number;
  createdBy: User;
  discussions: Discussion[];
  proofs: Proof;
  expanded: boolean;
  filteredOut: boolean;
  format: string;
  inCriticalPath: boolean;
  locked: boolean;
  lockedForUser: boolean;
  modifiedAt: string | number;
  modifiedBy: User;
  permalink: string;
  rowNumber: number;
  version: number;
};

export type ReportPublish = {
  readOnlyFullAccessibleBy: string;
  readOnlyFullDefaultView: string;
  readOnlyFullEnabled: boolean;
  readOnlyFullUrl: string;
};
/* ## END REPORTS ## */
/* ############################## */
/* ## ROWS ## */
export type Row = {
  id: number;
  sheetId: number;
  accessLevel: AccessLevel;
  attachments: Attachment[];
  cells: Cell[];
  columns: Column[];
  conditionalFormat: string;
  createdAt: string | number;
  createdBy: User;
  discussions: Discussion[];
  proofs: Proof;
  expanded: boolean;
  filteredOut: boolean;
  format: string;
  inCriticalPath: boolean;
  locked: boolean;
  lockedForUser: boolean;
  modifiedAt: string | number;
  modifiedBy: User;
  permalink: string;
  rowNumber: number;
  version: number;
};

export type RowMapping = {
  from: number;
  to: number;
};
/* ## END ROWS ## */
/* ############################## */
/* ## SEARCH ## */
export type SearchResult = {
  results: SearchResultItem[];
  totalCount: number;
};

export type SearchResultItem = {
  objectId: number;
  parentObjectId: number;
  contextData: string[];
  objectType: ObjectType;
  parentObjectName: string;
  parentObjectType: ObjectType;
  proofUrl: string;
  text: string;
};
/* ## END SEARCH ## */
/* ############################## */
/* ## SHEET SUMMARY ## */
export type SheetSummary = {
  fields: SheetSummaryField[];
};

export type SheetSummaryField = {
  id: number;
  contactOptions: User[];
  createdAt: string | number;
  createdBy: User;
  displayValue: string;
  format: string;
  formula: string;
  hyperlink: Hyperlink;
  image: Image;
  index: number;
  locked: boolean;
  lockedForUser: boolean;
  modifiedAt: string | number;
  modifiedBy: User;
  objectValue: ObjectValue;
  options: string[];
  symbol: string;
  title: string;
  type: ColumnTypes;
  validation: boolean;
};
/* ## END SHEET SUMMARY ## */
/* ############################## */
/* ## SHEETS ## */
export type Sheet = {
  id: number;
  fromId: number;
  ownerId: number;
  accessLevel: AccessLevel;
  attachments: Attachment[];
  columns: Column[];
  createdAt: string | number;
  crossSheetReferences: CrossSheetReference[];
  dependenciesEnabled: boolean;
  discussions: Discussion[];
  effectiveAttachmentOptions: string[];
  favorite: boolean;
  ganttEnabled: boolean;
  hasSummaryFields: boolean;
  modifiedAt: string | number;
  name: string;
  owner: string;
  permalink: string;
  projectSettings: ProjectSettings;
  readonly: boolean;
  resourceManagementEnabled: boolean;
  rows: Row[];
  showParentRowsForFilters: boolean;
  source: Source;
  summary: Summary;
  totalRowCount: number;
  userPermissions: UserPermissions;
  userSettings: UserSettings;
  version: number;
  workspace: Workspace;
};

export type Criteria = {
  columnId: number;
  operator: Operators;
  values: string[];
};

export type Filters = {
  id: number;
  excludeSelected: boolean;
  filterType: "PERSONAL" | "SHARED";
  query: Query;
};

export type Query = {
  operator: Operators;
  criteria: Criteria[];
  includeParent: boolean;
};
/* ## END SHEETS ## */
/* ############################## */
/* ## TEMPLATES ## */
export type Template = {
  id: number;
  type: ObjectType;
  accessLevel: AccessLevel;
  blank: boolean;
  categories: string[];
  description: string;
  globalTemplate: "BLANK_SHEET" | "PROJECT_SHEET" | "TASK_LIST";
  image: string;
  largeImage: string;
  locale: string;
  name: string;
  tags: Tags[];
};
/* ## END TEMPLATES ## */
/* ############################## */
/* ## WORKSPACES ## */
export type Workspace = {
  accessLevel: AccessLevel;
  id: number;
  favorite: boolean;
  folders: Folder[];
  name: string;
  permalink: string;
  reports: Report[];
  sheets: Sheet[];
  sights: Sight[];
  templates: Template[];
};
/* ## END WORKSPACES ## */
/* ############################## */
/* ## QUERIES ## */
export type SheetList = {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  data: Sheet[];
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

export type SingleDashboardQueryParams = {
  queryParameters: {
    sightId: number;
    accessApiLevel?: number;
    include?: string;
    level?: number;
    numericDates?: boolean;
  };
};

export type SightList = {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  data: SightInfo[];
};

export type SightInfo = {
  createdAt: string;
  modifiedAt: string;
  id: number;
  accessLevel: string;
  permalink: string;
  name: string;
};
/* ## END QUERIES ## */
