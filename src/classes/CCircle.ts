export class CCircle {
    x: number
    y: number
    radius: number
    startAngle: number
    endAngle: number
    counterclockwise: boolean
    
    constructor(x = 0, y = 0, radius = 10, startAngle = 0, endAngle = Math.PI * 2, counterclockwise = false) {
        this.x = x
        this.y = y
        this.radius = radius
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.counterclockwise = counterclockwise
    }

    draw() {
        // ctx.strokeStyle = 'red'
        // ctx.lineCap = 'round'
        // ctx.lineJoin = 'round'
        // ctx.beginPath()
        // ctx.fillRect(this.x - 1, this.y - 1, 2, 2)
        // ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterclockwise)
        // ctx.stroke()
        // return ctx
    }
}