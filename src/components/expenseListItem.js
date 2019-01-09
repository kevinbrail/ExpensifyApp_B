import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({description, amount, note, createdAt, index, id }) => (
    <div>
    <h3>Expense</h3>
        <h3> {description} <Link to={`/edit/${id}`}>(EDIT)</Link></h3> 
        <p>
        {numeral(amount / 100).format('$0,00.00')}
         - 
        {moment(createdAt).format('MMMM Do, YYYY')}   
        {note} 
        </p>
    </div>
);

export default ExpenseListItem;