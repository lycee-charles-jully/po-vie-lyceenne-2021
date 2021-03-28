<script>
    import Meta from '../components/Meta.svelte';
    import YoutubeEmbed from '../components/YoutubeEmbed.svelte';
    import ImagesDisplay from '../components/ImagesDisplay.svelte';
    import mdl1Image from 'images/mdl/mdl-1.jpg';
    import mdl2Image from 'images/mdl/mdl-2.jpg';
    import mdl3Image from 'images/mdl/mdl-3.jpg';
    import mdl4Image from 'images/mdl/mdl-4.jpg';
    import mdl5Image from 'images/mdl/mdl-5.jpg';
    import mdl6Image from 'images/mdl/mdl-6.jpg';
    import mdl7Image from 'images/mdl/mdl-7.jpg';
</script>


<Meta title="La MDL - JPO lycée Charles Jully"/>

<h1>La maison des lycéens</h1>

<ImagesDisplay imagesList={[
            mdl1Image,
            mdl2Image,
            mdl3Image,
            mdl4Image,
            mdl5Image,
            mdl6Image,
            mdl7Image,
        ]}/>

<article>
    <p>
        La MDL est une association lycéenne, qui développe et soutient des projets sportifs, culturels, humanitaires ou
        liés à la citoyenneté.
    </p>
    <p>
        La MDL organise des activités et actions pour récolter des fonds : fête de fin d'année, machine à café, vente de
        croissants, etc.
        <br/>
        Elle soutient les clubs et divers ateliers, s’occupe de l’aménagement du foyer, organise des élèvements au sein
        du lycée,… <a href="cvl">Le Conseil de la vie lycéenne (CVL)</a> travaille avec elle, pour l'aider à réaliser
        ses projets et à les faire connaître.
    </p>
    <p>
        Tous les lycéens peuvent adhérer et devenir membres de la MDL en payant leur cotisation en début d’année.
    </p>
</article>

<YoutubeEmbed url="https://www.youtube.com/embed/ogxWbj9cgfo" defer/>
