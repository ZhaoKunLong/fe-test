import type { ReactNode } from 'react';

export interface TableColumn {
  dataIndex: string;
  title: string;
  render?: (tdData: any, trData: any) => ReactNode;
};

export type DataSource = {
  key: string;
} & Record<string, any>;

export interface TableProps {
  columns?: TableColumn[];
  dataSource?: DataSource[];
  search?: boolean;
}
