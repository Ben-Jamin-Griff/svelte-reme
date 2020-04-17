<script>
        export let picture;
        export let university;
        export let title;
</script>

<style>

        .project {
                border: solid 0.6px;
                border-radius: 10px;
                display: grid;
                grid-template-row: 250px 50px;
                grid-template-column: 200px;
        }

        .top {
                grid-row: 1;
        }

        .bottom {
                grid-row: 2;
                padding: 10px;
        }

        img {
                overflow: hidden;
                border-radius: 10px;
                width: 100%;
        }

        h2 {
                font-size: 14px;
        }

</style>

<div class="project">
          <div class="top">
                  <img src={picture} alt="">
          </div>
          <div class="bottom">
            <h2>{university} - {title}</h2>
          </div>
</div>
