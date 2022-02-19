import Expense from "./components/Expense";

function App() {
  const expenses = [
    { title: "Bike Insurance", amount: 234.44, date: new Date(2022, 2, 12) },
    { title: "  Momos Shop", amount: 500, date: new Date(2022, 1, 12) },
    { title: "Petrol", amount: 500, date: new Date(2022, 1, 30) },
    { title: "Udemy course", amount: 490, date: new Date(2022, 2, 1) }
  ];
  return (
    <div>
      <h1>Expense App</h1>
      <Expense expense = {expenses}></Expense>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
