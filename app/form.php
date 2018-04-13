<?php
$name = $_GET['name'];
$product = $_GET['product'];
$tel = $_GET['tel'];
$message = "
Имя: {$name} 
Телефон: {$tel}
Товар: {$product}";
mail('vip.41243@gmail.com', 'Новый заказ', $message);