var a = 4;
a = 'Harry';
console.log(a);
let b =5;
b='se';
const ha=9;
console.log(b);

//Arrow function 
const myName = (name)=>{
    console.log("My Name is " + name);
}

const x ={
    name: "Sujeeth",
    age:20,
    student:"Yes",
    show : function(){
        console.log(this.name);
        const inShow =()=>{
            console.log(`My Age is ${this.age}`);
        }
        inShow();
    }


}
//myName("Sujeeth")
x.show();

//Arrays concepts
let arr=[];
arr.push(1);
arr.push(2);
arr.push(5);
console.log(arr);
arr.unshift(0); //insert ar start
console.log(arr);
arr.pop();
console.log(arr);
arr.shift(); //pop ar start
console.log(arr);
arr.push(10);
arr.push(11);
console.log(arr);
arr.splice(1,2);// delete (start index, no of elements)
console.log(arr);
arr.splice(1,0,12,13);// insertion (start index,no of elements to delete,no of elements to insert)
console.log(arr);

//loops 
for(let i=0;i<arr.length;i++){

}

for(let i of arr){
    console.log(i);
}

//functional methods
console.log(arr.map(x=>x+2));

console.log(arr.filter(x=>x>2));

console.log(arr.reduce((acc,curr) => acc+curr,1)); //acc is accumulator and curr is current value, 1 is initial value of acc

console.log(arr.sort((a,b) => a-b)); //ascending order
console.log(arr.sort((a,b) => b-a)); //descending order
arr.push(11);
delete arr[1];
console.log(arr);
console.log(" ");
let arr2 =[...arr]; //shallow copy
arr2.push(12);
console.log(arr);
console.log(arr2);

//object 
const obj={
    "one":1,
    "Two":2,
    "Three":3,
}

for(let key in obj){
    console.log(`${key}: ${obj[key]}`);
}

obj.Four =4; // adding
console.log(obj);
delete obj.Four;
console.log(obj);