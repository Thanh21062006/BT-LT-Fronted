let arr = [1, 4, 6, 9, 3];
alert(minArray(arr));

function minArray(array) {
    if(array.length > 0){
        let minArr = array[0];
        for (const value of array) {
            if(isNaN(value)){
                return "Giá trị không hợp lệ"
            }
            
            if(minArray > value){
                minArr = value;
            }
        }
        return "Gí trị nhỏ nhất trong mảng là: ", minArr;
    } else{
        return "Mảng không chứa phần tử!"
    }
}