<template>
  <div id="app">
    <div id="nav"> 
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/summary">Summary</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <!-- <router-link to="/firstroute/Shinde's">FirstRoute</router-link> | 
      <router-link to="/firstroute/Shinde's/child">FirstRouteChild</router-link> | -->
      <router-link to="/vueinstance">VueInstance</router-link> |
      <router-link to="/computedprop">ComputedProperty</router-link> |
      <router-link to="/conditionalrender">ConditionalRender</router-link> |
      <router-link to="/renderinglist">RenderingList</router-link> |
      <router-link to="/lifecycle">Lifecycle Hook</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/firstprop">Prop</router-link> |
      <router-link to="/directives">Directive</router-link> |
      <router-link to="/filter">Filter</router-link>
      <!-- <pre><div class="container">
        <div class="row">                            < this is another way to render Prop like (router-link) >
          <div class="col-xs-12">
            <app-first></app-first>
          </div>
        </div>
      </div></pre> -->
      
      <!-- <div><pre>
      </pre>
        <hr>
        <button @click="selectedComponent = 'appSlots'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appPublisher'">Publisher</button>
        <hr>
        <p>{{ selectedComponent }}</p> -->
        <!-- <keep-alive>                                       -- if using keep-alive tag the two lifecycle hook get generated -->
          <!-- <component :is="selectedComponent">               -- That is Activated Hook and Deactivated Hook -->
            <!-- <p>Default content</p>
          </component>
      </keep-alive> -->
        <!-- <app-slots>                                              --   opening selector
          <h2 slot="title"> {{ quoteTitle }}</h2>
          <p slot ="content">A Wonderful Quote!!</p>
          <p>Beautiful Slots</p>
          <p>Default Slots</p>
        </app-slots>                                                  --  closing selector -->
      <!-- </div> -->

      <!-- A small New Project of Quotes -->
      <!-- <hr class="new1">
      <div>
          <app-header :quoteCount="quotes.length" :maxQuotes="maxQuote"></app-header>
          <app-new-quote@quoteAdded="newQuote"></app-new-quote>
          <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
           <div class="row">
             <div class="col-sm-12 text-center">
               <div class="alert alert-info"><pre>
                    Info: Click on a Quote to delete it!
                </pre></div>
             </div>
           </div>  
        </div> -->

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import First from "@/components/First.vue";
  import Slots from "@/components/Slots.vue";
  import Author from "@/components/Author.vue";
  import Publisher from "@/components/Publisher.vue";
  import QuoteGrid from "@/components/QuoteGrid.vue";
  import NewQuote from "@/components/NewQuote.vue";
  import Header from "@/components/Header.vue";

   export default {
     name: "app",
     data: function() {
         return {
           quoteTitle: "The Quote",
           selectedComponent: 'appSlots',
 
           quotes: [
                     'Just a Quote to see something'
           ],
           maxQuote: 10
         }
     },
     components: {
      appFirst: First,

      appSlots: Slots,
      appAuthor: Author,
      appPublisher: Publisher,

      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appHeader: Header
     },
     methods: {
       newQuote(quote) {
           this.quotes.push(quote);
       },
       deleteQuote(index) {
         this.quotes.splice(index, 1)
       }
     }
   }
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
div.component {
   border: 1px solid black;
   padding: 30px;
}

hr.new1 {
  border: 2px dashed red;
}
.alert {
  background-color:rgb(213, 241, 243);
  border: 0px solid rgb(213, 241, 243)
}
</style>

