import readBooksContentSidebar from "./read-books-content.sidebar";
import frontEnd from "../navbar/front-end";
import serverEnd from "../navbar/server-end";
import microservice from "../navbar/microservice";
import devTool from "../navbar/dev-tool";
import soloAlgorithm from "../navbar/solo-algorithm";
import battleInterview from "../navbar/battle-interview";
import readBooks from "../navbar/read-books";

export default {
    "/read-books": readBooksContentSidebar,
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