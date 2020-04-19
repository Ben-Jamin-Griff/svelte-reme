<script context="module">
        export async function preload({ params, query }) {
return { id: params.id }
}
</script>

<script>
        import Form from './_form.svelte'
        import axios from 'axios'
        import { goto } from '@sapper/app'
        import { onMount } from 'svelte'

        let loading = true
        let project = null

        export let id
        
        onMount(async () => {
                const res = await fetch(`projects/${id}.json`)

               if (res.status === 200) {
               const data = await res.json()
               project = data
               loading = false
            } else {
               console.error(res.status, data.message);
            } 
        })

        const submit = async event => {
                const projectDetails = event.detail.project

                try {
                        const response = await axios.post('user/edit', { 'project': projectDetails })
                        if (response.data.status === 'error') {
                            if (response.data.message === 'SequelizeValidationError') {
        alert('Validation error')
      } else {
        alert(response.data.message)
      }
      return
    }

    alert('Project data saved successfully')
    goto('/user/dashboard')
  } catch (error) {
    if (error.response && error.response.data.message === 'SequelizeValidationError') {
      alert('Validation error')
    } else {
      alert(error.response.data.message)
    }
    return
  }
}
</script>

<div>
        {#if !loading && project}
<h2>Edit project data</h2>
<div>
        <Form project={project} buttonText={'Save'} on:submit={submit}></Form>
</div>
        {/if}
</div>

