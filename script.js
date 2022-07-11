var fval = 0

function inp(input) {
    var calc = document.getElementById("val").value;
    var last = calc.split('').pop();
    if (calc.length === 0 && input ==="/") {}
    else if ((input === "+" || input === "-" || input === "*" || input === "/") && (last === "+" || last === "-" || last === "*" || last === "/")) {
        var newinp = calc
        var newchar = input.toString()
        newinp = newinp.split('')
        newinp.pop()
        newinp.push(newchar)
        newinp = newinp.join('')
        document.getElementById("val").value = newinp
    }
    else {
        if (fval === 1 && input !== "+" && input !== "-" && input !== "*" && input !== "/") {
            fval = 0
            document.getElementById("val").value = ""
            document.getElementById("val").value+=input
        }
        else {
            fval=0
            document.getElementById("val").value+=input
        }
    }
}

function zero() {
    var calc = document.getElementById("val").value
    var last = calc.split('').pop();
    if (last === "+" || last === "-" || last === "*" || last === "/"){}
    else {
        if (calc.length === 1 && calc === "0"){}
        else {
            document.getElementById("val").value = calc+0
        }
    }
}

function clr() {
    document.getElementById("val").value = ""
}

function equate() {
    var calc = document.getElementById("val").value
    document.getElementById("val").value = eval(calc)
    fval = 1
}
