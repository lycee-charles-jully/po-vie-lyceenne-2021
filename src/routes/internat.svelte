<script>
    import Meta from '$lib/Meta.svelte';
    import YoutubeEmbed from '$lib/YoutubeEmbed.svelte';
    import ImagesDisplay from '$lib/ImagesDisplay.svelte';
    import resultats1Image from '$lib/images/internat/resultats-1.png';
    import resultats2Image from '$lib/images/internat/resultats-2.png';
    import resultats3Image from '$lib/images/internat/resultats-3.png';
    import resultats4Image from '$lib/images/internat/resultats-4.png';
    import resultats5Image from '$lib/images/internat/resultats-5.png';
</script>


<Meta title="L'internat - JPO lycée Charles Jully"/>

<h1>L'internat</h1>

<YoutubeEmbed url="https://www.youtube.com/embed/4WkwPXFmczQ"/>

<article>
    <h2>L’internat est avant tout un lieu de réussite scolaire pour les élèves</h2>

    <ImagesDisplay imagesList={[
                resultats1Image,
                resultats2Image,
                resultats3Image,
                resultats4Image,
                resultats5Image,
            ]}/>

    <h2>L’internat est également un lieu de vie où l’on peut bénéficier :</h2>
    <ul>
        <li>D'un atelier théâtre se déroulant tous les lundis soirs</li>
        <li>D'un partenariat avec le CAC et la MJC de Saint-Avold pour des actions culturelles</li>
        <li>D'une salle de musique avec divers instruments</li>
        <li>De séances de visionnage de films</li>
    </ul>

    <h2>La pratique du sport grâce à l’UNSS</h2>
    <ul>
        <li>Une salle de musculation équipée</li>
        <li>Un gymnase</li>
        <li>Un terrain de sport extérieur</li>
    </ul>

    <p>
        La possibilité de participer aux activités TAÏBO qui se déroulent au lycée
    </p>

    <p>
        La possibilité de faire des activités sportives ou culturelles à l’extérieur sur
        <u>demande écrite des parents</u>
    </p>

</article>
