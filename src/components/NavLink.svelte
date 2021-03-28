<script>
    export let segment;
    export let href;
</script>


<style>
    .link-container {
        padding: 0 20px;
    }

    a {
        display: block;
        width: 100%;
        height: 40px;
        padding: 5px;
        color: #333333;
        text-decoration: none;
        line-height: 40px;
        font-weight: 400;
    }

    :global(nav) > .link-container > a {
        font-weight: bold;
    }

    :global(header:not(.header-bg)) > :global(nav) > :global(div:not(.dropdown)) a {
        text-shadow: #777 0 0 15px;
        color: #FDFEFB;
    }

    .selected {
        color: #21347C;
    }
</style>


<div class="link-container">
    <a href={href.endsWith('/') ? href : href + '/'} class:selected={segment === href} sapper:prefetch>
        <slot/>
    </a>
</div>
