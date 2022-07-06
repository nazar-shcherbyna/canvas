import { AbstractNode } from '../abstractClasses/AbstractNode'
import { CCircle } from './CCircle'

export class Node extends AbstractNode {
    constructor(x: number, y: number) {
        super(x, y)
    }

    draw() {
        new CCircle(this.x, this.y, 3).draw()
    }
}