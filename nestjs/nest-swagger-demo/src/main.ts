import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 注意引入
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {UserModule} from './user/user.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const userOptions = new DocumentBuilder()
  .setTitle('用户信息文档')
  .setDescription('用于用户信息的增删改查')
  .setVersion('1.0')
  .addTag('用户,安全')
  .build();

const userDocument = SwaggerModule.createDocument(app, userOptions, {
  include: [UserModule], // 包含的模块
});
SwaggerModule.setup('api/user', app, userDocument);


    // swagger参数配置
    const options = new DocumentBuilder()
    .setTitle('Nestjs框架教程')
    .setDescription('这里是用来设置swagger的简单描述')
    .setVersion('这里是用来设置api的版本信息')
    // .addTag('第一个标签')
    .build();
  // 启动文档
  const document = SwaggerModule.createDocument(app, options);
  // 设置访问路由，这里是 项目主页/api
  SwaggerModule.setup('api', app, document);



  await app.listen(3000);
}
bootstrap();
