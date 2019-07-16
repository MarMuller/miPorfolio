<div id="migaleria" class="margin100">

  <div class="text-maxwidth">
    <div class="centerText whiteFont">
      <h1>Lorem ipsum dolor sit amet</h1>
      <h3 class="centerText" style="color:#ccc; margin-bottom:50px;">#Ilustraciones</h3>
    </div>
  </div>

  <div class="myGallery">

    <?php
    // la info de los proyectos está acá:
    include 'php/gallery-data.php';
    ?>

    <ul>

      <?php
        $num = 0;
        foreach ($proyectos as $proyecto) {
            echo '

            <li class="previewGallery">
              '.$proyectos[$num]["name"].'<br>
              '.$proyectos[$num]["description"].'<br>
              '.$proyectos[$num]["date"].'<br>
            </li>

            ';

            $num = $num + 1;
        }

      ?>

    </ul>

  </div>


</div>
