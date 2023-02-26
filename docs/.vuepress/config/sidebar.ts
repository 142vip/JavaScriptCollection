import {readBooksSidebar} from "../../read-books/read-books.sidebar";
import {soloAlgorithmSidebar} from "../../solo-algorithm/solo-algorithm.sidebar";
import {serverEndSidebar} from "../../server-end/server-end.sidebar";
import {developSkillSidebar} from "../../develop-skill/develop-skill.sidebar";
import {frontEndSidebar} from "../../front-end/front-end.sidebar";
import {OtherSidebar} from "../../other/other.sidebar";
import {jobChanceSidebar} from "../../job-chance/job-chance.sidebar";

export default {
    "/front-end": frontEndSidebar,
    "/server-end": serverEndSidebar,
    "/develop-skill": developSkillSidebar,
    "/solo-algorithm": soloAlgorithmSidebar,
    "/read-books": readBooksSidebar,
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