<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`projects/list.json`)
		const data = await res.json()

		if (res.status === 200) {
			return { projects: data }
		} else {
			this.error(res.status, data.message);
		}
	}
</script>
<script>
        import Project from './_Project.svelte'
        export let projects
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

<svelte:head>
	<title>ReMe - Project list</title>
</svelte:head>

        <h1>Take part in research projects</h1>
        <div class="projects-page">
                {#each projects as project}
                    <div class="projects">
                        <Project {...project} />
                    </div>
                {/each}
        </div>

