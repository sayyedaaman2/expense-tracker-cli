import fs from 'node:fs'
import { Expense } from '../types.js';
import { readFile, writeFile } from '../utils/fileSystem.ts';


export function addExpense({ id, description, amount }: Expense): void {
    try {
        const data = readFile();

        if (typeof data === 'string') {
            // If `data` is a string, it means there was an error reading the file
            throw new Error(`Failed to read file: ${data}`);
        }

        // Check if the expense with the given id already exists
        const existingExpenseIndex = data.findIndex((expense) => expense.id == id);

        if (existingExpenseIndex !== -1) {
            // If the expense exists, update it
            data[existingExpenseIndex] = {
                ...data[existingExpenseIndex],
                description,
                amount,
                updatedAt: new Date(), // Update the timestamp
            };
            console.log('Expense Updated Successfully.');
        } else {
            // If the expense does not exist, create a new expense
            const newExpense: Expense = {
                id: (data.length === 0 ? data.length + 1 : (Number(data[data.length - 1].id) + 1)),
                description,
                amount,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            data.push(newExpense);
            console.log('Expense Added Successfully.');
        }

        // Write the updated data back to the file
        writeFile(data);

    } catch (error) {
        console.error('Error updating the expense:', error);
    }
}

export function deleteExpense({ id }: { id: string }) {

    try {
        const data = readFile();
        const existingExpenseIndex = data.findIndex((expense) => expense.id == id);
        if (existingExpenseIndex == -1) {
            console.error('expence id : not found!');
            return;
        }

        let filterData = data.filter((expense) => expense.id !== id)


        writeFile(filterData);


        console.log('Deleted Expence :%d', id);

    } catch (error) {
        console.error(error)
    }
}

export function listExpense() {
    try {
        const data = readFile();

        // Ensure the data is an array and then map it to a new format
        if (Array.isArray(data)) {
            const formatData = data.map((expense) => {
                return {
                    id: expense.id,
                    description: expense.description,
                    amount: expense.amount,
                    date: expense.updatedAt.toString(), // Correct way to format the date
                };
            });

            console.log("Expense List:");
            console.table(formatData); // Use the formatted data for the table

        } else {
            console.error("Failed to retrieve valid expense data.");
        }

    } catch (error) {
        console.error("Error fetching expenses:", error);
    }
}

// Function to calculate the total expenses
function calculateTotal(expenses: Expense[]): number {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}
export function summaryExpence({ month }:{month:number}) {
    const data = readFile(); // Read expenses from file

    if (!Array.isArray(data)) {
        console.error('Failed to retrieve valid expense data.');
        return;
    }

    let filteredExpenses = data;

    // If a month is provided, filter expenses by the given month (1-12)
    if (month) {
        filteredExpenses = data.filter((expense: Expense) => {
            const expenseDate = new Date(expense.updatedAt); // Convert to Date object if it's not already
            const expenseMonth = expenseDate.getMonth() + 1; // getMonth() returns 0-11, so add 1

            return expenseMonth === month;
        });

        console.log(`Total expenses for month ${month}: $${calculateTotal(filteredExpenses)}`);
    } else {
        console.log(`Total expenses: $${calculateTotal(filteredExpenses)}`);
    }
}