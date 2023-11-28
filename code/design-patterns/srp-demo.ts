/**
 * 单一职责原则Demo
 */
namespace SrpDemo{

  class User {
    private readonly id: string
    private readonly name: string
    private readonly email: string

    constructor(id: string, name: string, email: string) {
      this.id = id
      this.name = name
      this.email = email
    }

    getId(): string {
      return this.id
    }

    getName(): string {
      return this.name
    }

    getEmail(): string {
      return this.email
    }
  }

  interface UserService {
    getUserById(userId: string): User;
  }

  interface EmailService {
    sendEmail(user: User, message: string): void;
  }

  class DatabaseUserService implements UserService {
    getUserById(userId: string) {
      // 从数据库中获取用户信息
      // ...
      return new User(userId, 'John Doe', 'john.doe@example.com')
    }
  }

  class EmailSender implements EmailService {
    sendEmail(user: User, message: string): void {
      // 发送电子邮件给用户
      // ...
      console.log(`Sending email to ${user.getEmail()}: ${message}`)
    }
  }

  class UserProcessor {
    private userService: UserService
    private emailService: EmailService

    constructor(userService: UserService, emailService: EmailService) {
      this.userService = userService
      this.emailService = emailService
    }

    processUser(userId: string): void {
      const user = this.userService.getUserById(userId)
      // 执行用户处理逻辑
      // ...

      const message = `Hello, ${user.getName()}`
      this.emailService.sendEmail(user, message)
    }
  }

  // 使用示例
  const userService = new DatabaseUserService()
  const emailService = new EmailSender()

  const userProcessor = new UserProcessor(userService, emailService)
  userProcessor.processUser('123')
}
