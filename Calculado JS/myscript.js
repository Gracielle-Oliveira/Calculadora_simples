function insert(num) {

    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num
}

function clean() {

    document.getElementById('result').innerHTML = ""
}

function back() {

    var clearNumber = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = clearNumber.substring(0, clearNumber.length - 1)
}

function calculate() {

    var totalResult = document.getElementById('result').innerHTML;
    if (totalResult) {
        document.getElementById('result').innerHTML = eval(totalResult)
    } else {
        document.getElementById('result').innerHTML = "Campo vazio"
    }
}