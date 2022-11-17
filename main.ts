input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 <= 7; index2++) {
        strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(1000)
        strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        count = index2 + 1
        if (count == 8) {
            count = 0
        }
        strip.setPixelColor(count, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(1000)
    }
})
let count = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 8, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
