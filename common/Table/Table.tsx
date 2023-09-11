import React, {
  type ReactNode,
  memo,
  useRef,
  useMemo,
  useState,
  ChangeEvent,
} from "react";

import type { TableProps } from './type'
import { Input } from "../input";
import "./table.module.less";

export const BaseTable = memo((props: TableProps) => {
  const { dataSource, columns, search } = props;
  const tableRef = useRef<any>();
  const [searchValueObj, updateSearchValueObj] = useState<
    Record<string, string>
  >(
    columns?.reduce(
      (pre, cur) => ({ ...pre, [cur.dataIndex]: "" }),
      {}
    ) as Record<string, string>
  );

  const tableHeaderRender = () => {
    const ths: ReactNode[] = columns!.map((col) => (
      <th key={col.dataIndex} className="table-header-cell">
        {col.title}
      </th>
    ));

    return (
      <div className="table-header">
        <table>
          <thead>
            <tr className="table-header-row">{ths}</tr>
          </thead>
        </table>
      </div>
    );
  };

  const tableBodyRender = useMemo(() => {
    // 是否有筛选，并且有输入值
    const haveSearch =
      search && !Object.values(searchValueObj).every((v) => v === "");

    const rowDatas = haveSearch
      ? dataSource?.reduce((pre: any, cur) => {
          for (let k = 0; k < columns!.length; k++) {
            if (
              searchValueObj[columns![k]["dataIndex"]] !== "" &&
              cur[columns![k]["dataIndex"]].includes(
                searchValueObj[columns![k]["dataIndex"]]
              )
            ) {
              return [...pre, cur];
            }
          }
          return pre;
        }, [])
      : dataSource;

    return (
      <div className="table-body" id="table-body" ref={tableRef}>
        <div className="inner-table-body">
          <table>
            <tbody>
              {rowDatas!.map((row, i) => (
                <tr className="table-row" key={i} data-rowindex={i}>
                  {columns!.map((col) => (
                    <td className="table-cell" key={col.dataIndex}>
                      {row[col.dataIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }, [columns, dataSource, searchValueObj]);

  const searchChange = (value: string, dataIndex: string) => {
    updateSearchValueObj((pre) => ({
      ...pre,
      [dataIndex]: value,
    }));
  };

  const searchRender = useMemo(
    () =>
      search ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          {columns!.map((i) => (
            <Input
              prepand={`${i.title}：`}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                searchChange(e.target.value, i.dataIndex)
              }
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: 12,
              }}
            />
          ))}
        </div>
      ) : null,
    [columns, search]
  );

  return (
    <div className="table-wrapper" ref={tableRef}>
      {searchRender}
      {tableHeaderRender()}
      {tableBodyRender}
    </div>
  );
});
