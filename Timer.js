export default class Timer {
    constructor(root) {
       root.innerHTML = Timer.getHTML();
    }


    static getHTML() {
        return `
            <span class="timer__part timer__part--mintutes">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--seconds">00</span>
        `;
    }
}