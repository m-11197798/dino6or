basic.forever(function () {
    if (input.lightLevel() > 100) {
        pins.servoWritePin(AnalogPin.P2, 100)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.pause(100)
    }
})
