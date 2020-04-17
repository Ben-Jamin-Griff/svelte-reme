<script>
        export let picture;
        export let university;
        export let title;
        export let description;
        export let id;
</script>

<style>

        .project {
                border: solid 0.6px;
                border-radius: 10px;
                padding: 10px;
                display: grid;
                grid-template-columns: 40% 60%;
        }

        .left {
                grid-column: 1;
        }

        .right {
                grid-column: 2;
        }

        img {
                width: 100%;
        }

</style>

<div class="project">
          <div class="left">
            <h2>{university} - {title}</h2>
            <p>{description}</p>
          </div>
          <div class="right">
            <img src="{picture}" style="" alt="" />
          </div>
          <a href="/projects/{id}">Find out more...</a>
</div>
