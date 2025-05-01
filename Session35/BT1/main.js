let arr = JSON.parse(localStorage.getItem('list1')) || [];
showList(arr);

document.querySelector('.add').addEventListener('click', ()=>{
    let valueInput = document.querySelector('.name').value;

    arr.push(valueInput);
    localStorage.setItem('list1', JSON.stringify(arr));
    showList(arr);
})

function showList(array){
    let html = '';
    let div = document.querySelector('.content');

    array.forEach((element, index) => {
        html += `
        <div class="Job">
            <span>${element}</span>
            <div>
                <button class="fix" onclick="fix(${index})">Sửa</button>
                <button class="del" onclick="del(${index})">Xóa</button>
            </div>
        </div>
        `
    });
    div.innerHTML = html;
    document.querySelector('.name').value = '';
}

function del(index){
    let confim = confirm("Bạn có chắc chắn muốn xóa không");
    if(confim){
        arr.splice(index, 1);
        localStorage.setItem('list1', JSON.stringify(arr));
        showList(arr)
    }
    document.querySelector('.name').value = '';
    return
}

function fix(index) {
    let value = arr[index];
    let newValue = prompt("Chỉnh sửa công việc:", value);
    if(newValue){
        arr[index] = newValue;
        localStorage.setItem('list1', JSON.stringify(arr));
        showList(arr);
    }
    return
}
