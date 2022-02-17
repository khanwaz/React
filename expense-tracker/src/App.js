import React from "react";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      date: new Date(2000, 2, 12),
      title: "School Fees",
      amount: 500,
    },
    {
      date: new Date(2020, 3, 12),
      title: "Uniform",
      amount: 300,
    },
    {
      date: new Date(2021, 4, 16),
      title: "Books",
      amount: 200,
    },
    {
      date: new Date(2019, 5, 12),
      title: "Food",
      amount: 100,
    },
  ];
  return (
    <div>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
