let bearing = 0
input.onButtonPressed(Button.A, function () {
    bearing = input.compassHeading()
    if (bearing < 135 || bearing > 225) {
        music.playMelody("E B C5 A B G A F ", 120)
        basic.showString("S")
    } else {
        basic.showString("")
    }
})
input.onButtonPressed(Button.B, function () {
    bearing = input.compassHeading()
    if (bearing < 45 || bearing > 135) {
        music.playMelody("G B A G C5 B A B ", 120)
        basic.showString("E")
    } else {
        basic.showString("")
    }
})
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 45 || bearing > 315) {
        basic.showString("N")
    } else {
        basic.showString("")
    }
})
