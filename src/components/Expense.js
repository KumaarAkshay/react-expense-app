import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

function Expense(prop) {
  // const expenses = [
  //   { title: "Bike Insurance", amount: 234.44, date: new Date(2022, 2, 12) },
  //   { title: "  Momos Shop", amount: 500, date: new Date(2022, 1, 12) },
  //   { title: "Petrol", amount: 500, date: new Date(2022, 1, 30) },
  //   { title: "Udemy course", amount: 490, date: new Date(2022, 2, 1) },
  // ];
  return (
    <Card className = "expenses">
      {prop.expense.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}


export default Expense;