let numb1 = Number(prompt("Mời bạn nhập vào một số:"));

let numb2 = 0;
let temp = numb1;

while(temp > 0){
    numb2 = numb2 * 10 + temp % 10;
    temp =  Math.floor(temp / 10);
}

if(numb1 === numb2){
    alert("Là số đối xứng");
} else{
    alert("Không phải là số đối xứng");
}