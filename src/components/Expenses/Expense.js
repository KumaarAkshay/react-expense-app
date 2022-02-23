import react, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expense(prop) {
  const [FilterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpense = prop.expense.filter(
    (expense) => FilterYear == expense.date.getFullYear()
  );


  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={FilterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList list = {filteredExpense} />
    </Card>
  );
}

export default Expense;
