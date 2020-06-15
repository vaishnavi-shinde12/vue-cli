import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

export const eventBus = new Vue({          //for props
  methods: {                              //centralized code in event Bus
    changeAge: function(age) {
      this.$emit('ageWasEdited',age);
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
