let numbArray = new Array();
let size = Number(prompt("Mời bạn nhập số lượng phần tử cho mảng:"));

if(size > 0){
    let check = 0;
    for(let i = 0; i < size; i++){
        let value = prompt(`Mời bạn nhập vào giá trị cho array[${i}]`);
        numbArray[i] = value;
        if(!isNaN(value)){
            console.log(numbArray[i]);
            check++;
        }
    }

    if(check == 0){
        alert("Mảng không có kí tự số!");
    }
} else{
    alert("Không có kí tự số!");
}
