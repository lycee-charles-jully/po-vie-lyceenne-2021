<script>
    import { setContext } from 'svelte';
    import Footer from '../components/Footer.svelte';
    import ConferenceAccess from '../components/ConferenceAccess.svelte';
    import Nav from '../components/Nav.svelte';

    export let segment;

    setContext('segment', segment);
</script>

<style>
    main {
        max-width: 64em;
        min-height: calc(100vh - 4em + 10px); /* viewport - padding + spacing */
        padding: 2em;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>

<Nav {segment}/>

<main>
    <slot/>
</main>

<ConferenceAccess/>

<Footer/>
