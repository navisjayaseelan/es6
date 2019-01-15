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
