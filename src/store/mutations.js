import { SAVE_USERNAME, SAVE_CARTNUM} from "./types";

export default {
  [SAVE_USERNAME](state, payload) {
    state.username = payload.username;
  },
  [SAVE_CARTNUM](state, payload) {
    state.cartCount = payload.nums;
  }
};
