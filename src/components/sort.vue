<template>
  <Tabs size="small" class="sort" >
    <TabPane label="分类管理">
      <Tree :data="data5" :render="renderContent"></Tree>
    </TabPane>
  </Tabs>
</template>
 <script>
 export default {
  data () {
      return {
        data5: [
          {
          title: '',
          expand: true,
          render: (h, { root, node, data }) => {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
              h('span', [
                  h('Icon', {
                      props: {
                          type: 'ios-folder-outline'
                      },
                      style: {
                          marginRight: '8px'
                      }
                  }),
                  h('span', data.title)
              ]),
              h('span', {
                style: {
                  display: 'inline-block',
                  float: 'right',
                  marginRight: '32px'
                }
              }, [
                h('Button', {
                  props: Object.assign({}, this.buttonProps, {
                    icon: 'ios-plus-empty',
                    type: 'primary'
                  }),
                  style: {
                    width: '52px'
                  },
                  on: {
                    click: () => { this.append(data) }
                  }
                })
              ])
            ])
          },
          children: [
            {
              title: '产品中心',
              expand: true,
              children: [
                {
                  title: '智慧云',
                  expand: true
                },
                {
                  title: '绿色云',
                  expand: true
                },
                {
                  title: '其他',
                  expand: true
                }
              ]
            },
            {
              title: '解决方案',
              expand: true,
              children: [
                {
                  title: '智慧解决方案',
                  expand: true
                },
                {
                  title: '通用解决方案',
                  expand: true
                },
                {
                  title: '行业解决方案',
                  expand: true
                }
              ]
            },
            {
              title: '应用场景',
              expand: true,
              children: [
              ]
            },
            {
              title: '信息资讯',
              expand: true,
              children: [
              ]
            },
            {
              title: '新闻发现',
              expand: true,
              children: [
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: 'ghost',
        size: 'small',
      }
    }
  },
  methods: {
    renderContent (h, { root, node, data }) {
      return h('span', {
          style: {
              display: 'inline-block',
              width: '100%'
          }
      }, [
        h('span', [
          h('Icon', {
            props: {
              type: 'ios-paper-outline'
            },
            style: {
              marginRight: '8px'
            }
          }),
          h('span', data.title)
        ]),
        h('span', {
          style: {
            display: 'inline-block',
            float: 'right',
            marginRight: '32px'
          }
        }, [
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ios-plus-empty'
            }),
            style: {
              marginRight: '8px'
            },
            on: {
              click: () => { this.append(data) }
            }
          }),
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ios-minus-empty'
            }),
            on: {
              click: () => { this.remove(root, node, data) }
            }
          })
        ])
      ])
    },
    append (data) {
      const children = data.children || []
      children.push({
        title: 'appended node',
        expand: true
      });
      this.$set(data, 'children', children)
    },
    remove (root, node, data) {
      const parentKey = root.find(el => el === node).parent;
      const parent = root.find(el => el.nodeKey === parentKey).node
      const index = parent.children.indexOf(data)
      parent.children.splice(index, 1)
    }
  }
}
 </script>
 
 <style scoped>
 .sort{
   text-align: left;
 }
 </style>
 
