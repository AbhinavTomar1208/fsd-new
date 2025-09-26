// script.js
let students = [];

function renderTable(Allstud) {
    const tbody = document.querySelector("#studentsTable tbody");
    tbody.innerHTML = "";
    Allstud.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${student.name}</td><td>${student.marks}</td>`;
        tbody.appendChild(row);
    });
    document.getElementById("totalStudents").textContent = `Total students: ${Allstud.length}`;
}
function PassedStudents() {
    const passed = students.filter(s => s.marks >= 40);
    if(passed.length === 0) return alert("No passed students!");
    const names = passed.map(s => s.name).join(", ");
    renderTable(passed);
}

function showHighest() {
    if(students.length === 0) return alert("No students!");
    const highest = students.reduce((max, s) => s.marks > max.marks ? s : max, students[0]);
    renderTable([highest]);
}

function showAverage() {
    if(students.length === 0) return alert("No students!");
    const avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
    alert(`Average Marks: ${avg.toFixed(2)}`);
}

function sortByMarks() {
    students.sort((a, b) => b.marks - a.marks);
    renderTable(students);
}

function removeLast() {
    if(students.length > 0) {
        students.pop();
        renderTable(students);
    }
}

function resetSample() {
    students = [];
    renderTable(students);
}

function addStudent() {
    const name = document.getElementById("studentName").value.trim();
    const marks = parseInt(document.getElementById("studentMarks").value);
    if (!name || isNaN(marks) || marks < 0 || marks > 100) {
        alert("Enter valid student name and marks (0-100)");
        return;
    }
    students.push({ name, marks });
    renderTable();
    document.getElementById("studentName").value = "";
    document.getElementById("studentMarks").value = "";
}

document.getElementById("studentMarks").addEventListener("keydown", function(e) {
    if(e.key === "Enter") addStudent();
});

window.onload = renderTable;
