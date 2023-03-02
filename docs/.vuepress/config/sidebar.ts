import {frontEndSidebar} from "../../manuscript/front-end/front-end.sidebar";
import {serverEndSidebar} from "../../manuscript/server-end/server-end.sidebar";
import {eggSidebar} from "../../manuscript/server-end/framework/egg/egg.sidebar";
import {developSkillSidebar} from "../../manuscript/develop-skill/develop-skill.sidebar";
import {soloAlgorithmSidebar} from "../../manuscript/solo-algorithm/solo-algorithm.sidebar";
import {esStandardSidebar} from "../../manuscript/read-books/cs-books/es-standard/es-standard-sidebar";
import {OtherSidebar} from "../../manuscript/other/other.sidebar";
import {jobChanceSidebar} from "../../manuscript/job-chance/job-chance.sidebar";
import {readBooksSidebar} from "../../manuscript/read-books/read-books.sidebar";
import {microserviceSidebar} from "../../manuscript/microservice/microservice.sidebar";
import {battleInterviewSidebar} from "../../manuscript/battle-interview/battle-interview.sidebar";

export default {
    "/manuscript/front-end": frontEndSidebar,
    "/manuscript/server-end": serverEndSidebar,
    "/manuscript/server-end/framework/egg": eggSidebar,
    "/manuscript/develop-skill": developSkillSidebar,
    "/manuscript/solo-algorithm": soloAlgorithmSidebar,
    "/manuscript/read-books": readBooksSidebar,
    "/manuscript/read-books/cs-books/es-standard": esStandardSidebar,
    "/manuscript/other": OtherSidebar,
    "/manuscript/job-chance": jobChanceSidebar,
    "/manuscript/microservice": microserviceSidebar,
    "/manuscript/battle-interview": battleInterviewSidebar,
}