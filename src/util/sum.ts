export default function sum(...nums: number[]) {
  return nums.reduce((p, c) => (typeof c === 'number') ? p + c : p, 0);
}
