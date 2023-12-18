<?php
date_default_timezone_set("Asia/Bangkok");
?>
<!DOCTYPE html>
<html>

<head>
    <title>Website Pawpet kelompok 5</title>
    <link rel="stylesheet" href="Contact.css">
</head>

<body>
    <div class="nav">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="Care.html">Care</a></li>
            <li><a href="About.html">About</a></li>
            <li><a href="Contact.php">Contact Us</a></li>
        </ul>
    </div>

    <div class="contact-container">
        <div class="left-column">
            <h1>Contact Us</h1>
            <p>Untuk urusan bisnis dan keperluan lainnya, kami telah menyiapkan formulir kontak yang dapat Anda 
                gunakan untuk menghubungi Tim Admin. Selain itu, kami sangat menghargai saran dan kritik yang 
                membangun dari Anda. Anda dapat dengan mudah menghubungi kami melalui formulir yang telah kami sediakan.</p>
            
        </div>
        <div class="right-column">
            <h2>Formulir Kontak</h2>
            <form class ="" action="proses.php" method="POST">
                <label for="">Nama</label>
                <input type="text" name="nama" autocomplete="off"><br><br>

                <label for="">Email</label>
                <input type="email" name="email" autocomplete="off"><br><br>

                <label for="">Subjek</label>
                <input type="text" name="subjek" autocomplete="off"><br><br>

                <label for="">Pesan</label><br>
                <textarea name="pesan" rows="8" cols="80"></textarea><br><br>
                <button type="submit" name="submit" value = <?php echo date("h:i:sa") ?> >Submit</button>
            </form>
        </div>
    </div>
</body>
<footer>
    <p>©2023 Kelompok 5</p>
</footer>
</html>
