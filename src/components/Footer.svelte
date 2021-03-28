<script>
    import Social from './Social.svelte';
</script>
<style>
    footer {
        height: 200px;
        width: calc(100% - 20px);
        padding: 10px;
        background-color: #e5e6e3;
    }

    h2, p {
        text-align: center;
    }
</style>


<footer>
    <h2>Portes ouvertes 2021 du lycée Charles Jully</h2>
    <p><a href="https://lycee-charles-jully.fr/">Retourner sur https://lycee-charles-jully.fr/</a></p>
    <p>Site web créé par <a href="https://cefadrom.com/" target="_blank">Julien Wolff</a>, élève de TG1</p>
    <p>©2021 Lycée Charles Jully</p>
    <Social/>
</footer>
