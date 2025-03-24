let chan = 0;
let le = 0;

for(let i = 1;i <=5; i++){
    let numb = Number(prompt("Mời bạn nhập vào số thứ nhất:"));
    if(!isNaN(numb)){
        numb % 2 === 0 ? chan++ : le++;
    }
}

alert(`Có ${chan} số chẵn và ${le} số lẻ`);