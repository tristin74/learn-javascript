//TODO: cho mot string, kiem tra string do co phai string doi xung khong

function test(x) {
    let str = '';
    let length = x.length;
    for (let i = length - 1; i >= 0; i--){
        str = str + x[i];
    }
    if (x === str) {
        return true;
    } else {
        return false;
    }
}
console.log(test('abcba'));
console.log(test('abcdef'));


function test2(x) {
    let length = x.length;
    for (let i = 0; i < length/2; i++) {
        if (x[i] !== x[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(test2('abcba'));
console.log(test2('abcdef'));