Vue.createApp({
    data() {
        return {
            times: null ,
            word: null,
            items: []
        }
    },

    methods: {
        repeat() {
            if ((this.times!=null) && (this.word!=null))
            {
               this.items=[];
               for (let i = 1; i <= this.times; i++) 
               {
                   this.items.push({id: i, word: this.word});
               }              
            }   
        }
    }


}).mount("#app")