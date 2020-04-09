export default {
  saveUserName(context, username) {
    context.commit("saveUserName", { username });
  },
  saveCartNum(context, nums) {
    context.commit("saveCartNum", { nums });
  }
};
