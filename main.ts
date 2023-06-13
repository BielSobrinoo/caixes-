basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
music.playMelody("G F B C5 E B C E ", 120)
basic.showArrow(ArrowNames.SouthEast)
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    . # . . .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . # # # .
    . # . # .
    `)
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
}
