<script>
        import axios from 'axios'
        import { goto } from '@sapper/app'
        import Form from './_form.svelte'

	let project = {}

	const submit = async event => {
            const projectDetails = event.detail.project
    try {
      const response = await axios.post('user/new', { 'project': projectDetails })
      if (response.data.status === 'error') {
      goto('/user/dashboard')
        return
      }

    goto('/user/dashboard')

    } catch (error) {
      alert(error.response.data.message)
      goto('/user/dashboard')
      return
    }
  }
</script>

<h2>Add a new project</h2>
<div>
        <Form buttonText={'Add project'} on:submit={submit}></Form>
</div>
