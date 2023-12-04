/**
 * 开闭原则Demo
 */
namespace OcpDemo{
  interface Shape {
    calculateArea(): number;
  }

  class Rectangle implements Shape {
    private readonly width: number
    private readonly height: number

    constructor(width: number, height: number) {
      this.width = width
      this.height = height
    }

    calculateArea(): number {
      return this.width * this.height
    }
  }

  class Circle implements Shape {
    private readonly radius: number

    constructor(radius: number) {
      this.radius = radius
    }

    calculateArea(): number {
      return Math.PI * this.radius * this.radius
    }
  }

  class AreaCalculator {
    calculateTotalArea(shapes: Shape[]): number {
      let totalArea = 0
      for (const shape of shapes) {
        totalArea += shape.calculateArea()
      }
      return totalArea
    }
  }

  // 使用示例
  const rectangle = new Rectangle(5, 10)
  const circle = new Circle(7)

  const areaCalculator = new AreaCalculator()
  const totalArea = areaCalculator.calculateTotalArea([rectangle, circle])
  console.log('Total Area:', totalArea)
}
