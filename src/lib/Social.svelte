<script>
    import youtubeIcon from '$lib/icons/youtube.svg';
    import instagramIcon from '$lib/icons/instagram.svg';
    import facebookIcon from '$lib/icons/facebook.svg';
    import emailIcon from '$lib/icons/email.svg';
</script>


<style>
    .social-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        width: 220px;
        margin: 0 auto;
    }

    img {
        height: 40px;
        width: 40px;
    }
</style>


<div class="social-container">
    <a href="https://www.youtube.com/channel/UCXLKzD8dkL_zhP5dGmmzjbg" rel="noopener noreferrer">
        <img src={youtubeIcon} alt="Youtube"/>
    </a>
    <a href="https://www.instagram.com/lcjoff/" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram"/>
    </a>
    <a href="https://www.facebook.com/Lyc%C3%A9e-Charles-Jully-Vie-du-Lyc%C3%A9e-268385973316483/" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook"/>
    </a>
    <a href="mailto:lcjoff@gmail.com">
        <img src={emailIcon} alt="Email"/>
    </a>
</div>
