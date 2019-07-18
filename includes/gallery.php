<div id="migaleria" class="whitebg" style="padding-top:100px;padding-bottom:2px;" >

  <div class="text-maxwidth">
    <div class="centerText">
      <h1 style="margin:0 0 10px 0;">Algunos de mis trabajos</h1>
      <div class="centerText" style="margin-bottom:50px;">
        <a href="#" class="filter"><span>#Ilustraciones</span></a>
        <a href="#" class="filter"><span>#Ilustraciones</span></a>
        <a href="#" class="filter"><span>#Ilustraciones</span></a>
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
            </li>

            ';

            $num = $num + 1;
        }

      ?>

    </ul>

  </div>


</div>
