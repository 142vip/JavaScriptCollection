import {FrontEndSidebar} from "../../manuscripts/front-end/front-end.sidebar";
import {ServerEndSidebar} from "../../manuscripts/server-end/server-end.sidebar";
import {EggSidebar} from "../../manuscripts/server-end/framework/egg/eggSidebar";
import {developSkillSidebar} from "../../manuscripts/develop-skill/develop-skill.sidebar";
import {soloAlgorithmSidebar} from "../../manuscripts/solo-algorithm/solo-algorithm.sidebar";
import {jobChanceSidebar} from "../../manuscripts/job-chance/job-chance.sidebar";
import {readBooksSidebar} from "../../manuscripts/read-books/read-books.sidebar";
import {microserviceSidebar} from "../../manuscripts/microservice/microservice.sidebar";
import {battleInterviewSidebar} from "../../manuscripts/battle-interview/battle-interview.sidebar";
import {RedisSidebar} from "../../manuscripts/server-end/database/redis/redisSidebar";
import {MySqlSideBar} from "../../manuscripts/server-end/database/mysql/mySqlSideBar";
import {mongoSideBar} from "../../manuscripts/server-end/database/mongo/mongo.sidebar";
import {linuxSidebar} from "../../manuscripts/server-end/linux/linuxSidebar";
import {nodeLearnSidebar} from "../../manuscripts/server-end/node-learn/nodeLearn.sidebar";
import {BaseSidebar} from "../../manuscripts/server-end/base/base.sidebar";
import {KoaSidebar} from "../../manuscripts/server-end/framework/koa/koa.sidebar";

export default {
    "/manuscripts/front-end": FrontEndSidebar,
    "/manuscripts/server-end": ServerEndSidebar,
    "/manuscripts/server-end/framework/egg": EggSidebar,
    "/manuscripts/server-end/framework/koa": KoaSidebar,
    "/manuscripts/server-end/database/redis": RedisSidebar,
    "/manuscripts/server-end/database/mysql": MySqlSideBar,
    "/manuscripts/server-end/database/mongo": mongoSideBar,
    "/manuscripts/server-end/linux": linuxSidebar,
    "/manuscripts/server-end/base": BaseSidebar,
    "/manuscripts/server-end/node-learn": nodeLearnSidebar,
    "/manuscripts/develop-skill": developSkillSidebar,
    // "/manuscripts/solo-algorithm": soloAlgorithmSidebar,
    "/manuscripts/read-books": readBooksSidebar,
    "/manuscripts/job-chance": jobChanceSidebar,
    "/manuscripts/microservice": microserviceSidebar,
    "/manuscripts/battle-interview": battleInterviewSidebar,
}