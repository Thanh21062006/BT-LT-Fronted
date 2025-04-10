let listArr = [
    {tên: "Rau sạch", danhMuc: "Đồ ăn"},
    {tên: "Thịt lợn", danhMuc: "Đồ ăn"},
    {tên: "Pepsi không calo", danhMuc: "Nước"},
    {tên: "Cocacola", danhMuc: "Nước"},
    {tên: "Cờ lê", danhMuc: "Dụng cụ"},
    {tên: "Tuy vít", danhMuc: "Dụng cụ"}
]

document.querySelector(".input").addEventListener('click', ()=>{
    let valu = document.querySelector(".form-select").value;
    let arrSearch = listArr.filter((value) => value.danhMuc == valu);
    let ul = document.querySelector("ul")
    let content = "";
    for (const key in arrSearch) {
        content += `<li><b>Tên đồ ăn: ${arrSearch[key].tên}, Danh mục: ${arrSearch[key].danhMuc}</b></li>`
    }
    ul.innerHTML = content;
})