<script>
        import Project from './_ProjectHome.svelte'
        import projects from './_projects.js';
</script>

<style>
        .projects-page {
                display: inline-grid;
                grid-template-columns: 300px 300px 300px; 
                grid-template-rows: 300px;
        }

        .projects {
                margin: 20px;
                padding: 10px;
        }

</style>

        <div class="projects-page">
                {#each projects as project}
                    <div class="projects">
                        <Project {...project} />
                    </div>
                {/each}
        </div>

