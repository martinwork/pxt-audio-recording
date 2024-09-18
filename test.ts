serial.setTxBufferSize(254)

// record
record.setSampleRate(11000, record.AudioSampleRateScope.Recording)
basic.showIcon(IconNames.SmallSquare)
record.startRecording(record.BlockingState.Blocking)
basic.clearScreen()

// send to serial
basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
record.sendToSerial()
basic.clearScreen()

