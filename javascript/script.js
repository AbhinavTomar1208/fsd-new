// script.js
let students = [];

function renderTable() {
    const tbody = document.querySelector("#studentsTable tbody");
    tbody.innerHTML = "";
    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${student.name}</td><td>${student.marks}</td>`;
        tbody.appendChild(row);
    });
    document.getElementById("totalStudents").textContent = `Total students: ${students.length}`;
}

function showHighest() {
    if(students.length === 0) return alert("No students!");
    const highest = students.reduce((max, s) => s.marks > max.marks ? s : max, students[0]);
    alert(`Highest: ${highest.name} (${highest.marks})`);
}

function showAverage() {
    if(students.length === 0) return alert("No students!");
    const avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
    alert(`Average Marks: ${avg.toFixed(2)}`);
}

function sortByMarks() {
    students.sort((a, b) => b.marks - a.marks);
    renderTable();
}

function removeLast() {
    if(students.length > 0) {
        students.pop();
        renderTable();
    }
}

function resetSample() {
    students = [];
    renderTable();
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
