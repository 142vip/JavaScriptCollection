import {FrontEndSidebar} from "../../manuscripts/front-end/front-end.sidebar";
import {ServerEndSidebar} from "../../manuscripts/server-end/server-end.sidebar";
import {eggSidebar} from "../../manuscripts/server-end/framework/egg/egg.sidebar";
import {developSkillSidebar} from "../../manuscripts/develop-skill/develop-skill.sidebar";
import {soloAlgorithmSidebar} from "../../manuscripts/solo-algorithm/solo-algorithm.sidebar";
import {jobChanceSidebar} from "../../manuscripts/job-chance/job-chance.sidebar";
import {readBooksSidebar} from "../../manuscripts/read-books/read-books.sidebar";
import {microserviceSidebar} from "../../manuscripts/microservice/microservice.sidebar";
import {battleInterviewSidebar} from "../../manuscripts/battle-interview/battle-interview.sidebar";
import {redisSidebar} from "../../manuscripts/server-end/database/redis/redis.sidebar";
import {mySqlSideBar} from "../../manuscripts/server-end/database/mysql/mysql.sidebar";
import {mongoSideBar} from "../../manuscripts/server-end/database/mongo/mongo.sidebar";
import {linuxSidebar} from "../../manuscripts/server-end/linux/linuxSidebar";
import {nodeLearnSidebar} from "../../manuscripts/server-end/node-learn/nodeLearn.sidebar";
import {BaseSidebar} from "../../manuscripts/server-end/base/base.sidebar";

export default {
    "/manuscripts/front-end": FrontEndSidebar,
    "/manuscripts/server-end": ServerEndSidebar,
    "/manuscripts/server-end/framework/egg": eggSidebar,
    "/manuscripts/server-end/database/redis": redisSidebar,
    "/manuscripts/server-end/database/mysql": mySqlSideBar,
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