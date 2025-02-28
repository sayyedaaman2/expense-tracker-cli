import { Expense } from "../types.ts";

export function validateExpenseInput(data:Expense,next:any){
    try{
        if(!data.description){
            throw new Error('description is required!')
        }
        if(!data.amount){
            throw new Error('Amount is required!')
        }
        if(typeof(data.description) !== 'string'){
            throw new Error("description should be string.")
        }
        if(typeof(data.amount) !== 'number'){
            throw new Error("amount should be number.")
        }

        next(data);
    }catch(error){
        console.error(error);
    }
}