import {FrontEndSidebar} from "../../docs/manuscripts/front-end/front-end.sidebar";
import {ServerEndSidebar} from "../../docs/manuscripts/server-end/server-end.sidebar";
import {EggSidebar} from "../../docs/manuscripts/server-end/framework/egg/eggSidebar";
import {DevelopSkillSidebar} from "../../docs/manuscripts/develop-skill/develop-skill.sidebar";
// import {soloAlgorithmSidebar} from "../../manuscripts/solo-algorithm/solo-algorithm.sidebar";
import {JobChanceSidebar} from "../../docs/manuscripts/job-chance/job-chance.sidebar";
import {ReadBooksSidebar} from "../../docs/manuscripts/read-books/read-books.sidebar";
import {MicroserviceSidebar} from "../../docs/manuscripts/microservice/microserviceSidebar";
import {BattleInterviewSidebar} from "../../docs/manuscripts/battle-interview/battle-interview.sidebar";
import {RedisSidebar} from "../../docs/manuscripts/server-end/database/redis/redisSidebar";
import {MySqlSideBar} from "../../docs/manuscripts/server-end/database/mysql/mySqlSideBar";
import {MongoSideBar} from "../../docs/manuscripts/server-end/database/mongo/mongoSideBar";
import {LinuxSidebar} from "../../docs/manuscripts/server-end/linux/linuxSidebar";
import {NodeLearnSidebar} from "../../docs/manuscripts/server-end/node-learn/nodeLearnSidebar";
import {BaseSidebar} from "../../docs/manuscripts/server-end/base/base.sidebar";
import {KoaSidebar} from "../../docs/manuscripts/server-end/framework/koa/koa.sidebar";
import {ExpressSidebar} from "../../docs/manuscripts/server-end/framework/express/express.sidebar";
import {DesignPatternsSidebar} from "../../docs/manuscripts/server-end/design-patterns/designPatterns.sidebar";
import {SequelizeOrmSidebar} from "../../docs/manuscripts/server-end/orm/sequelize/sequelizeOrm.sidebar";
import {TypeormSidebar} from "../../docs/manuscripts/server-end/orm/typeorm/typeorm.sidebar";
import {TypescriptSidebar} from "../../docs/manuscripts/server-end/typescript/typescript.sidebar";

export const sidebar= {
  "/manuscripts/front-end": FrontEndSidebar,
  "/manuscripts/server-end": ServerEndSidebar,
  "/manuscripts/server-end/framework/egg": EggSidebar,
  "/manuscripts/server-end/framework/koa": KoaSidebar,
  "/manuscripts/server-end/framework/express": ExpressSidebar,
  "/manuscripts/server-end/database/redis": RedisSidebar,
  "/manuscripts/server-end/database/mysql": MySqlSideBar,
  "/manuscripts/server-end/database/mongo": MongoSideBar,
  "/manuscripts/server-end/linux": LinuxSidebar,
  "/manuscripts/server-end/design-patterns": DesignPatternsSidebar,
  "/manuscripts/server-end/typescript": TypescriptSidebar,
  "/manuscripts/server-end/base": BaseSidebar,
  "/manuscripts/server-end/node-learn": NodeLearnSidebar,
  "/manuscripts/server-end/orm/sequelize": SequelizeOrmSidebar,
  "/manuscripts/server-end/orm/typeorm": TypeormSidebar,
  "/manuscripts/develop-skill": DevelopSkillSidebar,
  // "/manuscripts/solo-algorithm": soloAlgorithmSidebar,
  "/manuscripts/read-books": ReadBooksSidebar,
  "/manuscripts/job-chance": JobChanceSidebar,
  "/manuscripts/microservice": MicroserviceSidebar,
  "/manuscripts/battle-interview": BattleInterviewSidebar,
}
