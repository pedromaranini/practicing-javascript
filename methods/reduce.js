// Reduce -> Baseado no array original, precisar reduzir o array a um outro tipo de dado
// (não necessariamente um array)

// =====================================================================================

const numbers = [1, 2, 3];

// accumulator inicia com valor "0", accumulator + item (primeiro indice do array)
// Soma fica armazenada implicitamente no accumulator, e a função é executada novamente
// com accumulator possuindo um novo valor
// 0 = accumulator + 1 (item) = 1
// accumulator = 1 + 2 (item) = 3
// accumulator = 3 + 3 (item) = 6
const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult);


// EX 02

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro', score: 261 },
    { name: 'Ana Paula', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula', score: 359 },
    { name: 'Pedro', score: 133 },
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
        accumulator += phaseScore.score;
    }

    return accumulator;
}, 0);

console.log(rogerScore);