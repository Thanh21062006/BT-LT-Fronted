let year = parseFloat(prompt("Mời bạn nhập vào số năm kinh nghiệm:"));

if(year < 1){
    document.writeln("Mới vào nghề")
} else if(year >= 1) {
    switch(year){
        case 1:
        case 2:
        case 3:
            document.writeln("Nhân viên có kinh nghiệm");
            break;
        case 4:
        case 5:
            document.writeln("Chuyên viên.");
            break;
        default:
            document.writeln("Quản lí.");
            break;
    }
}