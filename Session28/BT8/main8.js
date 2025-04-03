let arrStaff = [];

while(true){
    let choice = prompt(`============MENU===========
    1. Thêm nhân viên mới.
    2. Xóa nhân viên theo id.
    3. Cập nhật mức lương của nhân viên theo id
    4. Tìm kiếm nhân viên theo tên
    5. In danh sách nhân viên
    6. Thoát!
-------------------------------------------------
    Mời bạn chọn chức năng tương ứng:`);

    switch(choice){
        case '1':
            addStaff(arrStaff);
            break;
        case '2':
            delArr(arrStaff);
            break;
        case '3':
            edixSalary(arrStaff);
            break;
        case '4':
            searchName(arrStaff);
            break;
        case '5':
            showList(arrStaff);
            break;
        case '6':
            alert('Hẹn gặp lại...');
            break;
        default:
            alert("Chức năng không tồn tại mời bạn chọn lại!");
            break;
    }

    if(choice == '6'){
        break;
    }
}

//2
function addStaff(arr) {
    const staff = new Object();
    while(true){
        let id = Number(prompt("Mời bạn nhập id:"));
        let check = true;
        for (const key in arr) {
            if (arr[key].id == id) {
                alert("id đã tồn tại mời bạn nhập lại");
                check = false;
            } 
        }
        if(check){
            staff.id = id;
            break;
        }
    }
    staff.name = prompt("Mời bạn nhập tên nhân viên:");
    staff.position = prompt("Mời bạn nhập vị trí việc làm hiện tại:");
    staff.salary = parseFloat(prompt("Mời bạn nhập mức lương hiện tại:"));

    arr.push(staff);
    alert("Thêm thành công!");
}
//3
function delArr(arr) {
    if(arr.length == 0){
        alert('Danh sách trống!');
        return
    }

    let id = Number(prompt("Mời bạn nhập id muốn xóa:"));
    for (const key in arr) {
        if(arr[key].id == id){
            let confirmDel = confirm(`bạn có chắc chắn muốn xóa nhận viên ${arr[key].name} không?`);
            if(confirmDel){
                arr.splice(key, 1);
                alert('Xóa thành công!');
                return
            } else {
                alert("Xác nhận không xóa.");
                return
            }
        }
    }
    alert('id không tồn tại!');
}
//4
function edixSalary(arr) {
    if(arr.length == 0){
        alert('Danh sách trống!');
        return
    }

    let id = Number(prompt("Mời bạn nhập id muốn cập nhật lại mức lương:"));
    let check = true;
    for (const key in arr) {
        if(arr[key].id == id){
            arr[key].salary = Number(prompt("Mời bạn nhập mức lương muốn sửa đổi:"));
            alert("Sửa thành công!");
            check = false;
        }
    }
    if(check){
        alert('id không tồn tại!');
    }
}
//5
function showList(arr) {
    if(arr.length == 0){
        alert('Danh sách trống!');
        return
    }
    
    let text = `| id |     name     |     position     |    salary    |
-------------------------------------------\n`;
    for (const key in arr) {
        text += `${arr[key].id}    ${arr[key].name}    ${arr[key].position}   ${arr[key].salary}\n`
    }
    alert(text);
}


function searchName(arr) {
    if(arr.length == 0){
        alert('Danh sách trống!');
        return
    }
    let value = (prompt("Mời bạn nhập tên nhân viên cần tìm:"));
    let tempArr = arr.filter((s) => s.name.toLowerCase() === value.toLowerCase())
    if(tempArr.length == 0){
        alert("tên nhân viên không tồn tại");
        return
    } else{
        showList(tempArr);
    }
}