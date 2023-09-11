import React from "react";

import { BaseTable } from "./../common";

export const Test = () => {
  const tableColumns = [
    { dataIndex: "age", title: "年龄" },
    { dataIndex: "prov", title: "省份" },
  ];

  const dataSource = [
    {
      age: "11",
      prov: "云南省",
      key: '1'
    },
    {
      age: "12",
      prov: "湖北省",
      key: '2'
    },
    {
      age: "9",
      prov: "北京",
      key: '3'
    },
  ];

  return (
    <div>
      <BaseTable columns={tableColumns} dataSource={dataSource} search />
    </div>
  );
};
