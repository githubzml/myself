<template>
  <div class="box">
    <!-- <el-button type="primary">主要按钮</el-button> -->
    <div class="banner">
      <!-- <img :src="titlePicture" alt="banner" /> -->
      <div class="vertical">
        <div>
          <h1>学习,是一种态度</h1>
          <p>posted by 恩珠 on {{lastTime}}</p>
          <h3></h3>
        </div>
        <div></div>
      </div>
    </div>
    <nav>
      <router-link to="/homePage">
        <svg-icon icon-class="home"></svg-icon>
        <span>主页</span>
      </router-link>
      <router-link to="/protectPage">
        <svg-icon icon-class="protect"></svg-icon>
        <span>项目</span>
      </router-link>
      <router-link to="/blogPage">
        <svg-icon icon-class="blog"></svg-icon>
        <span>博客</span>
      </router-link>
      <router-link to="/messagePage">
        <svg-icon icon-class="message"></svg-icon>
        <span>留言</span>
      </router-link>
    </nav>

    <router-view></router-view>
    <div :class="ifshow?'showPendant':'noshowPendant'" @click="showPendant"></div>
    <div id="PendantBox"></div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      pendant: null, //挂件
      pendantNum: 2, //数量
      pendantSpeed: 10000, //速度
      ifshow: false,
      imgUrl: "../../static/image/cc.jpg",
      titlePicture:
        "https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/img/nothome_top_bg.jpg",
      // titlePicture:"../../static/image/picture1.jpg"
      // titlePicture:"../../static/image/load.jpg",
      lastTime: ""
    };
  },
  mounted() {
    this.lastTime = new Date().toLocaleString();
    this.makePendant();

    // setInterval(()=>{
    //   this.makePendant();
    // },5000)
  },
  methods: {
    getRandom(x, y) {
      return Math.floor(Math.random() * (y - x)) + x;
    },
    makePendant() {
      var getPendantBox = $("#PendantBox");
      // 一次出现pendantNum个挂件
      for (let index = 0; index < this.pendantNum; index++) {
        var item = $(` <img src="${this.imgUrl}"/>`);
        // 设置基础样式
        item.css({
          position: "fixed",
          top: `${this.getRandom(20, 100)}%`,
          right: `${this.getRandom(0, 100)}%`,
          transfrom: `rotate(${this.getRandom(0, 180)}deg)`,
          width: `${this.getRandom(30, 40)}px`,
          height: "auto",
          opacity: "0"
        });
        // 第一次移动的动画
        item.animate(
          {
            transfrom: `rotate(${this.getRandom(0, 180)}deg)`,
            opacity: "1",
            width: "20px",
            top: `${this.getRandom(0, 100)}%`,
            right: `${this.getRandom(0, 100)}%`
          },
          this.pendantSpeed
        );
        // 第二次移动的动画
        item.animate(
          {
            transfrom: `rotate(${this.getRandom(0, 180)}deg)`,
            opacity: "0",
            width: "10",
            top: `${this.getRandom(0, 100)}%`,
            right: `${this.getRandom(0, 100)}%`
          },
          this.pendantSpeed
        );
        getPendantBox.append(item);
      }
    },
    showPendant() {
      this.ifshow = !this.ifshow;
      if (this.ifshow) {
        // 循环挂件，每隔5秒来一次
        this.pendant = setInterval(() => {
          this.makePendant();
          // 当漂浮物宽度为0的时候，那就清除它自己
          $("#PendantBox img").each(function(index, element) {
            if (element.style.width == "10px") {
              element.remove();
            }
          });
        }, this.pendantSpeed / 2);
      } else {
        $("#PendantBox img").remove();
        clearInterval(this.pendant);
      }
    }
  }
};
</script>

<style scoped lang="less">
.box {
  height: 100%;
  border: 1px solid #01b8fb;
  position: relative;
  > .banner {
    display: flex;
    align-items: center;
    height: 40vh;
    background: url(https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/img/nothome_top_bg.jpg)
      center center / cover no-repeat rgb(34, 34, 34);
    > .vertical {
      color: white;
      text-align: center;
      width: 80%;
      margin: 0 auto;
    }
  }
  > nav {
    height: 50px;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > a {
      display: flex;
      flex-direction: column;
      color: black;
      text-decoration: none;
      >.svg-icon{
        margin: 0 auto;
      }
    }
  }

  .router-link-active {
    color: orange;
    text-decoration: none;
  }
  > #PendantBox {
    position: absolute;
    z-index: -1;
  }
}
</style>