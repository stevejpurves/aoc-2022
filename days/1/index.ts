import fs from 'fs';

const data: string = fs.readFileSync('./input.txt', 'utf8');

const elfCalories: number[] = data
  .split('\n\n')
  .slice(0, -1)
  .map((perElf: string) => {
    return perElf.split('\n').reduce<number>((count, next) => {
      return count + parseInt(next);
    }, 0);
  });

const N = 3;
const topN = elfCalories.reduce((tn, nextElf) => {
  const topMin = Math.min(...tn);
  if (nextElf > topMin) {
    const topMinIdx = tn.indexOf(topMin);
    return [...tn.slice(0, topMinIdx), nextElf, ...tn.slice(topMinIdx + 1)];
  }
  return tn;
}, Array(N).fill(0));

const maxCalories = Math.max(...elfCalories);

console.log('* DAY 1 *');
console.log(`The elf with most calories has ${maxCalories} calories`);
console.log(
  `The top ${N} elves are carrying ${topN.join(',')} a total of ${topN.reduce((a, n) => a + n, 0)} `
);
