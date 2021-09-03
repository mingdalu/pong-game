sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    ball.vy = -90
    bar.startEffect(effects.spray, 500)
    info.changeScoreBy(1)
    music.baDing.play()
})
let ball: Sprite = null
let bar: Sprite = null
bar = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 5 
    c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 5 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
bar.y = 115
ball = sprites.create(img`
    . . . . . . . . 
    . . 1 1 1 1 . . 
    . 1 1 d d 1 1 . 
    . 1 d b b d 1 . 
    . 1 d b b d 1 . 
    . 1 1 d d 1 1 . 
    . . 1 1 1 1 . . 
    . . . . . . . . 
    `, SpriteKind.Enemy)
ball.setVelocity(90, 90)
controller.moveSprite(bar, 200, 0)
bar.setStayInScreen(true)
effects.smiles.startScreenEffect()
forever(function () {
    if (ball.x > 155) {
        ball.vx = -90
    } else if (ball.y < 5) {
        ball.vy = 90
    } else if (ball.x < 5) {
        ball.vx = 90
    } else if (ball.y > 115) {
        game.over(false, effects.dissolve)
    }
})
