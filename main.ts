radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
let Temp = 0
radio.setGroup(1)
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    Temp = input.temperature()
    radio.sendNumber(Temp)
})
