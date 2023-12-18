<?php
$koneksi = mysqli_connect("localhost", "root", "", "registrasi");

$nama = $_POST['nama'];
$email = $_POST['email'];
$subjek = $_POST['subjek'];
$pesan = $_POST['pesan'];
$submit = $_POST['submit'];

$query = "INSERT INTO registrasi VALUES('$nama','$email','$subjek','$pesan','$submit')";

mysqli_query($koneksi,$query);

header("Location: Thanks.html");
exit;
?>