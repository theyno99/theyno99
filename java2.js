for (let i = 0; i<= 10; i++) {///task1
    console.log(i);
    
}
for (let j = 0; j<= 100; j++) { ///task2
    if(!(j%9)){
        console.log(j)
    };
    
}
let b=0; ///task3
for (let a = 0; a < 100; a++) {
    if(!(a%2)){(b++)}
};
console.log(b)

function SM(){//task4
for (let c = 1; c < 100; c++) {
    if(c==2){console.log(c+"sade ededdir")}
    else if (!(c%2)) {console.log(c+"murekkeb ededdir")}
    else if ((c%3==0 || c%5==0 || c%7==0 ||c%9==0) && (!(c==3||c==5||c==7||c==9))){
        console.log(c+"murekkeb ededdir")
    }else {console.log(c+"sade ededdir")}}}
SM(); 




let //task5
    d =1
    e=25;
for (let d = 1; d < e; d++){
  console.log(d**2)
}
let //task6
g=0; 
l=10;
k=0;
while (g<l) {
    g++;
    k=k+g;
}
console.log(k)
let //task7
m=48
n=1;
while (m>n) {
    n++
}console.log(n)//bir ededi enboyuk boleni ozudu
let //task7
z=0;
x="x";
do {z++;
    console.log(x);
    x=x+"x"
} while (z<5);//cevirmei ede bilmedim
//////////////////////////////////////////////////////////////////////////////

 function sum(a,b) {//task2.1
    console.log(a+b);
    return;   
 }
sum(34,21);

function TC(c) { ///task 2.2
    if (c%2==0) {console.log("cut ededdir")}
    else {console.log("tek ededdir")};  
    return;
} 
TC(65);

function ID(name, surname) {///task2.3
console.log(name + " " + surname); 
return;
}
ID("zeynab"," addayeva");

function NP(c) {//tas2.4
    if (c<0) {console.log("Negative")}
    else if (c>0){console.log("Positive")} 
    else {console.log("it is zero")};
    return;
} 
NP(-24);

function factorial(f) {let l=1; //task 2.5
    for (let i = 0; i<=f+1; i++) {
        l=l*f;
        f=f-1;
}  console.log(l);
}
factorial(6);


function recursiv(a,b) {//task2.6
    for (let i=0 ; i<=b+1 ; i++){ console.log(b); b=b-1;  
     } 
     a++ ;
     if (a<b) {
        recursiv(a,b)}
}
recursiv(3,7);


 function fibonachi(n) {if (n==0){null //task2.7
 }else if(n==1){console.log(0);}
 else if(n==2){console.log(1);}
 else {
    let a=1 ;b=0; 
    for(i=2; i<=n;i++){c=a+b; a=b;b=c
}console.log(c);}}
 fibonachi(9)


















