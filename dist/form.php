<?php
$name = $_POST['name'];
$product = $_POST['product'];
$tel = $_POST['tel'];
$message = "Имя: {$name} <br> Телефон: {$tel} <br> Товар: {$product}";
mail('vip.41243@gmail.com', 'Новый заказ', $message);