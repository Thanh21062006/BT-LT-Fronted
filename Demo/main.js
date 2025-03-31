// while(1){
//     let choice = Number(prompt(`*--------------Menu--------------*
//         1. Chức năng 1
//         2. Chức năng 2
//         3. Chức năng 3
//         4. Chức năng 4
//         0. Thoát!
// *--------------------------------*
//         Mời bạn chọn chức năng tương ứng:`));
//     switch(choice){
//         case 1:
//             alert("Đã chọn chức năng 1");
//             break;
//         case 2:
//             alert("Đã chọn chức năng 2");
//             break;
//         case 3:
//             alert("Đã chọn chức năng 3");
//             break;
//         case 4:
//             alert("Đã chọn chức năng 4");
//             break;
//         case 0:
//             break;
//         default:
//             alert("Chức năng không tồn tại!!!");
//             break;
//     }
//     if(choice === 0){
//         break;
//     }
// }

// funition
// cách 1:
function sum (a,b){
    let sum = a+b;
    console.log(sum);
}

sum(3, 5);


let checkSoHoanHao = (n)=>{
    if(n < 0) return false;
    let sum = 0;
    for(let i = 1;i < n;i++){
        if(n % i == 0){
            sum += i;
        }
    }
    if(sum !== n){
        return false;
    }
    return true;
}

let value = Number(prompt("Mời bạn nhập số bất kì để kiểm tra số hoàn hảo:"));
if(checkSoHoanHao(value)){
    alert("Là số hoàn hảo");
} else{
    alert("Không phải số hoàn hả");
}