let arr = new Array();

for(let i = 0; i < 10;i++){
    while(true){
        let value = prompt(`Mời bạn nhập arr[${i}]:`);
        if(!isNaN(value)){
            arr.push(Number(value));
            break;
        } else{
            alert("Dữ liệu nhập vào khôg phải số mời bạn nhập lại!");
        }
    }
}

let temp = arr.filter(function(element, index){
    return element >= 10;
});

alert(temp);