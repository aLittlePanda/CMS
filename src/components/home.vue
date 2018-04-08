<template>
    <div>
        <Row class="head">
            <Col span="22">
                <h1 style="color:#FFF">后台管理系统</h1>
            </Col>
            <Col span="2">
            <Button type="ghost" class="loginOut" @click="loginOut">注销</Button>
            </Col>
        </Row>
        <Row class="content">
            <!-- 侧边栏导航 -->
            <Col span="3" class="aside">
                <div class="asideNav">
                    <router-link to="/homeDetail">后台管理</router-link>
                </div>
                <Menu width="auto" :open-names="['1','2','3','4']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            内容管理
                        </template>
                        <router-link to="/focus"><MenuItem name="1-1">焦点图设置</MenuItem></router-link>
                        <router-link to="/sort"><MenuItem name="1-2">分类管理</MenuItem></router-link>
                        <router-link to="/articles"><MenuItem name="1-3">文章管理</MenuItem></router-link>
                        <MenuItem name="1-4">单页内容</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            应用
                        </template>
                        <MenuItem name="2-1">小应用</MenuItem>
                        <MenuItem name="2-2">开放应用</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            会员
                        </template>
                        <MenuItem name="3-1">会员管理</MenuItem>
                        <MenuItem name="3-2">登录日志</MenuItem>
                        <MenuItem name="3-3">意见反馈</MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            系统
                        </template>
                        <MenuItem name="4-1">管理员管理</MenuItem>
                    </Submenu>
                </Menu>
            </Col>
            <!-- 内容 -->
            <Col span="21" class="article">
              <router-view></router-view>
            </Col>
        </Row>
    </div>
</template>
<script>

export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
    loginOut () {
      this.$ajax.gotoLogin()
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    display: inline-block;
    font-size: 22px;
}
a{
    color: #495060 !important;
}
.loginOut{
    margin-top:4px;
    color:white;
}
.asideNav{
    font-size: 16px;
    height: 46px;
    line-height: 46px;
    color: #777;
    cursor: pointer;
    border-right: 1px solid #dcdcdc;
}
.asideNav a{
    color: #777 !important;
}
.head{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:9999;
    text-align: left;
    padding: 10px 30px;
    background: #009a61;
}
.aside{
    max-width: 200px;
    background: #f9f9f9;
    height: 900px;
}
.article{
    padding: 20px;
    height: 900px;
}
.content{
    margin-top: 56px;
}
</style>
