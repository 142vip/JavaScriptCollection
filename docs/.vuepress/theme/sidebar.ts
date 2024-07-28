import {FrontEndSidebar} from "../../front-end/front-end.sidebar";
import {ServerEndSidebar} from "../../server-end/server-end.sidebar";
import {EggSidebar} from "../../server-end/framework/egg/eggSidebar";
import {DevelopSkillSidebar} from "../../develop-skill/develop-skill.sidebar";
// import {soloAlgorithmSidebar} from "../../solo-algorithm/solo-algorithm.sidebar";
import {JobChanceSidebar} from "../../job-chance/job-chance.sidebar";
import {ReadBooksSidebar} from "../../read-books/read-books.sidebar";
import {MicroserviceSidebar} from "../../microservice/microserviceSidebar";
import {BattleInterviewSidebar} from "../../battle-interview/battle-interview.sidebar";
import {RedisSidebar} from "../../server-end/database/redis/redisSidebar";
import {MySqlSideBar} from "../../server-end/database/mysql/mySqlSideBar";
import {MongoSideBar} from "../../server-end/database/mongo/mongoSideBar";
import {LinuxSidebar} from "../../server-end/linux/linuxSidebar";
import {NodeLearnSidebar} from "../../server-end/node-learn/nodeLearnSidebar";
import {BaseSidebar} from "../../server-end/base/base.sidebar";
import {KoaSidebar} from "../../server-end/framework/koa/koa.sidebar";
import {ExpressSidebar} from "../../server-end/framework/express/express.sidebar";
import {DesignPatternsSidebar} from "../../server-end/design-patterns/designPatterns.sidebar";
import {SequelizeOrmSidebar} from "../../server-end/orm/sequelize/sequelizeOrm.sidebar";
import {TypeormSidebar} from "../../server-end/orm/typeorm/typeorm.sidebar";
import {TypescriptSidebar} from "../../server-end/typescript/typescript.sidebar";

export const sidebar= {
  "/front-end": FrontEndSidebar,
  "/server-end": ServerEndSidebar,
  "/server-end/framework/egg": EggSidebar,
  "/server-end/framework/koa": KoaSidebar,
  "/server-end/framework/express": ExpressSidebar,
  "/server-end/database/redis": RedisSidebar,
  "/server-end/database/mysql": MySqlSideBar,
  "/server-end/database/mongo": MongoSideBar,
  "/server-end/linux": LinuxSidebar,
  "/server-end/design-patterns": DesignPatternsSidebar,
  "/server-end/typescript": TypescriptSidebar,
  "/server-end/base": BaseSidebar,
  "/server-end/node-learn": NodeLearnSidebar,
  "/server-end/orm/sequelize": SequelizeOrmSidebar,
  "/server-end/orm/typeorm": TypeormSidebar,
  "/develop-skill": DevelopSkillSidebar,
  // "/solo-algorithm": soloAlgorithmSidebar,
  "/read-books": ReadBooksSidebar,
  "/job-chance": JobChanceSidebar,
  "/microservice": MicroserviceSidebar,
  "/battle-interview": BattleInterviewSidebar,
}
