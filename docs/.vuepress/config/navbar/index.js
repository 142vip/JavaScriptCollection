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
        text: "常用网站",
        children: [
            {
                text: "平台汇总",
                link: "/sum-links",
            },
            {
                text: "技术文档",
                children: [
                    {
                        text: "百度",
                        link: "http://www.baidu.com",
                    },
                ],
            },
        ],
    },
];
