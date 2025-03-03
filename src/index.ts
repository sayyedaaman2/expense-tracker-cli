#!/usr/bin/env node
import fs from 'node:fs';

import { Command } from 'commander';

import { addExpense, deleteExpense, listExpense, summaryExpence } from './controllers/expense.controller.js';
import { Expense } from './types.js';
import { FILE_PATH } from './utils/constants.js';

if(!fs.existsSync(FILE_PATH)){
    fs.writeFileSync(FILE_PATH,JSON.stringify([]));
}
const program = new Command();
program.name("Expense Tracker CLI").description("Expense Track").version('1.0.0');


program
  .command('list')

  .action(() => {
    
    listExpense()
  });

program
  .command('add')
  .description('Add an expense with a description and amount')
  .requiredOption('--description <description>', 'Expense description')
  .requiredOption('--amount <amount>', 'Expense amount',parseFloat)
  .action((options:Expense) => {
    console.log('Received options:', options);
    addExpense(options)
  });

  program
  .command('update')
  .description('update an expense with a id description and amount')
  .requiredOption('--id <id>','Expense Id',parseInt)
  .requiredOption('--description <description>', 'Expense description')
  .requiredOption('--amount <amount>', 'Expense amount',parseFloat)
  .action((options:Expense) => {
    console.log('Received options:', options);
    addExpense(options)
  });
  program
  .command('delete')
  .description('delete an expense with a id description and amount')
  .requiredOption('--id <id>','Expense Id',parseInt)
  .action((options:{id : string}) => {
    console.log('Received options:', options);
    deleteExpense(options)
  });


  
  program
    .command('summary')
    .option('--month <month>', 'Month of the expenses (1-12)', parseInt) // Parse month as an integer
    .action((options) => {
     summaryExpence(options)
    });
  
  program.parse(process.argv);
  

