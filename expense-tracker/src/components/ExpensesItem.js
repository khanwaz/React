import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";

function ExpensesItem(props) {
  

  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpensesItem;

const dat = new Date(2012, 12, 2);
dat.toLocaleDateString(2);
