import { Node } from './Node'

export class CQuadraticCurve {
    // start: {x: number, y: number} 
    // middle: {x: number, y: number}
    // end: {x: number, y: number}
    
    // constructor(
    //     start = {x: 0, y: 0}, 
    //     middle = {x: 0, y: 0}, 
    //     end = {x: 0, y: 0},
    // ) {
    //     this.start = start
    //     this.middle = middle
    //     this.end = end
    // }

    // draw() {
    //     ctx.beginPath()
    //     ctx.moveTo(this.start.x, this.start.y)
    //     ctx.quadraticCurveTo(this.middle.x, this.middle.y, this.end.x, this.end.y)
    //     ctx.stroke()
    //     return this
    // }

    // drawWithNodes() {
    //     ctx.strokeStyle = 'blue'
    //     ctx.beginPath()
    //     ctx.moveTo(this.start.x, this.start.y)
    //     ctx.quadraticCurveTo(this.middle.x, this.middle.y, this.end.x, this.end.y)
    //     ctx.stroke()
    //     new Node(this.start.x, this.start.y).draw()
    //     new Node(this.middle.x, this.middle.y).draw()
    //     new Node(this.end.x, this.end.y).draw()
    //     return this
    // }
}