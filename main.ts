function zhasni_M () {
    for (let i = 0; i <= 4; i++) {
        led.unplot(4, 4 - i)
        basic.pause(100)
    }
    led.unplot(3, 1)
    for (let i = 0; i <= 3; i++) {
        led.unplot(4 - i, 4 - i)
        basic.pause(100)
    }
    for (let i = 0; i <= 4; i++) {
        led.unplot(0, i)
        basic.pause(100)
    }
}
function rozsvit_M () {
    for (let i = 0; i <= 4; i++) {
        led.plot(0, 4 - i)
        basic.pause(100)
    }
    for (let i = 0; i <= 2; i++) {
        led.plot(i, i)
        basic.pause(100)
    }
    led.plot(3, 1)
    for (let i = 0; i <= 4; i++) {
        led.plot(4, i)
        basic.pause(100)
    }
}
function zhasni_V () {
    for (let i = 0; i <= 2; i++) {
        led.unplot(4, i)
        basic.pause(100)
    }
    led.unplot(3, 3)
    for (let i = 0; i <= 2; i++) {
        led.unplot(3 - i, 5 - i)
        basic.pause(100)
    }
    for (let i = 0; i <= 2; i++) {
        led.unplot(0, 2 - i)
        basic.pause(100)
    }
}
function rozsvit_V () {
    for (let i = 0; i <= 2; i++) {
        led.plot(0, i)
        basic.pause(100)
    }
    for (let i = 0; i <= 2; i++) {
        led.plot(i, i + 2)
        basic.pause(100)
    }
    led.plot(3, 3)
    for (let i = 0; i <= 2; i++) {
        led.plot(4, 2 - i)
        basic.pause(100)
    }
}
rozsvit_M()
basic.pause(500)
zhasni_M()
rozsvit_V()
basic.pause(500)
zhasni_V()
