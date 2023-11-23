//3.Array constructor method
const num3 = new Array(5)
num3[0] = "Trat1";
num3[1] = "Trat2";
num3[2] = "Trat3";
num3[3] = "Trat4";
num3[4] = "Trat5";
num3.push("Chonburi");
for (let i = 0; i < num3.length;i = i + 1){
    console.log(num3[i]);
}
//1.Literal array
console.log("1.Array Literal")
const num2 = ["trat","chantaburi","Rayong"];
num2.push("Chonburi")
num2[4] = "Bangkok";
for (let i = 0; i < num2.length;i = i + 1){
    console.log(num2[i]);
}
console.log("2.Array Instance method")
//2.Array Instance method
const num = new Array(1,2,3,4,5,"trat",20.5)
const i = 0;
for (let i = 0; i < num.length;i = i + 1){
    console.log(num[i]);
}