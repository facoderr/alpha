<?php

	$from = 'support@mysite.ru';
	$to  = 'test@mymail.ru, test@mymail.ru';

	$name = trim($_POST['name']);
	$phone = trim($_POST['phone']);
	$garland = trim($_POST['garland']);

	$subject = 'Заявка с сайта «Альфа-свет»';

	$message = '<p><strong>Имя:</strong>  ' . $name;
	$message .= '<p><strong>Телефон:</strong> ' . $phone;
	$message .= '<p><strong>Тип гирлянды:</strong> ' . $garland;

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$headers .= 'From:' . $from . "\r\n";

	mail($to, $subject, $message, $headers);

?>