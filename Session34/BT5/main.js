let arr = JSON.parse(localStorage.getItem('listJob')) || [];


document.querySelector(".but").addEventListener('click', ()=>{
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
    showList(arr);
    reset();
})

function showList(array) {
    let html = '';
    let div = document.querySelector(".list");
    array.forEach((value, index) => {
        html += `
        <tr>
            <td>${index + 1}</td>
            <td>${value.name}</td>
            <td>${value.position}</td>
        </tr>`
    });
    div.innerHTML = html;
}

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
}
