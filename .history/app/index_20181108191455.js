console.log("Hello Webpack");
console.log("Hellow in the browser");
const limit = 100;
console.log(limit);
const emails = ['navis@example.com','michael@example.com']
emails.push('bearly@email.com')
console.log(emails);

let limited = 200;

{
    let limited = 10;
    console.log('backstage limit', limited);
}

console.log('overall venue limit', limited)

let limited_cons = 200;

{
    const limited_cos = 10;
    console.log('backstage limit', limited_cos);
}

let gd = `good`;
let greeting = `${gd} morning`;
console.log(greeting);

//Spread operater {...}

let a = [20,30,40]
let b = [10, ...a, 50]
console.log(b);

let x = ['Bearly','Jayaseelan']
let y = ['Navis', 'Micheal', ...x ]
console.log(y);

//rest parameter

function collect(...a) {
    console.log(a);
}

//let
//const
//block code with scope {}
//template string ${} embedding.
//operating and destructing assignment.
//spread operater.
