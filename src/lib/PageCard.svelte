<script>
    export let image;
    export let alt;
    export let href;
</script>


<style>
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        cursor: pointer;
        background: white;
        transition: transform .3s;
    }

    .container:hover {
        transform: scale(1.05);
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 5px 5px 0 0;
    }

    .description {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        font-size: 1.5em;
    }

    a, .description {
        text-decoration: none;
    }

    @media all and (max-width: 400px) {
        .description {
            font-size: 18px;
        }
    }
</style>


<a href={href.endsWith('/') ? href : href + '/'} sveltekit:prefetch>
    <div class="container">
        <img {alt}
             src="cover-small/{image}.png"
             srcset="cover-small/{image}.webp, cover-small/{image}.png"
             loading="lazy"
             height="281"
             width="500"/>
        <div class="description">
            <slot/>
        </div>
    </div>
</a>
