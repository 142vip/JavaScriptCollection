/**
 * 简单工厂模式
 * - ts实现
 */
namespace SimpleFactoryPattern {
  interface Product {
    operation(): void
  }

  class ConcreteProductA implements Product {
    operation(): void {
      console.log('ConcreteProductA operation.')
    }
  }

  class ConcreteProductB implements Product {
    operation(): void {
      console.log('ConcreteProductB operation.')
    }
  }

  class SimpleFactory {
    createProduct(type: string): Product {
      if (type === 'A') {
        return new ConcreteProductA()
      }
      else if (type === 'B') {
        return new ConcreteProductB()
      }
      else {
        throw new Error('Invalid product type.')
      }
    }
  }

  // 使用示例
  const factory = new SimpleFactory()

  const productA = factory.createProduct('A')
  productA.operation() // 输出: ConcreteProductA operation.

  const productB = factory.createProduct('B')
  productB.operation() // 输出: ConcreteProductB operation.
}
