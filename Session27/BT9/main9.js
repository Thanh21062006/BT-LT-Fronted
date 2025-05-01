function sortEven(arr){
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ!"
    }

    // let tempValue = -Infinity;
    let index = "trong";
    for(let k = 0; k < arr.length;k++){
        if(arr[k] % 2 == 0){
            index = k;
            break;
        }
    }

    if(index == "trong"){
        return "Mảng không có số chẵn!"
    }

    for(let i = 0; i < arr.length;i++){
        for(let j = 0;j < arr.length - i - 1; j++){
            if(arr[j] % 2 == 0 && arr[j] < arr[index]){
                let temp = arr[j];
                arr[j] = arr[index];
                arr[index] = temp;

                index = j;
            }
        }
    }
    alert(arr); 
}

sortEven([1, 4, 3, 2, 8, 7, 6, 10])