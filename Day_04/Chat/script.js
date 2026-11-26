"use strict";

const password = document.querySelector('#password');
if (password) {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'password-toggle';
    toggle.textContent = 'Hiện mật khẩu';
    toggle.setAttribute('aria-controls', 'password');
    password.insertAdjacentElement('afterend', toggle);

    toggle.addEventListener('click', () => {
        const show = password.type === 'password';
        password.type = show ? 'text' : 'password';
        toggle.textContent = show ? 'Ẩn mật khẩu' : 'Hiện mật khẩu';
    });
}

const table = document.querySelector('.table-card table');
if (table) {
    const label = document.createElement('label');
    label.className = 'table-search';
    label.textContent = 'Tìm sinh viên';
    const input = document.createElement('input');
    input.type = 'search';
    input.placeholder = 'Nhập tên, email hoặc khoa...';
    label.append(input);

    const status = document.createElement('p');
    status.className = 'search-status';
    status.setAttribute('aria-live', 'polite');
    table.closest('.table-scroll').before(label, status);

    function filterRows() {
        const query = input.value.trim().toLocaleLowerCase('vi');
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        let count = 0;
        rows.forEach((row) => {
            const matches = row.textContent.toLocaleLowerCase('vi').includes(query);
            row.hidden = !matches;
            if (matches) count += 1;
        });
        status.textContent = !rows.length ? 'Chưa có sinh viên nào được thêm.' :
            count ? `Hiển thị ${count} / ${rows.length} sinh viên.` : 'Không tìm thấy sinh viên phù hợp.';
    }
    input.addEventListener('input', filterRows);
    filterRows();

    const form = document.querySelector('#registration-form');
    if (form) {
        const fullName = form.querySelector('#full-name');
        const notes = form.querySelector('#notes');
        const faculty = form.querySelector('#Khoa');
        const registrationStatus = document.querySelector('#registration-status');

        [fullName, notes].forEach((field) => {
            field.addEventListener('input', () => field.setCustomValidity(''));
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            fullName.setCustomValidity(fullName.value.trim().length >= 3 ? '' : 'Họ và tên phải có ít nhất 3 ký tự.');
            notes.setCustomValidity(notes.value.trim() ? '' : 'Vui lòng nhập ghi chú.');
            if (!form.reportValidity()) return;

            const gender = form.querySelector('input[name="gender"]:checked');
            const hobbies = Array.from(form.querySelectorAll('input[name="hobbies"]:checked'));
            const body = table.tBodies[0];
            const values = [
                body.rows.length + 1,
                fullName.value.trim(),
                form.querySelector('#email').value.trim(),
                form.querySelector('#birthday').value,
                gender ? (gender.value === 'male' ? 'Nam' : 'Nữ') : '—',
                hobbies.length ? hobbies.map((hobby) => hobby.value).join(', ') : '—',
                faculty.selectedOptions[0].textContent,
                notes.value.trim()
            ];
            const row = body.insertRow();
            values.forEach((value) => {
                row.insertCell().textContent = value;
            });

            form.reset();
            if (password && password.type === 'text') {
                form.querySelector('.password-toggle').click();
            }
            input.value = '';
            filterRows();
            registrationStatus.textContent = 'Đã thêm thông tin sinh viên vào bảng.';
        });

        form.querySelector('button[type="submit"]').disabled = false;
    }
}
