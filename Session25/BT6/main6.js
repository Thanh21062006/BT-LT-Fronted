let str = prompt("Mời bạn nhập một chuỗi bất kì để kiểm tra chuỗi đôi xứng:");

if(isPalindrome(str)){
    alert("Là chuỗi đối xứng");
} else{
    alert("Không phải chuỗi đối xứng!");
}

function  isPalindrome(str) {
    let checkStr = str.split('').reverse().join('');
    return str === checkStr;
}