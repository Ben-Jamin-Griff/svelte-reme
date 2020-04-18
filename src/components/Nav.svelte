<script>
	export let segment;
    import { stores } from '@sapper/app'
    import { showModal, showLoginModal, showRegistrationModal } from '../store.js'
    import axios from 'axios'

    const { session } = stores()
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
        float: right;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
	}

	.link {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

    img {
            width:30px;
            float: left;
            padding: 1em 0.5em;
    }

    .nav-container {
            border-bottom: 1px solid #eee;
            height: 56px;
    }

</style>

<div class="nav-container">
        <a class='{segment === undefined ? "page" : undefined}' href='.'><img src="raphael.svg" alt="" /></a>
        <nav>
            <ul>
                    {#if $session.user}
                <li><a class='link {segment === "about" ? "page" : undefined}' href='about'>Give feedback</a></li>
                <li><a class='link' href='javascript:;' on:click={async () => {
                        await axios.post('auth/logout')
                        session.set({ user: null })
                       }}>Log out</a></li>
                <li><a class='link {segment === "dashboard" ? "page" : undefined}' href='dashboard'>Dashboard</a></li>
                <li style="padding: 1em 0.5em;">{$session.user}</li>
                    {:else}
                <li><a class='link {segment === "about" ? "page" : undefined}' href='about'>Give feedback</a></li>
                <li><a class='link {segment === "login" ? "page" : undefined}' href='javascript:;' on:click={() => {
                       showModal.set(true)
                       showLoginModal.set(true)
                       showRegistrationModal.set(false)
                       }}>Log in</a></li>
                <li><a class='link {segment === "register" ? "page" : undefined}' href='javascript:;' on:click={() => {
                       showModal.set(true)
                       showLoginModal.set(false)
                       showRegistrationModal.set(true)
                       }}>Researchers sign up</a></li>
                    {/if}
        	</ul>
        </nav>
</div>
