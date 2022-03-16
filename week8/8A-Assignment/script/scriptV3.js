Vue.createApp({
    data() {
        return {
            newConsoleObj: {
                image: " ",
                player: " ",
                team: " ",
                position: " ",
                cardYear: null,
                cardGrade: " ",
                collected: false,
                },
            collections: [{
                    // object 1
                    image: "img/Rodgers.jpg",
                    player: "Aaron Rodgers",
                    team: "Green Bay Packers",
                    position: "Quarterback",
                    cardYear: "2014",
                    cardGrade: "Bownman Chrome Superfractors card, Grading 9.5 Gem Mint",
                    collected: false,
                    },
                    {
                    // object 2
                    player: "Tom Brady",
                    team: "New England Patriots",
                    position: "Quarterback",
                    cardYear: "2007",
                    cardGrade: "Topps Finest Blue Refractor card, Grading 8 Gem Mint",
                    collected: false,
                    },
                    {
                    // object 3
                    player: "Ben Roethlisberger",
                    team: "Pittsburgh Steelers",
                    position: "Quarterback",
                    cardYear: "2009",
                    cardGrade: "Bownman Chrome Orange Refractor card, Grading 10 Gem Mint",
                    collected: false,
                    },
                    {
                    // object 4
                    player: "Terry Bradshaw",
                    team: "Pittsburg Steelers",
                    position: "Quarterback",
                    cardYear: "2015",
                    cardGrade: "Topps Chrome Veteran Autographs card, Grading 9.5 Gem Mint",
                    collected: false,
                    },
                    {
                    // object 5
                    player: "Philip Rivers",
                    teamName: "San Diego Chargers",
                    position: "Quarterback",
                    cardYear: "2006",
                    cardGrade: "Bownman Chrome Gold Refractor card, Grading 10 Gem Mint",
                    collected: false,
                    }
                ]     
            },
            methods: {
                submitHandler: () => {
                    console.log('submitted');
                    vm.consoles = vm.consoles.concat(vm.newConsoleObj);
                    vm.resetForm();
                    },
                restForm: () => {
                    vm.newConsoleObj = {
                        image: " ",
                        player: " ",
                        team: " ",
                        position: " ",
                        cardYear: null,
                        cardGrade: " ",
                        collected: false,
                    };
                },
                deleteItem: item => {
                    vm.consoles = vm.consoles.filter(console => {
                        return console !== item;
                    })
                }
            } 
    }
}).mount("#app");