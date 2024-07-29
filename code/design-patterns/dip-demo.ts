/**
 * 依赖倒置原则Demo
 */
namespace DipDemo {
  interface IMessageSender {
    sendMessage(message: string): void
  }

  class EmailSender implements IMessageSender {
    sendMessage(message: string): void {
      console.log(`Sending email: ${message}`)
    }
  }

  class SMSMessageSender implements IMessageSender {
    sendMessage(message: string): void {
      console.log(`Sending SMS: ${message}`)
    }
  }

  class NotificationService {
    private messageSender: IMessageSender

    constructor(messageSender: IMessageSender) {
      this.messageSender = messageSender
    }

    sendNotification(message: string): void {
      this.messageSender.sendMessage(message)
    }
  }

  // 使用示例
  const emailSender = new EmailSender()
  const smsSender = new SMSMessageSender()

  const emailNotification = new NotificationService(emailSender)
  const smsNotification = new NotificationService(smsSender)

  emailNotification.sendNotification('Hello,  email notification.')
  smsNotification.sendNotification('Hello, SMS notification.')
}
