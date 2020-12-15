basic.pause(200)
let x = input.lightLevel()
if (x < 1) {
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 255, 255)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 255, 255)
} else {
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
}
x = input.lightLevel()
basic.forever(function () {
    let strip: neopixel.Strip = null
    x = input.lightLevel()
    basic.pause(50)
    if (x <= 1) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 255, 255)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 255, 255)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    x = input.lightLevel()
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.2)
    cuteBot.motors(25, 10)
    basic.pause(4000)
    x = input.lightLevel()
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.19)
    x = input.lightLevel()
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.2)
    cuteBot.motors(10, 25)
    basic.pause(4000)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.2)
    music.stopAllSounds()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
