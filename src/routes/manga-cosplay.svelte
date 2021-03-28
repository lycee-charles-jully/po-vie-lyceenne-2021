<script>
    import YoutubeEmbed from '../components/YoutubeEmbed.svelte';
    import Meta from '../components/Meta.svelte';
    import ImagesDisplay from '../components/ImagesDisplay.svelte';
    import manga1Image from 'images/manga/manga-1.jpg';
    import manga2Image from 'images/manga/manga-2.jpg';
    import manga3Image from 'images/manga/manga-3.jpg';
    import manga4Image from 'images/manga/manga-4.jpg';
    import manga5Image from 'images/manga/manga-5.jpg';
    import manga6Image from 'images/manga/manga-6.jpg';
</script>


<Meta title="Club manga et cosplay - JPO lycée Charles Jully"/>

<h1>Club manga et cosplay</h1>

<ImagesDisplay imagesList={[
            manga1Image,
            manga2Image,
            manga3Image,
            manga4Image,
            manga5Image,
            manga6Image,
        ]}/>

<article>
    <p>
        Le club manga est un club réunissant des passionnés de différents types d’œuvres. Des débats, des découvertes
        d’œuvres, des séances consacrées au dessin, mais aussi des projets personnels tel qu’un manga ou un visual-novel
        composent nos diverses séances. Des séances réservées à la création de cosplay ont aussi lieu selon les
        personnes intéressées.
    </p>
    <p>
        Le club étant géré par des élèves de diverses classes, séances ont lieu sur le temps scolaire en fonction des
        disponibilités de chacun. N’hésitez pas pour plus d’information à vous renseigner au du CDI, lieu de réunion du
        club manga et cosplay.
    </p>
    <p>
        Vous pouvez également rejoindre note Discord ici :
        <a href="https://discord.gg/9dGVaDb6Py">https://discord.gg/9dGVaDb6Py</a>
    </p>
</article>


<YoutubeEmbed url="https://youtube.com/embed/bg9ggZWMsiA" defer/>
