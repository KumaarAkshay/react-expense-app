import react, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import './Expenses.css';

function Expense(prop) {
  // const expenses = [
  //   { title: "Bike Insurance", amount: 234.44, date: new Date(2022, 2, 12) },
  //   { title: "  Momos Shop", amount: 500, date: new Date(2022, 1, 12) },
  //   { title: "Petrol", amount: 500, date: new Date(2022, 1, 30) },
  //   { title: "Udemy course", amount: 490, date: new Date(2022, 2, 1) },
  // ];
  const [FilterYear, setFilterYear] = useState("2020");
  
  const filterChangeHandler = (selectedYear)=>{
    setFilterYear(selectedYear);
  }
  return (

    <Card className = "expenses">
      <ExpenseFilter selected = {FilterYear} onChangeFilter = {filterChangeHandler}/>
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