let menu = JSON.parse(localStorage.getItem('menu'));  //["rau xào", "thịt luộc", "gà rán"]
let text = document.getElementById('menu')
let answer1 = prompt("nhập C,R,U,D")

if (answer1 == "c") {
    Create()
}else if (answer1 == "r") {
    Read()
}else if (answer1 == "u") {
    Update()
}else if (answer1 == "d") {
    Delete()
}

function Create() {
    menu.push(prompt("Mời nhập món ăn muốn thêm vào menu"))
    console.log(menu);
    localStorage.setItem('menu', JSON.stringify(menu))
}
function Read() {
    text.innerText = menu.join()
}
function Update() {
    let answer2 = prompt("Mời nhập vào tên món muốn update")
    let answer3 = prompt("Mời nhập vào tên món ăn mới")
    let index = menu.indexOf(answer2)
    menu[index] = answer3
    localStorage.setItem('menu', JSON.stringify(menu))
}
function Delete() {
    let answer2 = prompt("Mời nhập vào tên món muốn Delete")
    let index = menu.indexOf(answer2)
    menu.splice(index,1)
    localStorage.setItem('menu', JSON.stringify(menu))
}