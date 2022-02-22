import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  var expensesDummy = [
    { title: "Bike Insurance", amount: 234.44, date: new Date(2022, 2, 12) },
    { title: "  Momos Shop", amount: 500, date: new Date(2022, 1, 12) },
    { title: "Petrol", amount: 500, date: new Date(2022, 1, 30) },
    { title: "Udemy course", amount: 490, date: new Date(2022, 2, 1) }
  ];
  const [expenses, updateExpense] = useState(expensesDummy);

  const addExpenseHandler = (newExpense) => {
    updateExpense((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
    console.log(newExpense);
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
