// 1ая елка
for (let i = 0; i < 9; i++) {
    console.log('*'.repeat(i))
}
//2ая елка
for (let i = 8; i > 0; i--) {
    console.log('*'.repeat(i))
}
// 3ая елка
let a = 7;

for (let i = 1; i < a + 1; i += 2) {
    console.log(' '.repeat(Math.ceil((a - i) / 2)), '*'.repeat(i));
}
