<?php

$sendto   = "evgen.webcat@gmail.com"; // почта, на которую будет приходить письмо

    $username = $_POST['name'];
    $usertel = $_POST['tel']; // сохраняем в переменную данные полученные из поля c телефонным номеро
     $question_1 = $_POST['question_1'];
     $question_2 = $_POST['question_2'];
    $question_3 = $_POST['question_3'];
    $question_4 = $_POST['question_4'];
    $question_5 = $_POST['question_5'];

	// Формирование заголовка письма
	$subject  = "Заявка с TerGlobo. Результаты теста.";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	// Формирование тела письма
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заявка с TerGlobo. Результаты теста.</h2>\r\n";
    $msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
    $msg .= "<p><strong>Вы отдыхали в Египте раньше?:</strong> ".$question_1."</p>\r\n";
    $msg .= "<p><strong>Как хотите провести свой отдых?:</strong> ".$question_2."</p>\r\n";
    $msg .= "<p><strong>Сколько вас человек?:</strong> ".$question_3."</p>\r\n";
    $msg .= "<p><strong>Есть ли дети?:</strong> ".$question_4."</p>\r\n";
    $msg .= "<p><strong>Рассматриваете ли вылеты из Москвы или Киева?:</strong> ".$question_5."</p>\r\n";
	$msg .= "</body></html>";


	// отправка сообщения

	@mail($sendto, $subject, $msg, $headers);



?>
