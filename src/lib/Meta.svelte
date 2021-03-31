<script>
    import { getContext } from 'svelte';

    export let title = 'Portes ouvertes 2021 du lycée Charles Jully';
    export let description = 'Accédez à la section Vie lycéenne des portes ouvertes virtuelles 2021 du Lycée Charles Jully';
    const segment = getContext('segment');
</script>


<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title}>
    <meta name="description" content={description}>

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://po-lcj-2021-vie-lyceenne.netlify.app/{segment}">
    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:image" content="https://po-lcj-2021-vie-lyceenne.netlify.app/logo-social.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://po-lcj-2021-vie-lyceenne.netlify.app/{segment}">
    <meta property="twitter:title" content={title}>
    <meta property="twitter:description" content={description}>
    <meta property="twitter:image" content="https://po-lcj-2021-vie-lyceenne.netlify.app/logo-social.png">
</svelte:head>
