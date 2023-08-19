function test(x) {
    let str= '';
    let length = x.length;
    for (let i = length - 1; i >= 0; i--) {
        str = str + x[i];
    }
    return str;
}
console.log(test('tung'));