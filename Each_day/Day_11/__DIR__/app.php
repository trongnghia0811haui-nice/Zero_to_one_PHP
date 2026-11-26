<?php
require __DIR__ . '/config.php';
echo htmlspecialchars($appName, ENT_QUOTES, 'UTF-8');
echo ' — ';
echo htmlspecialchars($author, ENT_QUOTES, 'UTF-8');