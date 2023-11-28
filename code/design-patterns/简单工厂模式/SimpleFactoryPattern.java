/**
 * 简单工厂模式
 * - java实现
 */
interface Product {
    void operation();
}

class ConcreteProductA implements Product {
    public void operation() {
        System.out.println("ConcreteProductA operation.");
    }
}

class ConcreteProductB implements Product {
    public void operation() {
        System.out.println("ConcreteProductB operation.");
    }
}

class SimpleFactory {
    public Product createProduct(String type) {
        if (type.equals("A")) {
            return new ConcreteProductA();
        } else if (type.equals("B")) {
            return new ConcreteProductB();
        } else {
            throw new IllegalArgumentException("Invalid product type.");
        }
    }
}

// 使用示例
public class Main {
    public static void main(String[] args) {
        SimpleFactory factory = new SimpleFactory();

        Product productA = factory.createProduct("A");
        productA.operation(); // 输出: ConcreteProductA operation.

        Product productB = factory.createProduct("B");
        productB.operation(); // 输出: ConcreteProductB operation.
    }
}
