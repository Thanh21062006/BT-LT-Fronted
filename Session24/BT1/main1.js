let arrayNumb = [];

while(true){
    let choice = Number(prompt(`-------------MENU------------
        1. Nhập mảng
        2. Hiển trị mảng
        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của một phần tử trong mảng
        6. Sắp xếp mảng tăng dần
        7. Thoát chương trình
    -------------------------------
    Mời bạn chọn chức năng tương ứng:`))

    switch(choice){
        case 1:
            let sizeArray = Number(prompt("Mời bạn nhập vào số lượng phần tử của mảng:"))
            if(sizeArray > 0){
                for(let i = 0; i < sizeArray; i++){
                    while(true){
                        let value = prompt(`Mời bạn nhập một số bất kì cho array[${i}]:`);
                        if(!isNaN(value)){
                            arrayNumb.push(Number(value));
                            break;
                        } else{
                            alert("Dữ liệu nhập vào không phải số mời bạn nhập lại")
                        }
                    }
                }
                alert("Thêm vào mảng thành công.");
            } else{
                alert("kích thước của mảng không hợp lệ!");
            }
            break;
        case 2:
            alert(arrayNumb);
            break;
        case 3:
            let max = arrayNumb[0];
            let min = arrayNumb[0];
            for (const value of arrayNumb) {
                if(max < value){
                    max = value
                }
            }

            for (const index in arrayNumb) {
                if(min > arrayNumb[index]){
                    min = arrayNumb[index];
                }
            }

            alert(`Phần tử lớn nhất là ${max} và nhỏ nhất là ${min}`);
            break;
        case 4:
            let totalArray = arrayNumb.reduce((sum, numb) => sum + numb, 0);
            alert(`Tổng các phần tử trong mảng là ${totalArray}`);
            break;
        case 5:
            if(arrayNumb.length > 0){
                let value1 = Number(prompt("mời bạn nhập gí trị để kiểm tra:"));
                let count = 0;
                for (const value of arrayNumb) {
                    if(value === value1){
                        count++;
                    }
                }
    
                if(count > 0){
                    alert(`Giá trị ${value1} xuất hiện ${count} lần trong mảng`);
                } else{
                    alert(`Giá trị ${value1} không tồn tại trong mảng`);
                }
            } else{
                alert('Mảng trông không có dữ liệu để kiểm tra!')
            }
            break;
        case 6:
            if(arrayNumb.length > 1){
                for(let i = 0; i < arrayNumb.length - 1;i++){
                    for(let j = 0; j < arrayNumb.length - i - 1;j++){
                        if(arrayNumb[j] < arrayNumb[j+1]){
                            let temp = arrayNumb[j+1];
                            arrayNumb[j+1] = arrayNumb[j];
                            arrayNumb[j] = temp;
                        }
                    }
                }
                alert("Sắp xếp thành công.")
            } else{
                alert("Mảng trống hoặc không đủ độ dài để sắp xếp!");
            }
            break;
        case 7:
            alert("Exit!")
            break;
        default:
            alert("Chức năng không tồn tại trong mảng 1 --> 6 mời bạn chọn lại!");
            break;
    }
    if(choice == 7){
        break;
    }
}