module.exports = [
    {
        text: "首页", link: "/",
    },
    require('./front-end'),
    require('./server-end'),
    require('./microservice'),
    require('./dev-tool'),
    require('./solo-algorithm'),
    require('./battle-interview'),
    require('./read-books'),
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
