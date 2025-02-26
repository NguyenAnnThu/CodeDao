const numbers = [5, -10, 3, 4, 8, 11,-2];
let So=0
let sum =0
for (let num of numbers)
{
    if(num%2===0)
    {
        So++
        sum+=num
    }
}
console.log(So)
let TBC=0
if (So>0)
{
    TBC= sum/So
}
console.log(TBC)
for (let i=0; i<numbers.length;i++)
{
    if (numbers[i]===5)
    {
         numbers[i]=10
    }
}
console.log(numbers)

numbers.push(10,11,12)
console.log(numbers)



