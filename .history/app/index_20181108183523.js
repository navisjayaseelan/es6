console.log("Hello Webpack");
console.log("Hellow in the browser");
const limit = 100;
console.log(limit);
const emails = ['navis@example.com','michael@example.com']
emails.push('bearly@email.com')
console.log(emails);

let limit = 200;

{
    let limit = 10;
    console.log('backstage limit', limit);
}

console.log('overall venue limit', limit)