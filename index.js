let homeTimeoutsLeftEl = document.getElementById("homeTimeoutsLeft-el")

let homeTOL = 5

function lessHomeTimeouts() {
    homeTOL = homeTOL - 1
    homeTimeoutsLeftEl.innerText = homeTOL
}

