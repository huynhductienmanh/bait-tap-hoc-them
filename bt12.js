var mang1 =[];

mang1.push("iphone")
mang1.push("nokia","samsung")

console.log(mang1);

if(mang1.length>0){
    console.log("co")
}else{
    console.log("k co")
}

for(var i=0 ; i<mang1.length;i++){
    if(i==2){
        console.log(mang1[i])
    }
}


mang1.map(function(value,key){
    if(key==2){
        console.log(value)
    }
})


var s=0
var mang2 = [];

for(var i =1;i<11;i++){
    mang2.push(i);
}


for(var i =0 ;i< mang2.length;i++){
    s=s+mang2[i]
}
console.log(s)