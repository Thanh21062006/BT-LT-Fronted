let str = prompt("Mời bạn nhập vào một dãy số bất kì:");

if(!isNaN(str)){
    let revse = str.split("");
    revse.reverse();
    console.log(revse.join(""));
} else{
    console.log("Dãy không hợp lệ!");
}