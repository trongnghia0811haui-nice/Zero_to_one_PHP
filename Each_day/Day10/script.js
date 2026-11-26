"use strict";

const form = document.querySelector('#registration-form');
const tableBody = document.querySelector('#registered-students tbody');
const search = document.querySelector('#student-search');
const searchStatus = document.querySelector('#search-status');
const storageWarning = document.querySelector('#storage-warning');
const formStatus = document.querySelector('#registration-status');
const fields = {
    name: document.querySelector('#full-name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
};
const storageKey = 'day10-students';
let students = [];

function validStudent(value) {
    return value && typeof value === 'object' && !Array.isArray(value) &&
        ['name', 'email', 'birthday', 'gender', 'hobbies', 'faculty', 'notes']
            .every((key) => typeof value[key] === 'string') &&
        value.name.trim() !== '';
}

function loadStudents() {
    try {
        const saved = localStorage.getItem(storageKey);
        if (saved === null) return;
        const data = JSON.parse(saved);
        if (!Array.isArray(data) || !data.every(validStudent)) throw new Error('invalid data');
        // Chỉ lấy các trường cần thiết, kể cả khi dữ liệu cũ có trường thừa.
        students = data.map(({ name, email, birthday, gender, hobbies, faculty, notes }) =>
            ({ name, email, birthday, gender, hobbies, faculty, notes }));
    } catch (error) {
        students = [];
        storageWarning.textContent = 'Không thể đọc dữ liệu đã lưu hoặc dữ liệu không hợp lệ. Danh sách hiện đang trống.';
    }
}

function saveStudents() {
    try {
        localStorage.setItem(storageKey, JSON.stringify(students));
        storageWarning.textContent = '';
    } catch (error) {
        storageWarning.textContent = 'Không thể lưu dữ liệu. Các thay đổi chỉ tồn tại trong trang hiện tại.';
    }
}

function render() {
    const query = search.value.trim().toLocaleLowerCase('vi');
    tableBody.replaceChildren();
    let count = 0;
    students.forEach((student, index) => {
        if (!student.name.toLocaleLowerCase('vi').includes(query)) return;
        count += 1;
        const row = tableBody.insertRow();
        [index + 1, student.name, student.birthday || '—', student.email,
            student.gender || '—', student.hobbies || '—', student.faculty || '—', student.notes || '—']
            .forEach((value) => { row.insertCell().textContent = value; });
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Xóa';
        button.setAttribute('aria-label', `Xóa sinh viên ${student.name}`);
        button.addEventListener('click', () => {
            students.splice(index, 1);
            saveStudents();
            render();
        });
        row.insertCell().append(button);
    });
    searchStatus.textContent = students.length === 0 ? 'Chưa có sinh viên nào.' :
        count === 0 ? 'Không tìm thấy sinh viên phù hợp.' : `Hiển thị ${count} / ${students.length} sinh viên.`;
}

function showError(field, id, message) {
    document.getElementById(id).textContent = message;
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
}

const errors = { name: 'name-error', email: 'email-error', password: 'password-error' };
Object.entries(fields).forEach(([key, field]) => {
    field.addEventListener('input', () => showError(field, errors[key], ''));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameError = fields.name.value.trim() ? '' : 'Vui lòng nhập họ và tên.';
    const emailError = fields.email.value.trim() && fields.email.validity.valid ? '' : 'Vui lòng nhập email hợp lệ.';
    const passwordError = fields.password.value.length >= 6 ? '' : 'Mật khẩu phải có ít nhất 6 ký tự.';
    showError(fields.name, errors.name, nameError);
    showError(fields.email, errors.email, emailError);
    showError(fields.password, errors.password, passwordError);
    if (nameError || emailError || passwordError) {
        formStatus.textContent = '';
        return;
    }

    const gender = form.querySelector('input[name="gender"]:checked');
    const faculty = form.querySelector('#Khoa');
    students.push({
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        birthday: form.querySelector('#birthday').value,
        gender: gender ? (gender.value === 'male' ? 'Nam' : 'Nữ') : '',
        hobbies: Array.from(form.querySelectorAll('input[name="hobbies"]:checked'), (item) => item.value).join(', '),
        faculty: faculty.value ? faculty.selectedOptions[0].textContent : '',
        notes: form.querySelector('#notes').value.trim()
    });
    saveStudents();
    form.reset();
    search.value = '';
    formStatus.textContent = 'Đã thêm sinh viên vào danh sách.';
    render();
});

search.addEventListener('input', render);
loadStudents();
render();
form.querySelector('button[type="submit"]').disabled = false;
