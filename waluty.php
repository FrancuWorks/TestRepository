<?php
define("kurs", "4.60");
$euro = 1000;
$zloty = $euro/kurs;

echo('Zgodnie z kursem NBP z nia 20.09.21 '. $euro . '€ po przeliczeni na PLN daje nam ' . $zloty. ' PLN.');
?>