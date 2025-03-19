let str = prompt("mời bạn nhập tên:");

if(str === "ADMIN"){
    let passWord = prompt("Mời bạn nhập password:");
    if(passWord === "TheMaster"){
        document.writeln("Wecomto");
    } else if(passWord === null){
        document.writeln("Cencelled");
    } else{
        document.writeln("Wrong password");
    }
} else if(str === null){
    document.writeln("Cencelled");
} else{
    document.writeln("I Don't know you");
}