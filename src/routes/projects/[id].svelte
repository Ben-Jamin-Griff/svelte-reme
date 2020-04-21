<script context="module">
        export async function preload({ params, query }) {
            const res = await this.fetch(`projects/${params.id}.json`)
            const data = await res.json()

            if (res.status === 200) {
                return { project: data }
            } else {
                this.error(res.status, data.message);
            }
    }
</script>

<script>
        export let project
        import { showModal, showLoginModal } from '../../store.js'
</script>

<style>
        .container {
                display: grid;
                grid-template-columns: 60% 40%;
                margin-top: 20px;
                padding: 20px;
        }

        main {
                padding: 20px;
        }

        aside {
                border: 1px solid #ccc;
                padding: 20px;
                margin-top: 40px;
        }

</style>

<svelte:head>
        <title>{project.title}</title>
</svelte:head>

<header>
        <img src="{project.picture}" width="100%" style="" alt="" />
</header>

<div class="container">
        <main>
            <h1>{project.university} - {project.title}</h1>
            <button class="action styled" on:click={() => {
                    showModal.set(true)
                    showLoginModal.set(true)
                    }}>Take part now</button>
            <p>{@html project.description}</p>
        </main>

        <aside>
            <h2>Researcher info card</h2>
        </aside>
</div>
