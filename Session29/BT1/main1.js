let arrContact = new Array();

while(true){
    let choice = prompt(`==========MENU===========
    1. Thêm đối tượng Contact vào danh sách liên hệ.
    2. Hiển thị danh sách danh bạ.
    3. Tìm kiếm thông tin Contact theo số điện thoại.
    4. Cập nhật thông tin Contact(name, email, phone) theo id.
    5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
    6. Thoát.
------------------------------------------
Mời bạn chọn chọn chức năng tương ứng:`);

    switch(choice){
        case '1':
            addContact(arrContact);
            break;
        case '2':
            showlist(arrContact);
            break;
        case '3':
            searchPhone(arrContact);
            break;
        case '4':
            edixContact(arrContact);
            break;
        case '5':
            deleteContact(arrContact);
            break;
        case '6':
            alert("Hẹn gặp lại...");
            break;
        default:
            alert("Chức năng không hợp lệ mời bạn chọn lại!");
            break;
    }
    if(choice == '6') break;
}

function addContact(arr) {
    const Contact = new Object();
    while(true){
        let id = Number(prompt("Mời bạn nhập id:"));
        let check = true;
        for (const key in arr) {
            if(arr[key].id == id){
                alert('id đã tồn tại mời bạn nhập lại!');
                check = false;
            }
        }
        if(check){
            Contact.id = id;
            break;
        }
    }
    Contact.name = prompt("Mời bạn nhập tên:");
    Contact.email = prompt("Mời bạn nhập email:");
    Contact.phone = prompt("Mời bạn nhập số điện thoại:");

    arr.push(Contact);
    alert("Thêm vào danh sách thành công.");
}

function showlist(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let text = `| ID |     NAME     |     EMAIL     |   PHONE   |
    ------------------------------------------\n`;
    for (const key in arr) {
        text += `${arr[key].id}  ${arr[key].name}  ${arr[key].email}  ${arr[key].phone}\n`;
    }
    alert(text);
}

function searchPhone(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let checkPhone = prompt("Mời bạn nhập số điện thoại của người cần tìm:");
    let arr1 = arr.filter((phon) => phon.phone == checkPhone);

    if(arr1.length == 0){
        alert("Số điện thoại của người dùng không tồn tại!");
        return
    }
    showlist(arr1);
}

function edixContact(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let id = Number(prompt("Mời bạn nhập id để sửa thông tin:"));
    let check = true;
    for (const key in arr) {
        if(arr[key].id == id){
            arr[key].name = prompt("Mời bạn nhập tên:");
            arr[key].email = prompt("Mời bạn nhập email:");
            arr[key].phone = prompt("Mời bạn nhập số điện thoại:");
            check = false;
            alert("Sửa thành công!");
        }
    }
    if(check){
        alert("id không tồn tại trong danh sách!");
    }
}

function deleteContact(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let id = Number(prompt("Mời bạn nhập id muốn xóa:"));
    let check = true;
    for (const key in arr) {
        if(arr[key].id == id){
            arr.splice(key, 1);
            check = false;
            alert("Xóa thành công!");
        }
    }
    if(check){
        alert("id không tồn tại trong danh sách!");
    }
}