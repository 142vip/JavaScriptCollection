/**
 * 单例模式
 * - 懒汉式
 * - 饿汉式
 */

/**
 * 懒汉-单例
 */
class LazySingleton {
  private static instance: LazySingleton
  private constructor() {
    // 私有化构造函数，防止通过 new 关键字创建实例
    console.log('防止通过 new 关键字创建实例')
  }

  public static getInstance() {
    if (LazySingleton.instance == null) {
      LazySingleton.instance = new LazySingleton()
    }
    return LazySingleton.instance
  }
}

// 使用示例
const lazyInstance1 = LazySingleton.getInstance()
const lazyInstance2 = LazySingleton.getInstance()

console.log(lazyInstance1 === lazyInstance2) // 输出: true

/**
 * 饿汉-单例
 */
class EagerSingleton {
  private static instance = new EagerSingleton()

  private constructor() {
    // 私有化构造函数，防止通过 new 关键字创建实例
    console.log('防止通过 new 关键字创建实例')
  }

  // 获取实例，静态方法
  public static getInstance(): EagerSingleton {
    return EagerSingleton.instance
  }
}

// 使用示例
const eagerInstance1 = EagerSingleton.getInstance()
const eagerInstance2 = EagerSingleton.getInstance()

console.log(eagerInstance1 === eagerInstance2) // 输出: true
