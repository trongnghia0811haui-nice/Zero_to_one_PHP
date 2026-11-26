const students = [
    { id: 1, name: "An", age: 20, score: 8.5 },
    { id: 2, name: "Bình", age: 21, score: 7.0 },
    { id: 3, name: "Cường", age: 20, score: 9.0 },
    { id: 4, name: "Dũng", age: 22, score: 6.5 },
    { id: 5, name: "Hà", age: 21, score: 8.0 }
];

function findMaxScore(students) {
    if (students.length === 0) {
        return null;
    }

    return Math.max(...students.map(s => s.score));
}

function averageScore(students) {
    if (students.length === 0) {
        return null;
    }

    const sum = students.reduce((total, s) => total + s.score, 0);

    return sum / students.length;
}

function filterGoodStudents(students) {
    return students.filter(s => s.score >= 8);
}

function addStudent(students, newStudent) {
    const isExist = students.some(s => s.id === newStudent.id);

    if (isExist) {
        console.log("ID đã tồn tại!");
        return false;
    }

    students.push(newStudent);
    console.log("Thêm sinh viên thành công!");

    return true;
}

function deleteStudent(students, id) {
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        console.log("Không tìm thấy sinh viên!");
        return false;
    }

    students.splice(index, 1);
    console.log("Xóa sinh viên thành công!");

    return true;
}

function searchStudent(students, keyword) {
    return students.filter(s =>
        s.name.toLowerCase().includes(keyword.toLowerCase())
    );
}

function sortStudents(students) {
    return [...students].sort((a, b) => b.score - a.score);
}

console.log("Danh sách sinh viên ban đầu:");
console.table(students);

console.log("Điểm cao nhất:", findMaxScore(students));

console.log("Điểm trung bình:", averageScore(students));

console.log("Sinh viên có điểm >= 8:");
console.table(filterGoodStudents(students));

console.log("Thêm sinh viên:");

addStudent(students, {
    id: 6,
    name: "Minh",
    age: 21,
    score: 9.5
});

console.table(students);

addStudent(students, {
    id: 1,
    name: "Nam",
    age: 20,
    score: 7.5
});

console.log("Xóa sinh viên có ID = 3:");
deleteStudent(students, 3);
console.table(students);

console.log("Tìm kiếm sinh viên có tên chứa AN:");
console.table(searchStudent(students, "AN"));

console.log("Danh sách giảm dần theo điểm:");
console.table(sortStudents(students));

console.log("Danh sách gốc sau khi gọi hàm sắp xếp:");
console.table(students);