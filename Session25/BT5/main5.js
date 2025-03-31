let arrNumb = new Array();
let size = Number(prompt("Mời bạn nhập số lượng phần tử của mảng:"));

for(let i = 0; i < size;i++){
    while(true){
        let value = prompt(`Mời bạn nhập arr${i}:`);
        if(!isNaN(value)){
            arrNumb.push(Number(value));
            break;
        } else{
            alert("Dữ liệu nhập vào không phải số mời bạn nhập lại!");
        }
    }
}

alert(check(arrNumb));

function check(arr) {
    let count = 0;
    for (const value of arr) {
        if(value > 0){
            count++;
        }
    }
    if(count > 0){
        return count;
    } else{
        return "Không có số nguyên dương trong mảng"
    }
}