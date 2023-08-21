const test = (arr) => {
    let tong = 0;

    arr.forEach((x) => {
        tong += x;
    })

    return tong;
}

const test2 = (arr) => {
    let value = arr.map((x) => {
        return x + 2;
    })

    return value;
}

const test3 = (arr) => {
    let value = arr.reduce((acc, x) => {
        acc.push(x + 2);
        return acc;
    }, [])
  
    return value;
}

console.log(test([1,2,3, 5, 7, 8, 9]));


const test4 = (arr) => {
    let value = arr.reduce((acc,x) => {
        if(x > 4) {
            acc.push(x);
        }
        return acc;
    }, [])
    return value;
}

console.log(test4([1,2,3, 5, 7, 8, 9]));

const test5 = (arr) => {
    let value = arr.map((x) => {
        if(x > 4) {
            return x;
        }
    })

    return value;
}
console.log(test5([1,2,3, 5, 7, 8, 9]));