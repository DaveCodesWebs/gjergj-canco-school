<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/PHPMailer/src/Exception.php";
require __DIR__ . "/PHPMailer/src/PHPMailer.php";
require __DIR__ . "/PHPMailer/src/SMTP.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid request"]);
    exit;
}

$firstName = trim($data["firstName"] ?? "");
$lastName = trim($data["lastName"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$subject = trim($data["subject"] ?? "");
$message = trim($data["message"] ?? "");

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();

    $mail->Host = "mail.gjergjcanco.edu.al";
    $mail->SMTPAuth = true;

    $mail->Username = "contact@gjergjcanco.edu.al";
    $mail->Password = "$MwzjbY-J9YI?M]?";

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->CharSet = "UTF-8";

    $mail->setFrom(
        "contact@gjergjcanco.edu.al",
        "Gjergj Canco Website"
    );

    $mail->addAddress("hazelaze312@gmail.com");

    if ($email !== "") {
        $mail->addReplyTo($email, "$firstName $lastName");
    }

    $mail->Subject = "Kontakt: $subject";

    $mail->Body =
"Emri: $firstName $lastName

Email: $email

Telefoni: $phone

Subjekti:
$subject

Mesazhi:

$message";

    $mail->send();

    echo json_encode([
        "success" => true
    ]);

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "error" => $mail->ErrorInfo
    ]);
}