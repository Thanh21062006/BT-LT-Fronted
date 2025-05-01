let arrProduct = new Array();

while(true){
    let choice = prompt(`==========MENU===========
    1. Thêm sản phẩm vào danh sách sản phẩm.
    2. Hiển thị tất cả sản phẩm.
    3. Hiển thị chi tiết sản phẩm theo id.
    4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
    5. Xóa sản phẩm theo id.
    6. Lọc sản phẩm theo khoảng giá
    7. Thoát.
------------------------------------------
Mời bạn chọn chọn chức năng tương ứng:`);

    switch(choice){
        case '1':
            addContact(arrProduct);
            break;
        case '2':
            showListProduct(arrProduct);
            break;
        case '3':
            searchId(arrProduct);
            break;
        case '4':
            edixProduct(arrProduct);
            break;
        case '5':
            deleteProduct(arrProduct);
            break;
        case '6':
            searchPrice(arrProduct);
            break;
        case '7':
            alert("Hẹn gặp lại...");
            break;
        default:
            alert("Chức năng không hợp lệ mời bạn chọn lại!");
            break;
    }
    if(choice == '7') break;
}

function addContact(arr) {
    const product = new Object();
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
            product.id = id;
            break;
        }
    }
    product.name = prompt("Mời bạn nhập tên:");
    product.price = parseFloat(prompt("Mời bạn nhập giá tiền của sản phẩm:"));
    product.category = prompt("Mời bạn nhập loại hình của sản phẩm:");
    product.quantity = Number(prompt("Mời bạn nhập số lượng sản phẩm:"));

    arr.push(product);
    alert("Thêm vào danh sách thành công.");
}

function showListProduct(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let text = `| ID |     NAME     | PRICE  | CATEGORY | QUANTITY |
    --------------------------------------------------------\n`;
    for (const key in arr) {
        text += `${arr[key].id}   ${arr[key].name}  ${arr[key].price}  ${arr[key].category}  ${arr[key].quantity}\n`;
    }
    alert(text);
}

function searchId(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let id = Number(prompt("Mời bạn nhập id của sản phẩm cần tìm:"));
    let arr1 = arr.filter((phon) => phon.id === id);

    if(arr1.length == 0){
        alert("Id của sản phẩm không tồn tại!");
        return
    }
    showListProduct(arr1);
}

function edixProduct(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let id = Number(prompt("Mời bạn nhập id để sửa thông tin:"));
    let check = true;
    for (const key in arr) {
        if(arr[key].id == id){
            arr[key].name = prompt("Mời bạn nhập tên:");
            arr[key].price = parseFloat(prompt("Mời bạn nhập giá tiền của sản phẩm:"));
            arr[key].category = prompt("Mời bạn nhập loại hình của sản phẩm:");
            arr[key].quantity = Number(prompt("Mời bạn nhập số lượng sản phẩm:"));
            check = false;
            alert("Sửa thành công!");
        }
    }
    if(check){
        alert("id không tồn tại trong danh sách!");
    }
}

function deleteProduct(arr) {
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

function searchPrice(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let maxPrice = parseFloat(prompt('Mời bạn nhập số tiền lớn nhất:'));
    let minPrice = parseFloat(prompt('Mời bạn nhập số tiền nhỏ nhất:'));

    let arrPrice = arr.filter((value) => value.price <= maxPrice && value.price >= minPrice);

    if(arrPrice.length == 0){
        alert("Không có sản phẩm nào nằm trong khoảng tiền bạn vừa nhập!");
        return
    }
    showListProduct(arrPrice);
}