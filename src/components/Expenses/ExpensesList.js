import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__fallback ">Nothing to display</h2>
  );
  if (props.item.length === 0) {
    return expensesContent;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
          expenseDate={expense.date}
        />
      ))}
    </ul>
  );
};
