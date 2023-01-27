import { Card } from "../UI/Card";
import "./Expenses.css";
import React from "react";
import { useState } from "react";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

export const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("All");
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filterdExpense =
    filterdYear === "All"
      ? [...props.item]
      : props.item.filter((expense) => {
          return expense.date.getFullYear().toString() === filterdYear;
        });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterdYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterdExpense} />
      <ExpensesList item={filterdExpense} />
    </Card>
  );
};
