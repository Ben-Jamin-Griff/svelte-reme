<script>
	import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';
    import Modal from '../components/Modal.svelte';
    import LoginModal from '../components/LoginModal.svelte';
    import RegistrationModal from '../components/RegistrationModal.svelte';
    import CommunicationModal from '../components/CommunicationModal.svelte';

    import { showModal, showLoginModal, showRegistrationModal, showCommunicationModal } from '../store.js';
	export let segment;

</script>

<style>
	main {
		position: relative;
		background-color: white;
		margin: 0;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

{#if $showModal}
        <Modal on:close={() => showModal.set(false)}>
                {#if $showLoginModal}
                        <LoginModal on:showSignup={() => {
                                    showLoginModal.set(false) 
                                    showRegistrationModal.set(true)
                                    showCommunicationModal.set(false)
                                  }} on:closeModal={() => {
                                    showLoginModal.set(false)
                                    showModal.set(false)
                                    showCommunicationModal.set(false)
                        }}></LoginModal>
                {/if}
                {#if $showRegistrationModal}
                        <RegistrationModal on:showLogin={() => {
                                    showLoginModal.set(true)
                                    showRegistrationModal.set(false)
                                    showCommunicationModal.set(false)
                                  }} on:closeModal={() => {
                                    showRegistrationModal.set(false)
                                    showModal.set(false)
                                    showCommunicationModal.set(false)
                        }}></RegistrationModal>
                {/if}
                {#if $showCommunicationModal}
                        <CommunicationModal on:closeModal={() => {
                                    showRegistrationModal.set(false)
                                    showModal.set(false)
                                    showCommunicationModal.set(false)
                        }}></CommunicationModal>
                {/if}

        </Modal>
{/if}

<Footer/>
