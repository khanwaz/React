import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(datas) {
  return (
    <div className="expense-item">
      <ExpenseDate date={datas.date} />
      <div className="expense-item__description">
        <h2>{datas.title}</h2>
        <div className="expense-item__price">${datas.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
