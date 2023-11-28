/**
 * 里氏替换原则Demo
 */

namespace LspDemoFather{
  export class Rectangle {
    protected width: number
    protected height: number

    constructor(width: number, height: number) {
      this.width = width
      this.height = height
    }

    setWidth(width: number): void {
      this.width = width
    }

    setHeight(height: number): void {
      this.height = height
    }

    getArea(): number {
      return this.width * this.height
    }
  }
  export function printArea(rectangle:Rectangle): void {
    rectangle.setWidth(4)
    rectangle.setHeight(5)
    console.log(`Area: ${rectangle.getArea()}`)
  }
}

namespace LspDemo {
  import Rectangle = LspDemoFather.Rectangle;
  import printArea = LspDemoFather.printArea;

  class Square extends Rectangle {
    setWidth(width: number): void {
      this.width = width
    }

    setHeight(height: number): void {
      this.height = height
    }
  }

  // 使用示例
  const rectangle = new Rectangle(0, 0)
  const square = new Square(0, 0)

  printArea(rectangle)
  printArea(square)
}


