<?php
$name = 'Nguyễn Văn An';
date_default_timezone_set('Asia/Ho_Chi_Minh');
?>
<!doctype html>
<html lang="vi">
<head><meta charset="utf-8"><title>Thông tin PHP</title></head>
<body>
  <h1>Xin chào <?= htmlspecialchars($name, ENT_QUOTES, 'UTF-8') ?></h1>
  <p>Giờ server: <?= date('d/m/Y H:i:s') ?></p>
  <p>Phiên bản PHP: <?= htmlspecialchars(PHP_VERSION, ENT_QUOTES, 'UTF-8') ?></p>
</body>
</html>