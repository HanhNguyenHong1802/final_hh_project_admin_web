<template>
  <div class="bg-white relative lg:py-20">
    <div
      class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row"
    >
      <div
        class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row"
      >
        <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
          <div
            class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10"
          >
            <img
              alt="logo"
              src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
              class="btn-"
            />
          </div>
        </div>
        <div
          class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12"
        >
          <p
            class="w-full text-4xl font-medium text-center leading-snug font-serif"
          >
            Sign up for an account
          </p>
          <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <Form @submit="handleRegister" :validation-schema="schema">
              <div class="relative">
                <label
                  for="username"
                  class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
                  >Username</label
                >
                <Field
                  name="username"
                  type="text"
                  class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                />
                <ErrorMessage name="username" class="error-feedback" />
              </div>
              <div class="relative">
                <label
                  for="password"
                  class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
                  >Password</label
                >
                <Field
                  name="password"
                  type="text"
                  class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                />
                <ErrorMessage name="password" class="error-feedback" />
              </div>
              <div class="relative">
                <button
                  :disabled="loading"
                  class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                >
                  <span v-show="loading"></span>
                  <span>Login</span>
                </button>
              </div>
              <img src="../assets/signin1.svg" alt="signin1" />
              <img src="../assets/signin2.svg" alt="signin2" />
              <div class="mb-4">
                <div
                  v-if="message"
                  class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <span class="block sm:inline">{{ message }}</span>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";
import { computed } from "vue";
import { TUserRequest } from "@/services/auth/auth.type";
import { useRouter } from "vue-router";
import { loadingMixin } from "@/mixins/loading-mixin";

export default {
  name: "LoginPage",
  setup() {
    const store = useStore();
    const loggedIn = computed(() => store.state.auth.status.loggedIn);
    return {
      loggedIn,
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required"),
      password: yup.string().required("Password is required"),
    });
    return {
      loading: false as boolean,
      message: "",
      schema,
    };
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  mixins: [loadingMixin],
  methods: {
    async handleLogin(user: TUserRequest) {
      const store = useStore();
      const router = useRouter();

      this.loading = true;
      try {
        await store.dispatch("auth/login", user);
        router.push("/profile");
      } catch (error: any) {
        this.message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
      this.loading = false;
    },
  },
};
</script>
