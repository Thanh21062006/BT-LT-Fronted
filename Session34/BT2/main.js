// const courses = [
//     {
//       id: 1,
//       content: 'Learn Javascript Session 01',
//       dueDate: '2023-04-17',
//       status: 'Pending',
//       assignedTo: 'Anh Bách',
//     },
//     {
//       id: 2,
//       content: 'Learn Javascript Session 2',
//       dueDate: '2023-04-17',
//       status: 'Pending',
//       assignedTo: 'Lâm th`',
//     },
//     {
//       id: 3,
//       content: 'Learn CSS Session 1',
//       dueDate: '2023-04-17',
//       status: 'Pending',
//       assignedTo: 'Hiếu Ci Ớt Ớt',
//     },
//   ];

//   localStorage.setItem("list", JSON.stringify(courses));
let arr = JSON.parse(localStorage.getItem('list')) || [];
// showList(arr);
  document.querySelector('.clic').addEventListener('click', ()=>{

    let content = document.querySelector('.input1').value.trim();
    let dueDate = document.querySelector('.input2').value.trim();
    let status = document.querySelector('.input3').value.trim();
    let assignedTo = document.querySelector('.input4').value.trim();

    if(content == '' || dueDate == ''|| status == ''|| assignedTo == ''){
        alert("Dữ liệu không được để trống!");
        return
    }
    let ojb = new Object();
    ojb.id = arr.length;
    ojb.content = content;
    ojb.dueDate = dueDate;
    ojb.status = status;
    ojb.assignedTo = assignedTo;

    arr.push(ojb);
    localStorage.setItem('list', JSON.stringify(arr));
    showList(arr);
  })

  let div = document.querySelector('.listTask');

  function showList(arr) {
    let html = '';

    arr.forEach((value, index) => {
        html += `
        <tr>
            <td>${index+1}</td>
            <td>${value.content}</td>
            <td>${value.dueDate}</td>
            <td>${value.status}</td>
            <td>${value.assignedTo}</td>
            <td><button class="clickFix" onclick="fix(${index})">Sửa</button><button class="clickDelt" onclick="delet(${index})">Xóa</button></td>
        </tr>
      `
    });
    div.innerHTML = html;
  }

function delet(index) {
    
    arr.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(arr));
    showList(arr);
}

function fix(index){
    document.querySelector('.input1').value = arr[index].content;
    document.querySelector('.input2').value = arr[index].dueDate;
    document.querySelector('.input3').value = arr[index].status;
    document.querySelector('.input4').value = arr[index].assignedTo;

    let fix = document.querySelector('.fix');

    fix.replaceWith(fix.cloneNode(true));
    fix = document.querySelector('.fix');

    fix.addEventListener('click', ()=>{
        arr[index].content = document.querySelector('.input1').value
        arr[index].dueDate = document.querySelector('.input2').value
        arr[index].status = document.querySelector('.input3').value
        arr[index].assignedTo = document.querySelector('.input4').value
        localStorage.setItem('list', JSON.stringify(arr));
    showList(arr);
    })
}




