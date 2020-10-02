## esClient搜索

### 基本概念
Index: 一系列文档的集合，类似于mysql中数据库的概念

Type: 在Index里面可以定义不同的type，type的概念类似于mysql中表的概念，是一系列具有相同特征数据的结合。

Document: 文档的概念类似于mysql中的一条存储记录，并且为json格式，在Index下的不同type下，可以有许多document。

Shards: 在数据量很大的时候，进行水平的扩展，提高搜索性能

Replicas: 防止某个分片的数据丢失，可以并行得在备份数据里及搜索提高性能
### RestFul搜索

RESTful接口URL的格式：

http://localhost:9200/index/type/id

其中index、type是必须提供的。

id是可选的，不提供es会自动生成。

index、type将信息进行分层，利于管理。

index可以理解为数据库；type理解为数据表；id相当于数据库表中记录的主键，是唯一的。


### 搜索
- 空搜索

搜索API的最基础的形式是没有指定任何查询的空搜索，它简单地返回集群中所有索引下的所有文档
```bash
GET /_search
```
查询结果，body中的结构：
```json
{
   "hits" : {
      "total" :       14,
      "hits" : [
        {
          "_index":   "us",
          "_type":    "tweet",
          "_id":      "7",
          "_score":   1,
          "_source": {
             "date":    "2014-09-17",
             "name":    "John Smith",
             "tweet":   "The Query DSL is really powerful and flexible",
             "user_id": 2
          }
       },
        ... 9 RESULTS REMOVED ...
      ],
      "max_score" :   1
   },
   "took" :           4,
   "_shards" : {
      "failed" :      0,
      "successful" :  10,
      "total" :       10
   },
   "timed_out" :      false
}

```
hits

返回结果中最重要的部分是 hits ，它包含 total 字段来表示匹配到的文档总数，并且一个 hits 数组包含所查询结果的前十个文档。

在 hits 数组中每个结果包含文档的 _index 、 _type 、 _id ，加上 _source 字段。这意味着我们可以直接从返回的搜索结果中使用整个文档。这不像其他的搜索引擎，仅仅返回文档的ID，需要你单独去获取文档。

每个结果还有一个 _score ，它衡量了文档与查询的匹配程度。默认情况下，首先返回最相关的文档结果，就是说，返回的文档是按照 _score 降序排列的。在这个例子中，我们没有指定任何查询，故所有的文档具有相同的相关性，因此对所有的结果而言 1 是中性的 _score 。

max_score 值是与查询所匹配文档的 _score 的最大值。

took

took 值告诉我们执行整个搜索请求耗费了多少毫秒。

shards

_shards 部分告诉我们在查询中参与分片的总数，以及这些分片成功了多少个失败了多少个。正常情况下我们不希望分片失败，但是分片失败是可能发生的。如果我们遭遇到一种灾难级别的故障，在这个故障中丢失了相同分片的原始数据和副本，那么对这个分片将没有可用副本来对搜索请求作出响应。假若这样，Elasticsearch 将报告这个分片是失败的，但是会继续返回剩余分片的结果。

timeout

timed_out 值告诉我们查询是否超时。默认情况下，搜索请求不会超时。如果低响应时间比完成结果更重要，你可以指定 timeout 为 10 或者 10ms（10毫秒），或者 1s（1秒）：
```bash
GET /_search?timeout=10ms
```
在请求超时之前，Elasticsearch 将会返回已经成功从每个分片获取的结果。

- 多索引、多类型

```bash
/_search
在所有的索引中搜索所有的类型
/gb/_search
在 gb 索引中搜索所有的类型
/gb,us/_search
在 gb 和 us 索引中搜索所有的文档
/g*,u*/_search
在任何以 g 或者 u 开头的索引中搜索所有的类型
/gb/user/_search
在 gb 索引中搜索 user 类型
/gb,us/user,tweet/_search
在 gb 和 us 索引中搜索 user 和 tweet 类型
/_all/user,tweet/_search
在所有的索引中搜索 user 和 tweet 类型
```

- 分页

和 SQL 使用 LIMIT 关键字返回单个 page 结果的方法相同，Elasticsearch 接受 from 和 size 参数：

size：显示应该返回的结果数量，默认是 10

from：显示应该跳过的初始结果数量，默认是 0


### 请求体查询

简易 查询 —query-string search— 对于用命令行进行即席查询（ad-hoc）是非常有用的。然而，为了充分利用查询的强大功能，你应该使用 请求体 search API， 之所以称之为请求体查询(Full-Body Search)，因为大部分参数是通过 Http 请求体而非查询字符串来传递的。

请求体查询 —下文简称 查询—不仅可以处理自身的查询请求，还允许你对结果进行片段强调（高亮）、对所有或部分结果进行聚合分析，同时还可以给出 你是不是想找 的建议，这些建议可以引导使用者快速找到他想要的结果。


### Es查询
- query string search

took：耗费了几毫秒
timed_out：是否超时，这里是没有
_shards：数据拆成了5个分片，所以对于搜索请求，会打到所有的primary shard（或者是它的某个replica shard也可以）
hits.total：查询结果的数量，3个document
hits.max_score：score的含义，就是document对于一个search的相关度的匹配分数，越相关，就越匹配，分数也高
hits.hits：包含了匹配搜索的document的详细数据

query string search的由来，因为search参数都是以http请求的query string来附带的


搜索商品名称中包含yagao的商品，而且按照售价降序排序：GET /ecommerce/product/_search?q=name:yagao&sort=price:desc

- query DSL

DSL：Domain Specified Language，特定领域的语言
http request body：请求体，可以用json的格式来构建查询语法，比较方便，可以构建各种复杂的语法，比query string search肯定强大多了

```js
GET /ecommerce/product/_search
{
  "query": { "match_all": {} }
}
```

- query filter

搜索商品名称包含yagao，而且售价大于25元的商品

```js
GET /ecommerce/product/_search
{
    "query" : {
        "bool" : {
            "must" : {
                "match" : {
                    "name" : "yagao" 
                }
            },
            "filter" : {
                "range" : {
                    "price" : { "gt" : 25 } 
                }
            }
        }
    }
}

```

- full-text search（全文检索）

```js
GET /ecommerce/product/_search
{
    "query" : {
        "match" : {
            "producer" : "yagao producer"
        }
    }
}

```

- phrase search（短语搜索）

跟全文检索相对应，相反，全文检索会将输入的搜索串拆解开来，去倒排索引里面去一一匹配，只要能匹配上任意一个拆解后的单词，就可以作为结果返回
phrase search，要求输入的搜索串，必须在指定的字段文本中，完全包含一模一样的，才可以算匹配，才能作为结果返回


### 搜索语法

query 查询： 模糊匹配，并对匹配出来的数据进行评分。

“took”: 查询花费的时间

_score： 匹配相识度评分 满分 5 分

```js
常用查询：
全文本查询：针对文本
1、查询全部：match_all
2、模糊匹配： match (类似sql 的 like)
3、全句匹配： match_phrase (类似sql 的 = )
4、多字段匹配：muti_match （多属性查询）
5、语法查询：query_string (直接写需要配置的 关键字 )
6、字段查询 ： term (针对某个属性的查询，这里注意 term 不会进行分词，比如 在 es 中 存了 “火锅” 会被分成 “火/锅” 当你用 term 去查询 “火时能查到”，但是查询 “火锅” 时，就什么都没有，而 match 就会将词语分成 “火/锅”去查)
7、范围查询：range ()
字段查询：针对结构化数据，如数字，日期 。。
```

参考资料：https://blog.csdn.net/zhanglinlang/article/details/82891547


### 搜索查询

中文资料：

1.https://es.xiaoleilu.com/
2.https://github.com/elasticsearch-cn/elasticsearch-definitive-guide/blob/cn/056_Sorting/85_Sorting.asciidoc

### 模糊查询
```js
 bool: {
        must: [
          {
            term: {
              'User.keyword': index,
            },
          },
          {
            // 模糊查询 like
            wildcard: {
              // receiver
              'Subject.keyword': `*${context}*`,
            },
          },
        ],
      },
## 先and User字段精确查找,在or Subject模糊查找，两次利用bool
{
	"query": {
		"bool": {
			"must": [
				{ 
					"match": { 字段: 值 } 
				},
				{
					"bool": {
						"should": [
							{ "match": { 字段: 值 } },
							{ "match": { 字段: 值 } },
							{ "match": { 字段: 值 } }
						]
					}
				}
			]
		}
	}
}

```
- elasticsearch like 搜索实现

```js
{
	"from": 0,
	"size": 200,
	"query": {
		"bool": {
			"must": {
        // 重点
				"wildcard": {
					"title": "*测试*"
				}
			}
		}
	}
}
```
-  桶聚合

参考资料：https://blog.csdn.net/weixin_42528266/article/details/102812520