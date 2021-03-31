<script>
    import { onMount } from 'svelte';

    export let imagesList = [];
    export let caption;
    export let Swiper, SwiperSlide;

    onMount(async () => {
        if (typeof Swiper !== 'undefined' && typeof SwiperSlide !== 'undefined')
            return;
        const swiper = await import('./swiper');
        Swiper = swiper.Swiper;
        SwiperSlide = swiper.SwiperSlide;
    });
</script>


<style>
    .swiper {
        width: 100%;
        height: 550px;
        margin: 30px 0;
    }

    .swiper.with-caption {
        margin-bottom: 54px;
    }

    :global(.swiper-slide) {
        height: 100% !important;
    }

    .caption {
        width: 100%;
        text-align: center;
    }

    .swiper-image-container {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 550px;
        width: 100%;
    }

    @media all and (max-width: 500px) {
        .swiper {
            height: 300px;
        }

        .swiper-image-container {
            height: 300px;
        }
    }
</style>


<figure class="swiper" class:with-caption={caption}>
    <svelte:component autoHeight
                      autoplay={{ delay: 10000, disableOnInteraction: true }}
                      lazy={{ loadPrevNext: true }}
                      loop
                      navigation
                      pagination={{ clickable: true }}
                      spaceBetween={10}
                      style="height: 100%; width: 100%"
                      this={Swiper}>

        {#each imagesList as image}
            <svelte:component this={SwiperSlide}>
                <div data-background={image} class="swiper-lazy swiper-image-container"/>
            </svelte:component>
        {/each}

    </svelte:component>

    {#if caption}
        <figcaption class="caption">{caption}</figcaption>
    {/if}
</figure>
