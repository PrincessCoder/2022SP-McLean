Vue.createApp({
    data() {
        return {
                    firstName: " ",
                    lastName: " ",
                    street: " ",
                    city: " ",
                    state: " ",
                    county: " ",
                    selectedColors: [],
                    colors:
                        [
                            {name: 'White', value: 'white'},
                            {name: 'Black', value: 'black'},
                            {name: 'Biege', value: 'biege'},
                            {name: 'Brown', value: 'brown'},
                            {name: 'Rose', value: 'rose'},
                            {name: 'Silver', value: 'silver'},
                        ],
                    status: " "
        }
    }
}).mount("#app");

