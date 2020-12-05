function init() {
    var num = document.getElementById("num")
    num.value = 0
    var fh
    var btn_num1 = num.value
    num.disabled = "disabled"
    var oButton = document.getElementsByTagName("input") //通过标签获取元素，返回值为一个数组/列表
    for (var i = 0; i < oButton.length; i++) {
        oButton[i].onclick = function() {
            if (isNumber(this.value)) {
                //this表示当前发生onclick事件的元素
                num.value = (num.value + this.value) * 1 //将字符串转化为数字去除首位0
            } else {
                var btn_num = this.value
                switch (btn_num) {
                    case "+":
                        btn_num1 = num.value * 1
                        num.value = 0
                        fh = "+"
                        break
                    case "-":
                        btn_num1 = num.value * 1
                        num.value = 0
                        fh = "-"

                        break
                    case "*":
                        btn_num1 = num.value * 1
                        num.value = 0
                        fh = "*"
                        break
                    case "/":
                        btn_num1 = num.value * 1
                        num.value = 0
                        fh = "/"
                        break
                    case "c":
                        num.value = "0"
                        break
                    case "dlt":
                        num.value = back(num.value)
                        break
                    case "+/-":
                        num.value = num.value * (-1)
                        break
                    case ".":
                        num.value = dec_number(num.value)
                        break
                    case "=":
                        switch (fh) {
                            case "+":
                                num.value = btn_num1 * 1 + num.value * 1
                                break
                            case "-":
                                num.value = btn_num1 * 1 - num.value * 1
                                break
                            case "*":
                                num.value = btn_num1 * 1 * num.value * 1
                                break
                            case "/":
                                if (num.value == "0") {
                                    alert("除数不能为0")
                                } else {
                                    num.value = (btn_num1 * 1) / (num.value * 1)
                                }
                                break
                        }
                        break
                    case "m":
                        alert("111")
                        break
                }
            }
        }
    }
}

function back(n) {

    n = n.substr(0, n.length - 1)
    if (n == "") {
        n = 0
    }
    return n
}

function isNumber(n) {
    return !isNaN(n)
}

function dec_number(n) {
    if (n.indexOf(".") == -1) {
        n = n + "."
    }
    return n
}

function init_mooc() {
    document.getElementById("imooc").onclick = function() {
        window.location.href = "https://www.baidu.com"
    }
}