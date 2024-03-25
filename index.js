// Game Information Functions
    class Timer {
        constructor(root) {
        root.innerHTML = Timer.getHTML();
    
        this.el = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset")
        };
    
        this.interval = null;
        this.remainingSeconds = 0;
    
        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
            this.start();
            } else {
            this.stop();
            }
        });
    
        this.el.reset.addEventListener("click", () => {
            const inputMinutes = prompt("Enter number of minutes:");
    
            if (inputMinutes < 60) {
            this.stop();
            this.remainingSeconds = inputMinutes * 60;
            this.updateInterfaceTime();
            }
        });
        }
    
        updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
    
        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
        }
    
        updateInterfaceControls() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-symbols-outlined">play_arrow</span>`;
            this.el.control.classList.add("timer__btn--start");
            this.el.control.classList.remove("timer__btn--stop");
        } else {
            this.el.control.innerHTML = `<span class="material-symbols-outlined">pause</span>`;
            this.el.control.classList.add("timer__btn--stop");
            this.el.control.classList.remove("timer__btn--start");
        }
        }
    
        start() {
        if (this.remainingSeconds === 0) return;
    
        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();
    
            if (this.remainingSeconds === 0) {
            this.stop();
            }
        }, 1000);
    
        this.updateInterfaceControls();
        }
    
        stop() {
        clearInterval(this.interval);
    
        this.interval = null;
    
        this.updateInterfaceControls();
        }
    
        static getHTML() {
        return `
            <span class="timer__part timer__part--minutes">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--seconds">00</span>
            <button type="button" class="timer__btn timer__btn--control timer__btn--start">
            <span class="material-symbols-outlined">play_arrow</span>
            </button>
            <button type="button" class="timer__btn timer__btn--reset">
            <span class="material-symbols-outlined">timer</span>
            </button>
            `;
        }
    }
    
    new Timer(
        document.querySelector(".timer")
    );

    // Timeouts Left functions    
    let homeTOL = 5
    let homeTimeoutsLeftEl = document.getElementById("homeTimeoutsLeft-el")
        function lessHomeTimeouts() {
        if (homeTOL > 0) {
            homeTOL = homeTOL - 1} else {homeTOL=0}
            homeTimeoutsLeftEl.innerText = homeTOL
        }

    let awayTOL = 5    
    let awayTimeoutsLeftEl = document.getElementById("awayTimeoutsLeft-el")
        function lessAwayTimeouts() {
        if (awayTOL > 0) {
            awayTOL = awayTOL - 1} else {awayTOL=0}
            awayTimeoutsLeftEl.innerText = awayTOL
        }

// HOME TEAM 
    let totalHomeTeamGamePoints = 0
    let homeTeamPointsEl=document.getElementById("homeTeamPoints-el")
        function homeTeamGamePoints() {
            totalHomeTeamGamePoints = homeP1Points + homeP2Points + homeP3Points + homeP4Points + homeP5Points
            homeTeamPointsEl.innerText = totalHomeTeamGamePoints
        }

    let totalHomeTeamGameFouls = 0
    let homeTeamFoulsEl=document.getElementById("homeTeamFouls-el")
        function homeTeamGameFouls() {
            if (totalHomeTeamGameFouls < 4) {
                totalHomeTeamGameFouls = homeP1Fouls + homeP2Fouls + homeP3Fouls + homeP4Fouls + homeP5Fouls} else {totalHomeTeamGameFouls="Bonus"}
            homeTeamFoulsEl.innerText = totalHomeTeamGameFouls
        }        

        //HOME TEAM PLAYER 1
            // HOME TEAM PLAYER 1 POINTS FUNCTIONS
                let homeP1Points = 0
                let homePlayer1PointsEl=document.getElementById("homePlayer1Points-el")
                    function homePlayer1PointsOneTally() {
                        homeP1Points = homeP1Points + 1
                        homePlayer1PointsEl.innerText = homeP1Points
                    }

                    function homePlayer1PointsTwoTally() {
                        homeP1Points = homeP1Points + 2
                        homePlayer1PointsEl.innerText = homeP1Points
                    }

                    function homePlayer1PointsThreeTally() {
                        homeP1Points = homeP1Points + 3
                        homePlayer1PointsEl.innerText = homeP1Points
                    }

                    function homePlayer1PointsLessOneTally() {
                        if (homeP1Points > 0) {
                            homeP1Points = homeP1Points - 1} else {homeP1Points = 0}
                            homePlayer1PointsEl.innerText = homeP1Points
                    }

                // HOME TEAM PLAYER 1 REBOUNDS FUNCTIONS
                let homeP1Rebs = 0
                let homePlayer1RebsEl=document.getElementById("homePlayer1Rebs-el")
                    function homePlayer1RebsOneTally() {
                        homeP1Rebs = homeP1Rebs + 1
                        homePlayer1RebsEl.innerText = homeP1Rebs
                    }

                    function homePlayer1RebsLessOneTally() {
                        if (homeP1Rebs > 0) {
                            homeP1Rebs = homeP1Rebs - 1} else {homeP1Rebs = 0}
                            homePlayer1RebsEl.innerText = homeP1Rebs
                    }

                // HOME TEAM PLAYER 1 ASSISTS FUNCTIONS
                let homeP1Assists = 0    
                let homePlayer1AssistsEl=document.getElementById("homePlayer1Assists-el")
                    function homePlayer1AssistsOneTally() {
                        homeP1Assists = homeP1Assists + 1
                        homePlayer1AssistsEl.innerText = homeP1Assists
                    }

                    function homePlayer1AssistsLessOneTally() {
                        if (homeP1Assists > 0) {
                            homeP1Assists = homeP1Assists - 1} else {homeP1Assists = 0}
                            homePlayer1AssistsEl.innerText = homeP1Assists
                    }

                // HOME TEAM PLAYER 1 FOULS FUNCTIONS 
                let homeP1Fouls = 0
                let homePlayer1FoulsEl=document.getElementById("homePlayer1Fouls-el")
                    function homePlayer1FoulsOneTally() {
                        homeP1Fouls = homeP1Fouls + 1
                        homePlayer1FoulsEl.innerText = homeP1Fouls
                    }

                    function homePlayer1FoulsLessOneTally() {
                        if (homeP1Fouls > 0) {
                            homeP1Fouls = homeP1Fouls - 1} else {homeP1Fouls = 0}
                            homePlayer1FoulsEl.innerText = homeP1Fouls
                    }
        
            // HOME TEAM PLAYER 2
                // HOME TEAM PLAYER 2 POINTS FUNCTIONS
                let homeP2Points = 0
                let homePlayer2PointsEl=document.getElementById("homePlayer2Points-el")
                    function homePlayer2PointsOneTally() {
                        homeP2Points = homeP2Points + 1
                        homePlayer2PointsEl.innerText = homeP2Points
                    }

                    function homePlayer2PointsTwoTally() {
                        homeP2Points = homeP2Points + 2
                        homePlayer2PointsEl.innerText = homeP2Points
                    }

                    function homePlayer2PointsThreeTally() {
                        homeP2Points = homeP2Points + 3
                        homePlayer2PointsEl.innerText = homeP2Points
                    }

                    function homePlayer2PointsLessOneTally() {
                        if (homeP2Points > 0) {
                            homeP2Points = homeP2Points - 1} else {homeP2Points = 0}
                            homePlayer2PointsEl.innerText = homeP2Points
                    }

                // HOME TEAM PLAYER 2 REBOUNDS FUNCTIONS
                let homeP2Rebs = 0
                let homePlayer2RebsEl=document.getElementById("homePlayer2Rebs-el")
                    function homePlayer2RebsOneTally() {
                        homeP2Rebs = homeP2Rebs + 1
                        homePlayer2RebsEl.innerText = homeP2Rebs
                    }

                    function homePlayer2RebsLessOneTally() {
                        if (homeP2Rebs > 0) {
                            homeP2Rebs = homeP2Rebs - 1} else {homeP2Rebs = 0}
                            homePlayer2RebsEl.innerText = homeP2Rebs
                    }

                // HOME TEAM PLAYER 2 ASSISTS FUNCTIONS
                let homeP2Assists = 0    
                let homePlayer2AssistsEl=document.getElementById("homePlayer2Assists-el")
                    function homePlayer2AssistsOneTally() {
                        homeP2Assists = homeP2Assists + 1
                        homePlayer2AssistsEl.innerText = homeP2Assists
                    }

                    function homePlayer2AssistsLessOneTally() {
                        if (homeP2Assists > 0) {
                            homeP2Assists = homeP2Assists - 1} else {homeP2Assists = 0}
                            homePlayer2AssistsEl.innerText = homeP2Assists
                    }

                // HOME TEAM PLAYER 2 FOULS FUNCTIONS 
                let homeP2Fouls = 0
                let homePlayer2FoulsEl=document.getElementById("homePlayer2Fouls-el")
                    function homePlayer2FoulsOneTally() {
                        homeP2Fouls = homeP2Fouls + 1
                        homePlayer2FoulsEl.innerText = homeP2Fouls
                    }

                    function homePlayer2FoulsLessOneTally() {
                        if (homeP2Fouls > 0) {
                            homeP2Fouls = homeP2Fouls - 1} else {homeP2Fouls = 0}
                            homePlayer2FoulsEl.innerText = homeP2Fouls
                    }

            // HOME TEAM PLAYER 3
                // HOME TEAM PLAYER 3 POINTS FUNCTIONS
                let homeP3Points = 0
                let homePlayer3PointsEl=document.getElementById("homePlayer3Points-el")
                    function homePlayer3PointsOneTally() {
                        homeP3Points = homeP3Points + 1
                        homePlayer3PointsEl.innerText = homeP3Points
                    }

                    function homePlayer3PointsTwoTally() {
                        homeP3Points = homeP3Points + 2
                        homePlayer3PointsEl.innerText = homeP3Points
                    }

                    function homePlayer3PointsThreeTally() {
                        homeP3Points = homeP3Points + 3
                        homePlayer3PointsEl.innerText = homeP3Points
                    }

                    function homePlayer3PointsLessOneTally() {
                        if (homeP3Points > 0) {
                            homeP3Points = homeP3Points - 1} else {homeP3Points = 0}
                            homePlayer3PointsEl.innerText = homeP3Points
                    }

                // HOME TEAM PLAYER 3 REBOUNDS FUNCTIONS
                let homeP3Rebs = 0
                let homePlayer3RebsEl=document.getElementById("homePlayer3Rebs-el")
                    function homePlayer3RebsOneTally() {
                        homeP3Rebs = homeP3Rebs + 1
                        homePlayer3RebsEl.innerText = homeP3Rebs
                    }

                    function homePlayer3RebsLessOneTally() {
                        if (homeP3Rebs > 0) {
                            homeP3Rebs = homeP3Rebs - 1} else {homeP3Rebs = 0}
                            homePlayer3RebsEl.innerText = homeP3Rebs
                    }

                // HOME TEAM PLAYER 3 ASSISTS FUNCTIONS
                let homeP3Assists = 0    
                let homePlayer3AssistsEl=document.getElementById("homePlayer3Assists-el")
                    function homePlayer3AssistsOneTally() {
                        homeP3Assists = homeP3Assists + 1
                        homePlayer3AssistsEl.innerText = homeP3Assists
                    }

                    function homePlayer3AssistsLessOneTally() {
                        if (homeP3Assists > 0) {
                            homeP3Assists = homeP3Assists - 1} else {homeP3Assists = 0}
                            homePlayer3AssistsEl.innerText = homeP3Assists
                    }

                // HOME TEAM PLAYER 3 FOULS FUNCTIONS 
                let homeP3Fouls = 0
                let homePlayer3FoulsEl=document.getElementById("homePlayer3Fouls-el")
                    function homePlayer3FoulsOneTally() {
                        homeP3Fouls = homeP3Fouls + 1
                        homePlayer3FoulsEl.innerText = homeP3Fouls
                    }

                    function homePlayer3FoulsLessOneTally() {
                        if (homeP3Fouls > 0) {
                            homeP3Fouls = homeP3Fouls - 1} else {homeP3Fouls = 0}
                            homePlayer3FoulsEl.innerText = homeP3Fouls
                    }

        // HOME TEAM PLAYER 4
                // HOME TEAM PLAYER 4 POINTS FUNCTIONS
                let homeP4Points = 0
                let homePlayer4PointsEl=document.getElementById("homePlayer4Points-el")
                    function homePlayer4PointsOneTally() {
                        homeP4Points = homeP4Points + 1
                        homePlayer4PointsEl.innerText = homeP4Points
                    }

                    function homePlayer4PointsTwoTally() {
                        homeP4Points = homeP4Points + 2
                        homePlayer4PointsEl.innerText = homeP4Points
                    }

                    function homePlayer4PointsThreeTally() {
                        homeP4Points = homeP4Points + 3
                        homePlayer4PointsEl.innerText = homeP4Points
                    }

                    function homePlayer4PointsLessOneTally() {
                        if (homeP4Points > 0) {
                            homeP4Points = homeP4Points - 1} else {homeP4Points = 0}
                            homePlayer4PointsEl.innerText = homeP4Points
                    }

                // HOME TEAM PLAYER 4 REBOUNDS FUNCTIONS
                let homeP4Rebs = 0
                let homePlayer4RebsEl=document.getElementById("homePlayer4Rebs-el")
                    function homePlayer4RebsOneTally() {
                        homeP4Rebs = homeP4Rebs + 1
                        homePlayer4RebsEl.innerText = homeP4Rebs
                    }

                    function homePlayer4RebsLessOneTally() {
                        if (homeP4Rebs > 0) {
                            homeP4Rebs = homeP4Rebs - 1} else {homeP4Rebs = 0}
                            homePlayer4RebsEl.innerText = homeP4Rebs
                    }

                // HOME TEAM PLAYER 4 ASSISTS FUNCTIONS
                let homeP4Assists = 0    
                let homePlayer4AssistsEl=document.getElementById("homePlayer4Assists-el")
                    function homePlayer4AssistsOneTally() {
                        homeP4Assists = homeP4Assists + 1
                        homePlayer4AssistsEl.innerText = homeP4Assists
                    }

                    function homePlayer4AssistsLessOneTally() {
                        if (homeP4Assists > 0) {
                            homeP4Assists = homeP4Assists - 1} else {homeP4Assists = 0}
                            homePlayer4AssistsEl.innerText = homeP4Assists
                    }

                // HOME TEAM PLAYER 4 FOULS FUNCTIONS 
                let homeP4Fouls = 0
                let homePlayer4FoulsEl=document.getElementById("homePlayer4Fouls-el")
                    function homePlayer4FoulsOneTally() {
                        homeP4Fouls = homeP4Fouls + 1
                        homePlayer4FoulsEl.innerText = homeP4Fouls
                    }

                    function homePlayer4FoulsLessOneTally() {
                        if (homeP4Fouls > 0) {
                            homeP4Fouls = homeP4Fouls - 1} else {homeP4Fouls = 0}
                            homePlayer4FoulsEl.innerText = homeP4Fouls
                    } 

        // HOME TEAM PLAYER 5
                // HOME TEAM PLAYER 5 POINTS FUNCTIONS
                let homeP5Points = 0
                let homePlayer5PointsEl=document.getElementById("homePlayer5Points-el")
                    function homePlayer5PointsOneTally() {
                        homeP5Points = homeP5Points + 1
                        homePlayer5PointsEl.innerText = homeP5Points
                    }

                    function homePlayer5PointsTwoTally() {
                        homeP5Points = homeP5Points + 2
                        homePlayer5PointsEl.innerText = homeP5Points
                    }

                    function homePlayer5PointsThreeTally() {
                        homeP5Points = homeP5Points + 3
                        homePlayer5PointsEl.innerText = homeP5Points
                    }

                    function homePlayer5PointsLessOneTally() {
                        if (homeP5Points > 0) {
                            homeP5Points = homeP5Points - 1} else {homeP5Points = 0}
                            homePlayer5PointsEl.innerText = homeP5Points
                    }

                // HOME TEAM PLAYER 5 REBOUNDS FUNCTIONS
                let homeP5Rebs = 0
                let homePlayer5RebsEl=document.getElementById("homePlayer5Rebs-el")
                    function homePlayer5RebsOneTally() {
                        homeP5Rebs = homeP5Rebs + 1
                        homePlayer5RebsEl.innerText = homeP5Rebs
                    }

                    function homePlayer5RebsLessOneTally() {
                        if (homeP5Rebs > 0) {
                            homeP5Rebs = homeP5Rebs - 1} else {homeP5Rebs = 0}
                            homePlayer5RebsEl.innerText = homeP5Rebs
                    }

                // HOME TEAM PLAYER 5 ASSISTS FUNCTIONS
                let homeP5Assists = 0    
                let homePlayer5AssistsEl=document.getElementById("homePlayer5Assists-el")
                    function homePlayer5AssistsOneTally() {
                        homeP5Assists = homeP5Assists + 1
                        homePlayer5AssistsEl.innerText = homeP5Assists
                    }

                    function homePlayer5AssistsLessOneTally() {
                        if (homeP5Assists > 0) {
                            homeP5Assists = homeP5Assists - 1} else {homeP5Assists = 0}
                            homePlayer5AssistsEl.innerText = homeP5Assists
                    }

                // HOME TEAM PLAYER 5 FOULS FUNCTIONS 
                let homeP5Fouls = 0
                let homePlayer5FoulsEl=document.getElementById("homePlayer5Fouls-el")
                    function homePlayer5FoulsOneTally() {
                        homeP5Fouls = homeP5Fouls + 1
                        homePlayer5FoulsEl.innerText = homeP5Fouls
                    }

                    function homePlayer5FoulsLessOneTally() {
                        if (homeP5Fouls > 0) {
                            homeP5Fouls = homeP5Fouls - 1} else {homeP5Fouls = 0}
                            homePlayer5FoulsEl.innerText = homeP5Fouls
                    }    
                    
    // away TEAM 
    let totalAwayTeamGamePoints = 0
    let awayTeamPointsEl=document.getElementById("awayTeamPoints-el")
        function awayTeamGamePoints() {
            totalAwayTeamGamePoints = awayP1Points + awayP2Points + awayP3Points + awayP4Points + awayP5Points
            awayTeamPointsEl.innerText = totalAwayTeamGamePoints
        }

    let totalAwayTeamGameFouls = 0
    let awayTeamFoulsEl=document.getElementById("awayTeamFouls-el")
        function awayTeamGameFouls() {
            if (totalAwayTeamGameFouls <4) {
                totalAwayTeamGameFouls = awayP1Fouls + awayP2Fouls + awayP3Fouls + awayP4Fouls + awayP5Fouls} else {totalAwayTeamGameFouls = "Bonus"}
            awayTeamFoulsEl.innerText = totalAwayTeamGameFouls
        }        

        //away TEAM PLAYER 1
            // away TEAM PLAYER 1 POINTS FUNCTIONS
                let awayP1Points = 0
                let awayPlayer1PointsEl=document.getElementById("awayPlayer1Points-el")
                    function awayPlayer1PointsOneTally() {
                        awayP1Points = awayP1Points + 1
                        awayPlayer1PointsEl.innerText = awayP1Points
                    }

                    function awayPlayer1PointsTwoTally() {
                        awayP1Points = awayP1Points + 2
                        awayPlayer1PointsEl.innerText = awayP1Points
                    }

                    function awayPlayer1PointsThreeTally() {
                        awayP1Points = awayP1Points + 3
                        awayPlayer1PointsEl.innerText = awayP1Points
                    }

                    function awayPlayer1PointsLessOneTally() {
                        if (awayP1Points > 0) {
                            awayP1Points = awayP1Points - 1} else {awayP1Points = 0}
                            awayPlayer1PointsEl.innerText = awayP1Points
                    }

                // away TEAM PLAYER 1 REBOUNDS FUNCTIONS
                let awayP1Rebs = 0
                let awayPlayer1RebsEl=document.getElementById("awayPlayer1Rebs-el")
                    function awayPlayer1RebsOneTally() {
                        awayP1Rebs = awayP1Rebs + 1
                        awayPlayer1RebsEl.innerText = awayP1Rebs
                    }

                    function awayPlayer1RebsLessOneTally() {
                        if (awayP1Rebs > 0) {
                            awayP1Rebs = awayP1Rebs - 1} else {awayP1Rebs = 0}
                            awayPlayer1RebsEl.innerText = awayP1Rebs
                    }

                // away TEAM PLAYER 1 ASSISTS FUNCTIONS
                let awayP1Assists = 0    
                let awayPlayer1AssistsEl=document.getElementById("awayPlayer1Assists-el")
                    function awayPlayer1AssistsOneTally() {
                        awayP1Assists = awayP1Assists + 1
                        awayPlayer1AssistsEl.innerText = awayP1Assists
                    }

                    function awayPlayer1AssistsLessOneTally() {
                        if (awayP1Assists > 0) {
                            awayP1Assists = awayP1Assists - 1} else {awayP1Assists = 0}
                            awayPlayer1AssistsEl.innerText = awayP1Assists
                    }

                // away TEAM PLAYER 1 FOULS FUNCTIONS 
                let awayP1Fouls = 0
                let awayPlayer1FoulsEl=document.getElementById("awayPlayer1Fouls-el")
                    function awayPlayer1FoulsOneTally() {
                        awayP1Fouls = awayP1Fouls + 1
                        awayPlayer1FoulsEl.innerText = awayP1Fouls
                    }

                    function awayPlayer1FoulsLessOneTally() {
                        if (awayP1Fouls > 0) {
                            awayP1Fouls = awayP1Fouls - 1} else {awayP1Fouls = 0}
                            awayPlayer1FoulsEl.innerText = awayP1Fouls
                    }
        
            // away TEAM PLAYER 2
                // away TEAM PLAYER 2 POINTS FUNCTIONS
                let awayP2Points = 0
                let awayPlayer2PointsEl=document.getElementById("awayPlayer2Points-el")
                    function awayPlayer2PointsOneTally() {
                        awayP2Points = awayP2Points + 1
                        awayPlayer2PointsEl.innerText = awayP2Points
                    }

                    function awayPlayer2PointsTwoTally() {
                        awayP2Points = awayP2Points + 2
                        awayPlayer2PointsEl.innerText = awayP2Points
                    }

                    function awayPlayer2PointsThreeTally() {
                        awayP2Points = awayP2Points + 3
                        awayPlayer2PointsEl.innerText = awayP2Points
                    }

                    function awayPlayer2PointsLessOneTally() {
                        if (awayP2Points > 0) {
                            awayP2Points = awayP2Points - 1} else {awayP2Points = 0}
                            awayPlayer2PointsEl.innerText = awayP2Points
                    }

                // away TEAM PLAYER 2 REBOUNDS FUNCTIONS
                let awayP2Rebs = 0
                let awayPlayer2RebsEl=document.getElementById("awayPlayer2Rebs-el")
                    function awayPlayer2RebsOneTally() {
                        awayP2Rebs = awayP2Rebs + 1
                        awayPlayer2RebsEl.innerText = awayP2Rebs
                    }

                    function awayPlayer2RebsLessOneTally() {
                        if (awayP2Rebs > 0) {
                            awayP2Rebs = awayP2Rebs - 1} else {awayP2Rebs = 0}
                            awayPlayer2RebsEl.innerText = awayP2Rebs
                    }

                // away TEAM PLAYER 2 ASSISTS FUNCTIONS
                let awayP2Assists = 0    
                let awayPlayer2AssistsEl=document.getElementById("awayPlayer2Assists-el")
                    function awayPlayer2AssistsOneTally() {
                        awayP2Assists = awayP2Assists + 1
                        awayPlayer2AssistsEl.innerText = awayP2Assists
                    }

                    function awayPlayer2AssistsLessOneTally() {
                        if (awayP2Assists > 0) {
                            awayP2Assists = awayP2Assists - 1} else {awayP2Assists = 0}
                            awayPlayer2AssistsEl.innerText = awayP2Assists
                    }

                // away TEAM PLAYER 2 FOULS FUNCTIONS 
                let awayP2Fouls = 0
                let awayPlayer2FoulsEl=document.getElementById("awayPlayer2Fouls-el")
                    function awayPlayer2FoulsOneTally() {
                        awayP2Fouls = awayP2Fouls + 1
                        awayPlayer2FoulsEl.innerText = awayP2Fouls
                    }

                    function awayPlayer2FoulsLessOneTally() {
                        if (awayP2Fouls > 0) {
                            awayP2Fouls = awayP2Fouls - 1} else {awayP2Fouls = 0}
                            awayPlayer2FoulsEl.innerText = awayP2Fouls
                    }

            // away TEAM PLAYER 3
                // away TEAM PLAYER 3 POINTS FUNCTIONS
                let awayP3Points = 0
                let awayPlayer3PointsEl=document.getElementById("awayPlayer3Points-el")
                    function awayPlayer3PointsOneTally() {
                        awayP3Points = awayP3Points + 1
                        awayPlayer3PointsEl.innerText = awayP3Points
                    }

                    function awayPlayer3PointsTwoTally() {
                        awayP3Points = awayP3Points + 2
                        awayPlayer3PointsEl.innerText = awayP3Points
                    }

                    function awayPlayer3PointsThreeTally() {
                        awayP3Points = awayP3Points + 3
                        awayPlayer3PointsEl.innerText = awayP3Points
                    }

                    function awayPlayer3PointsLessOneTally() {
                        if (awayP3Points > 0) {
                            awayP3Points = awayP3Points - 1} else {awayP3Points = 0}
                            awayPlayer3PointsEl.innerText = awayP3Points
                    }

                // away TEAM PLAYER 3 REBOUNDS FUNCTIONS
                let awayP3Rebs = 0
                let awayPlayer3RebsEl=document.getElementById("awayPlayer3Rebs-el")
                    function awayPlayer3RebsOneTally() {
                        awayP3Rebs = awayP3Rebs + 1
                        awayPlayer3RebsEl.innerText = awayP3Rebs
                    }

                    function awayPlayer3RebsLessOneTally() {
                        if (awayP3Rebs > 0) {
                            awayP3Rebs = awayP3Rebs - 1} else {awayP3Rebs = 0}
                            awayPlayer3RebsEl.innerText = awayP3Rebs
                    }

                // away TEAM PLAYER 3 ASSISTS FUNCTIONS
                let awayP3Assists = 0    
                let awayPlayer3AssistsEl=document.getElementById("awayPlayer3Assists-el")
                    function awayPlayer3AssistsOneTally() {
                        awayP3Assists = awayP3Assists + 1
                        awayPlayer3AssistsEl.innerText = awayP3Assists
                    }

                    function awayPlayer3AssistsLessOneTally() {
                        if (awayP3Assists > 0) {
                            awayP3Assists = awayP3Assists - 1} else {awayP3Assists = 0}
                            awayPlayer3AssistsEl.innerText = awayP3Assists
                    }

                // away TEAM PLAYER 3 FOULS FUNCTIONS 
                let awayP3Fouls = 0
                let awayPlayer3FoulsEl=document.getElementById("awayPlayer3Fouls-el")
                    function awayPlayer3FoulsOneTally() {
                        awayP3Fouls = awayP3Fouls + 1
                        awayPlayer3FoulsEl.innerText = awayP3Fouls
                    }

                    function awayPlayer3FoulsLessOneTally() {
                        if (awayP3Fouls > 0) {
                            awayP3Fouls = awayP3Fouls - 1} else {awayP3Fouls = 0}
                            awayPlayer3FoulsEl.innerText = awayP3Fouls
                    }

        // away TEAM PLAYER 4
                // away TEAM PLAYER 4 POINTS FUNCTIONS
                let awayP4Points = 0
                let awayPlayer4PointsEl=document.getElementById("awayPlayer4Points-el")
                    function awayPlayer4PointsOneTally() {
                        awayP4Points = awayP4Points + 1
                        awayPlayer4PointsEl.innerText = awayP4Points
                    }

                    function awayPlayer4PointsTwoTally() {
                        awayP4Points = awayP4Points + 2
                        awayPlayer4PointsEl.innerText = awayP4Points
                    }

                    function awayPlayer4PointsThreeTally() {
                        awayP4Points = awayP4Points + 3
                        awayPlayer4PointsEl.innerText = awayP4Points
                    }

                    function awayPlayer4PointsLessOneTally() {
                        if (awayP4Points > 0) {
                            awayP4Points = awayP4Points - 1} else {awayP4Points = 0}
                            awayPlayer4PointsEl.innerText = awayP4Points
                    }

                // away TEAM PLAYER 4 REBOUNDS FUNCTIONS
                let awayP4Rebs = 0
                let awayPlayer4RebsEl=document.getElementById("awayPlayer4Rebs-el")
                    function awayPlayer4RebsOneTally() {
                        awayP4Rebs = awayP4Rebs + 1
                        awayPlayer4RebsEl.innerText = awayP4Rebs
                    }

                    function awayPlayer4RebsLessOneTally() {
                        if (awayP4Rebs > 0) {
                            awayP4Rebs = awayP4Rebs - 1} else {awayP4Rebs = 0}
                            awayPlayer4RebsEl.innerText = awayP4Rebs
                    }

                // away TEAM PLAYER 4 ASSISTS FUNCTIONS
                let awayP4Assists = 0    
                let awayPlayer4AssistsEl=document.getElementById("awayPlayer4Assists-el")
                    function awayPlayer4AssistsOneTally() {
                        awayP4Assists = awayP4Assists + 1
                        awayPlayer4AssistsEl.innerText = awayP4Assists
                    }

                    function awayPlayer4AssistsLessOneTally() {
                        if (awayP4Assists > 0) {
                            awayP4Assists = awayP4Assists - 1} else {awayP4Assists = 0}
                            awayPlayer4AssistsEl.innerText = awayP4Assists
                    }

                // away TEAM PLAYER 4 FOULS FUNCTIONS 
                let awayP4Fouls = 0
                let awayPlayer4FoulsEl=document.getElementById("awayPlayer4Fouls-el")
                    function awayPlayer4FoulsOneTally() {
                        awayP4Fouls = awayP4Fouls + 1
                        awayPlayer4FoulsEl.innerText = awayP4Fouls
                    }

                    function awayPlayer4FoulsLessOneTally() {
                        if (awayP4Fouls > 0) {
                            awayP4Fouls = awayP4Fouls - 1} else {awayP4Fouls = 0}
                            awayPlayer4FoulsEl.innerText = awayP4Fouls
                    } 

        // away TEAM PLAYER 5
                // away TEAM PLAYER 5 POINTS FUNCTIONS
                let awayP5Points = 0
                let awayPlayer5PointsEl=document.getElementById("awayPlayer5Points-el")
                    function awayPlayer5PointsOneTally() {
                        awayP5Points = awayP5Points + 1
                        awayPlayer5PointsEl.innerText = awayP5Points
                    }

                    function awayPlayer5PointsTwoTally() {
                        awayP5Points = awayP5Points + 2
                        awayPlayer5PointsEl.innerText = awayP5Points
                    }

                    function awayPlayer5PointsThreeTally() {
                        awayP5Points = awayP5Points + 3
                        awayPlayer5PointsEl.innerText = awayP5Points
                    }

                    function awayPlayer5PointsLessOneTally() {
                        if (awayP5Points > 0) {
                            awayP5Points = awayP5Points - 1} else {awayP5Points = 0}
                            awayPlayer5PointsEl.innerText = awayP5Points
                    }

                // away TEAM PLAYER 5 REBOUNDS FUNCTIONS
                let awayP5Rebs = 0
                let awayPlayer5RebsEl=document.getElementById("awayPlayer5Rebs-el")
                    function awayPlayer5RebsOneTally() {
                        awayP5Rebs = awayP5Rebs + 1
                        awayPlayer5RebsEl.innerText = awayP5Rebs
                    }

                    function awayPlayer5RebsLessOneTally() {
                        if (awayP5Rebs > 0) {
                            awayP5Rebs = awayP5Rebs - 1} else {awayP5Rebs = 0}
                            awayPlayer5RebsEl.innerText = awayP5Rebs
                    }

                // away TEAM PLAYER 5 ASSISTS FUNCTIONS
                let awayP5Assists = 0    
                let awayPlayer5AssistsEl=document.getElementById("awayPlayer5Assists-el")
                    function awayPlayer5AssistsOneTally() {
                        awayP5Assists = awayP5Assists + 1
                        awayPlayer5AssistsEl.innerText = awayP5Assists
                    }

                    function awayPlayer5AssistsLessOneTally() {
                        if (awayP5Assists > 0) {
                            awayP5Assists = awayP5Assists - 1} else {awayP5Assists = 0}
                            awayPlayer5AssistsEl.innerText = awayP5Assists
                    }

                // away TEAM PLAYER 5 FOULS FUNCTIONS 
                let awayP5Fouls = 0
                let awayPlayer5FoulsEl=document.getElementById("awayPlayer5Fouls-el")
                    function awayPlayer5FoulsOneTally() {
                        awayP5Fouls = awayP5Fouls + 1
                        awayPlayer5FoulsEl.innerText = awayP5Fouls
                    }

                    function awayPlayer5FoulsLessOneTally() {
                        if (awayP5Fouls > 0) {
                            awayP5Fouls = awayP5Fouls - 1} else {awayP5Fouls = 0}
                            awayPlayer5FoulsEl.innerText = awayP5Fouls
                    }  