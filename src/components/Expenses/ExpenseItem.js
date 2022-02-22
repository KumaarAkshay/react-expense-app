import react , {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props){
    console.log(props.title,props.date,props.amount);
    const [title,setTitle] = useState(props.title);
    const clickHandler = ()=>{
        setTitle("Updated");
     console.log(title);
    };
    
    return (
        <Card className = "expense-item">
            {/* <div>{props.date.toISOString()}</div> */}
            <ExpenseDate date = {props.date}></ExpenseDate>
            
            <div className = "expense-item__description">
                <h2>{title}</h2>
                <div className = "expense-item__price">{"Rs "+props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
 
        </Card>
    );
}

export default ExpenseItem;