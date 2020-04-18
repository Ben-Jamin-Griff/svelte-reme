<script context="module">
        export async function preload({ params, query }){
                const res = await this.fetch('projects/dashboard_list.json')
                const data = await res.json()

                if (res.status === 200) {
                        return { projects: data }
                } else {
                        this.error(res.status, data.message);
                }
        }
</script>

<script>
        export let projects
</script>

<style>
      h1 {
    padding-bottom: 30px;
  }
  .projects {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 40px;
  }

  .project {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-gap: 40px;
  }

  img {
    width: 180px;
  }
</style>

<svelte:head>
	<title>Research dashboard</title>
</svelte:head>

<main>
        <h1>Dashboard</h1>
        <div>
                {#if !projects}
                        <h1>You currently have no projects</h1>
                {:else}
                        <h1>Your projects</h1>

                        <div class="projects">
                                {#each projects as project}
                                        <div class="project">
                                                <img src="{project.picture}" alt="Project picture" />
                                                <div>
                                                        <h2>{project.university} - {project.title}</h2>
                                                        <p><a href="/projects/{project.id}">Go to project</a></p>
                                                </div>
                                        </div>
                                {/each}
                        </div>
                {/if}
        </div>
</main>
