import fs from 'fs';
import { FILE_PATH } from '../utils/constants.ts'; // Assuming FILE_PATH is correctly set up
import { Expense } from '../types.js';


export function readFile():Expense[] {

    const data = fs.readFileSync(FILE_PATH, { encoding: 'utf8' });
    return JSON.parse(data) as Expense[]; // Parse JSON and cast it to the expected type

  
 
}


export function writeFile(data:Expense[]) {
  
      const response = fs.writeFileSync(FILE_PATH,JSON.stringify(data), { encoding: 'utf8' });
      return true;
  
    
  }