/**
 * 简单工厂模式
 * - C语言实现
 */

#include <stdio.h>
#include <stdlib.h>

typedef struct {
    void (*operation)();
} Product;

void ConcreteProductA_operation() {
    printf("ConcreteProductA operation.\n");
}

void ConcreteProductB_operation() {
    printf("ConcreteProductB operation.\n");
}

typedef struct {
    Product* (*createProduct)(const char*);
} SimpleFactory;

Product* SimpleFactory_createProduct(const char* type) {
    if (strcmp(type, "A") == 0) {
        Product* product = (Product*)malloc(sizeof(Product));
        product->operation = ConcreteProductA_operation;
        return product;
    } else if (strcmp(type, "B") == 0) {
        Product* product = (Product*)malloc(sizeof(Product));
        product->operation = ConcreteProductB_operation;
        return product;
    } else {
        printf(stderr, "Invalid product type.\n");
        exit(1);
    }
}

// 使用示例
void main(){
  SimpleFactory factory = {SimpleFactory_createProduct};

  Product* productA = factory.createProduct("A");
  productA->operation(); // 输出: ConcreteProductA operation.

  Product* productB = factory.createProduct("B");
  productB->operation(); // 输出: ConcreteProductB operation.

  free(productA);
  free(productB);
}
