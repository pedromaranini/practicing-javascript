// Filter -> Obter um novo array com apenas alguns itens do array original

// =======================================================================

const randomNumbers = [36, 99, 37, 63];

const numbersGreaterThan37 = randomNumbers.filter((item) => item > 37);

console.log(numbersGreaterThan37);


// EX 02

const users = [
    { name: 'Ada Shelby', premium: true },
    { name: 'Thommy Shelby', premium: false },
    { name: 'Poly Shelby', premium: true },
    { name: 'John Shelby', premium: false },
    { name: 'Artur Shelby', premium: true }
]

const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers);
