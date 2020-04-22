<script>
        import { createEventDispatcher } from 'svelte';
        import axios from 'axios'
        import { stores } from '@sapper/app'
        const { session } = stores()
        const dispatch = createEventDispatcher();

        let name=''
        let email=''
        let description=''

        const submit = async () => { 
                let msg = {
                    to: 'drjamin1990@gmail.com',
                    from: 'drjamin1990@gmail.com',
                    subject: 'ReMe: Enquiry from ' + name,
                    text: description, 
                };
                console.log(msg)
                const response = await axios.get('projects/email', msg )

                if (response.data.status === 'error') { 
                    alert(response.data.message) 
                    return 
                } 
                dispatch('closeModal') 
                } 

</script>

<h2>Take part</h2>
<div>
  <form on:submit|preventDefault={submit}>
    <input bind:value={name} type="text" placeholder="Name" />
    <input bind:value={email} type="email" placeholder="Email address" />
    <input bind:value={description} type="text" placeholder="Send a message..." />
    <button>Submit</button>
  </form>
</div>
