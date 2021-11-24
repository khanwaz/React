import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(datas) {
  return (
    <Card className="expenses">
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
