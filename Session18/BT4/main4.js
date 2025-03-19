let numb = Number(prompt("Mời bạn nhập vào một số bất kì từ 0 -> 9"));

switch(numb) {
    case 0:
        document.writeln("Số không.");
        break;
    case 1:
        document.writeln("Số một.");
        break;
    case 2:
        document.writeln("Số hai.");
        break;
    case 3:
        document.writeln("Số ba.");
        break;
    case 4:
        document.writeln("Số bốn.");
        break;
    case 5:
        document.writeln("Số năm.");
        break;
    case 6:
        document.writeln("Số sáu.");
        break;
    case 7:
        document.writeln("Số bảy.");
        break;
    case 8:
        document.writeln("Số tám.");
        break;
    case 9:
        document.writeln("Số chín.");
        break;
    default:
        document.writeln("số bạn nhập không nămd trong khoảng 0 -> 9.");
        break;
}