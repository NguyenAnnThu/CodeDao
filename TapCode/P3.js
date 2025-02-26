const x=[4,7,10,15]
let a=0
let max=a;
let ST2=a;
for (let num of x)
{
    if (num>max)
    {
        ST2=max
        max=num
    }
    else if (num<max && num>ST2)
    {
        ST2=num

    }
}
console.log (ST2)