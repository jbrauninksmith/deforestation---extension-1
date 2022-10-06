input.onButtonPressed(Button.A, function () {
    servos.setServoPosition(servos.ServoPin.P0, Position.MIDDLE)
    for (let index = 0; index < 4; index++) {
        motor.turnRight(50)
        basic.pause(2000)
        motor.stop()
        servos.setServoPosition(servos.ServoPin.P0, Position.HALF_DOWN)
        basic.pause(1000)
        servos.setServoPosition(servos.ServoPin.P0, Position.MIDDLE)
        seedsDropped += 1
        basic.showNumber(seedsDropped)
    }
})
input.onButtonPressed(Button.AB, function () {
    seedsDropped = 0
    basic.showNumber(seedsDropped)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let seedsDropped = 0
seedsDropped = 0
