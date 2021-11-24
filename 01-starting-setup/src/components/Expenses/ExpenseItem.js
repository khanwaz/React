import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(datas) {
  const [title, setTitle] = useState(datas.title);

  const clickHandler = () => {
    setTitle("Updated!!!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={datas.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${datas.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
