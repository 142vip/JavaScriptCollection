/**
 * 简单工厂模式
 * - c++实现
 */

#include <iostream>
using namespace std;

class Product {
public:
    virtual void operation() = 0;
};

class ConcreteProductA : public Product {
public:
    void operation() {
        std::cout << "ConcreteProductA operation." << std::endl;
    }
};

class ConcreteProductB : public Product {
public:
    void operation() {
        std::cout << "ConcreteProductB operation." << std::endl;
    }
};

class SimpleFactory {
public:
    static Product* createProduct(const std::string& type) {
        if (type == "A") {
            return new ConcreteProductA();
        } else if (type == "B") {
            return new ConcreteProductB();
        } else {
            throw std::invalid_argument("Invalid product type.");
        }
    }
};

// 使用示例
int main() {
  Product* productA = SimpleFactory::createProduct("A");
  productA->operation(); // 输出: ConcreteProductA operation.

  Product* productB = SimpleFactory::createProduct("B");
  productB->operation(); // 输出: ConcreteProductB operation.

  delete productA;
  delete productB;

  return 0;
}