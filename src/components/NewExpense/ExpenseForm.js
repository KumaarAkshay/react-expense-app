import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Multi useState()
  const [enterdedTitle, setEnteredTitle] = useState("");
  const [enterdedAmount, setEnteredAmount] = useState("");
  const [enterdedDate, setEnteredDate] = useState("");

  // New Method
  // const [userInput,setUserInput] = useState({
  //     enteredTitle : "",
  //     enterdedAmount : "",
  //     enterdedDate  : ""
  // });

  //================================================================//
  //  All usestate in one userstate
  //
  // setUserInput({
  //     ...userInput,
  //     enterdedTitle:event.target.value,})

  // =============================================================//
  // If depend on previous states
  // setUserInput((prevState)=>{
  //     return {
  //         ...prevState,
  //         enteredTitle: event.target.value};
  //     });
  // ==============================================================//

  const titileChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdedTitle:event.target.value,})
    //  console.log(enterdedTitle,event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdedAmount:event.target.value,});
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdedDate:event.target.value,});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdedTitle,
      amount: enterdedAmount,
      date: new Date(enterdedDate),
    };
    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdedTitle}
            onChange={titileChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdedAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2025-01-01"
            value={enterdedDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
