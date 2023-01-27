import { React, useState } from "react";
import "./ExpenseForm.css";
export const ExpensesForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  // const [userInputs, setUserInputs] = useState({
  //   enteredTitle: "",
  //   enteredDate: "",
  //   enteredAmount: "",
  // });

  const titleChangHandler = (event) => {
    setenteredTitle(event.target.value);

    // setUserInputs({
    //   ...userInputs,
    //   enteredTitle: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    // setUserInputs({ ...userInputs, enteredDate: event.target.value });
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   enteredAmount: event.target.value,
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    setenteredTitle("");
    setenteredDate("");
    setenteredAmount("");
    props.onSaveNewExpense(expense);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2023-01-26"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
