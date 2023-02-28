import {readBooksSidebar} from "../../read-books/read-books.sidebar";
import {soloAlgorithmSidebar} from "../../solo-algorithm/solo-algorithm.sidebar";
import {serverEndSidebar} from "../../server-end/server-end.sidebar";
import {developSkillSidebar} from "../../develop-skill/develop-skill.sidebar";
import {frontEndSidebar} from "../../front-end/front-end.sidebar";
import {OtherSidebar} from "../../other/other.sidebar";
import {jobChanceSidebar} from "../../job-chance/job-chance.sidebar";
import {eggSidebar} from "../../server-end/framework/egg/egg.sidebar";
import {esStandardSidebar} from "../../read-books/cs-books/es-standard/es-standard-sidebar";

export default {
    "/front-end": frontEndSidebar,
    "/server-end": serverEndSidebar,
    "/server-end/framework/egg": eggSidebar,
    "/develop-skill": developSkillSidebar,
    "/solo-algorithm": soloAlgorithmSidebar,
    "/read-books": readBooksSidebar,
    "/read-books/cs-books/es-standard": esStandardSidebar,
    "/other": OtherSidebar,
    "/job-chance": jobChanceSidebar,
    // "/": [
    //     {
    //         text: "首页", link: "/",
    //     },
    //     frontEnd,
    //     serverEnd,
    //     microservice,
    //     devTool,
    //     soloAlgorithm,
    //     battleInterview,
    //     readBooks,
    //     {
    //         text: "其他",
    //         prefix: '/other',
    //         collapsible: true,
    //         children: [
    //             {
    //                 text: "Todo计划",
    //                 link: "/sum-links",
    //             },
    //             {
    //                 text: "常用网站",
    //                 link: "/sum-links",
    //             },
    //             {
    //                 text: "技术文档",
    //                 link: '/test'
    //             },
    //             {
    //                 text: "变更记录",
    //                 link: "/sum-links",
    //             },
    //         ],
    //     }]
}