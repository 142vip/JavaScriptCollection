import {frontEndSidebar} from "../../manuscripts/front-end/front-end.sidebar";
import {serverEndSidebar} from "../../manuscripts/server-end/server-end.sidebar";
import {eggSidebar} from "../../manuscripts/server-end/framework/egg/egg.sidebar";
import {developSkillSidebar} from "../../manuscripts/develop-skill/develop-skill.sidebar";
import {soloAlgorithmSidebar} from "../../manuscripts/solo-algorithm/solo-algorithm.sidebar";
import {jobChanceSidebar} from "../../manuscripts/job-chance/job-chance.sidebar";
import {readBooksSidebar} from "../../manuscripts/read-books/read-books.sidebar";
import {microserviceSidebar} from "../../manuscripts/microservice/microservice.sidebar";
import {battleInterviewSidebar} from "../../manuscripts/battle-interview/battle-interview.sidebar";

export default {
    "/manuscripts/front-end": frontEndSidebar,
    "/manuscripts/server-end": serverEndSidebar,
    "/manuscripts/server-end/framework/egg": eggSidebar,
    "/manuscripts/develop-skill": developSkillSidebar,
    "/manuscripts/solo-algorithm": soloAlgorithmSidebar,
    "/manuscripts/read-books": readBooksSidebar,
    "/manuscripts/job-chance": jobChanceSidebar,
    "/manuscripts/microservice": microserviceSidebar,
    "/manuscripts/battle-interview": battleInterviewSidebar,
}