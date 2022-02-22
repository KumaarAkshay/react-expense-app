import react, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
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
      {filteredExpense.length === 0 && <p>No Expense Found.</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
    </Card>
  );
}

export default Expense;
