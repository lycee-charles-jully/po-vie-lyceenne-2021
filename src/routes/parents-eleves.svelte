<script>
    import fcpeLogo from '$lib/images/parents-eleves/logo-fcpe.png';
    import ensemblesImage from '$lib/images/parents-eleves/ensembles.png';
    import profExpressLogo from '$lib/images/parents-eleves/prof-express.jpg';
    import projetsImage from '$lib/images/parents-eleves/projets-pedagogiques.png';
    import tableImage from '$lib/images/parents-eleves/table.jpg';
    import Meta from '$lib/Meta.svelte';
</script>


<style>
    .text-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        margin-bottom: 20px;
    }

    .text-container p, .text-container div {
        flex: 1;
    }

    img {
        max-width: 100%;
    }

    .h200 {
        max-height: 200px;
        align-self: center;
    }

    .w-full {
        width: 100%;
    }

    h2 {
        margin-top: 30px;
    }

    @media all and (max-width: 700px) {
        .text-container {
            flex-direction: column;
            gap: 0;
            align-items: initial;
        }
        .text-container.small-reverse {
            flex-direction: column-reverse;
        }
    }
</style>


<Meta title="La FCPE - JPO lycée Charles Jully"/>

<article>
    <h1>La FCPE</h1>


    <div class="text-container">
        <p>
            Toujours là pour accompagner et aider nos enfants, la FCPE représente toutes les familles dans de nombreux
            établissements.
        </p>
        <img src={fcpeLogo} alt="Logo FCPE" class="h200" loading="lazy"/>
    </div>

    <div class="text-container small-reverse">
        <img src={tableImage} alt="Table ronde" class="h200" loading="lazy"/>
        <div>
            Nos élus sont actifs dans différentes instances
            <ul>
                <li>Les conseils de classe</li>
                <li>Les conseils de discipline</li>
                <li>Les conseils d’administration, etc…</li>
            </ul>
        </div>
    </div>

    <div class="text-container">
        <p>
            Grâce à votre adhésion, vous bénéficiez d’une aide personnalisée et de nombreuses ressources pédagogiques en
            ligne via la plateforme PROF EXPRESS, des professionnels à l’écoute de vos enfants qui répondent à leurs
            questions.
        </p>
        <img src={profExpressLogo} alt="Table ronde" class="h200" loading="lazy"/>
    </div>

    <p>
        La FCPE accompagne également différents projets pédagogiques par un soutien financier (théâtre, danse, matériel
        d’apprentissage des langues, tableaux interactifs, matériels sportif et de secourisme,…)
    </p>
    <img src={projetsImage} alt="Projets" class="w-full" loading="lazy">

    <h2>Contact</h2>

    <p>
        Plus de renseignements sur notre site :
        <a href="http://www.fcpe-saint-avold.com/parents-eleves.svelte" rel="noopener noreferrer">http://www.fcpe-saint-avold.com/</a>
    </p>

    <p>
        Permanences à notre local 1 rue de la Chapelle SAINT AVOLD, les vendredi de 9h30 à 11h30 hors vacances scolaires.
    </p>

    <p>
        Téléphone : <a href="tel:0695802476">06 95 80 24 76</a>
    </p>

    <h2>Seul on va plus vite, ensemble on va plus loin !</h2>

    <div class="text-container">
        <p>
            Rejoignez nous et construisons ensemble l’avenir de nos enfants.
        </p>
        <img src={ensemblesImage} alt="Ensembles" class="h200" loading="lazy"/>
    </div>
</article>
