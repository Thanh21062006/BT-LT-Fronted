let arrJob = new Array();

while(true){
    let choice = prompt(`==========MENU===========
    1. Thêm công việc mới.
    2. Hiển thị tất cả các công việc.
    3. Cập nhật trạng thái công việc theo id.
    4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
    5. Sắp xếp các công việc theo trạng thái công việc.
    6. Thoát.
------------------------------------------
Mời bạn chọn chọn chức năng tương ứng:`);

    switch(choice){
        case '1':
            addJob(arrJob);
            break;
        case '2':
            showListJob(arrJob);
            break;
        case '3':
        edixAvailable(arrJob);
            break;
        case '4':
            searchAvailable(arrJob);
            break;
        case '5':
            sortAvailable(arrJob);
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

function addJob(arr) {
    const job = new Object();
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
            job.id = id;
            break;
        }
    }
    job.name = prompt("Mời bạn nhập tên công việc:");
    job.description = prompt("Mô tả công việc:");
    job.timeStart = prompt("Mời bạn nhập thời gian bắt đầu công việc:");
    while(true){
        let tempAvailable = Number(prompt("Mời bạn nhập vào trạng thái 1(Hoàn thành), 0(chưa hoàn thành):"));
        if(tempAvailable == 1 || tempAvailable == 0){
            if(tempAvailable == 1){
                job.Available = "Hoàn thành";
                break;
            } else{
                job.Available = "Chưa hoàn thành";
                break;
            }
        } else{
            alert("Dữ liệu không hợp lệ mời bạn nhập lại")
        }
    }
    arr.push(job);
    alert("Thêm vào danh sách thành công.");
}

function showListJob(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let text = `| ID |     NAME     | DESCRIPTION  | TIMESTART | AVAILABLE |
    --------------------------------------------------------\n`;
    for (const key in arr) {
        text += `${arr[key].id}   ${arr[key].name}  ${arr[key].description}  ${arr[key].timeStart}  ${arr[key].Available}\n`;
    }
    alert(text);
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
                    let tempisAvailable = Number(prompt("Mời bạn cập nhật lại trạng thái 1(Hoàn thành), 0(Chưa hoàn thành):"));
                    if(tempisAvailable == 1 || tempisAvailable == 0){
                        if(tempisAvailable == 1){
                            arr[key].Available = "Hoàn thành";
                            alert("Cập nhật thành công.");
                            return;
                        } else{
                            arr[key].Available = "Chưa hoàn thành";
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

function searchAvailable(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }

    let checkAvailable = prompt("Mời bạn nhập trạng công việc (Hoàn thành hoặc Chưa hoàn thành):");
    let arrAvailable = arr.filter((value) => value.Available.toLowerCase() == checkAvailable.toLowerCase());

    if(arrAvailable.length == 0){
        alert('Trạng thái công việc không tồn tại!');
        return
    }
    showListJob(arrAvailable);
}

function sortAvailable(arr) {
    if(arr.length == 0){
        alert("Mảng trống!");
        return
    }
    let arr1 = arr.filter((value) => value.Available == 'Hoàn thành');
    let arr2 = arr.filter((value) => value.Available == 'Chưa hoàn thành');

    let tempArr = arr1.concat(arr2);

    for(let i = 0;i < arr.length;i++){
        arr[i] = tempArr[i];
    }
    alert("Xắp xếp thành công.");
}