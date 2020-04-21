<script context="module">
        export async function preload({ params, query }){
                const res = await this.fetch('../projects/dashboard_list.json')
                const data = await res.json()

                if (res.status === 200) {
                        return { projects: data }
                } else {
                        this.error(res.status, data.message);
                }
        }
</script>

<script>
        import axios from 'axios'
        import { goto, stores } from '@sapper/app'
        export let projects
        const { session } = stores()

        const removeProject = async (project) => {
                let projectData=project
                try {
                        const response = await axios.post('user/destroy', projectData )
                                                
                        if (response.data.status === 'error') {
                                console.log(projectData)
                                goto('/user/dashboard')
                                return
                        }
                        goto('/')
                        
                } catch (error) {
                        console.log(projectData)
                        alert(error.response.data.message)
                        goto('/user/dashboard')
                        return
                }
        }

        const removeUser = async (user) => {
                try {
                        const response = await axios.post('user/leave', user )
                        if (response.data.status === 'error') {
                                goto('/')
                                return
                        }
                        goto('/')
                        await axios.post('auth/logout')
                        session.set({ user: null })

                } catch (error) {
                        alert(error.response.data.message)
                        goto('/')
                        return
                }
                
                       
        }


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

  button {
          margin-top: 20px;
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
                                                        <p><a href="/projects/{project.id}">View project</a></p>
                                                        <p><a href="/user/{project.id}">Edit project</a></p>
                                                        <button on:click={removeProject(project)}>Delete project</button>
                                                </div>
                                        </div>
                                {/each}
                        </div>
                {/if}
                <button><a href="/user/new">Create a new project</a></button>
                <button on:click={removeUser($session.user)}>Delete account</button>

        </div>
</main>
