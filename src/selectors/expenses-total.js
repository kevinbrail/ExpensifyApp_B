
//Total All expenses
const totalExpenses = (expenses) => {
        return (
        (expenses) ? expenses.reduce((acc, expense) => acc + expense.amount, 0) : 0
        )
};

export default totalExpenses;