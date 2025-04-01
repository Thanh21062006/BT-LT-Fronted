let arrNumb = [1, 2, 3, 5, 7, 9];


soNguenTo(arrNumb);

function soNguenTo(arr){
    if(Array.isArray(arr)){
        if(arr.length == 0){
            alert("Mảng không có phần tử nào!");
        } else{
            let check = true;
            let arrTemp = [];
            for (const value of arr) {
                if(value < 2){
                    continue;
                } else{
                    for(let i = 2; i * i <= value;i++){
                        if(value % i == 0){
                            check = false;
                            break;
                        }
                    }
                    if(check){
                        arrTemp.push(value);
                    }
                }
            }
            alert(arrTemp);
        }
    } else{
        alert("Dữ liệu không hợp lệ!");
    }
}



// function addArr(arr){
//     let size = Number(prompt('Mời bạn nhập vào số lượng phần tử cho mảng:'));
//     for(let i = 0; i < size; i++){
//         while(true){
//             let value = prompt("Mời bạn nhập một số bất kì:");
//             if(!isNaN(value)){
//                 arr.push(Number(value));
//                 break;
//             } else{
//                 alert("Dữ liệu nhập vào không phải số mời bạn nhập lại:")
//             }
//         }
//     }
// }
