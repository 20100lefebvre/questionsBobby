<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href='css/style.css'rel="stylesheet" type="text/css"><!--css-->
    <script src='js/index.js'></script><!-- fichier js-->
    <link rel="shortcut icon" type="image/ico" href="images/favicon.ico"><!--favicon-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"><!--font-->
    <title>Jeu de questions</title>
</head>
<body>
<header>
    <!-- texte clignote en CSS -->
    <h1 class="image-clignote">Attention danger</h1>

    <h1 id="beCareful">Aide Bobby à sauver le monde !</h1>

</header>

<div id="container">
    <div id="intro">
        <h1 id="beCareful2">la terre explose dans 2 minutes !!!</h1>
        <div id="text"></div>
        <div id="text2"></div>
        <div id="textB"></div>
        <div id="discussion"></div>
        <div id="discussion2"></div>
        <div id="buttonStart"></div>
    </div>

<?php
// CONNECT

    $server = 'sql.free.fr';
    $login = 'vincent.developpeur';
    $password = 'Motdepasse';
    $nameTable = 'gameQuestions';

    try{
  $bdd = new PDO("mysql:host = $server; dbname = $nameTable; charset=utf8", $login, $password);
    }
    catch (Exception $e)
    {
      die('Erreur: ' . $e->getMessage());
    }

// DATA
$response = $bdd->query('SELECT id, questionE, responseEa, responseEb, responseEc, questionM, responseMa, responseMb, responseMc, questionD, responseDa, responseDb, responseDc FROM gameQuestions ORDER BY RAND() LIMIT 1');
$data = $response->fetch();
?>


    <div id="level">
    <iframe name="frame" style="display:none;"></iframe>
        <div id="questionF">
             <h3>Première question</h3>
             <form name="questionFacile" method="post" target="frame">
                 <?php
                 echo
                "<h4>" . $data['questionE'] . "</h4>";

                echo
                "<ul>" .
                "<li><input type='radio' id='reponseA' name='reponse' value='reponseA'>
                <label for='reponseA'>" . $data['responseEa'] . "</label></li>" .
                 "<li><input type='radio' id='reponseB' name='reponse' value='reponseB'>
                 <label for='reponseB'>" . $data['responseEb'] . "</label></li>" .
                 "<li><input type='radio' id='reponseC' name='reponse' value='reponseC'>
                 <label for='reponseC'>" . $data['responseEc'] . "</label></li>" .
                "</ul>";
                ?>
            <button type="submit" value="" id="btn_questionF"><a href="#questionM">OK</a></button>
            </form>
        </div>
        <div id="questionM">
             <h3>Seconde question</h3>
             <form name="questionMoyenne" method="post" target="frame">
                 <?php
                 echo
                "<h4>" . $data['questionM'] . "</h4>";

                echo
                "<ul>" .
                "<li><input type='radio' id='reponseA' name='reponse' value='reponseA'>
                <label for='reponseA'>" . $data['responseMa'] . "</label></li>" .
                 "<li><input type='radio' id='reponseB' name='reponse' value='reponseB'>
                 <label for='reponseB'>" . $data['responseMb'] . "</label></li>" .
                 "<li><input type='radio' id='reponseC' name='reponse' value='reponseC'>
                 <label for='reponseC'>" . $data['responseMc'] . "</label></li>" .
                "</ul>";
                ?>
            <button type="submit" value="" id="btn_questionM"><a href="#questionD">OK</a></button>
            </form>
        </div>

        <div id="questionD">
            <h3>troisième et dernière question</h3>
            <form  name="questionDifficile" method="post" target="frame">
            <?php
                 echo
                "<h4>" . $data['questionD'] . "</h4>";

                echo
                "<ul>" .
                "<li><input type='radio' id='reponseA' name='reponse' value='reponseA'>
                <label for='reponseA'>" . $data['responseDa'] . "</label></li>" .
                 "<li><input type='radio' id='reponseB' name='reponse' value='reponseB'>
                 <label for='reponseB'>" . $data['responseDb'] . "</label></li>" .
                 "<li><input type='radio' id='reponseC' name='reponse' value='reponseC'>
                 <label for='reponseC'>" . $data['responseDc'] . "</label></li>" .
                "</ul>";
                ?>
                <button type="submit" value="" id="btn_questionD">OK</button>
            </form>
       </div>
    </div>
</div>
<?php
$response -> closeCursor();
?>
<footer>
    <p id="pfooter">©Copyright Vincent Lefebvre Tous droits réservés.</p>
</footer>
</body>
</html>