Vue.createApp({
    data() {
        return {



            
        } 
    },
    computed: {
        fullName() {
            return this.firstName = " " + this.lastName
        }
    }
}).mount("#app")