// TODO: cho mot mang so. tim so lon nhat.

function test(x) {
let length = x.length;
let max = x[0];
for(let i = 0; i < length; i++) {
    
    if(max < x[i]) {
        max = x[i];
    }
}
return max;
}

function test2(x) {
    let length = x.length;
    let a = 0;
    for(let i = 0; i < length; i++) {
        a = a + x[i];
        
    }
    return a;
}

console.log(test([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(test2([1, 2, 3, 4, 5, 6, 7, 8]));
// TODO: cho mot mang cac chuoi, tim chuoi co do dai lon nhat trong mang.

function test3(x) {
let length = x.length;
let max = x[0].length;
let a = x[0];
for (let i = 0; i < length; i++) {
    if (max < x[i].length) {
        max = x[i].length;
        a = x[i];
    }
}
return a;
}

console.log(test3(['123','abcdfe', '34567', 'bcdf']))