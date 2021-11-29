import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(datas) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        title={datas.item[0].title}
        amount={datas.item[0].amount}
        date={datas.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={datas.item[1].title}
        amount={datas.item[1].amount}
        date={datas.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={datas.item[2].title}
        amount={datas.item[2].amount}
        date={datas.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={datas.item[3].title}
        amount={datas.item[3].amount}
        date={datas.item[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
