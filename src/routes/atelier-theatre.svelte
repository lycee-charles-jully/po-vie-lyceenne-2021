<script>
    import { onMount } from 'svelte';
    import YoutubeEmbed from '$lib/YoutubeEmbed.svelte';
    import Meta from '$lib/Meta.svelte';
    import ImagesDisplay from '$lib/ImagesDisplay.svelte';
    import theatre1Image from '$lib/images/theatre/theatre-1.jpg';
    import theatre2Image from '$lib/images/theatre/theatre-2.jpg';
    import theatre3Image from '$lib/images/theatre/theatre-3.jpg';
    import theatre4Image from '$lib/images/theatre/theatre-4.jpg';
    import theatre5Image from '$lib/images/theatre/theatre-5.jpg';
    import theatre6Image from '$lib/images/theatre/theatre-6.jpg';
    import theatre7Image from '$lib/images/theatre/theatre-7.jpg';
    import theatre8Image from '$lib/images/theatre/theatre-8.jpg';
    import lundi1Image from '$lib/images/theatre/lundi-1.jpg';
    import lundi2Image from '$lib/images/theatre/lundi-2.jpg';
    import lundi3Image from '$lib/images/theatre/lundi-3.jpg';
    import lundi4Image from '$lib/images/theatre/lundi-4.jpg';
    import lundi5Image from '$lib/images/theatre/lundi-5.jpg';
    import lundi6Image from '$lib/images/theatre/lundi-6.jpg';
    import lundi7Image from '$lib/images/theatre/lundi-7.jpg';
    import lundi8Image from '$lib/images/theatre/lundi-8.jpg';

    let Swiper, SwiperSlide;

    onMount(async () => {
        const swiper = await import('$lib/swiper');
        Swiper = swiper.Swiper;
        SwiperSlide = swiper.SwiperSlide;
    });
</script>


<style>
    .space-bottom {
        margin-bottom: 30px;
    }
</style>


<Meta title="Atelier théâtre - JPO lycée Charles Jully"/>

<h1>Atelier théâtre</h1>

<article>
    <p class="space-bottom">
        <i>Deviens autre pour te découvrir toi-même !</i>
    </p>

    <p>
        L’atelier théâtre fait partie intégrante de l’histoire de notre lycée <b>et s’investit tout au long de
        l’année</b> : animations le jour de la rentrée de septembre, spectacles thématiques ouverts à d’autres
        établissements, journées portes ouvertes, nuit de la lecture, <b>représentation finale</b> partagée avec
        l’ensemble du lycée et ouvert à un large public. Cet art vivant nous ressemble et nous rassemble !
    </p>

    <p>
        Nous nous retrouvons <b>chaque semaine durant 3 heures</b> afin d’explorer, en présence <b>d’un comédien et
        metteur en scène professionnel</b>, de multiples compétences que tu possèdes déjà et pour préparer tous ensemble
        un spectacle final, joué sur une véritable scène, au centre culturel P. Messmer. Tu pourras tout autant
        développer ta <b>singularité</b> mais aussi ton sens de la <b>créativité collective</b> tout <b>en gérant tes
        émotions</b> par le contrôle de la respiration et la méditation. Tu apprends à te mettre à <b>l’écoute</b> de
        l’autre tout en te faisant <b>entendre</b> et comprendre.
    </p>
    <p>
        En partenariat avec le <i>Carreau</i> de Forbach, nous découvrons également <b>trois créations</b> d’horizons
        multiples qui te permettent d’aiguiser ton regard de spectateur pour nourrir ton jeu d’acteur.
    </p>
    <p>
        Puis, nous organisons au bout d’un semestre <b>un stage théâtral</b> de trois jours, à Baerenthal, afin de
        fédérer notre équipe et de mener plus loin encore notre <b>démarche collaborative</b>, entremêlant <b>tous les
        langages du corps</b> : danse, musique, mime et éloquence. De quoi envisager <b>le Grand Oral du
        baccalauréat</b> plus sereinement, non ? :)
    </p>
    <p>
        Par ailleurs, notre atelier se double d’une <b>action citoyenne</b> car nous reversons chaque année les fonds
        collectés à l’issue du spectacle à une association caritative.
    </p>
    <p>
        Notons également que de <b>nombreux partenaires et mécènes</b> nous soutiennent et rendent cette aventure
        possible : DAAC, DRAC, fédérations de parents d’élèves, Rotary Club, Lion’s Club, DLSI, grandes surfaces.
    </p>
    <p class="space-bottom">
        En définitive, le théâtre permet de suivre un <b>véritable cheminement</b> culturel, spirituel et physique, il
        ouvre la voie à la tolérance car je prends la place d'un autre, je me déplace et me mets à sa place.
    </p>

    <p>
        <b>Nous réservons déjà la tienne pour l’an prochain ! :)</b>
    </p>
</article>

<ImagesDisplay {Swiper} {SwiperSlide} caption="Séances de théâtre du lundi soir" imagesList={[
            lundi1Image,
            lundi2Image,
            lundi3Image,
            lundi4Image,
            lundi5Image,
            lundi6Image,
            lundi7Image,
            lundi8Image,
        ]}/>

<ImagesDisplay {Swiper} {SwiperSlide} caption="Représentation de 2019" imagesList={[
            theatre1Image,
            theatre2Image,
            theatre3Image,
            theatre4Image,
            theatre5Image,
            theatre6Image,
            theatre7Image,
            theatre8Image,
        ]}/>

<YoutubeEmbed url="https://youtube.com/embed/00oub6pdZPs" defer/>
