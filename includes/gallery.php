<div id="migaleria" style="padding-top:100px;padding-bottom:2px;" >

  <div class="text-maxwidth">
    <div class="centerText whiteFont">
      <h1 style="margin:0 0 10px 0;">Algunos de mis trabajos</h1>
      <div class="centerText" style="margin-bottom:50px;">
        <a href="#" class="filter">#Ilustraciones</a>
        <a href="#" class="filter">#Ilustraciones</a>
        <a href="#" class="filter">#Ilustraciones</a>
      </div>
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
