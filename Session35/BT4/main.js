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
    showList(paginationList(currentPage));
    reset();
})

// Phân trang
let countListPerPage = 3;
let currentPage = 1;

let totalPages = Math.ceil(arr.length/countListPerPage);

function paginationList(page) {
    let start = page*countListPerPage;
    let end = start + countListPerPage;

    return arr.slice(start, end)
}

function showList(array) {
    let html = '';
    let div = document.querySelector(".list");
    array.forEach((value, index) => {
        html += `
        <tr>
            <td>${currentPage * countListPerPage + index + 1}</td>
            <td>${value.name}</td>
            <td>${value.position}</td>
        </tr>`
    });
    div.innerHTML = html;

    totalPages = Math.ceil(arr.length / countListPerPage);

let pageHTML = new Array(totalPages).fill(1)
    .reduce((temp, _, index) => temp + 
    `<li class="page-item ${currentPage == index ? 'active' : ''}" onclick="clic(${index})">
        <a class="page-link" href="#" onclick="changePage(${index})">${index + 1}</a>
    </li>`, '');

document.getElementById('pages').innerHTML = `
    <li class="page-item ${currentPage == 0 ? 'disabled' : ''}" onclick="previous()">
        <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>
    </li>
    ${pageHTML}
    <li class="page-item ${currentPage == totalPages - 1 ? 'disabled' : ''}" onclick="next()">
        <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>
    </li>
`;
}

function clic(index){
    currentPage = index;
    showList(paginationList(currentPage));
}

function next() {
    if(currentPage < totalPages - 1){
        currentPage++;
        showList(paginationList(currentPage));
    }
}

function previous() {
    if(currentPage > 0){
        currentPage--;
        showList(paginationList(currentPage));
    }
}

showList(paginationList(currentPage));

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
}

