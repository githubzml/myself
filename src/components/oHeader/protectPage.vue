<template>
  <div class="protect">
    <p>项目</p>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- <el-tab-pane label="自己瞎搞" name="first">
        <img src="../../../static/navIcon/selfie.png" alt />
        <span>自己瞎搞</span>
      </el-tab-pane>-->

      <el-tab-pane name="one">
        <span slot="label">
          <i class="el-icon-coordinate"></i> 自己瞎搞
        </span>
        <span>自己瞎搞</span>
      </el-tab-pane>
      <el-tab-pane label="官方" name="second">
        <span slot="label">
          <i class="el-icon-ship"></i> 官方
        </span>
        <span>官方</span>
      </el-tab-pane>
      <el-tab-pane label="h5" name="third">
        <span slot="label">
          <i class="el-icon-refrigerator"></i> h5
        </span>
        <span>h5</span>
      </el-tab-pane>
      <el-tab-pane label="小程序" name="fourth">
        <span slot="label">
          <i class="el-icon-grape"></i> 小程序
        </span>
        <span>小程序</span>
      </el-tab-pane>
    </el-tabs>

    <!-- 自己瞎搞
        官方
        h5 
    小程序-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "one"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less">
.protect {
  > .el-tabs {
    width: 90%;
    margin: 0 auto;
  }
  .is-active {
    i {
      animation: rotate 2s linear infinite;
    }
  }
  @keyframes rotate {
    form {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
<style scoped lang="less">
.protect {
  > p {
    // transform: rotate(360deg);
    // transition: all 1s ease-in-out;
  }
}
</style>