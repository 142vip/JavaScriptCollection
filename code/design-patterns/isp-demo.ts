/**
 * 接口隔离原则Demo
 */

interface Animal {
  eat: () => void
}

interface Flyable {
  fly: () => void
}

class Bird implements Animal, Flyable {
  public eat(): void {
    console.log('Bird is eating...')
  }

  public fly(): void {
    console.log('Bird is flying...')
  }
}

class Dog implements Animal {
  public eat(): void {
    console.log('Dog is eating...')
  }
}

// 使用示例
const bird = new Bird()
bird.eat()
bird.fly()

const dog = new Dog()
dog.eat()
