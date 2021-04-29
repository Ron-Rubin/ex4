<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Forms</title>
</head>

<body>
    <h1> Welcome </h1>
    <section>
        <?php
        $sName = $_GET["shirtName"];
        $sColor = $_GET["shirtColor"];


        echo  "<h2>The shirt you wanted is " . $sName . "in the color " . $sColor . "</h2>";
    ?>
    </section>
</body>

</html>