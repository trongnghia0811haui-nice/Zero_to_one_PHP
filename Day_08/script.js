function xepLoai() {
    const diem = Number(prompt("Nhập điểm: "));

    if (diem < 0 || diem > 10 || Number.isNaN(diem)) {
        console.log("Điểm không hợp lệ");
    } else if (diem >= 8) {
        console.log("Học lực Giỏi");
    } else if (diem >= 6.5) {
        console.log("Học lực Khá");
    } else if (diem >= 5) {
        console.log("Học lực Trung bình");
    } else {
        console.log("Học lực Yếu");
    }
}

function kiemTraThu() {
    const thu = Number(prompt("Nhập thứ từ 2 đến 8: "));

    switch (thu) {
        case 2:
            console.log("Thứ hai");
            break;
        case 3:
            console.log("Thứ ba");
            break;
        case 4:
            console.log("Thứ tư");
            break;
        case 5:
            console.log("Thứ năm");
            break;
        case 6:
            console.log("Thứ sáu");
            break;
        case 7:
            console.log("Thứ bảy");
            break;
        case 8:
            console.log("Chủ nhật");
            break;
        default:
            console.log("Thứ không hợp lệ");
    }
}

function bangCuuChuong() {
    for (let i = 2; i <= 9; i++) {
        console.log(`Bảng cửu chương ${i}`);

        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

function tongSoChan() {
    const n = Number(prompt("Nhập N: "));
    let sum = 0;

    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }

    console.log(`Tổng các số chẵn từ 1 đến ${n} là: ${sum}`);
}

function kiemTraSoNguyenTo() {
    const n = Number(prompt("Nhập số nguyên: "));
    let isPrime = true;

    if (n < 2 || !Number.isInteger(n)) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(`${n} là số nguyên tố`);
    } else {
        console.log(`${n} không phải số nguyên tố`);
    }
}

function inSoNguyenTo() {
    for (let n = 2; n <= 100; n++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(n);
        }
    }
}

