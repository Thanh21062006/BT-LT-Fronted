let numbArray = new Array();
let size = Number(prompt("Mời bạn nhập số lượng phần tử cho mảng:"));

if(size > 0){
    for(let i = 0;i < size; i++){
        while(true){
            let value = prompt("Mời bạn nhập vào số để kiểm tra dãy fibonacci:");
            if(!isNaN(value)){
                numbArray[i] = Number(value);
                break;
            } else{
                alert("Dữ liệu nhập vào không hợp lệ mời bạn nhập lại!");
            }
        }
    }

    console.log(numbArray);

    if(size == 2 && numbArray[0] == 0 && numbArray[1] == 1){
        alert("Là dãy số fibonacci");
    } else if(size > 2 && numbArray[0] == 0 && numbArray[1] == 1){
        let check = true;
        for(let i = 2;i < size; i++){
            if(numbArray[i] !== numbArray[i-1] + numbArray[i-2]){
                check = false;
                break;
            }
        }

        if(check){
            alert("Là dãy fibonacci");
        } else{
            alert("Không phải dãy fibonacci");
        }
    } else{
        alert("Không phải dãy fibonacci");
    }
    
} else if(size == 0){
    alert("Không phải dãy fibonacci");
} else{
    alert('Số lượng phần tử không được nhỏ hơn 0!');
}