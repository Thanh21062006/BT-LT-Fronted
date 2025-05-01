let arrNumb = new Array();

while(true){
    let choice = prompt(`=========MENU========
    1. Nhập danh sách số nguyên.
    2. Tính trung bình các số.
    3. Tìm số chẵn lớn nhất.
    4. Tìm số lẻ nhỏ nhất.
    5. Thoát!
--------------------------------------
Mời bạn chọn chức năng tương ứng:`);

    switch(choice){
        case '1':
            arrNumb = [];
            let size = Number(prompt("Mời bạn nhập số lượng phần tử của mảng:"));
            addArray(arrNumb, size);
            break;
        case '2':
            alert(average(arrNumb));
            break;
        case '3':
            alert(max_Min(arrNumb, choice));
            break;
        case '4':
            alert(max_Min(arrNumb, choice));
            break;
        case '5':
            alert('Hẹn gặp lại...');
            break;
        default:
            alert("Chức năng không tồn tại mời bạn chọn lại!");
            break;
    }
    if(choice == '5'){
        break;
    }
}


function addArray(arr, size) {
    for(let i = 0; i < size;i++){
        while(true){
            let value = prompt(`Mời bạn nhập số bất kì cho arr[${i}]:`);
            if(!isNaN(value)){
                arr.push(Number(value));
                break;
            } else{
                alert("Dữ liệu không hợp lệ mời bạn nhập lại!");
            }
        }
    }
    alert("Thêm vào mảng thành công");
}

function average(arr) {
    if(arr.length == 0){
        return "Mảng trống!"
    }

    let temp = arr.reduce((acc, curr) => acc + curr, 0);
    return temp / arr.length
}

function max_Min(arr, choi) {
    if(arr.length == 0){
        return "Mảng trống!"
    }

    if(choi == '3'){
        let arr1 = arr.filter(numb => numb % 2 == 0);
        if(arr1.length == 0){
            return "Mảng không có số chẵn!"
        }
        let maxArr = Math.max(...arr1);
        return maxArr;
    }

    if(choi == '4'){
        let arr2 = arr.filter(numb => numb % 2 != 0);
        if(arr2.length == 0){
            return "Mảng không có số lẻ!"
        }
        let minArr = Math.min(...arr2);
        return minArr;
    }
}