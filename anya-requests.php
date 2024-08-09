<?php
$txt = null;
$name = $_POST['name'];
$age = $_POST['age'];
$telegram = $_POST['telegram'];
$email = $_POST['email'];
$tattoo = $_POST['tattoo'];
$size = $_POST['size'];
$idea = $_POST['idea'];

$token = "7420338943:AAHmub56NnX9K4A3ncDn5r2o0SAujPjJFDM";
$chat_id = "-4213955120";
$arr = array(
  'фамилия, имя: ' => $name,
  'мне уже есть 18:' => $age,
  'telegram: ' => $telegram,
  'email: ' => $email,
  'место на теле: ' => $tattoo,
  'размер татуировки: ' => $size,
  'опиши, что это будет: ' => $idea,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


?>