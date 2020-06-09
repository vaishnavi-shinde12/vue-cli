<template>
  <div>  
    <h1 v-once> {{ title1 }}</h1>                                    <!-- We can use this only onceazr -->
    
    <p> {{ sayHello() }} </p>

    <p>Click the link - <a v-bind:href= "link">Google</a></p>        <!-- (one way) binding attribute -->

    <button v-on:click="increase">Click me</button>                  <!-- listening event -->
    <p>{{ counter }}</p>

    <button v-on:click="inc(2)">Increment by 2</button>                  <!-- listening event -->
    <p>{{ counter1 }}</p>

    <button v-on:click="counter2++">Click</button>                    <!-- using javascript in template -->
    <p>{{ counter2 > 15 ? 'Greater then 15' : 'Smaller then 15'}}</p>

    
    <p v-on:mousemove="updateCoordinate">Coordinates: {{ x }} / {{ y }} - <span v-on:mousemove="dummy">DEAD SPOT</span></p>
    <!-- <p v-on:mousemove="updateCoordinate">Coordinates: {{ x }} / {{ y }} - 
      <span v-on:mousemove.stop>DEAD SPOT</span></p>  -->            <!-- we can also use "stop" event modifier -->

    <p>Press enter or space - <input type="text" v-on:keyup.space.enter="alertMe"></p>             <!-- getting alert on (space & enter) event modifier -->

    <hr>
    <p>{{ finishedLink }}</p>

    <p> Type something - <input type="text" v-model="name"></p>
    <p>{{ name }} </p>
  </div>
</template>

<script>
  export default ({
      name: "vueinstance",
    data() {
      return {
         title1 : 'Hello Vue..!!!',
         link: "http://google.com",
         finishedLink: '<a href="http://google.com">Google</a>',
         counter: 0,
         counter1: 0,
         counter2:0,
         x: 0,
         y: 0,
         name: 'vaish'                         
      }
    },
    methods: {
      sayHello: function() {
        this.title1 = "Hello";
        return this.title1;
      },
      increase: function() {
        this.counter++;
      },
      inc: function(step) {
         this.counter1 += step;
      },
      updateCoordinate: function(event) {
        this.x = event.clientX;                   //clientX & clientY are default prop of event object
        this.y = event.clientY;
      },
      dummy: function(event) {
        event.stopPropagation();
      },
      alertMe: function() {
        alert("Alert!");
      }
    }
  })
</script>