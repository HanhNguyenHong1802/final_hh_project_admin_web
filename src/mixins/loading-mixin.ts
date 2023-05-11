import { reactive } from "vue";

export const loadingMixin = {
  setup() {
    const state = reactive({
      loading: false as boolean,
    });

    const showLoading = () => {
      state.loading = true;
    };

    const hideLoading = () => {
      state.loading = false;
    };

    return {
      state,
      showLoading,
      hideLoading,
    };
  },
};
