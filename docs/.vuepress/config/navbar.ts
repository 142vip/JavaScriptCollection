import readBooks from "./navbar-back/read-books";
export default [
    {
        text: "首页", link: "/",
    },
    {
        text: "前端", link: "/front-end",
    },
    {
        text: "后端【Node.js】", link: "/server-end",
    },
    {
        text: "开发工具", link: "/develop-tool",
    },
    {
        text: "Solo算法", link: "/solo-algorithm",
    },
    readBooks,
    {
        text: "其他", link: "/",
    },
];
