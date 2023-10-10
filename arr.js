const arr=[1,2,7,4,5]

for(let it of arr){
    console.log(it);
}
for (let it in arr){
    console.log(it);
}

arr.forEach((el,index)=>{
    console.log(el);
    console.log(index);
});

console.log(arr.filter(el=> el>3));

console.log(arr.reduce((acc,el)=>acc+el));