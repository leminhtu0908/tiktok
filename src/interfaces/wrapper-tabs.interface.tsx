import { IWrapperTable } from "./wrapper-table.interface";

export interface ITabs{
  label: string,
  index: number,
  code: string
}

export interface IWrapperTabs{
  tables: IWrapperTable,
  tabs: ITabs[],
  index: string,
  onChangeIndex: (value: string) => void 
}