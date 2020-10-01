basic.forever(function on_forever() {
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
})
