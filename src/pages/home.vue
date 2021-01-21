<template>
  <div class="wapper">
    <div class="header">
      <div class="left">作业帮OA1</div>
      <div class="right">
        <router-link to="cart">
          <Badge :count="1" class="cart">
            <Icon type="md-cart" size="31" color="#007CF9" />
          </Badge>
        </router-link>
        <router-link to="userInfo">
          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        </router-link>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <Menu :active-name="activeName">
          <MenuItem
            :name="item.id"
            v-for="item in menu"
            :key="item.name"
            :to="item.router"
            :active-name="item.id"
          >
            <Icon :type="item.icon" />
            {{ item.name }}
          </MenuItem>
        </Menu>
      </div>
      <div class="right">
        <keep-alive :include="includeName">
          <router-view class="child-view"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      includeName: [],
      activeName: "0",
      menu: [
        {
          name: "办公用品领用",
          router: "index",
          id: "1",
          icon: "md-pricetags",
        },
        {
          name: "订单管理",
          router: "orderlist",
          id: "2",
          icon: "ios-paper",
        },
        {
          name: "意见反馈",
          router: "feedback",
          id: "3",
          icon: "ios-create",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.wapper {
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 60px;
    border-bottom: 1px solid #eee;
    .right {
      display: flex;
      align-items: center;
      .cart {
        margin-right: 31px;
      }
    }
  }
  .content {
    display: flex;
    height:100%;
    .left {
      text-align: left;
      .ivu-menu {
        width: 180px !important;
        height: 100%;
        background:#f8f8f8;
      }
    }
    .right{
      padding:20px 40px;
      
    }
  }
}
</style>