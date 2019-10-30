// State variables

let count;

// Cached element references

const studentCountEl = document.getElementById('student-count');
const liEls = document.querySelectorAll('li');

// Event listeners

/* none */

// Functions

init();

function init() {
    count = liEls.length;
    render();
}

function render() {
    const message = `${count} ${liEls.length > 1 ? 'students' : 'student'}`
    studentCountEl.textContent = message;
}