import "../Expenses/ExpenseDate.css";
export const ExpenseDate = (props) => {
  const date = props.date.getDate();
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{date}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
