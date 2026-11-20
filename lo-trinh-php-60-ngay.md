# Lộ Trình Học PHP 60 Ngày (8 Giờ/Ngày) – Từ Nền Tảng Đến PHP Fresher

---

## 1. Tổng Quan & Mục Tiêu Đầu Ra

| Hạng mục | Chi tiết |
| :--- | :--- |
| **Định hướng** | Web Developer nền tảng → chuyên sâu PHP Backend (Laravel) & bổ sung Frontend cơ bản |
| **Xuất phát điểm** | Bắt đầu từ con số 0 (chưa yêu cầu kiến thức lập trình trước đó) |
| **Thời hạn** | **60 ngày** (2 tháng) |
| **Thời lượng học** | **8 giờ/ngày** (tổng dự kiến **480 giờ**) |
| **Sản phẩm đầu ra** | **2 dự án thực hành** (PHP thuần MVC + Laravel CRUD) & **1 dự án Portfolio hoàn chỉnh** |

### Mục tiêu năng lực sau 60 ngày
- Nắm vững tư duy lập trình, cú pháp PHP thuần và lập trình hướng đối tượng (OOP).
- Tự xây dựng giao diện web cơ bản bằng HTML, CSS, JavaScript.
- Thiết kế cơ sở dữ liệu quan hệ, viết truy vấn MySQL và kết nối an toàn qua PDO.
- Hiểu và triển khai kiến trúc MVC, xây dựng & kiểm thử RESTful API.
- Thành thạo Laravel Framework để phát triển ứng dụng Backend thực tế.
- Sử dụng Git, GitHub và Postman trong quy trình làm việc.
- Hoàn thiện dự án **Task Management System** trên GitHub, viết được CV và tự tin giải thích source code khi phỏng vấn PHP Fresher.

---

## 2. Lịch Học 8 Giờ/Ngày & Phương Pháp Triển Khai

Không ngồi code liên tục 8 tiếng; chia thành 4 khối tập trung:

| Khung giờ | Hoạt động | Thời lượng |
| :--- | :--- | :---: |
| **08:00 – 10:00** | Học kiến thức mới (đọc tài liệu, xem bài giảng, ghi chú) | 2 giờ |
| **10:15 – 12:15** | Code theo bài học (tự gõ lại ví dụ, giải thích từng dòng code) | 2 giờ |
| **13:30 – 15:30** | Làm bài tập thực hành cụ thể trong ngày (tự giải, hạn chế xem lời giải) | 2 giờ |
| **15:45 – 17:45** | Hoàn thiện bài nâng cao/mini project, commit Git, ghi lại bug & tự kiểm tra | 2 giờ |

### Cấu trúc mỗi ngày học
1. **Lesson:** Học lý thuyết và ví dụ minh họa.
2. **Practice:** Hoàn thành đủ 3 đầu mục bài tập thực hành của ngày đó.
3. **Mini Project:** Đóng gói kết quả thành file/module chạy được.
4. **Code Review:** Tự rà soát hoặc nhờ mentor góp ý cấu trúc code & lỗi sai.
5. **Daily Test:** Tự kiểm tra đầu ra cuối ngày trước khi sang ngày mới.

### Nguyên tắc bắt buộc
- **Phân bổ thời gian:** 30% lý thuyết – 50% thực hành – 20% tự làm bài & ôn tập.
- **Không học vẹt cú pháp:** Luôn hiểu *tại sao* dùng đoạn code đó; không copy-paste khi chưa hiểu bản chất.
- **Ưu tiên nền tảng:** Học thật chắc **OOP** và **SQL** trước khi sang Laravel.
- **Đầu ra rõ ràng:** Mỗi ngày đều có sản phẩm cụ thể hoặc commit đẩy lên GitHub.

---

## 3. Bộ Công Cụ Cài Đặt & Tài Liệu Chính Thức

### Công cụ cần cài (đủ dùng cho 60 ngày)
- **Visual Studio Code:** Trình soạn thảo code (`https://code.visualstudio.com/`)
- **PHP:** Ngôn ngữ lập trình chính (`https://www.php.net/downloads.php`)
- **Composer:** Trình quản lý thư viện PHP (`https://getcomposer.org/`)
- **MySQL:** Hệ quản trị cơ sở dữ liệu (`https://dev.mysql.com/downloads/`)
- **Git & GitHub:** Quản lý phiên bản source code (`https://git-scm.com/downloads`)
- **Postman:** Kiểm thử RESTful API (`https://www.postman.com/downloads/`)

> **Lưu ý môi trường:** Giai đoạn đầu có thể dùng **XAMPP** để chạy nhanh Apache + PHP + MySQL. Khi chuyển sang Laravel, nên dùng PHP CLI, Composer và MySQL độc lập. Chưa cần học Docker trong 2 tháng đầu.

### Tài liệu tham khảo chính
- **PHP Manual (Chính thức):** `https://www.php.net/manual/en/`
- **Laravel Documentation (Chính thức):** `https://laravel.com/docs` *(chọn đúng phiên bản PHP và Laravel tương thích tại thời điểm cài đặt)*
- **W3Schools PHP:** `https://www.w3schools.com/php/`
- **SQLBolt (Thực hành SQL tương tác):** `https://sqlbolt.com/`
- **Git Documentation:** `https://git-scm.com/doc`

---

## 4. Lộ Trình Chi Tiết 60 Ngày & Bài Tập Cụ Thể Từng Ngày

### Giai đoạn 1: Nền tảng lập trình & Web (Ngày 1 – 10)
**Mục tiêu:** Hiểu cách website hoạt động, tạo được giao diện HTML/CSS Responsive và viết được JavaScript cơ bản.

| Ngày | Kiến thức cần học | Bài tập cụ thể trong ngày |
| :---: | :--- | :--- |
| **1** | Cách web hoạt động, Client/Server, HTTP Request/Response, cài VS Code | 1. Cài VS Code + Live Server; tạo `index.html` hiển thị tiêu đề & đoạn văn chạy được trên trình duyệt.<br>2. Mở Chrome DevTools (tab Network), truy cập 1 trang web và ghi lại: Request URL, HTTP Method (`GET`), Status Code (`200`/`304`/`404`).<br>3. Vẽ sơ đồ luồng xử lý từ lúc gõ URL đến lúc trình duyệt hiển thị HTML. |
| **2** | HTML: Heading, Paragraph, Link, Image, List | 1. Tạo `about.html` giới thiệu bản thân gồm: ảnh đại diện (`<img>` có `alt`), họ tên (`<h1>`), mục tiêu (`<p>`), kỹ năng (`<ul>`) và lộ trình (`<ol>`).<br>2. Thêm liên kết sang GitHub/Facebook mở ở tab mới (`target="_blank"`).<br>3. Dùng đường dẫn tương đối (`./images/...`) và rà soát không sót thẻ đóng mở. |
| **3** | HTML Form, Input, Table, Semantic HTML | 1. Dựng `register.html` theo Semantic HTML (`header`, `main`, `section`, `footer`) gồm form đăng ký SV: Họ tên, Email, Mật khẩu, Ngày sinh, Giới tính (`radio`), Sở thích (`checkbox`), Khoa (`select`), Ghi chú (`textarea`).<br>2. Gắn đủ `<label for>`, `placeholder`, `required`, `minlength` cho input.<br>3. Tạo `<table>` (`thead`, `tbody`) liệt kê 5 sinh viên mẫu (STT, Mã SV, Họ tên, Lớp, Trạng thái). |
| **4** | CSS: Selector, Color, Font, Margin, Padding | 1. Tách file `style.css` nhúng vào `about.html` và `register.html`, áp dụng Google Fonts và bảng màu dễ đọc.<br>2. Style bảng danh sách có viền gọn, tô nền xen kẽ (`:nth-child(even)`) và hiệu ứng `:hover` cho nút.<br>3. Tạo 3 class nút tái sử dụng: `.btn-primary`, `.btn-danger`, `.btn-outline`. |
| **5** | CSS Box Model, Display, Position | 1. Dựng trang Profile Card áp dụng `box-sizing: border-box`, `box-shadow`, `border-radius` căn giữa màn hình.<br>2. Tạo thanh menu dính trên cùng (`position: sticky; top: 0`) và nút cuộn lên đầu trang (`position: fixed`).<br>3. Dùng `position: relative/absolute` gắn badge trạng thái ("Online") lên góc ảnh đại diện. |
| **6** | Flexbox, Grid, Responsive Design | 1. Dùng Flexbox dựng Navbar (Logo trái – Menu giữa – Nút Đăng nhập phải) căn giữa theo chiều dọc.<br>2. Dùng CSS Grid dựng trang danh sách 8 sản phẩm (ảnh, tên, giá, nút "Xem chi tiết").<br>3. Viết `@media` query Responsive: Desktop 4 cột (`>= 1024px`), Tablet 2 cột (`768px`), Mobile 1 cột (`< 600px`), test trên DevTools. |
| **7** | JavaScript: Variable, Data Types, Operator | 1. Viết script nhận năm sinh → tính tuổi hiện tại và kiểm tra đủ 18 tuổi hay chưa.<br>2. Viết script tính điểm TB 3 môn (làm tròn 2 chữ số thập phân) và tính chỉ số BMI từ cân nặng/chiều cao.<br>3. Thực hành so sánh `==` vs `===`, ép kiểu `Number()`, `String()`, `Boolean()` và in kết quả ra `console.log`. |
| **8** | Câu lệnh điều kiện (`if/else`, `switch`) & Vòng lặp (`for`, `while`) | 1. Xếp loại học lực (Giỏi/Khá/TB/Yếu) bằng `if/else` và trả tên thứ trong tuần (2–8) bằng `switch`.<br>2. In bảng cửu chương từ 2 đến 9 và tính tổng các số chẵn từ `1` đến `N`.<br>3. Viết thuật toán kiểm tra số nguyên tố và in toàn bộ số nguyên tố từ `1` đến `100`. |
| **9** | Function, Array, Object | 1. Tạo mảng 5 object sinh viên (`id`, `name`, `age`, `score`); viết hàm tìm điểm cao nhất, tính điểm TB cả lớp và lọc SV có `score >= 8`.<br>2. Viết hàm thêm SV mới (chặn trùng `id`), xóa SV theo `id` và tìm kiếm theo tên không phân biệt hoa/thường.<br>3. Sắp xếp danh sách SV giảm dần theo điểm mà không làm biến đổi mảng gốc. |
| **10** | DOM, Event, Form Validation | 1. Bắt sự kiện `submit` trên form đăng ký (Ngày 3): chặn reload (`preventDefault`), kiểm tra tên không rỗng, email đúng định dạng, mật khẩu ≥ 6 ký tự, hiện thông báo lỗi đỏ ngay dưới từng input.<br>2. **Mini Test cuối chặng:** Hoàn thiện trang **Quản lý danh sách sinh viên** bằng JS thuần (thêm SV từ form vào bảng, xóa từng dòng, tìm kiếm realtime theo tên).<br>3. Lưu danh sách sinh viên vào `localStorage` để tải lại trang không bị mất dữ liệu. |

- **Đầu ra ngày 10:** Tự dựng trang web HTML/CSS Responsive, viết JS cơ bản, phân biệt rõ Frontend và Backend.

---

### Giai đoạn 2: PHP từ cơ bản đến OOP (Ngày 11 – 20)
**Mục tiêu:** Nắm chắc PHP thuần, xử lý Form/Session và tư duy lập trình hướng đối tượng (OOP).

| Ngày | Kiến thức cần học | Bài tập cụ thể trong ngày |
| :---: | :--- | :--- |
| **11** | Cài PHP, Composer, XAMPP/PHP CLI; cú pháp PHP cơ bản | 1. Kiểm tra cài đặt (`php -v`, `composer -V`); chạy `hello.php` qua PHP CLI (`php hello.php`) và trình duyệt (`php -S localhost:8000`).<br>2. Tạo `info.php` kết hợp HTML + PHP hiển thị họ tên, ngày giờ server hiện tại và phiên bản PHP.<br>3. Tách biến cấu hình (tên app, tác giả) sang `config.php` rồi nhúng vào in ra giao diện. |
| **12** | Variables, Data Types, Operators, Ép kiểu | 1. Viết script tính lương thực nhận: nhập lương cơ bản, số ngày công, phụ cấp, trừ 10.5% bảo hiểm; định dạng tiền VNĐ bằng `number_format()`.<br>2. Tính điểm TB 3 môn có hệ số (Toán ×2, Văn ×2, Anh ×1) và kiểm tra kiểu biến bằng `var_dump()`.<br>3. Thực hành toán tử 3 ngôi (`?:`) và null coalescing (`??`) để gán giá trị mặc định. |
| **13** | If/Else, Switch, For, While, Foreach | 1. Kiểm tra năm nhuận và viết chương trình tính tiền điện bậc thang (0–50, 51–100, >100 kWh).<br>2. In `N` số Fibonacci đầu tiên và liệt kê các số nguyên tố từ `1` đến `100`.<br>3. Dùng `foreach` duyệt mảng số nguyên tìm max, min, tổng và đếm số phần tử chẵn/lẻ (không dùng hàm `max`/`min` sẵn). |
| **14** | Function, Scope, Parameter, Return | 1. Viết file `helpers.php` gồm 10 hàm có type hint & return type: `isPrime()`, `calcAverage()`, `formatCurrency()`, `slugify()`, `maskEmail()`, `findMax()`, `filterEven()`, `countWords()`, `validatePhone()`, `calcAge()`.<br>2. Viết `test_helpers.php` kiểm thử từng hàm với ít nhất 2 bộ input (dữ liệu chuẩn & dữ liệu biên/rỗng).<br>3. Thực hành biến cục bộ, tham số mặc định và phân biệt truyền tham trị vs tham chiếu (`&$var`). |
| **15** | Array, Associative Array, Multidimensional Array | 1. Tạo mảng đa chiều lưu 6 sinh viên (`id`, `name`, `class`, `scores => [math, lit, eng]`).<br>2. Dùng `array_map`, `array_filter`, `usort` để tính điểm TB từng SV, lọc SV đạt học bổng (`TB >= 8.0`) và sắp xếp giảm dần theo điểm TB.<br>3. Render bảng HTML danh sách sinh viên kèm dòng tổng kết (tổng SV, SV điểm cao nhất). |
| **16** | String, Date/Time, Xử lý dữ liệu | 1. Chuẩn hóa chuỗi họ tên nhập lộn xộn (`"  nGuYen  vAn  aN "` → `"Nguyen Van An"`), tách họ/tên và tạo email tự động (`an.nv@company.com`).<br>2. Dùng `DateTime` tính số ngày còn lại đến deadline, tính thâm niên nhân viên và đổi định dạng `Y-m-d` ↔ `d/m/Y`.<br>3. Tách chuỗi CSV nhân viên bằng `explode()`, kiểm tra email/SĐT hợp lệ bằng `filter_var` và `preg_match`. |
| **17** | `GET`, `POST`, `REQUEST`, Xử lý HTML Form | 1. Tạo form đăng ký sinh viên (`POST`): lọc XSS bằng `htmlspecialchars()`, validate tên, email, tuổi (18–60) và mật khẩu nhập lại khớp nhau.<br>2. Khi có lỗi: giữ lại dữ liệu đã nhập (`old input`) và in thông báo lỗi ngay dưới từng ô; khi hợp lệ: in trang tóm tắt thông tin.<br>3. Làm thanh tìm kiếm bằng `GET` (`?keyword=...&class=...`) lọc mảng SV và giữ lại từ khóa trên ô tìm kiếm. |
| **18** | Session, Cookie, `include`, `require`, Xử lý File | 1. Tách layout chung vào `partials/header.php` & `partials/footer.php`, dùng `require_once` cho `login.php`, `dashboard.php`, `logout.php`.<br>2. Xây dựng luồng đăng nhập dùng `$_SESSION` (chặn truy cập thẳng `dashboard.php` khi chưa login) và checkbox "Ghi nhớ tài khoản" bằng `setcookie()`.<br>3. Ghi lịch sử đăng nhập/đăng xuất vào `logs/auth.log` (`FILE_APPEND`) và đọc/ghi danh sách SV với file `students.json`. |
| **19** | OOP: Class, Object, Constructor, Destructor, Encapsulation | 1. Xây dựng class `Employee` với thuộc tính `private` (`id`, `name`, `age`, `baseSalary`), constructor và getter/setter kiểm tra hợp lệ (`age >= 18`, `baseSalary > 0`).<br>2. Xây dựng class `Student` có phương thức `getAverageScore()` và `getRank()`.<br>3. Khởi tạo 5 đối tượng, hiển thị thành bảng HTML và thử truy cập trực tiếp thuộc tính `private` để hiểu tính đóng gói. |
| **20** | Inheritance, Polymorphism, Abstract Class, Interface, Namespace, Trait | 1. Thiết kế `abstract class Employee` có hàm trừu tượng `calculateSalary(): float`; tạo 2 lớp con `FullTimeEmployee` (lương cứng + thưởng) và `PartTimeEmployee` (số giờ × đơn giá).<br>2. Tạo `interface Exportable` (`toArray(): array`), `trait Timestampable` và cấu hình PSR-4 autoload (`namespace App\Models;`) trong `composer.json`.<br>3. **Mini Test cuối chặng:** Hoàn thiện ứng dụng **Quản lý nhân viên PHP OOP** (lưu JSON): thêm, sửa, xóa, tìm kiếm theo tên và tính tổng quỹ lương bằng tính đa hình. |

- **Đầu ra ngày 20:** Viết PHP thuần rõ ràng, xử lý Form/Session và tổ chức code theo Class/Object chuẩn OOP.

---

### Giai đoạn 3: MySQL, PDO, MVC & REST API (Ngày 21 – 30)
**Mục tiêu:** Thiết kế Database chuẩn, thao tác MySQL an toàn bằng PDO, hiểu kiến trúc MVC và RESTful API.

- **Schema mẫu thực hành (`student_management`):**
  - `classes (id, class_name, description)`
  - `students (id, name, email, phone, class_id)`
  - `subjects (id, subject_name, credits)`
  - `scores (id, student_id, subject_id, score)`

| Ngày | Kiến thức cần học | Bài tập cụ thể trong ngày |
| :---: | :--- | :--- |
| **21** | Database, Table, Primary Key, Foreign Key | 1. Tạo DB `student_management` (`utf8mb4_unicode_ci`) và viết `schema.sql` tạo đủ 4 bảng với `AUTO_INCREMENT` và `FOREIGN KEY ... ON DELETE CASCADE`.<br>2. Vẽ sơ đồ ERD thể hiện rõ quan hệ 1-N (`classes–students`) và N-N (`students–scores–subjects`).<br>3. Viết `seed.sql` chèn dữ liệu mẫu: tối thiểu 3 lớp, 15 sinh viên, 5 môn học và 30 bản ghi điểm. |
| **22** | `SELECT`, `INSERT`, `UPDATE`, `DELETE` | 1. Viết & chạy 20 câu SQL trên `student_management`: thêm 2 SV, sửa SĐT/email theo `id`, xóa bản ghi điểm sai, lọc bằng `LIKE`, `IN`, `BETWEEN`, `LIMIT/OFFSET`.<br>2. Thử chèn `class_id` không tồn tại hoặc `email` trùng để quan sát lỗi ràng buộc MySQL.<br>3. Lưu toàn bộ 20 câu truy vấn kèm ghi chú kết quả vào file `day22_queries.sql`. |
| **23** | `WHERE`, `ORDER BY`, `GROUP BY`, `HAVING` | 1. Viết truy vấn đếm số lượng sinh viên theo từng lớp, sắp xếp giảm dần.<br>2. Tính điểm TB, điểm cao nhất, thấp nhất (`AVG`, `MAX`, `MIN`, `COUNT`) cho từng sinh viên và từng môn học.<br>3. Dùng `HAVING` lọc ra sinh viên có điểm TB ≥ 8.0 và các lớp có từ 3 sinh viên trở lên. |
| **24** | `INNER JOIN`, `LEFT JOIN`, Subquery | 1. Dùng `INNER JOIN` lấy danh sách SV kèm tên lớp; `JOIN` 3 bảng (`students`, `scores`, `subjects`) in bảng điểm chi tiết.<br>2. Dùng `LEFT JOIN` tìm lớp chưa có sinh viên nào và sinh viên chưa có điểm môn nào.<br>3. Viết Subquery tìm các sinh viên có điểm TB cao hơn điểm TB chung của toàn trường. |
| **25** | Index, Constraints, Relationships, Normalization | 1. Kiểm tra 4 bảng theo chuẩn 1NF–3NF; bổ sung `UNIQUE(email)`, `CHECK (score >= 0 AND score <= 10)` và `UNIQUE(student_id, subject_id)`.<br>2. Tạo Index trên `students.name`, `students.class_id`, `scores.student_id`; chạy `EXPLAIN SELECT` trước/sau để so sánh cột `rows`.<br>3. Tạo thêm bảng `users (id, name, email, password, role)` chuẩn bị cho chức năng đăng nhập. |
| **26** | Kết nối PHP – MySQL bằng PDO & Prepared Statement | 1. Viết class `Database` kết nối MySQL qua PDO (bật `ERRMODE_EXCEPTION`, `FETCH_ASSOC`), đọc cấu hình từ `config.php`.<br>2. Viết class `StudentRepository` đủ 5 hàm: `all()`, `findById($id)`, `create($data)`, `update($id, $data)`, `delete($id)` dùng Prepared Statement (`:param`).<br>3. Chạy test đủ 5 thao tác CRUD và xác nhận dữ liệu thay đổi trong MySQL. |
| **27** | SQL Injection, Transaction, Validation | 1. Demo lỗi SQL Injection với `' OR '1'='1` trên câu SQL nối chuỗi → sửa sang Prepared Statement để thấy bị chặn hoàn toàn.<br>2. Viết hàm nhập điểm nhiều môn cùng lúc bọc trong PDO Transaction (`beginTransaction`/`commit`/`rollBack`): có 1 môn điểm > 10 thì rollback toàn bộ.<br>3. Viết class `Validator` kiểm tra `required`, `email`, `min`, `max`, `numeric` trả mảng lỗi rõ ràng. |
| **28** | Kiến trúc MVC (Model – View – Controller), Routing | 1. Dựng thư mục MVC: `public/index.php`, `app/Core/Router.php`, `app/Controllers/`, `app/Models/`, `app/Views/`, cấu hình PSR-4 autoload.<br>2. Viết `Router` hỗ trợ route `GET`/`POST`, ánh xạ URL sang `[Controller, 'action']` và trả trang `404` khi không khớp.<br>3. Xây dựng `HomeController` và `StudentController::index()` render danh sách SV từ Model sang View chung. |
| **29** | Model, View, Controller – CRUD hoàn chỉnh | 1. Hoàn thiện CRUD Sinh viên & Lớp học trong dự án MVC (danh sách, thêm, sửa, xóa qua `POST` có xác nhận).<br>2. Bổ sung tìm kiếm theo tên/email (`?q=...`) và phân trang (`?page=1`, 5–10 dòng/trang).<br>3. Tạo trang thống kê điểm trung bình theo từng sinh viên & từng lớp từ câu SQL `JOIN + GROUP BY`. |
| **30** | HTTP Status Code, REST API, JSON, Git/GitHub, Postman | 1. Tạo `ApiStudentController` cung cấp 5 endpoint JSON đúng HTTP Status (`200`, `201`, `400`, `404`, `422`): `GET/POST /api/students`, `GET/PUT/DELETE /api/students/{id}`.<br>2. Tạo Postman Collection kiểm thử đủ 5 endpoint (cả case thành công & case lỗi) rồi export lưu vào repo.<br>3. **Mini Test cuối chặng:** Hoàn thiện **Student Management System (PHP thuần + MySQL + PDO + MVC + Đăng nhập `password_hash` + REST API)**, đẩy lên GitHub có `.gitignore` sạch. |

- **Đầu ra ngày 30:** Thiết kế DB chuẩn, viết SQL thành thạo, kết nối PDO an toàn, dựng được ứng dụng MVC và REST API test bằng Postman.

---

### Giai đoạn 4: Laravel Framework (Ngày 31 – 42)
**Mục tiêu:** Làm chủ Laravel từ cơ bản đến nâng cao để xây dựng Backend web & REST API theo chuẩn dự án thực tế.

| Ngày | Kiến thức cần học | Bài tập cụ thể trong ngày |
| :---: | :--- | :--- |
| **31** | Laravel là gì, Composer, cài project, cấu trúc thư mục, `.env` | 1. Khởi tạo dự án `composer create-project laravel/laravel student-app`, cấu hình `.env` kết nối MySQL và chạy `php artisan serve`.<br>2. Ghi chú chức năng từng thư mục cốt lõi (`routes/`, `app/Http/`, `app/Models/`, `database/`, `resources/views/`).<br>3. Tạo route `/health` trả JSON tên app, phiên bản Laravel và trạng thái kết nối DB. |
| **32** | Routing, Route Parameters, Named Routes, Route Group | 1. Tạo nhóm route `/admin` (prefix + name prefix) cho `dashboard`, `students`, `classes`.<br>2. Khai báo route có tham số bắt buộc ràng buộc số (`/students/{id}` với `whereNumber`) và tham số tùy chọn (`/classes/{id?}`).<br>3. Dùng `route('...')` thay vì viết cứng URL và chạy `php artisan route:list` để kiểm tra toàn bộ định tuyến. |
| **33** | Controller, Resource Controller, Request, Response | 1. Tạo `StudentController --resource` và gắn `Route::resource('students', StudentController::class)`.<br>2. Thực hành lấy dữ liệu từ `Request` (`input`, `query`, `only`) và trả 3 kiểu response: `view()`, `redirect()->with()`, `response()->json()`.<br>3. Tạo thêm `ClassController` xử lý danh sách và chi tiết lớp học. |
| **34** | Blade Template, Layout Inheritance, Component | 1. Tạo master layout `layouts/app.blade.php` có `@yield('title')`, `@yield('content')`, navbar và vùng hiển thị Flash message.<br>2. Dựng 4 view `students/index`, `create`, `edit`, `show` dùng `@extends`, `@forelse`, `@csrf`, `@method('PUT')`.<br>3. Tách 2 Blade Component tái sử dụng: `<x-alert />` và `<x-badge />`. |
| **35** | Migration, Seeder, Factory | 1. Viết Migration cho 4 bảng `classes`, `students`, `subjects`, `scores` đủ khóa ngoại `constrained()->cascadeOnDelete()` và `unique()`.<br>2. Viết Factory (`ClassFactory`, `StudentFactory`) + `DatabaseSeeder` tạo tự động 5 lớp, 50 sinh viên, 6 môn học và điểm ngẫu nhiên.<br>3. Chạy `php artisan migrate:fresh --seed` kiểm tra tạo lại DB không lỗi. |
| **36** | Eloquent ORM, Model, CRUD với Laravel | 1. Khai báo `$fillable` và `$casts` cho các Model (`Classroom`, `Student`, `Subject`, `Score`).<br>2. Hoàn thiện CRUD Sinh viên bằng Eloquent có tìm kiếm từ khóa và phân trang giữ query string (`paginate(10)->withQueryString()`).<br>3. Bật `SoftDeletes` cho bảng `students` và thêm trang xem/khôi phục (Restore) sinh viên đã xóa. |
| **37** | Eloquent Relationships (`1-1`, `1-N`, `N-N`) | 1. Khai báo quan hệ `Classroom hasMany Student` / `Student belongsTo Classroom` và `Student belongsToMany Subject` kèm cột pivot `score`.<br>2. Hiển thị tên lớp + bảng điểm từng môn của sinh viên bằng Eager Loading (`with(['classroom', 'subjects'])`).<br>3. Đo số lượng câu SQL sinh ra khi thiếu `with()` (N+1 Query) vs có `with()` bằng `DB::enableQueryLog()`. |
| **38** | Request Validation, Form Request | 1. Tạo `StoreStudentRequest` và `UpdateStudentRequest` với đủ rule (`required`, `email`, `unique` bỏ qua chính ID khi update, `exists:classes,id`).<br>2. Viết thông báo lỗi tiếng Việt trong `messages()`, hiển thị `@error` và giữ `old()` trên form Blade.<br>3. Kiểm thử đủ case: thiếu trường, sai email, trùng email khi thêm mới vs khi sửa. |
| **39** | Middleware, Authentication & Authorization | 1. Xây dựng luồng Đăng ký, Đăng nhập, Đăng xuất (bằng `Auth::attempt` + `Hash::make` hoặc Laravel Breeze).<br>2. Tạo Middleware `CheckRole` (`role:admin`) chặn user thường không vào được chức năng thêm/sửa/xóa.<br>3. Viết `StudentPolicy` kiểm soát quyền thao tác và ẩn/hiện nút sửa/xóa trên Blade bằng `@can`. |
| **40** | REST API, API Resource, JSON Response | 1. Cấu hình `routes/api.php` + Sanctum, tạo `Api\StudentController`, `StudentResource` và `StudentCollection`.<br>2. Chuẩn hóa JSON trả về (ẩn cột nhạy cảm, format ngày, lồng object `classroom` và thông tin phân trang).<br>3. Tạo API login trả Bearer Token, bảo vệ route ghi bằng `auth:sanctum` và test đủ luồng trên Postman. |
| **41** | File Upload, Storage, Mail & Exception Handling | 1. Thêm upload ảnh đại diện (`avatar`), validate `mimes:jpg,png,webp|max:2048`, lưu vào `Storage::disk('public')`, chạy `storage:link` và tự xóa ảnh cũ khi cập nhật/xóa SV.<br>2. Tạo Mailable gửi email chào mừng khi thêm SV mới (test qua `MAIL_MAILER=log` hoặc Mailpit).<br>3. Chuẩn hóa JSON lỗi cho API (`404`, `422`, `403`) khi gọi sai ID hoặc thiếu quyền. |
| **42** | Logging, Queue cơ bản, Debugging & Testing | 1. Ghi log nghiệp vụ (`Log::info`/`Log::warning`) cho thao tác tạo/xóa SV, đăng nhập sai; đưa email chào mừng vào Queue (`ShouldQueue`, chạy `php artisan queue:work`).<br>2. Viết tối thiểu 5 Feature Test (PHPUnit/Pest): login, xem danh sách, tạo SV hợp lệ, tạo SV lỗi `422`, user thường bị chặn xóa `403`.<br>3. **Mini Test cuối chặng:** Hoàn thiện ứng dụng **Quản lý sinh viên Laravel (Web + REST API + Auth + Upload ảnh + Tests)** đẩy lên GitHub. |

- **Đầu ra ngày 42:** Thành thạo Routing, Controller, Blade, Migration, Eloquent, Validation, Auth, REST API và viết được Feature Test cơ bản trong Laravel.

---

### Giai đoạn 5: Dự Án Thực Tế – Task Management System (Ngày 43 – 55)
**Mục tiêu:** Chuyển từ học kiến thức sang tư duy triển khai sản phẩm hoàn chỉnh để đưa vào CV/Portfolio.

**Công nghệ sử dụng:** PHP Laravel • MySQL • HTML/CSS/Bootstrap • RESTful API • Git/GitHub • Postman

#### 5.1. Yêu cầu chức năng (8 Module)
| Module | Chức năng chính |
| :--- | :--- |
| **User** | Đăng ký, đăng nhập, quản lý hồ sơ tài khoản |
| **Project & Member** | Tạo/sửa/xóa dự án; thêm/xóa thành viên tham gia dự án |
| **Task & Assignment** | Tạo/sửa/xóa công việc thuộc dự án; giao việc cho thành viên |
| **Status & Priority** | Quản lý trạng thái (`Todo`, `In Progress`, `Done`), độ ưu tiên (`Low`, `Medium`, `High`) & Deadline |
| **Dashboard & Search** | Thống kê công việc; tìm kiếm, lọc đa điều kiện và phân trang |

#### 5.2. Thiết kế Database (tối thiểu 5 bảng)
- `users (id, name, email, password, role)`
- `projects (id, name, description, owner_id)`
- `project_members (id, project_id, user_id)`
- `tasks (id, project_id, title, description, status, priority, due_date)`
- `task_assignments (id, task_id, user_id)`

#### 5.3. Lịch triển khai & Đầu việc cụ thể từng ngày (13 ngày)
| Ngày | Hạng mục chính | Đầu việc & Bài tập thực hiện cụ thể |
| :---: | :--- | :--- |
| **43** | Phân tích yêu cầu, Use Case | 1. Viết `docs/requirements.md` mô tả chi tiết 8 module, 2 vai trò (`Admin`, `Member`) và ma trận phân quyền.<br>2. Liệt kê toàn bộ danh sách màn hình Web và REST API endpoints dự kiến.<br>3. Phác thảo wireframe cho 4 màn hình chính: Dashboard, Danh sách Project, Chi tiết Project/Task, Form giao việc. |
| **44** | Thiết kế ERD & Database | 1. Thiết kế chi tiết 5 bảng (`users`, `projects`, `project_members`, `tasks`, `task_assignments`) rõ kiểu dữ liệu, enum, default, khóa ngoại.<br>2. Xuất sơ đồ ERD lưu tại `docs/erd.png` và đánh dấu các cột cần đánh Index (`tasks.project_id`, `tasks.status`, `tasks.due_date`).<br>3. Liệt kê trước các câu truy vấn chính (task theo project, task của tôi, thống kê status). |
| **45** | Khởi tạo Laravel, Môi trường, Migrations | 1. Tạo repo GitHub `task-management-laravel`, khởi tạo Laravel, cấu trúc thư mục `Services/`, `Policies/`, `Requests/`.<br>2. Viết đủ 5 Migration + Model + Relationships + Factory + Seeder (1 Admin, 5 Member, 3 Project, 20 Task mẫu).<br>3. Chạy `migrate:fresh --seed` thành công, push commit khởi tạo và áp dụng quy trình nhánh `feature/...`. |
| **46** | Authentication | 1. Hoàn thiện trang Đăng ký, Đăng nhập, Đăng xuất và Hồ sơ cá nhân (đổi tên, đổi mật khẩu có kiểm tra mật khẩu cũ).<br>2. Áp dụng hash mật khẩu và giới hạn tần suất (`throttle`) cho route login.<br>3. Xây dựng API `/api/register`, `/api/login`, `/api/logout`, `/api/me` bằng Sanctum và test trên Postman. |
| **47** | Quản lý User & Phân quyền | 1. Tạo Middleware `Admin` + trang quản lý User (chỉ Admin được xem danh sách, đổi role, khóa/mở tài khoản).<br>2. Viết `ProjectPolicy` và `TaskPolicy`: chỉ Owner/Member được xem Project; chỉ Owner/Admin được sửa/xóa Project.<br>3. Test thực tế bằng 2 tài khoản khác nhau, thử vào URL project người khác để xác nhận trả đúng `403 Forbidden`. |
| **48** | CRUD Project | 1. Xây dựng `ProjectService`, `StoreProjectRequest`, `UpdateProjectRequest`, `ProjectController` và `Api\ProjectController`.<br>2. Hoàn thiện danh sách Project (chỉ hiện dự án có quyền truy cập, kèm số thành viên và `%` hoàn thành), thêm/sửa/xóa.<br>3. Tự động gán `owner_id` và thêm Owner vào `project_members` trong DB Transaction khi tạo dự án mới. |
| **49** | Quản lý thành viên Project | 1. Làm giao diện & API thêm thành viên vào Project (validate user tồn tại & chặn thêm trùng).<br>2. Làm chức năng xóa thành viên khỏi Project (chặn xóa chính Owner, xử lý gỡ assignment liên quan).<br>3. Hiển thị danh sách thành viên trong chi tiết Project kèm số Task mỗi người đang đảm nhận. |
| **50** | CRUD Task | 1. Tạo `TaskService`, `StoreTaskRequest`, `UpdateTaskRequest`, `TaskController` và `Api\TaskController` (`/projects/{project}/tasks`).<br>2. Hoàn thiện thêm/sửa/xóa/chi tiết Task đủ trường: tiêu đề, mô tả, status, priority, `due_date >= today`.<br>3. Kiểm tra `TaskPolicy` chặn user ngoài dự án gửi request giả mạo `project_id`. |
| **51** | Giao việc, Trạng thái, Deadline | 1. Triển khai giao Task cho 1 hoặc nhiều thành viên thuộc dự án (kiểm tra user nằm trong `project_members`, lưu bằng `sync()`).<br>2. Làm thao tác đổi nhanh trạng thái Task (`Todo` → `In Progress` → `Done`) và tô đỏ các Task quá hạn chưa xong.<br>3. Tạo trang "Công việc của tôi" (`/my-tasks`) gom toàn bộ Task được giao trên mọi dự án, sắp xếp theo deadline gần nhất. |
| **52** | Dashboard Thống kê & API | 1. Viết truy vấn thống kê cho Dashboard: tổng Project, tổng Task, số Task theo từng status, số Task quá hạn và top 5 Task sắp tới hạn.<br>2. Tích hợp biểu đồ (Chart.js) biểu diễn tỉ lệ trạng thái & độ ưu tiên công việc.<br>3. Tạo endpoint `GET /api/dashboard/summary` trả số liệu JSON chuẩn theo quyền user đang đăng nhập. |
| **53** | Search, Filter & Pagination | 1. Viết Eloquent Scope (`scopeFilter`) lọc Task đa điều kiện: từ khóa, trạng thái, mức ưu tiên, người được giao, khoảng deadline & sắp xếp.<br>2. Áp dụng phân trang (`paginate(10)->withQueryString()`) thống nhất cho cả Web và API.<br>3. Kiểm tra không còn lỗi N+1 Query trên trang danh sách (`with(['assignees', 'project'])`, `withCount('tasks')`). |
| **54** | Kiểm thử, Tối ưu SQL & Bảo mật | 1. Viết tối thiểu 10 Feature Test phủ Auth, phân quyền `403`, CRUD Project/Task, giao việc, lọc & phân trang, API JSON.<br>2. Rà soát bảo mật: XSS (`{{ }}`), CSRF, `$fillable`, ẩn `password` trong API Resource, chạy `EXPLAIN` kiểm tra truy vấn chậm.<br>3. Refactor Controller dài sang Service/FormRequest và sửa triệt để các bug phát hiện được. |
| **55** | Hoàn thiện UI, `README.md` & MVP | 1. Chỉnh giao diện Responsive gọn gàng, bổ sung trạng thái rỗng (empty state) và trang lỗi tùy biến (`403`, `404`).<br>2. Chụp ảnh màn hình chức năng + ảnh ERD; viết `README.md` hoàn chỉnh (cài đặt từng bước, tài khoản demo, bảng API + file Postman).<br>3. Tự clone lại repo sang thư mục mới và cài theo đúng `README.md` để xác nhận chạy mượt từ đầu. |

#### 5.4. Tiêu chí chất lượng & bảo mật bắt buộc
- Người dùng **không được truy cập** dự án hoặc công việc mà họ không có quyền.
- Không lưu mật khẩu dạng plaintext (bắt buộc hash bằng `bcrypt`/`Hash::make`).
- Kiểm tra dữ liệu đầu vào (Validation) cho mọi request.
- Mọi danh sách dữ liệu đều có phân trang (`pagination`).
- Không lộ dữ liệu nhạy cảm (`password`, token nội bộ...) trong JSON API.
- Tách bạch cấu trúc code rõ ràng (Service/FormRequest/Policy), không dồn toàn bộ logic vào Controller.

---

### Giai đoạn 6: Đóng Gói, Triển Khai & Chuẩn Bị Phỏng Vấn (Ngày 56 – 60)
**Mục tiêu:** Hệ thống hóa kiến thức, hoàn thiện hồ sơ ứng tuyển và sẵn sàng phỏng vấn PHP Fresher.

| Ngày | Nội dung | Bài tập & Đầu việc cụ thể trong ngày |
| :---: | :--- | :--- |
| **56** | Ôn PHP thuần, OOP, SQL, MVC | 1. Tự viết câu trả lời ngắn gọn (3–5 dòng + 1 ví dụ code) cho câu hỏi 1–8 trong bộ 12 chủ đề phỏng vấn (không chép văn mẫu).<br>2. Tự giải 3 bài live-coding trong 45 phút không mở Google: đếm tần suất ký tự bằng PHP, viết 1 câu SQL `LEFT JOIN + GROUP BY + HAVING`, thiết kế class OOP có Interface.<br>3. Lập danh sách điểm còn yếu để ôn bù ngay cuối ngày. |
| **57** | Ôn Laravel, REST API, Auth & Giải thích dự án | 1. Tự trả lời câu hỏi 9–12 kèm dẫn chứng trực tiếp bằng file code thật trong dự án Task Management.<br>2. Viết dàn ý trình bày dự án 5 phút: bài toán, sơ đồ 5 bảng DB, luồng Policy phân quyền, xử lý N+1 Query và 2 bug khó nhất đã tự giải quyết.<br>3. Tự nói thành tiếng (hoặc quay video) trình bày dự án 2 lượt, canh đúng thời gian. |
| **58** | Deploy bản demo & Dọn GitHub | 1. Deploy Task Management System lên môi trường live (tắt `APP_DEBUG=false`), seed sẵn tài khoản demo Admin & Member.<br>2. Kiểm thử toàn bộ chức năng chính trực tiếp trên link demo (login, tạo project/task, lọc, biểu đồ, API).<br>3. Dọn profile GitHub: pin 2 repo tốt nhất (`Task Management Laravel`, `Student Management PHP MVC`) và gắn link demo vào `README.md`. |
| **59** | Viết CV PHP Fresher & Hồ sơ ứng tuyển | 1. Soạn CV 1 trang chuẩn kỹ thuật (nhóm kỹ năng rõ ràng; mô tả dự án cụ thể công nghệ, số bảng DB, tính năng cốt lõi, link GitHub & Demo).<br>2. Nhờ mentor/đàn anh review CV, sửa các câu mô tả chung chung thành kết quả kỹ thuật cụ thể.<br>3. Tổng hợp 15–20 tin tuyển dụng PHP Fresher/Intern, đối chiếu JD để bổ sung từ khóa kỹ thuật còn thiếu. |
| **60** | Thi thử phỏng vấn & Tổng kết | 1. Thực hiện 1 buổi Mock Interview 45–60 phút (20p hỏi lý thuyết + 20p demo & hỏi xoáy code dự án + 15p bài tập PHP/SQL nhanh).<br>2. Tự chấm điểm theo thang 10 cho từng mảng: Web cơ bản, PHP/OOP, SQL, Laravel, Dự án, Giao tiếp kỹ thuật.<br>3. Chốt danh sách lỗ hổng cần vá trong 2 tuần tiếp theo và bắt đầu gửi CV ứng tuyển. |

#### 12 chủ đề phỏng vấn PHP Fresher trọng tâm cần nắm chắc
1. PHP là gì? Vòng đời một HTTP Request trong PHP hoạt động như thế nào?
2. Phân biệt `GET` và `POST`.
3. Phân biệt `Session` và `Cookie`.
4. Phân biệt `Abstract Class` và `Interface`.
5. 4 tính chất của OOP và ví dụ áp dụng thực tế.
6. Mô hình MVC hoạt động như thế nào?
7. SQL Injection là gì? Cách phòng chống bằng Prepared Statement.
8. Phân biệt `INNER JOIN` và `LEFT JOIN`.
9. Laravel Eloquent ORM là gì? Vấn đề N+1 Query và cách xử lý cơ bản.
10. Middleware trong Laravel dùng để làm gì?
11. Migration, Seeder và Factory dùng để làm gì?
12. Phân biệt Authentication (xác thực) và Authorization (phân quyền).

---

## 5. Tiêu Chí Đánh Giá Năng Lực & Checklist Tiến Độ

### 5.1. Bảng mốc kiểm tra (Checkpoint)
| Mốc | Tiêu chí đạt |
| :---: | :--- |
| **Ngày 10** | Tự làm website HTML/CSS/JS không cần xem hướng dẫn |
| **Ngày 20** | Tự viết chương trình quản lý nhân viên bằng PHP OOP độc lập |
| **Ngày 30** | Tạo ứng dụng PHP CRUD + MVC kết nối MySQL bằng PDO & có REST API |
| **Ngày 42** | Xây dựng ứng dụng Laravel CRUD, Auth, Upload ảnh, REST API và Feature Test cơ bản |
| **Ngày 55** | Dự án **Task Management System** chạy đầy đủ chức năng, có phân quyền, Test & README |
| **Ngày 60** | Tự giải thích được source code, quyết định thiết kế DB và vượt qua phỏng vấn thử |

**Thang điểm đánh giá:**
- **0–4 điểm:** Chưa hiểu kiến thức.
- **5–6 điểm:** Hiểu nhưng còn phụ thuộc hướng dẫn.
- **7–8 điểm:** Tự thực hiện độc lập.
- **9–10 điểm:** Giải thích tốt và áp dụng linh hoạt.

> **Điều kiện chuyển giai đoạn:** Phải đạt tối thiểu **7/10** ở bài kiểm tra cuối mỗi chặng. Nếu chưa đạt, dành thêm 1–2 ngày củng cố thay vì cố chạy theo lịch.

### 5.2. Checklist tự theo dõi tiến độ (19 đầu mục)
- [ ] **Giai đoạn 1:** Hiểu cấu trúc web, tạo trang HTML/CSS Responsive
- [ ] **Giai đoạn 1:** Viết JS cơ bản, thao tác DOM & Form Validation
- [ ] **Giai đoạn 2:** Nắm vững cú pháp PHP, Array và Function
- [ ] **Giai đoạn 2:** Xử lý Form HTML, Session và Cookie bằng PHP
- [ ] **Giai đoạn 2:** Hiểu OOP (Class, Inheritance, Interface) & hoàn thành bài quản lý nhân viên
- [ ] **Giai đoạn 3:** Thiết kế được Database quan hệ (PK, FK, chuẩn hóa)
- [ ] **Giai đoạn 3:** Viết thành thạo SQL (`JOIN`, `GROUP BY`, `HAVING`, Subquery)
- [ ] **Giai đoạn 3:** Kết nối PHP – MySQL bằng PDO & chống SQL Injection
- [ ] **Giai đoạn 3:** Hiểu MVC, tạo REST API cơ bản, dùng Git và Postman
- [ ] **Giai đoạn 4:** Thành thạo Laravel Routing, Controller và Blade Template
- [ ] **Giai đoạn 4:** Sử dụng Migration, Seeder, Factory và Eloquent ORM/Relationships
- [ ] **Giai đoạn 4:** Triển khai Validation, Middleware, Authentication, API Resource & Feature Test
- [ ] **Giai đoạn 5:** Hoàn thiện phân tích yêu cầu & ERD cho Task Management System
- [ ] **Giai đoạn 5:** Hoàn thiện chức năng cốt lõi (Auth, phân quyền, CRUD Project/Task, giao việc)
- [ ] **Giai đoạn 5:** Hoàn thiện Dashboard, Search/Filter/Pagination & kiểm thử bảo mật
- [ ] **Giai đoạn 5:** Đẩy source code sạch lên GitHub kèm `README.md` chi tiết
- [ ] **Giai đoạn 6:** Deploy bản demo & hoàn thiện CV PHP Fresher
- [ ] **Giai đoạn 6:** Trả lời tốt 12 chủ đề phỏng vấn trọng tâm
- [ ] **Giai đoạn 6:** Vượt qua buổi phỏng vấn thử (Mock Interview)

---

## 6. Định Hướng Phát Triển Sau 60 Ngày

Sau khi hoàn thành dự án đầu tiên và nắm rõ điểm mạnh của bản thân, chọn chuyên sâu một trong hai hướng:

| Hướng phát triển | Lộ trình tiếp theo |
| :--- | :--- |
| **PHP Backend Developer** *(ưu tiên nếu chưa rõ hướng)* | PHP nâng cao, Laravel chuyên sâu, tối ưu MySQL & Index, Redis & Queue, Docker, Testing nâng cao, System Design |
| **Fullstack PHP Developer** | PHP Laravel + JavaScript nâng cao (ES6+, Async), Vue.js hoặc React, kiến trúc Frontend & tích hợp SPA với REST API |
