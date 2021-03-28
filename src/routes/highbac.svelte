<script>
    import Meta from '../components/Meta.svelte';
    import { onMount } from 'svelte';
    import ImagesDisplay from '../components/ImagesDisplay.svelte';
    import activiteAmericiansImage from 'images/highbac/activite-americains.jpg';
    import echangeAtlantaImage from 'images/highbac/atlanta-toussaint.jpg';
    import euso1Image from 'images/highbac/euso-1.jpg';
    import euso2Image from 'images/highbac/euso-2.jpg';
    import ijsoImage from 'images/highbac/ijso.jpg';
    import olympiades1Image from 'images/highbac/olympiades-physique-1.jpg';
    import olympiades2Image from 'images/highbac/olympiades-physique-2.jpg';
    import accueilUs1Image from 'images/highbac/accueil-us-1.jpg';
    import accueilUs2Image from 'images/highbac/accueil-us-2.jpg';
    import visiteUs1Image from 'images/highbac/visite-us-1.jpg';
    import visiteUs2Image from 'images/highbac/visite-us-2.jpg';
    import visiteUs3Image from 'images/highbac/visite-us-3.jpg';
    import visiteUs4Image from 'images/highbac/visite-us-4.jpg';
    import angleterre1Image from 'images/highbac/angleterre-1.jpg';
    import angleterre2Image from 'images/highbac/angleterre-2.jpg';
    import angleterre3Image from 'images/highbac/angleterre-3.jpg';
    import alpes1Image from 'images/highbac/alpes-1.jpeg';
    import alpes2Image from 'images/highbac/alpes-2.jpeg';
    import alpes3Image from 'images/highbac/alpes-3.jpg';
    import alpes4Image from 'images/highbac/alpes-4.jpg';
    import alpes5Image from 'images/highbac/alpes-5.jpg';
    import feteScicence1Image from 'images/highbac/fete-science-1.jpg';
    import feteScicence2Image from 'images/highbac/fete-science-2.jpg';

    let Swiper, SwiperSlide;

    onMount(async () => {
        const swiper = await import('../helpers/swiper');
        Swiper = swiper.Swiper;
        SwiperSlide = swiper.SwiperSlide;
    });
</script>


<style>
    ul {
        margin-top: 2px;
        padding-inline-start: 30px;
    }

    img {
        max-width: 100%;
    }
</style>


<Meta title="La section highbac - JPO lycée Charles Jully"/>

<h1>La section highbac</h1>

<article>
    <p>
        La section highbac estune section euro enrichie avec un enseignement intégral des sciences physiques en anglais.
        Pour plus d'informations sur cette section,
        <a href="https://evenement.lycee-charles-jully.fr/index.php/plaquette_hbac/">cliquez ici</a>.
    </p>

    <p>Voici le calendrier d'une année <i>typique</i> en highbac.</p>

    <h2>Septembre</h2>
    <ul>
        <li>Rencontres nouveaux entrants de seconde et marraines/parrains de terminale</li>
        <li>Premiers travaux avec les correspondants américains</li>
        <li>
            Voyage dans les Alpes. Au programme : randonnée, géologie, mécanique des fluides, rafting, via ferrata et
            surtout, amusement !
        </li>
    </ul>
    <img src={activiteAmericiansImage} alt="Activité avec les Américains" loading="lazy"/>
    <ImagesDisplay {Swiper} {SwiperSlide} caption="Le voyage dans les Alpes" imagesList={[
                alpes1Image,
                alpes2Image,
                alpes3Image,
                alpes4Image,
                alpes5Image,
            ]}/>

    <h2>Octobre</h2>
    <ul>
        <li>Échange Toussaint - Atlanta (terminale)</li>
        <li>Préparation IJSO (élèves de seconde)</li>
        <li>Olympiades de la physique</li>
        <li>
            Fête de la science
            <ul>
                <li>Accueil d’écoliers organisé par les élèves du lycée (ateliers scientifiques, visite du lycée)</li>
                <li>Conférence sur les neurosciences et les apprentissages</li>
            </ul>
        </li>
    </ul>
    <img src={echangeAtlantaImage} alt="Echange avec Atlanta" loading="lazy">
    <ImagesDisplay {Swiper} {SwiperSlide} caption="La fête de la science" imagesList={[
                feteScicence1Image,
                feteScicence2Image,
            ]}/>

    <h2>Novembre</h2>
    <ul>
        <li>Préparation EUSO</li>
    </ul>
    <ImagesDisplay
            imagesList={[
                euso1Image,
                euso2Image,
            ]}
            {Swiper}
            {SwiperSlide}/>


    <h2>Décembre</h2>
    <ul>
        <li>Olympiades de la physique</li>
        <li>IJSO</li>
    </ul>
    <ImagesDisplay
            imagesList={[
                ijsoImage,
                olympiades1Image,
                olympiades2Image,
            ]}
            {Swiper}
            {SwiperSlide}/>

    <h2>Janvier</h2>
    <ul>
        <li>Olympiades de la physique</li>
        <li>Olympiades de la chimie</li>
    </ul>

    <h2>Mars</h2>
    <ul>
        <li>Accueil des Américains à Saint Avold ou accueil par les Américains à Smyrna (Ga)</li>
        <li>Passage niveau B2/C1</li>
        <li>Cgenial</li>
    </ul>
    <ImagesDisplay
            imagesList={[
                accueilUs1Image,
                accueilUs2Image,
                visiteUs1Image,
                visiteUs2Image,
                visiteUs3Image,
                visiteUs4Image,
            ]}
            {Swiper}
            {SwiperSlide}/>

    <h2>Avril</h2>
    <ul>
        <li>Suite Olympiades</li>
        <li>Voyage Grande Bretagne (seconde)</li>
    </ul>
    <ImagesDisplay
            imagesList={[
                angleterre1Image,
                angleterre2Image,
                angleterre3Image,
            ]}
            {Swiper}
            {SwiperSlide}/>

    <h2>Juin</h2>
    <ul>
        <li>Épreuve DNL (terminale)</li>
    </ul>

</article>
