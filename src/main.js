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

Vue.directive('highlight',{
    bind(el, binding) {
      // el.style.backgroundColor= "pink";                 //-- passing a simple directive

      // el.style.backgroundColor = binding.value;         //-- passing values to custom directive 

      // if(binding.arg == 'background') {           
      //   el.style.backgroundColor = binding.value;
      // } 
      // else {
      //   el.style.color = binding.value;
      // }                                                 // -- passing arguments to custom directive
      
      var delay= 0;
      if(binding.modifiers['delayed']) {
        delay = 3000;
      }
      setTimeout(() => {
        if(binding.arg == 'background') {           
          el.style.backgroundColor = binding.value;
        } 
        else {
          el.style.color = binding.value;
        }                                                 
      }, delay)
 
    }
});                //creating global directives (v-highlight)


Vue.filter('to-lowercase', function(value) {
   return value.toLowerCase();
});

Vue.mixin({
      created() {
        console.log('Global Mixin - Created Hook');
      }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
