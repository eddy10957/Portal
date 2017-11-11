<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>Minerva</title>
  <!-- Bootstrap core CSS-->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <!-- Custom styles for this template-->
  <link href="css/sb-admin.css" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top">

  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="index.php?action=home"><p style="float: left; font-size">Minerva</p><p style="float: left; font-size:50%;">1.0</p></a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <a class="nav-link" href="index.php?action=home">
            <i class="fa fa-fw fa-home"></i>
            <span class="nav-link-text">Home</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <a class="nav-link" href="index.php?action=ricerca">
            <i class="fa fa-fw fa-search"></i>
            <span class="nav-link-text">Ricerca</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
          <a class="nav-link" href="index.php?action=toolbox">
            <i class="fa fa-fw fa-wrench"></i>
            <span class="nav-link-text">Toolbox</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
          <a class="nav-link" href="#">
            <i class="fa fa-fw fa-map"></i>
            <span class="nav-link-text">Maps</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <a class="nav-link" href="index.php?action=filtro">
            <i class="fa fa-fw fa-filter"></i>
            <span class="nav-link-text">Filtro</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <a class="nav-link" href="index.php?action=filtro">
            <i class="fa fa-fw fa-book"></i>
            <span class="nav-link-text">Biblioteca</span>
          </a>
        </li>
        <?php
            if(isset($_SESSION["logged"])){
                if($_SESSION["logged"] && ($_SESSION["user"]=="Segreteria" || $_SESSION["user"]=="Senato")){
                    echo '<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">' .
                              '<a class="nav-link" href="#">' .
                                '<i class="fa fa-fw fa-archive"></i>' .
                                '<span class="nav-link-text"> Segreteria</span>' .
                              '</a>' .
                            '</li>';
                }
            }
        ?>
      </ul>
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="content-wrapper">
      <div class="container-fluid"  style="padding: 20px;">
      <!-- Work Area -->
      <?php
        if(isset($_SESSION["logged"])){
            if($_SESSION["logged"]==true){
                if(isset($_GET["action"])){
                    $action = $_GET["action"];
                    switch($action){

                        case "":
                        case "home":
                            require_once("modules/module_home.php");
                            break;

                        case "ricerca":
                            require_once("modules/module_ricerca.php");
                            break;

                        case "toolbox":
                            require_once("modules/module_toolbox.php");
                            break;

                        case "filtro":
                            require_once("modules/module_filtro.php");
                            break;


                        default:
                            echo "action: " . $action;
                            break;
                    }
                }
                else{
                    require_once("modules/module_home.php");
                }
            }
            else{
                require_once("modules/module_login.php");
            }
        }
        else{
            require_once("modules/module_login.php");
        }

      ?>
    </div>
    <!-- /.content-wrapper-->
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <small>Copyright © Corsari Neri 2017</small>
        </div>
      </div>
    </footer>
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fa fa-angle-up"></i>
    </a>
    <!-- Logout Modal-->

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/popper/popper.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin.min.js"></script>
    <script>
        $(document).ready(function(){
            if(typeof(onmoduleload)==="function"){
                onmoduleload();
            }

            <?php if(!isset($_SESSION["logged"])) echo 'setTimeout(function(){$("#overlay").hide();}, 2000);' ?>
        });
    </script>
  </div>
  <?php if(!isset($_SESSION["logged"])) echo '<div id="overlay"></div>' ?>
</body>

</html>
