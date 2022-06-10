var num,sum=0,rem;
num=372;
temp=num;
while(num>0)
{
rem=num%10;//3  5
sum=sum+(rem**3) //3*3*3
num=num-rem; //153-3=150
num=num/10; //150/10=15
}
if(sum==temp)
{
    console.log("armstrong number")
}
else{

    console.log("Not armstrong Number")
}