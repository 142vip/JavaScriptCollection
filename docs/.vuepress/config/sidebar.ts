import {FrontEndSidebar} from "../../manuscripts/front-end/front-end.sidebar";
import {ServerEndSidebar} from "../../manuscripts/server-end/server-end.sidebar";
import {EggSidebar} from "../../manuscripts/server-end/framework/egg/eggSidebar";
import {DevelopSkillSidebar} from "../../manuscripts/develop-skill/develop-skill.sidebar";
import {soloAlgorithmSidebar} from "../../manuscripts/solo-algorithm/solo-algorithm.sidebar";
import {JobChanceSidebar} from "../../manuscripts/job-chance/job-chance.sidebar";
import {ReadBooksSidebar} from "../../manuscripts/read-books/read-books.sidebar";
import {MicroserviceSidebar} from "../../manuscripts/microservice/microserviceSidebar";
import {BattleInterviewSidebar} from "../../manuscripts/battle-interview/battle-interview.sidebar";
import {RedisSidebar} from "../../manuscripts/server-end/database/redis/redisSidebar";
import {MySqlSideBar} from "../../manuscripts/server-end/database/mysql/mySqlSideBar";
import {MongoSideBar} from "../../manuscripts/server-end/database/mongo/mongoSideBar";
import {LinuxSidebar} from "../../manuscripts/server-end/linux/linuxSidebar";
import {NodeLearnSidebar} from "../../manuscripts/server-end/node-learn/nodeLearnSidebar";
import {BaseSidebar} from "../../manuscripts/server-end/base/base.sidebar";
import {KoaSidebar} from "../../manuscripts/server-end/framework/koa/koa.sidebar";
import {ExpressSidebar} from "../../manuscripts/server-end/framework/express/express.sidebar";
import {DesignPatternsSidebar} from "../../manuscripts/server-end/design-patterns/designPatterns.sidebar";
import {SequelizeOrmSidebar} from "../../manuscripts/server-end/orm/sequelize/sequelizeOrm.sidebar";

export default {
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
  "/manuscripts/server-end/base": BaseSidebar,
  "/manuscripts/server-end/node-learn": NodeLearnSidebar,
  "/manuscripts/server-end/orm/sequelize": SequelizeOrmSidebar,
  "/manuscripts/develop-skill": DevelopSkillSidebar,
  // "/manuscripts/solo-algorithm": soloAlgorithmSidebar,
  "/manuscripts/read-books": ReadBooksSidebar,
  "/manuscripts/job-chance": JobChanceSidebar,
  "/manuscripts/microservice": MicroserviceSidebar,
  "/manuscripts/battle-interview": BattleInterviewSidebar,
}