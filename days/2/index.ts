import fs from 'fs';
const data: string = fs.readFileSync('./input.txt', 'utf8');
const hands: string[][] = data
  .split('\n')
  .slice(0, -1)
  .map((s) => s.split(' '));

const theirs: Record<string, number> = { A: 1, B: 2, C: 3 };
const mine: Record<string, number> = { X: 1, Y: 2, Z: 3 };

function cshift(arr: number[], s: number) {
  return arr.slice(s).concat(arr.slice(0, s));
}

function game(a: number, b: number) {
  return cshift([3, 6, 0], -a)[b];
}

function roundPt1(them: string, me: string) {
  return mine[me] + game(theirs[them] - 1, mine[me] - 1);
}

const totalPt1 = hands.reduce((score, [them, me]) => score + roundPt1(them, me), 0);
console.log(`Part 1 - total score ${totalPt1}`);

// Part 2

const outcomeMap = mine;
const outcomeValue = [0, 3, 6];

function roundPt2(them: string, outcome: string) {
  return (
    outcomeValue[outcomeMap[outcome] - 1] +
    cshift([3, 1, 2], theirs[them] - 1)[outcomeMap[outcome] - 1]
  );
}

const totalPt2 = hands.reduce((score, [them, outcome]) => score + roundPt2(them, outcome), 0);
console.log(`Part 2 - total score ${totalPt2}`);
console.log("There's a compact, shift/transform based solution in here, somewhere");
