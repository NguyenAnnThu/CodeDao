//Hàm
// Hàm đếm số lượng số chẵn
 count=(arr) =>{
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) { 
            count++;
        }
    }
    return count;
}

// Hàm tính trung bình cộng các số chẵn
TBC=(arr)=> {
    let sum = 0;
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
            count++;
        }
    }
    return  sum / count; 
}

Thaythe=(arr) =>{
    return arr.map(num => num === 5 ? 10 : num);
}
 Themmoi=(arr)=>
{
    arr.push(10,11,12)
    return arr
}

// Mảng số nguyên
const numbers=[5, -10, 3, 4, 8, 11,-2]
const evenCount = count(numbers);
const avgEven = TBC(numbers);
const updatedNumbers = Thaythe(numbers);
const Themmoinumbers= Themmoi(numbers)

console.log("Số lượng số chẵn:", evenCount);
console.log("Trung bình cộng các số chẵn:", avgEven);
console.log("Mảng sau khi thay thế 5 bằng 10:", updatedNumbers);
console.log('Dãy sau thêm mới', Themmoinumbers)