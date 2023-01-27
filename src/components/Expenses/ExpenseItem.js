import { useState } from "react";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  const [expenseTitle, setExpenseTitle] = useState(props.expenseTitle);
  const clickHandler = () => {
    setExpenseTitle("updated");
    console.log(expenseTitle);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expenseDate} />
        <div className="expense-item__description">
          <h2> {expenseTitle}</h2>
          <div className="expense-item__price"> $ {props.expenseAmount} </div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </Card>
    </li>
  );
};
