let count = 0
let strip = neopixel.create(DigitalPin.P11, 8, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
basic.forever(function () {
    for (let index = 0; index < 50; index++) {
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
    }
})
