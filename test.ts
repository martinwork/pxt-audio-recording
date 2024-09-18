input.onButtonPressed(Button.A, function () {
    record.setSampleRate(11000, record.AudioSampleRateScope.Recording)
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.AB, function () {
    record.sendToSerial()
})
input.onButtonPressed(Button.B, function () {
    record.setSampleRate(11000, record.AudioSampleRateScope.Playback)
    record.playAudio(record.BlockingState.Blocking)
})
serial.setTxBufferSize(254)
basic.forever(function () {
    if (record.audioStatus(record.AudioStatus.Playing)) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
    } else if (record.audioStatus(record.AudioStatus.Recording)) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (record.sendingToSerial()) {
        // send to serial
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.clearScreen()
    }
})
