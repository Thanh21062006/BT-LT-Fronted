function soNguenTo(arr) {
    let arrtemp = [];
    for (const value of arr) {
        let check = true;
        if(value > 1){
            for(let i = 2;i * i <= value;i++){
                if(value % i == 0){
                    check = false;
                    break;
                }
            }
            if(check){
                arrtemp.push(value);
            }
        }
    }
    return arrtemp.filter(numb => numb % 2 != 0)
} 

function check(array){
    if(!Array.isArray(array)){
        alert("Dữ liệu không hợp lệ!");
    }
    if(array.length == 0){
        alert("Mảng trống!");
    }
    alert(soNguenTo(array));
}

// check([2, 3, 5, 7, 8, 9]);
// check("abc");
check([]);
