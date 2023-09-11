import React from "react";

import { Button, Input } from "./../common";

export const Test = () => {
  const [list, updateList] = React.useState([{ name: "zhang" }]);
  const inputRef = React.useRef<any>();

  const addName = () => {
    updateList((pre) => [...pre, { name: inputRef.current.value }]);
  };

  return (
    <div>
      <Input ref={inputRef} style={{ width: 300 }} />
      <Button onClick={addName}>addName</Button>
      <ul>
        {list.map((i) => (
          <li>
            <p>{i.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
