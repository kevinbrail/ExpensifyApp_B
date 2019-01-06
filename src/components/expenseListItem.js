import React from 'react';
import { Link } from 'react-router-dom';



const ExpenseListItem = ({description, amount, note, createdAt, index, id }) => (
    <div>
    <h3>Expense</h3>
        <h3> {description} <Link to={`/edit/${id}`}>(EDIT)</Link></h3> 
        <p>${amount} {createdAt}   {note} {id}</p>
    </div>
);

export default ExpenseListItem;