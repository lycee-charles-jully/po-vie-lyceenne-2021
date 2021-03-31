<script>
    import conferenceIcon from '$lib/icons/conference.svg';
</script>


<style>
    .container {
        position: sticky;
        bottom: 20px;
        right: 20px;
        float: right;
        height: 50px;
        width: 50px;
        cursor: pointer;
        border-radius: 25px;
        background-color: #EC6F1B;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        transition: width .3s;
        text-decoration: none;
        z-index: 2;
    }

    .container:hover {
        width: 160px;
    }

    .image-container {
        height: 50px;
        width: 50px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        height: 35px;
        width: 35px;
        transform: translateY(-2px);
    }

    span {
        color: white;
        line-height: 22px;
        padding-left: 5px;
        display: block;
        width: 105px;
        flex-shrink: 0;
    }
</style>


<a class="container" href="https://evenement.lycee-charles-jully.fr/index.php/planning_2/" role="tooltip">
    <div class="image-container">
        <img alt="conferences" src={conferenceIcon}/>
    </div>
    <span>Accéder aux conférences</span>
</a>
