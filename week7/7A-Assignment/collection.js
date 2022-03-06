// Creating binders

Vue.createApp({
    data() {
        return {
            collection: [{
                // object 1
                playerName: "Aaron Rodgers",
                teamName: "Green Bay Packers",
                postionPlayed: "Quarterback",
                cardYear: "2014",
                cardGrade: "Bownman Chrome Superfractors card, Grading 9.5 Gem Mint"
                },
                {
                // object 2
                playerName: "Tom Brady",
                teamName: "New England Patriots",
                postionPlayed: "Quarterback",
                cardYear: "2007",
                cardGrade: "Topps Finest Blue Refractor card, Grading 8 Gem Mint"
                },
                {
                // object 3
                playerName: "Ben Roethlisberger",
                teamName: "Pittsburgh Steelers",
                postionPlayed: "Quarterback",
                cardYear: "2009",
                cardGrade: "Bownman Chrome Orange Refractor card, Grading 10 Gem Mint"
                },
                {
                // object 4
                playerName: "Terry Bradshaw",
                teamName: "Pittsburg Steelers",
                postionPlayed: "Quarterback",
                cardYear: "2015",
                cardGrade: "Topps Chrome Veteran Autographs card, Grading 9.5 Gem Mint"
                },
                {
                // object 5
                playerName: "Philip Rivers",
                teamName: "San Diego Chargers",
                postionPlayed: "Quarterback",
                cardYear: "2006",
                cardGrade: "Bownman Chrome Gold Refractor card, Grading 10 Gem Mint"
                },
            ]
        }
    }
}).mount("#collection");