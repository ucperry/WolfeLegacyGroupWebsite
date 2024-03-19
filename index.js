let homeTimeoutsLeftEl = document.getElementById("homeTimeoutsLeft-el")
let awayTimeoutsLeftEl = document.getElementById("awayTimeoutsLeft-el")

let homeTOL = 5
let awayTOL = 5

function lessHomeTimeouts() {
    homeTOL = homeTOL - 1
    homeTimeoutsLeftEl.innerText = homeTOL
}

function lessAwayTimeouts() {
    awayTOL = awayTOL - 1
    awayTimeoutsLeftEl.innerText = awayTOL
}