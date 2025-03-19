let toan = parseFloat(prompt("Mời bạn nhập điểm môn Toán:"))
let van = parseFloat(prompt("Mời bạn nhập điểm môn Văn:"))
let anh = parseFloat(prompt("Mời bạn nhập điểm môn Anh:"))

let average = (toan + van + anh) / 3;

if (average >= 8){
    document.writeln(`Điểm trung bình của bạn là: ${average} xếp loại Giỏi.`);
} else if(average < 8 && average >= 6.5){
    document.writeln(`Điểm trung bình của bạn là: ${average} xếp loại Khá.`);
} else if(average < 6.5 && average >= 5){
    document.writeln(`Điểm trung bình của bạn là: ${average} xếp loại Trung Bình.`);
} else {
    document.writeln(`Điểm trung bình của bạn là: ${average} xếp loại Yếu.`);
}