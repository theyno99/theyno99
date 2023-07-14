///1. student adlı obyekt yaradıb name, age, course, faculty adlı sahələr verib hər birini console çıxardın.
function student(){
    const obj1={name:"Zeynab",
    age:23,
    course:"PhD",
    faculty:"physics"};
        console.log(obj1.name);console.log(obj1.age);console.log(obj1.course);console.log(obj1.faculty);   }
student();
/////2. Bir obyekt yaradıb başqa dəyişənə yeni obyekt kimi kopyala.
const obj2={surname:"Addayeva",
name:"Zeynab",age:23}
const newObj2={...obj2};
console.log(newObj2);
/////3. 1-dən 10 kimi olan ədədlərin hərfi yazılışın obyektdən istifadə edərək console çıxardın.
const obj3={
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    10:"ten"}
    console.log(obj3.["1"]);///Niye error verdi bilmedim. men sizin dersde bele dediyinizi bilirem. bele note almisham.

/////4. person adlı, sahələri name, surname olan obyektdə getFullName adlı bir funskiya yaradıb name + surname qaytarsın.
const obj4={surname:"Addayeva",
name:"Zeynab",
getFullName:function nagetFullNameme() {console.log(obj4.name+" "+obj4.surname);}};
obj4.getFullName();
/////5. Hər hansısa bir obyekt yaradıb onun key və value bir sətrdə console çıxardın. Məsələn: Nəticədə “key: name, value: Cavid”.
const obj5={turkey:"ankara",england:"london",azerbaijan:"baku"};
const keys=Object.keys(obj5);
const values=Object.values(obj5);
console.log("key: "+keys+" "+"value: "+ values);
/////6. Obyektin hər hansısa bir sahəsinin olub olmadığını yoxluyan bir funksiya yazın.
const master={nano: true,nuclear: true, semi_Cond:true, math: false};
console.log("nano" in master);
console.log("chemstry" in master);
/////7. Ədədlərdən ibarət obyekt yaradın və bütün value-ların cəmini console çıxardın
const obj7={one:1 , two:2 , eight:8,ninety:90};
console.log(obj7.one+obj7.two+obj7.eight+obj7.ninety);
