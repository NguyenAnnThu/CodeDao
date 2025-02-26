let a=1,b=3 ,c=5;
if (a+b>c&&a+c>b && b+c>a)
{
    if ( a==b && b==c)
    {
        console.log('Là tam giác đều')
    }
    else if ( a*a+b*b==c*c)
    {
        console.log('Là tam giác cân')
    }
}
else
{
    console.log('Không phải tam giác')
}