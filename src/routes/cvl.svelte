<script>
    import cvlImage from '$lib/images/cvl.png';
    import Meta from '$lib/Meta.svelte';
    import YoutubeEmbed from '$lib/YoutubeEmbed.svelte';
</script>


<style>
    .space-bottom {
        margin-bottom: 30px;
    }

    ul {
        margin-top: 2px;
        padding-inline-start: 30px;
    }

    img {
        max-width: 100%;
    }
</style>


<Meta title="Le CVL - JPO lycée Charles Jully"/>

<h1>Le conseil de la vie lycéenne</h1>

<article>
    <p>
        Le CVL est une <b>organisation lycéenne</b> composée de 10 lycéens élus pour deux ans, par l'ensemble des élèves
        de l'établissement.
        <br/>
        Chaque année, le <b>vice-président du CVL</b> est élu, pour un an, parmi les candidats à l'élection de
        représentants des élèves au conseil d'administration.
    </p>
    <p class="space-bottom">
        Le titulaire présente les avis, propositions et compte-rendu de séance du CVL au conseil d'administration. Il
        assure aussi les fonctions de vice-président du CVL, au côté du chef d'établissement.
    </p>

    <p>
        Le conseil des délégués pour la vie lycéenne (CVL) se réunit plusieurs fois par an et travaille sur un ordre du
        jour précis pour formuler avis et propositions et est obligatoirement consulté sur un certain nombre de
        questions liées à la vie de l'établissement.
    </p>

    Le CVL intervient dans :
    <ul>
        <li>les principes généraux de l'organisation des études et du temps scolaire,</li>
        <li>l'élaboration et la modification du projet d'établissement et du règlement intérieur,</li>
        <li>les questions de restauration et d'internat,</li>
        <li>les modalités générales d'organisation du travail personnel, de l'accompagnement personnalisé,</li>
        <li>les dispositifs d'accompagnement des changements d'orientation,</li>
        <li>le soutien et l'aide aux élèves,</li>
        <li>
            les échanges linguistiques et culturels en partenariat avec les établissement d'enseignement européens et
            étrangers,
        </li>
        <li>
            l'information liée à l'orientation, aux études scolaires et universitaires et aux carrières
            professionnelles,
        </li>
        <li>la santé, l'hygiène et la sécurité,</li>
        <li>l'aménagement des espaces destinés à la vie lycéenne,</li>
        <li>l'organisation des activités sportives, culturelles et périscolaires.</li>
    </ul>

</article>

<YoutubeEmbed url="https://www.youtube.com/embed/D_Bd4AGy2q0" defer/>

<img src={cvlImage} alt="Infographie du CVL" loading="lazy"/>
