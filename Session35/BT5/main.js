let array = JSON.parse(localStorage.getItem('list2')) ||[];

document.querySelector('.style1').addEventListener('click', ()=>{

})

function addList(){
    let html = '';
    let div = document.querySelector('.content');

    array.forEach(element => {
        html += `
        <tr>
            <td>1</td>
            <td>Quần áo</td>
            <td><ul><li>Đang hoạt động</li></ul></td>
            <td><button class="but"><i class="fa-solid fa-trash"></i></button> <button class="but"><i class="fa-solid fa-pen"></i></button></td>
        </tr>
        `
    });
    div.innerHTML = html;
}