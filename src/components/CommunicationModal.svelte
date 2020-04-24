<script>
        import { createEventDispatcher } from 'svelte';
        import axios from 'axios'
        import { stores } from '@sapper/app'
        import { onMount } from 'svelte'
        import { projectCode } from '../store.js'
        const { session, page } = stores()
        const dispatch = createEventDispatcher();


        projectCode.subscribe

        const code = ($projectCode);

        let name=''
        let email=''
        let description=''

        const submit = async (req, res, next) => { 
                let msg = {
                    to: '',
                    from: 'drjamin1990@gmail.com',
                    subject: 'ReMe: Enquiry from ' + name,
                    text: description + ' from: ' + email, 
                };
                let data = {
                        msg,
                        code
                };
                try {
                        const sendEmail = await axios.post('user/emailed', data)
                        dispatch('closeModal')
                } catch (error) {
                        console.log(error)
                }
        } 

        const go = async (req, res, next) => {
                        console.log(req)
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
