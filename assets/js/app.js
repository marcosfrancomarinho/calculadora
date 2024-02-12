const operator = ["+", "-", "*", "/", "CE", "=", "%"];
const $ = selector => {
    const element = document.querySelectorAll(selector)
    return element.length > 1 ? element : element[0]
}
const reset = function () {
    this.forEach(elm => {
        $(elm).value = ""
    })
}
$(".btn").forEach(btn => {
    btn.onclick = function () {
        insertScreen.bind(this)();
    }
})
function insertScreen() {
    $(".secondary").value += this.innerText
    if (operator.indexOf(this.innerText) == -1) {
        $(".main").value += this.innerText;
    } else {
        reset.bind([".main"])()
        $(".secondary").classList.remove("hidden")
    }
}
$(".result").onclick = () => {
    $(".main").value = eval($(".secondary").value)
}
$(".reset").onclick = () => {
    $(".secondary").classList.add("hidden")
    reset.bind([".main", ".secondary"])()
}
$(".clear").onclick = () => {
    [".main", ".secondary"].forEach(selector => {
        const value = $(selector).value
        $(selector).value = value.substring(0, value.length - 1)
    })
}



