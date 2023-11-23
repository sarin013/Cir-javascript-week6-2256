const salad = ["😥","😀","😍","😘","🍵"]
const len = salad.length; //5
for (let i = 0; i < salad.length; i = i + 1){
    console.log(`${i} ${salad[i]}`);
    document.getElementById("demo").innerHTML = salad[i];
}
// const salad1 = salad[0] + salad[1] + salad[3] + salad[4];
// document.getElementById("demo").innerHTML = salad1;