import {Locator, test,Page, Browser } from '@playwright/test';

test("Sum of Operations", async(Page)=>{

const sumofTwoNumbers = new testSum();
sumofTwoNumbers.sum(1,2);
console.log(sum(3,4));

});

class testSum {

     sum(a:number,b:number): void{
        const result :number = a+b;
        console.log(result);
    }
    
}

function sum(m:number, n:number): number {
    return n+m;
}

