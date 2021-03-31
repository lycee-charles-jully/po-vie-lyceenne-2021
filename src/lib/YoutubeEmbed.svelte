<script>
    import { onMount } from 'svelte';

    export let url;
    export let defer = false;

    let observer;
    let showIframe = !defer;
    let iframeContainer;

    onMount(() => {
        if (!defer) return;
        observer = new IntersectionObserver(handleIntersection, {
            rootMargin: '300px',
            threshold: 0,
        });
        observer.observe(iframeContainer);
    });

    function handleIntersection(entry) {
        if (!entry[0].isIntersecting)
            return;
        showIframe = true;
        observer.unobserve(iframeContainer);
    }
</script>


<style>
    div {
        margin: 30px 0;
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        padding-top: 25px;
        height: 0;
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>


<div bind:this={iframeContainer}>
    {#if showIframe}
        <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                src={url}
                frameborder="0"
                title="Vidéo YouTube"
                height="315"
                width="560"/>
    {/if}
</div>
