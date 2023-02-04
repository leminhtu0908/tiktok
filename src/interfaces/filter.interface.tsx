export interface IFilter{
  seachTiltle: string;
  onSearch?: (search: any) => void;
  onCreate?: () => void;
  onExport?: () => void;
  onImport?: () => void;
  isSearchDate?: boolean;
}