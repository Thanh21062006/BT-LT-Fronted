let numberArray = prompt("Mời bạn nhập một dãy số bất kì để tìm số lớn nhất");

if(!isNaN(numberArray)){
    let array = numberArray.split("");
    let maxArray = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > maxArray){
            maxArray = array[i];
        }
    }
    alert(`${maxArray} là số lớn nhất trong dãy`);   
} else{
    alert("Dãy số không hợp lệ!!!");
}
