input.onButtonPressed(Button.A, function () {
    record.setSampleRate(11000, record.AudioSampleRateScope.Recording)
    basic.showIcon(IconNames.SmallSquare)
    record.startRecording(record.BlockingState.Blocking)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    // send to serial
    basic.showIcon(IconNames.Square)
    record.sendToSerial()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    record.setSampleRate(11000, record.AudioSampleRateScope.Playback)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    record.playAudio(record.BlockingState.Blocking)
    basic.clearScreen()
})
serial.setTxBufferSize(254)
