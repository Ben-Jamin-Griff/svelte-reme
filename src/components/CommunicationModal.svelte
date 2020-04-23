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
                console.log(msg);
                try {
                        const breeds = await axios.get('https://dog.ceo/api/breeds/list/all') 
                        console.log(breeds.data.message)
                        const fix = await axios.get('projects/emailed')
                        console.log(fix)
                        dispatch('closeModal')
                } catch (error) {
                        console.log(error)
                        dispatch('closeModal')
                }
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
