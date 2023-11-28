/**
 * 合成复用原则Demo
 */
namespace CrpDemo {
  interface Logger {
    log(message: string): void;
  }

  class ConsoleLogger implements Logger {
    log(message: string): void {
      console.log(`[ConsoleLogger] ${message}`)
    }
  }

  class FileLogger implements Logger {
    log(message: string): void {
      console.log(`[FileLogger] ${message}`)
      // 将日志写入文件的具体实现
    }
  }

  class User {
    private logger: Logger

    constructor(logger: Logger) {
      this.logger = logger
    }

    save(): void {
      // 执行保存用户的逻辑
      this.logger.log('User saved.')
    }
  }

  // 使用示例
  const consoleLogger = new ConsoleLogger()
  const userWithConsoleLogger = new User(consoleLogger)
  userWithConsoleLogger.save()

  const fileLogger = new FileLogger()
  const userWithFileLogger = new User(fileLogger)
  userWithFileLogger.save()
}
