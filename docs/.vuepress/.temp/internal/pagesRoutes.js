import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1b38ae16","/read_books/",{"title":""},["/read_books/index.html","/read_books/Readme.md"]],
  ["v-087f3632","/solo_algorithm/",{"title":""},["/solo_algorithm/index.html","/solo_algorithm/Readme.md"]],
  ["v-d6dbc6d4","/solo_algorithm/question_collections.html",{"title":""},["/solo_algorithm/question_collections","/solo_algorithm/question_collections.md"]],
  ["v-2a1cc87a","/sum_links/",{"title":""},["/sum_links/index.html","/sum_links/Readme.md"]],
  ["v-217c40b6","/sum_links/api_docs.html",{"title":""},["/sum_links/api_docs","/sum_links/api_docs.md"]],
  ["v-b62b7232","/front_end/base_begin/css.html",{"title":""},["/front_end/base_begin/css","/front_end/base_begin/css.md"]],
  ["v-6ec653fd","/front_end/base_begin/html.html",{"title":""},["/front_end/base_begin/html","/front_end/base_begin/html.md"]],
  ["v-44ab478a","/front_end/base_begin/javascript.html",{"title":""},["/front_end/base_begin/javascript","/front_end/base_begin/javascript.md"]],
  ["v-7214f79e","/front_end/front_framework/jquery.html",{"title":""},["/front_end/front_framework/jquery","/front_end/front_framework/jquery.md"]],
  ["v-a11fc8c6","/front_end/front_framework/vue.html",{"title":""},["/front_end/front_framework/vue","/front_end/front_framework/vue.md"]],
  ["v-703a42ad","/front_end/server_deploy/front_end_server.html",{"title":""},["/front_end/server_deploy/front_end_server","/front_end/server_deploy/front_end_server.md"]],
  ["v-b256a9be","/front_end/server_deploy/static_nginx.html",{"title":""},["/front_end/server_deploy/static_nginx","/front_end/server_deploy/static_nginx.md"]],
  ["v-73999699","/front_end/ui_framework/",{"title":""},["/front_end/ui_framework/index.html","/front_end/ui_framework/Readme.md"]],
  ["v-f7f55a70","/server_end/framework/",{"title":""},["/server_end/framework/index.html","/server_end/framework/Readme.md"]],
  ["v-92e9cb52","/server_end/framework/egg_learn.html",{"title":""},["/server_end/framework/egg_learn","/server_end/framework/egg_learn.md"]],
  ["v-21fc1ee4","/server_end/framework/express_koa_learn.html",{"title":""},["/server_end/framework/express_koa_learn","/server_end/framework/express_koa_learn.md"]],
  ["v-16a56594","/server_end/framework/nest_learn.html",{"title":""},["/server_end/framework/nest_learn","/server_end/framework/nest_learn.md"]],
  ["v-6b14a25d","/server_end/database/",{"title":""},["/server_end/database/index.html","/server_end/database/Readme.md"]],
  ["v-dca3d10e","/static/brain-maps/",{"title":""},["/static/brain-maps/index.html","/static/brain-maps/Readme.md"]],
  ["v-4450f016","/read_books/cs_books/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E7%9A%84Node.js/",{"title":""},["/read_books/cs_books/深入浅出的Node.js/","/read_books/cs_books/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E7%9A%84Node.js/index.html","/read_books/cs_books/深入浅出的Node.js/readme.md","/read_books/cs_books/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E7%9A%84Node.js/readme.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
