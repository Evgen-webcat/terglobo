<?php

$sendto   = "evgen.webcat@gmail.com"; // почта, на которую будет приходить письмо

	$usertel = $_POST['tel'];; // сохраняем в переменную данные полученные из поля c телефонным номеро



	// Формирование заголовка письма
	$subject  = "Заявка с TerGlobo. Горящая акция!";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	// Формирование тела письма
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заявка с TerGlobo. Горящая акция!</h2>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
	$msg .= "</body></html>";


	// отправка сообщения

	@mail($sendto, $subject, $msg, $headers);



?>
