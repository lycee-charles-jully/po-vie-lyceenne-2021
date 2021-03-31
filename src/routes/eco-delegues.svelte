<script>
    import Meta from '$lib/Meta.svelte';
    import YoutubeEmbed from '$lib/YoutubeEmbed.svelte';
    import ImagesDisplay from '$lib/ImagesDisplay.svelte';
    import eco1Image from '$lib/images/eco-delegues/eco-delegues-1.jpg';
    import eco2Image from '$lib/images/eco-delegues/eco-delegues-2.jpg';
    import eco3Image from '$lib/images/eco-delegues/eco-delegues-3.jpg';
    import eco4Image from '$lib/images/eco-delegues/eco-delegues-4.jpg';
    import eco5Image from '$lib/images/eco-delegues/eco-delegues-5.jpg';
    import eco6Image from '$lib/images/eco-delegues/eco-delegues-6.jpg';
</script>


<Meta title="Les Éco-délégués - JPO lycée Charles Jully"/>

<h1>Les Éco-délégués</h1>

<ImagesDisplay imagesList={[
            eco1Image,
            eco2Image,
            eco3Image,
            eco4Image,
            eco5Image,
            eco6Image,
        ]}/>

<article>
    <p>
        Les éco-délégués sont des élèves élus au sein de leur classe qui participent activement à la mise en œuvre de
        projets liés au <b>développement durable</b> dans le lycée.
        <br/>
        Au nombre d’un éco-délégué et suppléant par classe, tous les élus se réunissent afin de réaliser différents
        projets éco-responsables au sein du lycée.
        <br/>
        Prévention contre le réchauffement climatique, poubelles de tri, atelier permaculture, GreenWalk,... sont tous
        des projets crées et réalisés par les élèves pour l'écologie et le développement durable !
        <br/>
    </p>
</article>

<YoutubeEmbed url="https://www.youtube.com/embed/qDyGx-lrvBw" defer/>
