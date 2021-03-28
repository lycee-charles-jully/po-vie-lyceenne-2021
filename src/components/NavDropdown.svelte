<style>
    .dropdown-title {
        color: #333333;
        text-decoration: none;
        line-height: 50px;
        font-weight: bold;
        font-size: inherit;
        font-family: inherit;
        background: inherit;
        border: none;
        outline: none;
        padding: 0 20px;
        margin: 0;
    }

    :global(header:not(.header-bg)) .dropdown-title {
        text-shadow: #777 0 0 15px;
        color: #FDFEFB;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background: white;
        min-width: 160px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        z-index: 1;
    }

    .dropdown:focus-within .dropdown-content, .dropdown:hover .dropdown-content {
        display: block;
    }
</style>


<div class="dropdown">
    <button class="dropdown-title">
        <slot name="title"/>
    </button>
    <div class="dropdown-content">
        <slot name="content"/>
    </div>
</div>
