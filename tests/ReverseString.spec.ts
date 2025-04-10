import {test} from '@playwright/test';

function main():void{

    const myString :string = "This is testing";

    let revString :string ="";

    for(let i=myString.length-1; i>=0;i--){
        revString+=myString.charAt(i);
    }

    console.log(revString);

}

test("Test the function", async()=>{
    main();

});

