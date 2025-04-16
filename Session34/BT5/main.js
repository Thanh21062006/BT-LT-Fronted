// let array = [{name: "Nguyễn Văn A", position: "Developer"}, {name: "Trần Thị B", position: "Designer"}];

// localStorage.setItem("listJob", JSON.stringify(array));

document.querySelector(".but").addEventListener('click', ()=>{
    let arr = JSON.parse(localStorage.getItem('listJob'));
    let ojb = new Object();

    let value1 = document.getElementById('name').value;
    let value2 = document.getElementById('position').value;
    
    if(value1 == '' || value2 == ''){
        alert('Dữ liệu không được để trống!');
        reset();
        return
    }
    ojb.name = value1;
    ojb.position = value2;

    arr.push(ojb);
    localStorage.setItem("listJob", JSON.stringify(arr));
    let html = '';
    let div = document.querySelector(".list");
    arr.forEach((value, index) => {
        html += `
        <tr>
            <td>${index + 1}</td>
            <td>${value.name}</td>
            <td>${value.position}</td>
        </tr>`
    });
    div.innerHTML = html;
    reset();
})

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
}
