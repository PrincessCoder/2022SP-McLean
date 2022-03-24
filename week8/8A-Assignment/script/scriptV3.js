Vue.createApp({
    data() {
        return {
            collections: [
                    {
                    // object 1
                    image: "img/Rodgers.jpg",
                    player: "Aaron Rodgers",
                    team: "Green Bay Packers",
                    position: "Quarterback",
                    cardYear: "2014",
                    cardGrade: "Bownman Chrome Superfractors card, Grading 9.5 Gem Mint",
                    collected: true
                    },
                    {
                    // object 2
                    player: "img/Brady.jpg",
                    team: "New England Patriots",
                    position: "Quarterback",
                    cardYear: "2007",
                    cardGrade: "Topps Finest Blue Refractor card, Grading 8 Gem Mint",
                    collected: false
                    },
                    {
                    // object 3
                    player: "img/Roethlisberger.jpg",
                    team: "Pittsburgh Steelers",
                    position: "Quarterback",
                    cardYear: "2009",
                    cardGrade: "Bownman Chrome Orange Refractor card, Grading 10 Gem Mint",
                    collected: false
                    },
                    {
                    // object 4
                    player: "img/Bradshaw.jpg",
                    team: "Pittsburg Steelers",
                    position: "Quarterback",
                    cardYear: "2015",
                    cardGrade: "Topps Chrome Veteran Autographs card, Grading 9.5 Gem Mint",
                    collected: false
                    },
                    {
                    // object 5
                    player: "img/Rivers.jpg",
                    teamName: "San Diego Chargers",
                    position: "Quarterback",
                    cardYear: "2006",
                    cardGrade: "Bownman Chrome Gold Refractor card, Grading 10 Gem Mint",
                    collected: false
                    }
                ],
                newCollectionObj: {
                    image: "",
                    player: "",
                    team: "",
                    position: "",
                    cardYear: "null",
                    cardGrade: "",
                    collected: false
                    }  
                }   
            },
            methods: {
                addCollection() {
                    this.collections = 
                    this.collections.concat(
                    this.newCollectionObj);
                    this.newCollectionObj = {
                        image: "",
                        player: "",
                        team: "",
                        position: "",
                        cardYear: null,
                        cardGrade: "",
                        collected: false,
                    };
                   },
                isValid() {
                   return this.newCollectionObj.player &&
                   this.newCollectionObj.team
                    },
                deleteItem (item) {
                    this.collections = this.collections.filter(collection => {
                        return collection !== item;
                    });              
        } 
    }
}).mount("#app")