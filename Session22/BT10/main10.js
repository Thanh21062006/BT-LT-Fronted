let arrayNumb = new Array();

while(true){
    let choice = Number(prompt("------------MENU-----------\n"+
        "1. Nhập vào mảng\n"+
        "2. Hiển thị mảng\n"+
        "3. Thêm phần tử\n"+
        "4. Sửa phần tử\n"+
        "5. Xóa phần tử\n"+
        "6.Thoát\n"));
    switch(choice){
        case 1:
            let size = Number(prompt("Mời bạn nhập số lượng phần tử cần thêm vào mảng:"));
            let sizeArray = size + arrayNumb.length;
            for(let i = arrayNumb.length; i < sizeArray; i++){
                let value = prompt(`nhập giá trị cho arrayNumb ${i}:`);
                arrayNumb[i] = value;
            }
            alert("Thêm vào mảng thành công");
            break;
        case 2:
            if(arrayNumb.length == 0){
                alert("Danh sách trống!");
            } else{
                let text = "";
                arrayNumb.forEach((item, index) => {
                    text += `array ${index} = ${item}\n`;
                });
                alert(text);
            }
            break;
        case 3:
            let value1 = prompt("Mời bạn nhập dữ liệu muốn thêm vào mảng:");
            arrayNumb.push(value1);
            alert("Thêm vào mảng thành công");
            break;
        case 4:
            let index1 = Number(prompt("Mời bạn nhập vị trí cần sửa trong mảng:"));
            if(index1 >= 0 && index1 < arrayNumb.length){
                let value2 = prompt("Mời bạn nhập giá trị cần sửa:");
                arrayNumb[index1] = value2;
                alert("Sửa thành công!");
            } else{
                alert("Vị trí không tồn tại trong mảng");
            }
            break;
        case 5:
            let index2 = Number(prompt('Mời bạn nhập vị trí cần xóa!'));
            if(index2 >= 0 && index2 < arrayNumb.length){
                arrayNumb.splice(index2, 1);
                alert("Xóa thành công!");
            } else{
                alert("Vị trí không tồn tại trong mảng!");
            }
            break;
        case 6:
            alert("Thoát chương trình!!!");
            break;
        default:
            alert("Vui lòng nhập 1 --> 6 !");
            break;
    }
    if(choice == 6){
        break;
    }
}