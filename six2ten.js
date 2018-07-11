//Prime numbers less than n
function Prime(n)
{
    var p=[];
    if(n<=0)
    {
        console.log('the input is eith zero or negative integer ',n);
        return
    }
    else
    {
        for(let i=1;i<=n;i++)
        {
            for (let j=2;j<i;j++)
            {
                if(i===1|i==2)
                {
                    p.push(i);
                }
                else
                {
                    if(i%j==0)
                    {
                        return;
                    }

                }
            }
            p.push(i);
        }
    }
    console.log(p);
}
Prime(8);
//not working
