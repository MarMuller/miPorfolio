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
