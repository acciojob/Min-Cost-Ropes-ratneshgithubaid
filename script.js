function mincost(arr) {
  let cost = 0;

  // Edge case: if only one rope, cost is 0 (no connections)
  if (arr.length <= 1) return 0;

  // We'll simulate min-heap by sorting arr each time
  while (arr.length > 1) {
    arr.sort((a, b) => a - b);  // Sort ascending

    // Take two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // Insert the combined rope back into the array
    arr.push(sum);
  }

  return cost;
}

module.exports = mincost;
