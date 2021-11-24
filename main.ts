let Aぼたん = 0
let Bぼたん = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Aぼたん)
})
input.onGesture(Gesture.Shake, function () {
    Aぼたん = randint(1, 9)
    Bぼたん = randint(1, 9)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Bぼたん)
})
basic.forever(function () {
	
})
