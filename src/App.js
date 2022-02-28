import react, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  var expensesDummy = [
    {
      id: "e11",
      title: "Bike Insurance",
      amount: 234.44,
      date: new Date(2020, 2, 12),
    },
    {
      id: "e12",
      title: "  Momos Shop",
      amount: 500,
      date: new Date(2021, 1, 12),
    },
    { id: "e13", title: "Petrol", amount: 500, date: new Date(2022, 1, 30) },
    {
      id: "e14",
      title: "Udemy course",
      amount: 490,
      date: new Date(2022, 2, 1),
    },
  ];
  const [expenses, setExpenses] = useState(expensesDummy);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <h1>Expense App</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expense={expenses}></Expense>
    </div>
  );
}

export default App;
