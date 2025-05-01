let total = 0;
for(let i = 0;i < 5;i++){
    let numb = Number(prompt(`Mời bạn nhập số thứ ${i + 1}:`));
    if(numb % 2 !== 0){
        total = total + numb;
    }
}

alert(`Tổng các số lẻ là: ${total}`);

