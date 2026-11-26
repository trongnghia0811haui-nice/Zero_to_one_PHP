// // tính tuổi và đủ 18 tuổi không
// const currentYear = new Date().getFullYear();

// const birthYear = Number(prompt("Nhập năm sinh:"));

// const age = currentYear - birthYear;

// const isAdult = age >= 18;

// console.log(`Năm hiện tại: ${currentYear}`);
// console.log(`Năm sinh: ${birthYear}`);
// console.log(`Tuổi theo năm sinh: ${age}`);
// console.log(`Đủ 18 tuổi theo năm sinh: ${isAdult}`);

// //Tính chu vi diện tích hcn
// const cD=Number(prompt("Nhập vào chiều dài của hình chữ nhật: "));
// const cR=Number(prompt("Nhập vào chiều rộng của hình chữ nhật: "));

// const chuVi=(cD+cR)*2;
// const dienTich=cD*cR;

// console.log(`Chu vi của hình chữ nhật là: ${chuVi}`);
// console.log(`Diện tích của hình chữ nhật là: ${dienTich}`);

// // Kiểm tra số nguyên nhập vào là chẵn
// const input = prompt("Nhập số nguyên: ");
// const n = Number(input);

// if (input === null || input.trim() === "" || !Number.isInteger(n)) {
//     console.log("Dữ liệu không hợp lệ!");
// } else if (n % 2 === 0) {
//     console.log(`${n} là số chẵn`);
// } else {
//     console.log(`${n} là số lẻ`);
// }

// // Tính tiền sản phẩm có giảm giá
// const giaSp=Number(prompt("Nhập vào giá của sản phẩm: "));
// const soLuong=Number(prompt("Nhập vào số lượng sản phẩm: "))
// const maGiamgia=Number(prompt("Nhâp vào % giảm giá: "));
// const tongTien=(giaSp*soLuong)*(1-maGiamgia/100);
// console.log(`Số tiền bạn cần phải trả là: ${tongTien}`);


// // Nhập số giây, chuyển đổi thành giờ, phút, giây

// const totalSeconds = Number(prompt("Nhập số giây: "));

// const hours = Math.floor(totalSeconds / 3600);
// const minutes = Math.floor((totalSeconds % 3600) / 60);
// const seconds = totalSeconds % 60;

// console.log(`${hours} giờ ${minutes} phút ${seconds} giây`);


// // Nhập điểm Toán hệ số 2, Văn hệ số 2,
// // Anh hệ số 1. Tính điểm trung bình

// const toan = Number(prompt("Nhập điểm Toán: "));
// const van = Number(prompt("Nhập điểm Văn: "));
// const anh = Number(prompt("Nhập điểm Anh: "));

// const diemTB = (toan * 2 + van * 2 + anh) / 5;

// console.log(`Điểm trung bình: ${diemTB.toFixed(2)}`);


// // Kiểm tra người dùng đủ tuổi và đã có tài khoản chưa

// const age = Number(prompt("Nhập tuổi của bạn: "));
// const hasAccount = confirm("Bạn đã có tài khoản chưa?");

// if (age >= 18 && hasAccount) {
//     console.log("Bạn được phép truy cập");
// } else {
//     console.log("Bạn không được phép truy cập");
// }


// // Đổi nhiệt độ Celsius sang Fahrenheit

// const celsius = Number(prompt("Nhập nhiệt độ Celsius: "));

// const fahrenheit = celsius * 9 / 5 + 32;

// console.log(`${celsius}°C = ${fahrenheit}°F`);


// // Tạo thông báo đơn hàng bằng Template Literals

// const customerName = prompt("Nhập tên khách hàng: ");
// const productName = prompt("Nhập tên sản phẩm: ");
// const quantity = Number(prompt("Nhập số lượng: "));
// const price = Number(prompt("Nhập đơn giá: "));

// const total = quantity * price;

// console.log(`
//     THÔNG TIN ĐƠN HÀNG
//     --------------------------------
//     Khách hàng: ${customerName}
//     Sản phẩm: ${productName}
//     Số lượng: ${quantity}
//     Đơn giá: ${price.toLocaleString("vi-VN")} VNĐ
//     Tổng tiền: ${total.toLocaleString("vi-VN")} VNĐ
//     --------------------------------
//     Cảm ơn bạn đã mua hàng!
// `);


