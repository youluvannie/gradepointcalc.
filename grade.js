function giveGrades() {
    const grading = getGrades();
    switch (true) {
        case grading >= 70 && grading <= 100:
            result = 'Grade A';
            break;
        case grading >= 60 && grading <= 69.9:
            result = 'Grade B';
            break;
        case grading >= 50 && grading <= 59.9:
            result = 'Grade C';
            break;
        case grading >= 45 && grading <= 49.9:
            result = 'Grade D';
            break;
        case grading >= 40 && grading <= 44.9:
            result = 'Grade E';
            break;
        case grading >= 30 && grading <= 39.9:
            result = 'Grade F';
            break;
        default:
            result = 'invalid';
    }
    alert(`You got ${grading}%. ${result}`);
}


function getGrades() {
    const x = document.getElementById("ca1").value;
    const y = document.getElementById("ca2").value;
    const z = document.getElementById("exam").value;
    const a = parseInt(x, 10) + parseInt(y, 10) + parseInt(z, 10);
    const b = (a) / 100;
    const c = (b) * 100;
    const grade = c;

    return (grade);
}