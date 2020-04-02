<!-- 组件说明 -->
<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="modal-mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <a href="javascript:; " class="icon-close" @click="handleCancelClick"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <a href="javascript:; " class="btn" v-if="btnType == 1" @click="handleSubmitClick">{{ sureText }}</a>
            <a href="javascript:; " class="btn" v-else-if="btnType == 2" @click="handleCancelClick">{{ cancelText }}</a>
            <div class="btn-group" v-else>
                <a href="javascript:; " class="btn" @click="handleSubmitClick">{{ sureText }}</a>
                <a href="javascript:; " class="btn btn-default" @click="handleCancelClick">{{ cancelText }}</a>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
//import x from ''
export default {
  name: "modal",
  props: {
    // 弹框类型：small, middle, large, form
    modalType: {
      type: String,
      default: "form"
    },
    // 弹框标题
    title: {
      type: String,
      default: ""
    },
    // 按钮类型： 1: 确认按钮， 2: 取消按钮， 3: 确认取消都有
    btnType: {
      type: String,
      defalut: 3
    },
    // 确认按钮文本
    sureText: {
      type: String,
      default: "确认"
    },
    // 取消按钮文本
    cancelText: {
      type: String,
      default: "取消"
    },
    showModal: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
      handleSubmitClick() {
          this.$emit("submit");
      },
      handleCancelClick() {
          this.$emit("cancel");
      }
  }
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/modal.scss";
</style>