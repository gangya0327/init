console.time('case-1');
/A(B|C+)+D/.test('ACCCCD');
console.timeEnd('case-1');

console.time('case-2');
/A(B|C+)+D/.test('ACCCCCCCCCCCX');
console.timeEnd('case-2');

console.time('case-3');
/A(B|C+)+D/.test('ACCCCCCCCCCCCCCCCCCCCX');
console.timeEnd('case-3');