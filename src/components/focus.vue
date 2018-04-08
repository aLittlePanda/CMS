<template>
<Tabs size="small">
    <TabPane label="焦点图管理">
      <Table border :columns="columns1" :data="data1"></Table>
    </TabPane>
</Tabs>
</template>

<script>
export default {
  name: 'Focus',
  created () {
    let getData = {
      page: 1,
      limit: 6
    }
    this.$ajax.get(
      '/cms/focusimg/list',
      getData,
      (res) => {
        this.imgLists = res.list
      },
      function () {}
    )
  },
  data () {
    return {
      address: 'address',
      imgLists: [],
      columns1: [
        {
          title: '焦点图',
          key: 'picUrl',
          render: (h, params) => {
            return h('div', [
              h('img', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                attrs: {
                  src: params.row.picUrl, style: 'width: 140px;height: 40px;margin-top:4px;border-radius: 2px;'
                },
                style: {
                }
              })
            ])
          }
        },
        {
          title: '链接地址',
          key: 'url',
          render: (h, params) => {
            return h('div', [
              h('a', params.row.url)
            ])
          }
        },
        {
          title: '启用',
          key: 'isUsing',
          render: (h, params) => {
            return h('div', [
              h('strong', params.row.isUsing === true ? '是' : '否')
            ])
          }
        },
        {
          title: '操作',
          key: 'action',
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
              }, '编辑'),
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
      data1: [
        {
          picUrl: '/cny/captcha.jpg',
          url: 'http://',
          isUsing: true
        },
        {
          picUrl: 'http://',
          url: 'http://',
          isUsing: true
        },
        {
          picUrl: 'http://',
          url: 'http://',
          isUsing: true
        },
        {
          picUrl: 'http://',
          url: 'http://',
          isUsing: false
        }
      ]
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: '上传图片',
        content: 
        `图片： <img src="../assets/cnyBg.png"><br><br>
        地址： <Input v-model="address" placeholder="" clearable style="width: 260px"/><br><br>
        <Upload action="//jsonplaceholder.typicode.com/posts/">
            <Button type="primary" icon="ios-cloud-upload-outline">上传照片</Button>
        </Upload>`
      })
    },
    remove (index) {
      this.data1.splice(index, 1)
    }
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
