import React from "react";
import { ExpensesForm } from "./ExpenseForm";
import "./NewExpense.css";
export const NewExpense = (props) => {
  const onSaveNewExpense = (enterdExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enterdExpenseData,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpensesForm onSaveNewExpense={onSaveNewExpense} />
    </div>
  );
};
