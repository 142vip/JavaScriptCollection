import frontEnd from "./navbar-back/front-end";
import serverEnd from "./navbar-back/server-end";
import microservice from "./navbar-back/microservice";
import devTool from "./navbar-back/dev-tool";
import soloAlgorithm from "./navbar-back/solo-algorithm";
import battleInterview from "./navbar-back/battle-interview";
import readBooks from "./navbar-back/read-books";
import {frontEndSidebar} from "../../front-end/front-end.sidebar";
import {serverEndSidebar} from "../../server-end/server-end.sidebar";
import {developToolSidebar} from "../../develop-tool/develop-tool.sidebar";
import {soloAlgorithmSidebar} from "../../solo-algorithm/solo-algorithm.sidebar";

export default {
    "/front-end": frontEndSidebar,
    "/server-end":serverEndSidebar,
    "/develop-tool":developToolSidebar,
    "/solo-algorithm":soloAlgorithmSidebar,
    "/":[{
        text: "首页", link: "/",
    },
        frontEnd,
        serverEnd,
        microservice,
        devTool,
        soloAlgorithm,
        battleInterview,
        readBooks,
        {
            text:"其他",
            prefix:'/other',
            collapsible: true,
            children: [
                {
                    text: "常用网站",
                    link: "/sum-links",
                },
                {
                    text: "技术文档",
                    link:'/test'
                },
                {
                    text: "todo计划",
                    link: "/sum-links",
                },
                {
                    text: "变更记录",
                    link: "/sum-links",
                },
            ],
        }]
}