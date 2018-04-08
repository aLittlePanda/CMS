<template>
 <Tabs size="small">
    <TabPane label="后台统计">
      <row>
          <!-- 人数 -->
          <Col span="24">
              <Table border :columns="columns1" :data="data1"></Table>
          </Col>
          <!-- 新闻 -->
          <div class="news news_box">
              <Table border :columns="columns2" :data="data2"></Table>
          </div>
          <div class="news news_box" style="margin-left:0.6%;">
              <Table border :columns="columns3" :data="data3"></Table>
          </div>
          <div class="news news_box">
              <Table border :columns="columns4" :data="data4"></Table>
          </div>
          <div class="news news_box" style="margin-left:0.6%;">
              <Table border :columns="columns5" :data="data5"></Table>
          </div>
      </row>
    </TabPane>
  </Tabs>
</template>
<script>

export default {
  name: 'homeDetail',
  data () {
    return {
      columns1: [
        {
          title: '会员总数',
          key: 'total'
        },
        {
          title: '今日注册',
          key: 'today'
        },
        {
          title: '当前在线',
          key: 'online'
        }
      ],
      data1: [
        {
          total: 1000,
          today: 111,
          online: '10人'
        }
      ],
      columns2: [
        {
          title: '热门新闻（热门） 文章选项：热门',
          key: 'hotNews'
        }
      ],
      data2: [
        {
          hotNews: '测试新闻一'
        },
        {
          hotNews: '测试新闻一'
        },
        {
          hotNews: '测试新闻一'
        },
        {
          hotNews: '测试新闻一'
        }
      ],
      columns3: [
        {
          title: '新闻发现（最新内容） 最新10条文章',
          key: 'newNews'
        }
      ],
      data3: [
        {
          newNews: '测试新闻一'
        },
        {
          newNews: '测试新闻一'
        },
        {
          newNews: '测试新闻一'
        },
        {
          newNews: '测试新闻一'
        }
      ],
      columns4: [
        {
          title: '视频 文章类型为视频',
          key: 'video'
        }
      ],
      data4: [
        {
          video: '测试新闻一'
        },
        {
          video: '测试新闻一'
        },
        {
          video: '测试新闻一'
        },
        {
          video: '测试新闻一'
        }
      ],
      columns5: [
        {
          title: '周刊 文章选项：周刊',
          key: 'weekFiles'
        }
      ],
      data5: [
        {
          weekFiles: '测试新闻一'
        },
        {
          weekFiles: '测试新闻一'
        },
        {
          weekFiles: '测试新闻一'
        },
        {
          weekFiles: '测试新闻一'
        }
      ]
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news{
    margin-top: 16px;
}
.news_box{
    display:inline-block;
    width: 49.56%;
}
</style>
