<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Dimitri Ziti Portofolio</title>
  <link rel="stylesheet" href="./style/css/index.css">
  <style media="screen">
    .app {
      height: 100vh;
      width: calc(100% - 312px);
      float: left;
      position: relative;
    }
  </style>
</head>
<body>
  <div class="app">
    <?php include_once( './include/_header.include.php' ); ?>
    <?php include_once( './include/_main.include.php' ); ?>
  </div>
  <?php include_once( './include/_sidebar.include.php' ); ?>

  <script src="./script/app.js"></script>
</body>
</html>
