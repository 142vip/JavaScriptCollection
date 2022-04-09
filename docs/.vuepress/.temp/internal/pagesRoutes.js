import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1b38ae16","/read_books/",{"title":""},["/read_books/index.html","/read_books/Readme.md"]],
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
