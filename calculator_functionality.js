let a = null;
let b = null;
let c = '';
let temp = '';
let su = 0;
let flag = false;
let flag2 = false;
let flag3 = false;
const disp = document.querySelector(".screen");
disp.value = "00";
const cl = document.querySelector(".cls");
cl.addEventListener("click", cls);
const one = document.querySelector(".one");
one.addEventListener("click", show1);
const two = document.querySelector(".two");
two.addEventListener("click", show2);
const three = document.querySelector(".three");
three.addEventListener("click", show3);
const four = document.querySelector(".four");
four.addEventListener("click", show4);
const five = document.querySelector(".five");
five.addEventListener("click", show5);
const six = document.querySelector(".six");
six.addEventListener("click", show6);
const seven = document.querySelector(".seven");
seven.addEventListener("click", show7);
const eight = document.querySelector(".eight");
eight.addEventListener("click", show8);
const nine = document.querySelector(".nine");
nine.addEventListener("click", show9);
const zero = document.querySelector(".zero");
zero.addEventListener("click", show0);
const plus = document.querySelector(".plus");
plus.addEventListener("click", pl);
const minus = document.querySelector(".minus");
minus.addEventListener("click", mi);
const mul = document.querySelector(".mul");
mul.addEventListener("click", mult);
const po = document.querySelector(".pow");
po.addEventListener("click", power);
const modul = document.querySelector(".mod");
modul.addEventListener("click", modu);
const divi = document.querySelector(".divi");
divi.addEventListener("click", division);
const eq = document.querySelector(".equals");
eq.addEventListener("click", evaluate);

function cls() {
    flag3 = false;
    flag2 = false;
    flag = false;
    disp.value = "00";
    a = null;
    b = null;
    su = 0;
}

function resetter() {
    flag = false;
    flag2 = true;
    flag3 = true;
    a = null;
    b = null;
    c = null;
    su = 0;
}

function nothing() {
    let x = disp.value;
    disp.value = "";
    return x;
}

function show1() {
    if ((disp.value != "00") && (su < 8)) {
        su = su + 1;
        if (flag3 == true) {
            disp.value = disp.value;
        } else {
            disp.value = disp.value + "1";
        }
        if ((flag == false) && (flag3 == false)) {
            a = disp.value;
        } else if ((flag == true)) {
            b = disp.value;
        }
    } else if (disp.value == "00") {
        a = disp.value = "1";
        su = su + 1;
    }
}

function show2() {
    if ((disp.value != "00") && (su < 8)) {
        su = su + 1;
        if (flag3 == true) {
            disp.value = disp.value;
        } else {
            disp.value = disp.value + "2";
        }
        if ((flag == false) && (flag3 == false)) {
            a = disp.value;
        } else if ((flag == true)) {
            b = disp.value;
        }
    } else if (disp.value == "00") {
        a = disp.value = "2";
        su = su + 1;
    }
}

function show3() {
    if ((disp.value != "00") && (su < 8)) {
        su = su + 1;
        if (flag3 == true) {
            disp.value = disp.value;
        } else {
            disp.value = disp.value + "3";
        }
        if ((flag == false) && (flag3 == false)) {
            a = disp.value;
        } else if ((flag == true)) {
            b = disp.value;
        }
    } else if (disp.value == "00") {
        a = disp.value = "3";
        su = su + 1;
    }
}

function show4() {
    if ((disp.value != "00") && (su < 8)) {
        su = su + 1;
        if (flag3 == true) {
            disp.value = disp.value;
        } else {
            disp.value = disp.value + "4";
        }
        if ((flag == false) && (flag3 == false)) {
            a = disp.value;
        } else if ((flag == true)) {
            b = disp.value;
        }
    } else if (disp.value == "00") {
        a = disp.value = "4";
        su = su + 1;
    }
}

function show5() {
    if ((disp.value != "00") && (su < 8)) {
        su = su + 1;
        if (flag3 == true) {
            disp.value = disp.value;
        } else {
            disp.value = disp.value + "5";
        }
        if ((flag == false) && (flag3 == false)) {
            a = disp.value;
        } else if ((flag == true)) {
            b = disp.value;
        }
    } else if (disp.value == "00") {
        a = disp.value = "5";
        su = su + 1;
    }
}

function show6() {
    if ((disp.value != "00") && (su < 8)) {
        su = su + 1;
        if (flag3 == true) {
            disp.value = disp.value;
        } else {
            disp.value = disp.value + "6";
        }
        if ((flag == false) && (flag3 == false)) {
            a = disp.value;
        } else if ((flag == true)) {
            b = disp.value;
        }
    } else if (disp.value == "00") {
        a = disp.value = "6";
        su = su + 1;
    }
}

function show7() {
    if ((disp.value != "00") && (su < 8)) {
        su = su + 1;
        if (flag3 == true) {
            disp.value = disp.value;
        } else {
            disp.value = disp.value + "7";
        }
        if ((flag == false) && (flag3 == false)) {
            a = disp.value;
        } else if ((flag == true)) {
            b = disp.value;
        }
    } else if (disp.value == "00") {
        a = disp.value = "7";
        su = su + 1;
    }
}

function show8() {
    if ((disp.value != "00") && (su < 8)) {
        su = su + 1;
        if (flag3 == true) {
            disp.value = disp.value;
        } else {
            disp.value = disp.value + "8";
        }
        if ((flag == false) && (flag3 == false)) {
            a = disp.value;
        } else if ((flag == true)) {
            b = disp.value;
        }
    } else if (disp.value == "00") {
        a = disp.value = "8";
        su = su + 1;
    }
}

function show9() {
    if ((disp.value != "00") && (su < 8)) {
        su = su + 1;
        if (flag3 == true) {
            disp.value = disp.value;
        } else {
            disp.value = disp.value + "9";
        }
        if ((flag == false) && (flag3 == false)) {
            a = disp.value;
        } else if ((flag == true)) {
            b = disp.value;
        }
    } else if (disp.value == "00") {
        a = disp.value = "9";
        su = su + 1;
    }
}

function show0() {
    if ((disp.value != "00") && (su < 8) && (disp.value != "")) {
        su = su + 1;
        if (flag3 == true) {
            disp.value = disp.value;
        } else {
            disp.value = disp.value + "0";
        }
        if ((flag == false) && (flag3 == false)) {
            a = disp.value;
        } else if ((flag == true)) {
            b = disp.value;
        }
    }
}

function evaluate() {
    let fixer = 0;
    disp.value = '';
    a = parseFloat(a);
    b = parseFloat(b);
    console.log("Eval function value of a", a);
    console.log("Eval function value of b", b);
    if (a && b) {
        switch (c) {
            case "pl":
                fixer = a + b;
                fixer = fixer.toString()
                if (fixer.length >= 10) {
                    disp.value = "TOO LONG!"
                } else {
                    disp.value = a + b;
                    resetter();
                    break;
                }
                break;
            case "mi":
                disp.value = a - b;
                resetter();
                break;
            case "mult":
                fixer = a * b;
                fixer = fixer.toString()
                if (fixer.length >= 10) {
                    disp.value = "TOO LONG!"
                } else {
                    disp.value = a * b;
                    resetter();
                    break;
                }
                break;
            case "power":
                fixer = Math.pow(a, b);
                fixer = fixer.toString();
                console.log(fixer.length);
                if ((fixer.length >= 10) || (fixer == "Infinity")) {
                    disp.value = "TOO LONG!"
                } else {
                    disp.value = Math.pow(a, b);
                    resetter();
                    break;
                }
                break;
            case "modu":
                disp.value = a % b;
                resetter();
                break;
            case "divis":
                fixer = a / b;
                disp.value = parseFloat(fixer);
                resetter();
                break;
        }
    } else {
        disp.value = 'TRY AGAIN!'
    }
}

function pl() {
    su = 0;
    if (disp.value != "00") {
        flag3 = false;
        flag = true;
        c = "pl";
        temp = nothing();
    }
    if (flag2 == true) {
        a = temp;
    }
}

function mi() {
    su = 0;
    if (disp.value != "00") {
        flag3 = false;
        flag = true;
        c = "mi";
        temp = nothing();
    }
    if (flag2 == true) {
        a = temp;
    }
}

function mult() {
    su = 0;
    if (disp.value != "00") {
        flag3 = false;
        flag = true;
        c = "mult";
        temp = nothing();
    }
    if (flag2 == true) {
        a = temp;
    }
}

function power() {
    su = 0;
    if (disp.value != "00") {
        flag3 = false;
        flag = true;
        c = "power";
        temp = nothing();
    }
    if (flag2 == true) {
        a = temp;
    }
}

function modu() {
    su = 0;
    if (disp.value != "00") {
        flag3 = false;
        flag = true;
        c = "modu";
        temp = nothing();
    }
    if (flag2 == true) {
        a = temp;
    }
}

function division() {
    su = 0;
    if (disp.value != "00") {
        flag3 = false;
        flag = true;
        c = "divis";
        temp = nothing();
    }
    if (flag2 == true) {
        a = temp;
    }
}
