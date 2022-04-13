import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1b38ae16","/read_books/",{"title":""},["/read_books/index.html","/read_books/Readme.md"]],
  ["v-a538cad8","/server_framework/",{"title":""},["/server_framework/index.html","/server_framework/Readme.md"]],
  ["v-087f3632","/solo_algorithm/",{"title":""},["/solo_algorithm/index.html","/solo_algorithm/Readme.md"]],
  ["v-2a1cc87a","/sum_links/",{"title":""},["/sum_links/index.html","/sum_links/Readme.md"]],
  ["v-73999699","/front_end/ui_framework/",{"title":""},["/front_end/ui_framework/index.html","/front_end/ui_framework/Readme.md"]],
  ["v-dca3d10e","/static/brain-maps/",{"title":""},["/static/brain-maps/index.html","/static/brain-maps/Readme.md"]],
  ["v-6b14a25d","/server_end/database/",{"title":""},["/server_end/database/index.html","/server_end/database/Readme.md"]],
  ["v-4450f016","/read_books/cs_books/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E7%9A%84Node.js/",{"title":""},["/read_books/cs_books/深入浅出的Node.js/","/read_books/cs_books/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E7%9A%84Node.js/index.html","/read_books/cs_books/深入浅出的Node.js/readme.md","/read_books/cs_books/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E7%9A%84Node.js/readme.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-217c40b6","/sum_links/api_docs.html",{"title":""},["/sum_links/api_docs","/sum_links/api_docs.md"]],
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
