// Map -> obter um novo array com a mesma quantidade de itens do array original

// =========================================================================

const numbers = [1, 2, 3];

// Multiplicando todos os items do array "numbers" por 2, e exibindo em um novo array.
const doubleNumbers = numbers.map(item => item * 2);

console.log(doubleNumbers);


// EX02 - Map

const prices = [20, 10, 30, 25, 15, 40, 5];

// Dividindo por 2, todos os valores do array "prices" e exibindo em novo array
const salePrices = prices.map((price) => price / 2);

console.log(salePrices);


// EX 03

const products = [
    { name: 'Mouse sem Fio', price: 30},
    { name: 'Pen drive', price: 25},
    { name: 'Cartucho de Tinta', price: 50},
    { name: 'Suporte de Notebook', price: 23},
    { name: 'Repetidor de Sinal', price: 44},
]

const saleProducts = products.map((product) => {
    if (product.price >= 30) {
        return { name: product.name, price: product.price / 2 }
    }

    return product;
});

console.log(saleProducts);