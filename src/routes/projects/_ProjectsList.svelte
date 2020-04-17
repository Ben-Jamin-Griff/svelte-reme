<script>
        import Project from './_Project.svelte'
        import projects from './_projects.js';
</script>

<style>
        .projects-page {
                display: grid;
                grid-template-columns: 25% 75%; 
        }

        .projects {
                grid-column-start: 2;
                grid-column-end: 3;
                padding: 10px;
        }

</style>

        <h1>Take part in research projects</h1>
        <div class="projects-page">
                {#each projects as project}
                    <div class="projects">
                        <Project {...project} />
                    </div>
                {/each}
        </div>

