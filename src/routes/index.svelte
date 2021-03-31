<script>
    import GroupCoverImage from '$lib/GroupCoverImage.svelte';
    import Meta from '$lib/Meta.svelte';
    import YoutubeEmbed from '$lib/YoutubeEmbed.svelte';
    import PageCard from '$lib/PageCard.svelte';
</script>


<style>
    h1 {
        position: relative;
        text-align: center;
        width: calc(100% - 40px);
        margin: 80px auto 0;
        padding: 0 20px;
        font-size: 4em;
        text-transform: uppercase;
        font-weight: 700;
        color: #FDFEFB;
        text-shadow: #777 0 0 20px;
    }

    .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: calc(50vh + 60px);
    }

    .cards-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;
        margin: 50px 0;
        justify-items: center;
    }

    h2 {
        font-size: 2.8em;
        margin: 80px 0 50px;
        font-weight: bold;
    }

    h2.first {
        margin-top: calc(50vh + 40px);
    }

    @media all and (min-width: 1200px) {
        h1 {
            margin-top: 110px;
        }
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 2.8em;
            text-shadow: #777 0 0 15px;
        }

        .cards-container {
            grid-gap: 30px;
        }

        h2.first {
            margin-top: 50vh;
        }
    }

    @media all and (max-width: 700px) {
        .cards-container {
            grid-template-columns: repeat(1, 1fr);
        }

        h2 {
            font-size: 2em;
        }
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 2em;
            text-shadow: #777 0 0 10px;
        }
    }
</style>


<Meta/>

<div class="cover">
    <GroupCoverImage/>
    <h1>Portes ouvertes 2021 du lycée Charles Jully</h1>
</div>

<h2 class="first">Clubs et ateliers</h2>

<div class="cards-container first">
    <PageCard image="musique" alt="Club musique" href="club-musique">Club Musique</PageCard>
    <PageCard image="echec" alt="Club échecs" href="club-echecs">Club Échecs</PageCard>
    <PageCard image="manga" alt="Manga et cosplay" href="manga-cosplay">Club manga et cosplay</PageCard>
    <PageCard image="sophro" alt="Atelier sophrologie" href="confiance-en-soi-reussite">
        Confiance en soi et réussite
    </PageCard>
    <PageCard image="webradio" alt="Atelier Web-radio" href="web-radio">Atelier Web-radio</PageCard>
    <PageCard image="theatre" alt="Atelier théâtre" href="atelier-theatre">Atelier théâtre</PageCard>
    <PageCard image="lecture" alt="Atelier théâtre" href="club-lecture-bd">Club lecture et BD</PageCard>
</div>

<h2>Organisation</h2>

<div class="cards-container">
    <PageCard image="mdl" alt="MDL" href="mdl">Maison des lycéens</PageCard>
    <PageCard image="cvl" alt="CVL" href="cvl">Conseil de la vie lycéenne</PageCard>
    <PageCard image="eco" alt="Eco délégués" href="eco-delegues">Éco-délégués</PageCard>
</div>

<h2>Vie lycéenne</h2>

<div class="cards-container">
    <PageCard image="internat" alt="Internat" href="internat">L'internat</PageCard>
    <PageCard image="highbac" alt="Highbac" href="highbac">Section highbac</PageCard>
    <PageCard image="euro-allemand" alt="Highbac" href="euro-allemand">Section Euro allemand</PageCard>
    <PageCard image="fcpe" alt="Parents d'élèves" href="parents-eleves">Parents d'élèves</PageCard>
</div>

<YoutubeEmbed url="https://youtube.com/embed/XLXAWsdaGfI?showinfo=0&autohide=1" defer/>
<YoutubeEmbed url="https://youtube.com/embed/KsQqDMSKcxw?showinfo=0&autohide=1" defer/>
