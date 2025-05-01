let str = prompt("Mời bạn nhập một chuỗi bất kì:");
let checkStr = prompt("Mời bạn nhập từ tìm kiếm trong chuỗi:");

if(str.includes(checkStr)){
    alert("Tồn tại từ cần tìm kiếm");
} else{
    alert("Không tồn tại từ cần tìm kiếm");
}