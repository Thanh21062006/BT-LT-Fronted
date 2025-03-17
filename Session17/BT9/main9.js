let a = Number(prompt("Mời bạn nhập số a:"));
let b = Number(prompt("Mời bạn nhập số b:"));
let c = Number(prompt("Mời bạn nhập số c:"));

let delta = (b*b) - 4*a*c;

let x1 = (-b + Math.sqrt(delta)) / 2*a;
let x2 = (-b - Math.sqrt(delta)) / 2*a;

document.writeln(`x1 = ${x1}, `);
document.writeln(`x2 = ${x2}.`);

