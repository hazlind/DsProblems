function isEven(n)   //n is input
{
    if(n<=0 )
    {
        console.log('you have either enter zero or a negative number and number you enetred is :' ,n);
    }
    else if (n%2==0)
    {
        console.log('it is even',n);
    }
    else
        console.log('not even',n);
}
// isEven(4);


//generate even or odd number less than n

function EvenOdd(n)
{
    var even=[];
    var odd=[];
    for(let i=0;i<n;i++)
    {

        if(i<=0 )
        {
            console.log('you have either enter zero or a negative number and number you enetred is :' ,n);
        }
        else if (i%2==0)
        {
            even.push(i);
        }
        else
            odd.push(i);
    }
    console.log(even);
    console.log(odd);
}
//EvenOdd(20);

//generate N even or odd numbers
function NevenOdd(n)
{
    var even=[];
    var odd=[];

    for(let i=0;i<=n*2;i++)
    {
        if(i<=0 )
        {
            console.log('you have either enter zero or a negative number and number you enetred is :' ,n);
        }
        else if (i%2==0)
        {
            even.push(i);
        }
        else
            odd.push(i);
    }
    console.log(even);
    console.log(odd);

}
//NevenOdd(5);

//Given number n prime or not
function isPrime(n)
{
    if(n<=0)
    {
        console.log('you have either enter zero or a negative number and number you enetred is :' ,n);
        return false;
    }
    else if((n==1)||(n==2))
    {
        return true;
    }
    else if(n>2) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
            break;
        }
    }
    return true;
   }
}
//isPrime(7)?console.log('prime'):console.log('not prime');

//finding remainder without usuing modulus(%)
function remainder(n,divisor) {
    var quotient, dpq, rem;
    quotient = n / divisor;
    // console.log(quotient);
    dpq=(n/divisor|0);                               //decimal part of quotient
    dpq=quotient-dpq;
    // console.log(dpq);
    rem= ( dpq* divisor)|0;
    console.log('remained is', rem);
}
remainder(57,9);
