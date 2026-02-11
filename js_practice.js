//remove duplicates from a array  
const removeDuplicates=(arr)=>{
    const map = new Map();
    const res = [];
    for(let i=0;i<arr.length;i++){
        if(!map.has(arr[i])){
            map.set(arr[i],true);
            res.push(arr[i]);
        }
    }
    return res;
}

let arr=[1,2,3,5,2,6,7,2,3,7,1,1,5];
console.log(arr);
arr = removeDuplicates(arr);
console.log(arr);


//cout frequency of each char in string

const countFreq = (str) =>{ 
     const map = new Map();
     for(let i=0;i<str.length;i++){ 
        if(map.has(str[i])){
            map.set(str[i],map.get(str[i])+1);
        }else{
            map.set(str[i],1);
        }
     }
     return map;
}
let map = new Map();
map = countFreq("xjcnxmcnj");
for(let [key,value] of map){
    console.log(`${key} : ${value}`);
} 

//second largest element in array 

const secondLargest = (arr) =>{
        let max =-1;
        let second=-1;
        for(let i=0;i<arr.length;i++){
            if(max<arr[i]){
                second = max;
                max=arr[i];
            }else{
                if(arr[i]<max && arr[i]>second){
                    second=arr[i];
                }
            }
        }
        return second;     
}

console.log(secondLargest([1,2,2,3,4,5,6]));

 

