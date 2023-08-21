//TODO: cho mot chuoi cac tu cach nhau bang dau cach, viet hoa chu dau tien cua tung tu.
//note: ham split()


let x = "abcbd".split("b");
let y = "y".toUpperCase();
"y".replace("y", "YYY");

function test(str) {
    let array = str.split(" ");
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        let temp = '';
        temp = array[i].replace(array[i][0], array[i][0].toUpperCase())
        newArray.push(temp)
    }
    console.log(newArray);
}
test('i am tung');