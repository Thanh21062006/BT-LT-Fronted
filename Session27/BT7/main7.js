function value(arr){
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ!"
    } 
    if(arr.length == 0){
        return "Mảng trống!"
    }

    for(let i = 0;i < arr.length;i++){
        if(arr[i] != arr[i+1] - 1){
            return arr[i] + 1
        }
    }
}

alert(value([1, 2, 3, 5, 6]));
// alert(value("abc"));