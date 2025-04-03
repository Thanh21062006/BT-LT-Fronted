let arrBooks = new Array();

while(true){
    let choice = prompt(`=============MENU============
    1. Thêm sách mới.
    2. Hiển thị danh sách sách.
    3. Tìm kiếm sách theo tiêu đề.
    4. Cập nhật trạng thái mượn/trả sách theo id sách.
    5. Xóa sách theo id sách ra khỏi danh sách.
    6. Sắp xếp sách theo giá tăng dần.
    7. Thoát.
--------------------------------------------------
Mời bạn nhập chức năng tương ứng:`);

    switch(choice){
        case '1':
            addBook(arrBooks);
            break;
        case '2':
            showListBook(arrBooks);
            break;
        case '3':
            searchTitle(arrBooks);
            break;
        case '4':
            edixAvailable(arrBooks);
            break;
        case '5':
            deleteBook(arrBooks);
            break;
        case '6':
            sortPrice(arrBooks);
            break;
        case '7':
            alert("Hẹn gặp lại...");
            break;
        default:
            alert("Chức năng không tồn tại mời bạn nhập lại!")
    }

    if(choice == '7') break;
}

function addBook(arr) {
    const book = new Object();
    while(true){
        let id = Number(prompt("Mời bạn nhập id:"));
        let check = true;
        for (const key in arr) {
            if(arr[key].id == id){
                alert("id đã tồn tại mời bạn nhập lại!");
                check = false;
            }
        }
        if(check){
        book.id = id; 
        break;
        }
    }
    book.title = prompt("Mời bạn nhập vào tên sách:");
    book.author = prompt("Mời bạn nhập vào tên tác giả:");
    book.year = Number(prompt("Mời bạn nhập vào năm xuất bản:"));
    book.price = parseFloat(prompt("Mời bạn nhập vào giá tiền của sách:"));
    while(true){
        let tempisAvailable = Number(prompt("Mời bạn nhập vào trạng thái 1(Đã mượn sách), 0(Đã trả sách):"));
        if(tempisAvailable == 1 || tempisAvailable == 0){
            if(tempisAvailable == 1){
                book.Available = true;
                break;
            } else{
                book.Available = false;
                break;
            }
        } else{
            alert("Dữ liệu không hợp lệ mời bạn nhập lại")
        }
    }
    arr.push(book);
    alert("Thêm sách thành công.");
}

function showListBook(arr){
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let text = `|ID|  TITLE  |  AUTHOR  | YEAR |  PRICE  | AVAILABLE |
    ---------------------------------------------------------------\n`;
    for (const key in arr) {
        text += `${arr[key].id}  ${arr[key].title}  ${arr[key].author}  ${arr[key].year}  ${arr[key].price}  ${arr[key].Available}\n`;
    }
    alert(text);
}

function searchTitle(arr){
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let titleCheck = prompt("Mời bạn nhập tên sách cần tìm:");
    let arrSearch = arr.filter((value) => value.title.toLowerCase().includes(titleCheck.toLowerCase()));

    if(arrSearch.length == 0){
        alert("Tên sách không tồn tại!");
        return
    }
    showListBook(arrSearch);
}

function edixAvailable(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }
    while(true){
        let id = Number(prompt("Mời bạn nhập id để sửa trạng thái:"));
        for (const key in arr) {
            if(arr[key].id == id){
                while(true){
                    let tempisAvailable = Number(prompt("Mời bạn cập nhật lại trạng thái 1(Đã mượn sách), 0(Đã trả sách):"));
                    if(tempisAvailable == 1 || tempisAvailable == 0){
                        if(tempisAvailable == 1){
                            arr[key].Available = true;
                            alert("Cập nhật thành công.");
                            return;
                        } else{
                            arr[key].Available = false;
                            alert("Cập nhật thành công.");
                            return;
                        }
                    } else{
                        alert("Dữ liệu không hợp lệ mời bạn nhập lại")
                    }
                } 
            }
        }
    }
}

function deleteBook(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }
    while(true){
        let id = Number(prompt("Mời bạn nhập id muốn xóa:"));
        for (const key in arr) {
            if(arr[key].id == id){
                arr.splice(key, 1);
                alert("Xóa thành công!");
                return;
            }
        }
        alert("id không tồn tại");
    }
    return
}

function sortPrice(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }
    
    for(let i = 0; i < arr.length - 1;i++){
        for (let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j].price > arr[j+1].price){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    alert("Xắp xếp thành công!");
}