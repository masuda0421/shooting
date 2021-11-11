namespace SpriteKind {
    export const bullet = SpriteKind.create()
    export const bulletb = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.bulletb, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (shootPower > 80) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 4 4 . . . 
            . . . . . . . . . . . 4 4 4 4 . 
            . . . . . . . . . . 4 . 4 4 . . 
            . . . . . . . 4 4 . 4 . . . 5 . 
            . . . . . . 2 2 . . . . . 5 5 3 
            . . 4 2 2 2 2 4 4 . . . 5 5 4 d 
            . . . . . . . . . 4 . . 5 5 4 d 
            . . 2 2 2 2 2 4 . 4 . . . 5 5 3 
            . . . . . . 2 2 2 4 4 4 . . 5 . 
            . . . . . . 2 . . . 4 4 4 . . . 
            . . . . . . . . . . . . . 4 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 80, 0)
        projectile.setKind(SpriteKind.bulletb)
    }
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . . e e e f e e f f f f d c . 
        . . e e 2 2 d f c b 4 4 c b c . 
        . . e e 2 2 b c 4 1 1 4 c . . . 
        . . b 1 1 b e c 4 4 4 4 c . . . 
        . . f f f f d d 4 4 4 b c . . . 
        f f f f f f d d c c c c . . . . 
        f f f . f f f f c c c . . . . . 
        f f . . . . e e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        `)
    changeAnimFL = 0
    shootPower = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.bullet, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 80, 80)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 3 . 
        . . . . . . . . . . . . . 3 3 3 
        . . . . . . . . . . . . 3 3 3 3 
        . . . . . . . . . . . . 3 3 3 3 
        . . . . . . . . . . . . . 3 3 3 
        . . . . . . . . . . . . . . 3 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    projectile.setKind(SpriteKind.bullet)
    pause(250)
})
let enemy2: Sprite = null
let enemy1: Sprite = null
let changeAnimFL = 0
let projectile: Sprite = null
let shootPower = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 e . . . . 
    . . . . . 2 2 2 2 d 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 e f f c c . 
    . . . . e e 2 2 e f f f f b c . 
    . . . e e e f e e f f f f d c . 
    . . e e 2 2 d f c b 4 4 c b c . 
    . . e e 2 2 b c 4 1 1 4 c . . . 
    . . b 1 1 b e c 4 4 4 4 c . . . 
    . . f f f f d d 4 4 4 b c . . . 
    f f f f f f d d c c c c . . . . 
    f f f . f f f f c c c . . . . . 
    f f . . . . e e e . . . . . . . 
    . . . . . . e e e e . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 80, 80)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setPosition(5, 56)
let statusbar = statusbars.create(20, 3, StatusBarKind.Energy)
statusbar.attachToSprite(mySprite)
statusbar.max = 80
statusbar.setColor(5, 12)
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(70)) {
        enemy1 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111df.......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd1dfbddddbf......
            ......fbddfcdbbbcf......
            .......f11111bbcf.......
            .......f1b1fffff........
            .......fbfc111bf........
            ........ff1b1bff........
            .........fbfbfff.f......
            ..........ffffffff......
            ............fffff.......
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        enemy1.setPosition(160, randint(5, 115))
        enemy1.setVelocity(randint(-20, -40), 0)
    } else {
        enemy2 = sprites.create(img`
            .............ccfff..............
            ............cddbbf..............
            ...........cddbbf...............
            ..........fccbbcf............ccc
            ....ffffffccccccff.........ccbbc
            ..ffbbbbbbbbbbbbbcfff.....cdbbc.
            ffbbbbbbbbbcbcbbbbcccff..cddbbf.
            fbcbbbbbffbbcbcbbbcccccfffdbbf..
            fbbb1111ff1bcbcbbbcccccccbbbcf..
            .fb11111111bbbbbbcccccccccbccf..
            ..fccc33cc11bbbbccccccccfffbbcf.
            ...fc131c111bbbcccccbdbc...fbbf.
            ....f33c111cbbbfdddddcc.....fbbf
            .....ff1111fbdbbfddcc........fff
            .......cccccfbdbbfc.............
            .............fffff..............
            `, SpriteKind.Enemy)
        enemy2.setPosition(160, randint(5, 115))
        enemy2.setVelocity(randint(-20, -70), randint(-20, 20))
    }
})
forever(function () {
    console.log(shootPower)
    statusbar.value = shootPower
    if (controller.A.isPressed()) {
        shootPower += 1
        if (shootPower > 80 && changeAnimFL == 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . 2 2 2 2 2 e . . . . . . 
                . . . 2 2 2 2 d 2 2 e . . . . . 
                . . e 2 2 2 2 2 2 2 e . . . . . 
                . . e 2 2 2 2 2 2 2 e . . . . . 
                . . e 2 2 2 2 2 e f f c c . 5 . 
                . . e e 2 2 e f f f f b c . . . 
                . e e e f e 2 b f f f d c . . . 
                e e 2 2 d f 2 1 1 1 1 b c . 5 . 
                e e 2 2 d f e e c c c . . . . . 
                b 1 1 d e 2 2 e e c . . . . . . 
                . f f e 2 2 2 2 e . . . . . 5 . 
                . . f f d d 2 2 f f d d . . . . 
                . . f f d d e e f f d d . . . . 
                . . . f f f f . . . . . . . . . 
                . . e e e f f f . . . . . . . . 
                . . e e e e f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 e . . . . 
                . . . . . 2 2 2 2 d 2 2 e . . . 
                . . . . e 2 2 2 2 2 2 2 e . . . 
                . . . . e 2 2 2 2 2 2 2 e . . . 
                . . . . e 2 2 2 2 2 e f f c c 5 
                . . . . e e 2 2 e f f f f b c 5 
                . . . e e e f e 2 b f f f d c 5 
                . . e e 2 2 d f 2 1 1 1 1 b c 5 
                . . e e 2 2 d f e e c c c . . 5 
                . . b 1 1 d e 2 e e c . . . . . 
                . . f f f f d d f . . . . . . . 
                f f f f f f d d . . . . . . . . 
                f f f . f f f e . . . . . . . . 
                f f . . . . e e e . . . . . . . 
                . . . . . . e e e e . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 e . . . . 
                . . . . . 2 2 2 2 d 2 2 e . . . 
                . . . . e 2 2 2 2 2 2 2 e . . . 
                . . . . e 2 2 2 2 2 2 2 e . . . 
                . . . . e 2 2 2 2 2 e f f c c . 
                . . . . e e 2 2 e f f f f b c . 
                . . e e e f e 2 2 b f f f d c . 
                . e e 2 2 d f e 2 1 1 1 1 b c . 
                . e e 2 2 d f e e e c c c . . . 
                . b 1 1 e e 2 2 e e c . . . . . 
                . . f d d 2 2 2 f f f d d . . . 
                e e f d d e e e . f f d d . . . 
                e e e f f f f f . . . . . . . . 
                e e . . . . f f f . . . . . . . 
                . . . . . . f f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 2 2 2 e . . . 
                . . . . . . 2 2 2 2 d 2 2 e . . 
                . . . . . e 2 2 2 2 2 2 2 e . . 
                . . . . . e 2 2 2 2 2 2 2 e . . 
                . . . . . e 2 2 2 2 2 e f f c c 
                . . . . . e e 2 2 e f f f f b c 
                . . . e e e f e 2 2 b f f f d c 
                . . e e 2 2 d f e 2 1 1 1 1 b c 
                . . e e 2 2 d f e e e c c c . . 
                . . b 1 1 d e 2 2 e e c . . . . 
                . . . f f f d d 2 2 f d d . . . 
                . . . . f f d d e e f d d . . . 
                . . . . . f f f f f . . . . . . 
                . . . . e e e f f . . . . . . . 
                . . . . e e e e f f . . . . . . 
                `],
            100,
            true
            )
            changeAnimFL += 1
        }
    }
})
