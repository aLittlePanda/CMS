<template>
  <Tabs size="small" class="article">
    <TabPane label="文章管理">
      <row>
        <Col span="6">
          <Input v-model="keywords" placeholder="请输内容标题" clearable style="width:100%;"/>
        </Col>
        <Col span="14" style="padding-left:10px;">
          <Dropdown>
            <Button type="primary">
              文章类型
              <Icon type="arrow-down-b"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem>产品</DropdownItem>
                <DropdownItem>文章</DropdownItem>
                <DropdownItem >视频</DropdownItem>
                <DropdownItem>静态页面</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Button type="primary" style="margin-left:10px;">查询</Button>
        </Col>
        <Col span="4" style="text-align:right;">
          <Button type="primary">添加内容</Button>
        </Col>
      </row>
      
      <Table border :columns="article" :data="articles" style="margin-top:20px;"></Table>
    </TabPane>
  </Tabs>
</template>

<script>
export default {
  name: 'articles',
  data () {
    return {
      keywords:'',
      article: [
          {
            title: '编号',
            key: 'number'
          },
          {
            title: '所属分类',
            key: 'type'
          },
          {
            title: '标题',
            key: 'title'
          },
          {
            title: '添加日期',
            key: 'date'
          },
          {
            title: '阅读数',
            key: 'readers'
          },
          {
            title: '添加人',
            key: 'writer'
          },
          {
            title: '操作',
            key: 'operation',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '管理'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
              ])
            }
          }
      ],
      articles: [
          {
            number: 'John Brown',
            type: '一级分类->二级分类',
            title: 'New York No. 1 Lake Park',
            date: '2018-4-8',
            readers: 288,
            writer:'Bob'
          },
          {
            number: 'John Brown',
            type: '一级分类->二级分类',
            title: 'New York No. 1 Lake Park',
            date: '2018-4-8',
            readers: 288,
            writer:'Bob'
          },
          {
            number: 'John Brown',
            type: '一级分类->二级分类',
            title: 'New York No. 1 Lake Park',
            date: '2018-4-8',
            readers: 288,
            writer:'Bob'
          },
          {
            number: 'John Brown',
            type: '一级分类->二级分类',
            title: 'New York No. 1 Lake Park',
            date: '2018-4-8',
            readers: 288,
            writer:'Bob'
          }
      ]
    }
  }
}
</script>

<style scoped>
.article{
  text-align: left;
}
.table{
  margin-top: 20px;
}
</style>
