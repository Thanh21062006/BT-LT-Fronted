let arr = [9, 4, 7, 2, 9, 8];
if(kiemTra(arr)){
    console.log("Mảng không có số chẵn!");
} else{
    kiemTra(arr);
}

function kiemTra(array) {
    let check = true;
    for (const value of array) {
      if(!isNaN(value)){
        if(value % 2 == 0){
            console.log(value);
            check = false;
           } 
      } else{
        console.log("Dữ liệu không hợp lệ!");
      }
    }
    return check;
}