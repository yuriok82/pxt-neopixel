// Create a NeoPixel driver - specify the pin, number of LEDs, and the type of
// the NeoPixel srip, either standard RGB (with GRB or RGB format) or RGB+White.
let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
// set pixel colors
// white
strip.setPixelColor(0, NeoPixelColors.White)
// red
strip.setPixelColor(1, 16711680)
// green
strip.setPixelColor(2, 65280)
// blue
strip.setPixelColor(3, NeoPixelColors.Blue)
// send the data to the strip
strip.show()
