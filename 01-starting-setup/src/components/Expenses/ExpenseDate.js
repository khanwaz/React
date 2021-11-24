import "./ExpenseDate.css";

function ExpenseDate(datas) {
  const month = datas.date.toLocaleString("en-US", { month: "long" });
  const day = datas.date.toLocaleString("en-US", { day: "2-digit" });
  const year = datas.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
