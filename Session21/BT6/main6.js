let numb = Number(prompt('Mời bạn nhập vào một số bất kì:'));

document.writeln(`Ước của ${numb} bao gồm:`);
for(let i = 1; i <= numb; i++){
    if(numb % i === 0){
        document.writeln(i, );
    }
}