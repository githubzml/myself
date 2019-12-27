<template>
  <div class="message">
    <el-form label-width="100px" :model="formLabelAlign">
      <el-form-item label="你的名字">
        <el-input v-model="formLabelAlign.name" @blur="blur('name')" placeholder="请输入名字"></el-input>
      </el-form-item>
      <p class="otip" v-if="tip.isShowNameTip">{{tip.NameTip}}</p>
      <el-form-item label="给我的留言">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="formLabelAlign.message"
          @blur="blur('content')"
        ></el-input>
      </el-form-item>
      <p class="otip" v-if="tip.isShowContentTip">{{tip.ContentTip}}</p>
    </el-form>
    <div class="osubmit">
      <el-button type="primary">提交</el-button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
        name: "",
        message: ""
      },
      tip: {
        NameTip: "你的名字呢？",
        ContentTip: "你要说的话呢？",
        isShowNameTip: false,
        isShowContentTip: false
      }
    };
  },
  methods: {
    blur(params) {
      this.formLabelAlign.name = this.formLabelAlign.name.replace(
        /(^\s*)|(\s*$)/g,
        ""
      ); //去除空格;
      this.formLabelAlign.message = this.formLabelAlign.message.replace(
        /(^\s*)|(\s*$)/g,
        ""
      ); //去除空格;

      if (params == "name") {
        if (this.formLabelAlign.name.length <= 0) {
          this.tip.isShowNameTip = true;
        }else{
          this.tip.isShowNameTip = false;
        }
      } else {
        if (this.formLabelAlign.message.length <= 0) {
          this.tip.isShowContentTip = true;
        }else{
          this.tip.isShowContentTip = false;
        }
      }
    }
  }
};
</script>

<style lang="less">
.message {
  // .el-form-item__label {
  //   width: 100px !important;
  // }
  // .el-form-item__content {
  //   margin-left: 100px !important;
  // }
}
</style>
<style scoped lang="less">
.message {
  margin: 20px 0;
  >.osubmit{
    display: flex;
    justify-content: flex-end;
  }
  .otip{
    margin-bottom: 22px;
  }
}
</style>
