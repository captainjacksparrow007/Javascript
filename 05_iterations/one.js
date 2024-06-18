// for loop
// for (let i = 0; i <= 10; i++) {
//     if(i==5){
//         console.log("5 is best numbers");
//     }
//     console.log(i);
// }
// for(let i=0;i<=10;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=0;j<=10;j++){
//         console.log(`Inner loop ${j}`);
//     }
// }

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
//     console.log();
// }

// array print
// const myArr=['flash',1,'c',1.23];
// for(let i=0;i<myArr.length;i++){
//     console.log(myArr[i]);
// }
// console.log(myArr.join(" "));

// break and continue
for(let i=0;i<5;i++){
    if(i==2){
        console.log(`${i} is here`);
        break;
    }
    console.log(`${i}`);
}

for(let i=0;i<=7;i++){
    if(i==5){
        console.log("Dolly Happy Birthday!");
        continue;
    }
    else if(i==7){
        console.log("Happy birthday Jayesh!");
        continue;
    }else{
        console.log(`${i}`);
    }
}