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

    <script type="text/javascript" src="js/lightbox.js"></script>

    <ul>

      <?php //include("php/gallery-lightbox.php"); ?>

      <?php

        $n = 0;

        foreach ($proyectos as $proyecto) {

          $id = $proyecto["id"] ;
          $name = $proyecto["name"] ;
          $date = $proyecto["date"] ;
          $cover = $proyecto["cover"] ;
          $fullsize = "'".$proyecto["fullsize"]."'" ;

          $n = $n + 1;

          echo '<li class="previewGallery num'.$n.'" onclick="loadLightbox('.$fullsize.')" style="background-image:url('.$cover.');background-size:cover;background-position:center;">
          </li>

          ';

        }

      ?>

    </ul>

  </div>


</div>
