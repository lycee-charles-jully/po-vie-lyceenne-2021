<script>
    import logoLCJ from 'images/logo-lcj.png';
    import NavDropdown from './NavDropdown.svelte';
    import NavLink from './NavLink.svelte';

    export let segment;

    let headerBG = getHeaderBG();

    function getHeaderBG() {
        let bg;
        if (segment)
            bg = true;
        else if (typeof window === 'undefined')
            bg = false;
        else
            bg = document.scrollingElement.scrollTop > 10;
        return bg;
    }

    const updateHeaderBG = () => headerBG = getHeaderBG();

    $: if (segment)
        headerBG = true;
    else
        updateHeaderBG();
</script>


<svelte:window on:scroll={updateHeaderBG}/>


<style>
    header {
        position: sticky;
        top: 0;
        left: 0;
        width: calc(100% - 10px);
        height: 50px;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        z-index: 2;
    }

    nav {
        display: flex;
        align-items: flex-end;
        flex-direction: row;
    }

    .header-bg {
        background-color: #FDFEFB;
    }

    .logo {
        height: 50px;
    }

    .mobile-link {
        display: none;
    }

    @media all and (max-width: 800px) {
        .mobile-link {
            display: block;
        }

        nav {
            display: none;
        }
    }
</style>


<header class:header-bg={headerBG}>
    <a href="/" sapper:prefetch>
        <img alt="Lycée Charles Jully" class="logo" src={logoLCJ} height="50" width="81"/>
    </a>

    {#if segment}
        <div class="mobile-link">
            <NavLink href="/" {segment}>Retour à l'accueil</NavLink>
        </div>
    {/if}

    <nav>
        <NavLink href="/" {segment}>Accueil</NavLink>
        <NavDropdown>
            <div slot="title">Clubs et ateliers</div>
            <div slot="content">
                <NavLink href="club-musique" {segment}>Club Musique</NavLink>
                <NavLink href="club-echecs" {segment}>Club Échecs</NavLink>
                <NavLink href="manga-cosplay" {segment}>Club manga & cosplay</NavLink>
                <NavLink href="confiance-en-soi-reussite" {segment}>Confiance en soi et réussite</NavLink>
                <NavLink href="web-radio" {segment}>Atelier Web-radio</NavLink>
                <NavLink href="atelier-theatre" {segment}>Atelier théâtre</NavLink>
                <NavLink href="club-lecture-bd" {segment}>Club lecture et BD</NavLink>
            </div>
        </NavDropdown>
        <NavDropdown>
            <div slot="title">Organisation</div>
            <div slot="content">
                <NavLink href="mdl" {segment}><abbr title="Maison des Lycéens">MDL</abbr></NavLink>
                <NavLink href="cvl" {segment}><abbr title="Conseil de la vie lycéenne">CVL</abbr></NavLink>
                <NavLink href="eco-delegues" {segment}>Éco-délégués</NavLink>
            </div>
        </NavDropdown>
        <NavDropdown>
            <div slot="title">Vie lycéenne</div>
            <div slot="content">
                <NavLink href="internat" {segment}>Internat</NavLink>
                <NavLink href="highbac" {segment}>Highbac</NavLink>
                <NavLink href="euro-allemand" {segment}>Euro Allemand</NavLink>
                <NavLink href="parents-eleves" {segment}>Parents d'élèves</NavLink>
            </div>
        </NavDropdown>
        <NavLink href="about" {segment}>Remerciements</NavLink>
    </nav>
</header>
