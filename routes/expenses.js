const express = require('express');
const router = express.Router();

// Mock data for expenses
let expenses = [
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Rent', amount: 1000 }
];

// Get all expenses
router.get('/', (req, res) => {
    res.json(expenses);
});

// Add a new expense
router.post('/', (req, res) => {
    const newExpense = req.body;
    newExpense.id = expenses.length + 1;
    expenses.push(newExpense);
    res.status(201).json(newExpense);
});

// Update an existing expense
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedExpense = req.body;
    expenses = expenses.map(expense => expense.id == id ? { ...expense, ...updatedExpense } : expense);
    res.json(updatedExpense);
});

// Delete an expense
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    expenses = expenses.filter(expense => expense.id != id);
    res.status(204).send();
});

// Calculate total expenses
router.get('/total', (req, res) => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    res.json({ total });
});

module.exports = router;
