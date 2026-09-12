// let nam  = Number(prompt("nhap nam"));

// if (nam %2 == 0 ){
//     alert(nam + " la nam chan");
// }
// else{
//     alert(nam + "la nam le" );
// }


// let nam = Number(prompt("nhap nam"));

// if (nam % 4 == 0 || nam % 4 == 0){
//     alert(nam + "la nam nhuan");
// }
// else{
//     alert("0 phai la nam nhuan")
// }



// let so = Number(prompt("nhap vao 1 so"));

// if(so % 2 == 0 ){
//     if(so >100){
//         alert("so chan va lon hon 100");
//     }
//     else{
//         alert("so chan va nho hon 100")
//     }
// }
// else{
//     alert("0 phai la so chan")
// }



// let nam = Number(prompt("nhap nam"));

// if(nam<1900){
//     alert("the ki 18");
// }
// else if(nam>=1900 && nam<=1999){
//     alert("the ki 19");
// }
// else if(nam >= 2000 && nam <= 2099){
//     alert("the ki 20");
// }
// else if(nam >= 2100 ){
//     alert("the ki 21 tro len")
// }

// let a = Number(prompt("nhap a"));
// let b = Number(prompt("nhap b"));
// let c = Number(prompt("nhap c"));

// if(a == 1 || b==1 || c==1){
//     alert("loai");
// }

// else if (a<5 || b<5 || c<5){
//     alert("yeu");
// }

// else if (a != 1 && b!=1 && c!=1 && a>=5 && b>=5 && c>=5){
//     let d = (a+b+c)/3;
//     if(d < 7){
//         alert("trung binh");
//     }
//     else if (d>=7 && d<=8 ){
//         alert("kha");
//     }
//     else if (d>8){
//         alert("gioi");
//     }
// }


// for ( let i = 1 ; i<=10 ; i++){
//      console.log(i);
// }


// for ( let i = 1 ; i<=10 ; i++){
//     if(i % 2 !=0){
//         console.log(i);
//     }
// }

// for ( let i = 1 ; i<=10 ; i++){
//     if(i ==6){
//         console.log(i);
//     }
// }

// for ( let i = 1 ; i<=10 ; i++){
//     if(i <= 5 ){
//         console.log(i);
//     }
// }


// let d = 0;
// for ( let i = 1 ; i<=10 ; i++){
//     d = d+i;
// }
// console.log(d);





// let n = Number(prompt("nhap n"));
// let s= 0;
// for(let i =1 ; i<= n ;i++){
//     s = s +1/i
// }
// console.log(s)



// let a = Number(prompt("nhap a"));
// let b = Number(prompt("nhap b"));
// let c = Number(prompt("nhap c"));

// function max(a,b,c){
//     if(a>b && a>c){
//         return a;
//     }
//     else if (b>a && b>c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }

// alert("so lon nhat la " + max(a,b,c));


function inSo() {
    let kq = "";

    for (let i = 1; i <= 10; i++) {
        kq = kq + i + " ";
    }

    alert(kq);
}

function inSole() {
    let kq = "";

    for (let i = 1; i <= 10; i++) {
        if(i %2 !=0){
            kq = kq + i + " ";
        }
    }

    alert(kq);
}

function insobehon5(){
    let kq = "";

    for (let i = 1; i <= 10; i++) {
        if(i <5){
            kq = kq + i + " ";
        }
    }

    alert(kq);
}

function inso6(){
    let kq = "";

    for (let i = 1; i <= 10; i++) {
        if(i ==6){
            kq = kq + i + " ";
        }
    }

    alert(kq);
}








