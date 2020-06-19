export const fruitMixin = { 
    data() {
        return {
            fruits: ['Apple', 'Mango', 'Banana', 'Melon', 'Grapes','Pineapple'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                 return element.match(this.filterText);
            });
        }
    },
    created() {
        console.log('created');
     }
}