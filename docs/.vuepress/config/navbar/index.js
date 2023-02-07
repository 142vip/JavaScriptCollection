import frontEnd from "./front-end";
import serverEnd from "./server-end";
import microservice from "./microservice";
import devTool from "./dev-tool";
import soloAlgorithm from "./solo-algorithm";
import battleInterview from "./battle-interview";
import readBooks from "./read-books";

export default [
    {
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
    }
];
