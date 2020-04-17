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
        import Project from './projects/_ProjectHome.svelte'
        export let projects
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

        .container {
                margin: 0;
                position: relative;
                display: grid;
                grid-template-columns: 40% 60%;
                grid-template-rows: 75vh 20%;
        }

        .left-hand {
                grid-column: 1;
                align-self: center;
        }

        .right-hand {
                grid-column: 2;
                background-image: url("background-image.png");
                background-repeat: no-repeat;
                background-position: right;
        }

        .bottom {
                grid-column-start: 1;
                grid-column-end: 3;
        }

        h1 {
                padding-top: 10px;
        }

        main {
                padding: 0;
                margin: 0;
        }

        a {
                text-decoration: none;
        }

</style>

<svelte:head>
	<title>ReMe - Research made easy</title>
</svelte:head>

<main>
    <div class="container">
    <div class="left-hand">
        <h1>Research made easy</h1>
        <button><a href='projects'>Find a project now</a></button>
    </div>
    <div class="right-hand">

    </div>
    <div class="bottom">
            <h1>Sign up to these projects now</h1>
            <div class="projects-page">
                    {#each projects as project}
                            <div class="projects">
                                    <Project {...project} />
                            </div>
                    {/each} 
            </div>
    </div>
    </div>
</main>
