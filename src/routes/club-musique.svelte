<script>
    import Meta from '../components/Meta.svelte';
    import YoutubeEmbed from '../components/YoutubeEmbed.svelte';
    import ImagesDisplay from '../components/ImagesDisplay.svelte';
    import musique1Image from 'images/musique/musique-1.jpg';
    import musique2Image from 'images/musique/musique-2.jpg';
    import musique3Image from 'images/musique/musique-3.jpg';
    import musique4Image from 'images/musique/musique-4.jpg';
    import musique5Image from 'images/musique/musique-5.jpg';
</script>


<Meta title="Le club musique - JPO lycée Charles Jully"/>

<h1>Le club musique</h1>

<ImagesDisplay imagesList={[
            musique1Image,
            musique2Image,
            musique3Image,
            musique4Image,
            musique5Image,
        ]}/>

<article>
    <p>
        Le Club Musique est un club qui, comme son nom l’indique, permet à ses membres de pratiquer ensemble de la
        musique à la fois diverse et variée à l’aide des nombreux instruments mis à leur disposition. Mais c’est bien
        plus que ça. C’est un lieu de partage, d’échange et d’amusement. C’est une grande famille qui constitue celle du
        Lycée Charles Jully.
        <br/>
        On y joue ensemble des musiques de langues et cultures différentes avec des instruments appartenant au lycée qui
        y sont accessibles, une guitare, une basse, un piano et des batteries, mais également d’autres instruments que
        les membres peuvent apporter librement. Il semble évident qu’il est plus simple d’apporter une guitare
        électrique, branchable sur l’un des amplificateurs appartenant également au lycée, plutôt qu’une batterie.
    </p>
    <p>
        Des représentations au sein du lycée y sont organisés, particulièrement avant des périodes de vacances, tout
        comme la vidéo du concert de Noël disponible sur la chaîne YouTube du Lycée, ainsi que les évènements
        particuliers, comme celui du percent en prévision.
    </p>
</article>

<YoutubeEmbed url="https://www.youtube.com/embed/oiPGUmBlMBw" defer/>
