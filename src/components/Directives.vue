<template>
    <div class="container">
         <div class="row">
             <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some Strong Text<strong>'"></p>
             </div>
         </div>
         <hr>
         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
               <h1>Custom Directives</h1>
               <!-- <p v-highlight>Background Color is Beautiful!</p>               -- accessing simple directive created globally -->
               <!-- <p v-highlight="pink">Background Color is Beautiful!</p>        -- Passing value to custom directive -->
               <p v-highlight:background.delayed="'lightblue'">Color is Beautiful!</p>            <!-- Passing arguments to global custom directives -->
               <p v-local-highlight:background.delayed.blink="{mainColor: 'pink', secondColor: 'yellow', delay: 500}">Blinking Color is Soo Beautiful!</p>       <!-- Passing arguments to local custom directives -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding) {                                            //Directive hook function { bind(el,binding,vnode) }                    var delay= 0;
                    if(binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {                           // using multiple modifiers & also passing more complex values to directives
                        let mainColor = binding.value.mainColor; 
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if (binding.arg == 'background') {           
                                el.style.backgroundColor = currentColor;
                            } 
                            else {
                                el.style.color = currentColor;
                            }  
                            } , binding.value.delay);                                               
                        }, delay);
                    }
                    else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {           
                                el.style.backgroundColor = binding.value.mainColor;
                            } 
                            else {
                                el.style.color = binding.value.mainColor;
                            }                                                 
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>
</style>