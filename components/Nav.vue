<template>
    <header>
        <div class="logo text-3xl font-bold hover">VSlide</div>
        <ul class="menu text-xl ">
            <li class="hover">Home</li>
            <li class="hover">Blog</li>
            <li class="hover">Info</li>
        </ul>
        <a href="https://bossbsynth.com/" class="hover">
            bsynth.com
        </a>
    </header>
</template>

<style scoped>
svg {
    width: 20px;
}

header {
    width: 1200px;
    max-width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    grid-template-rows: 50px;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 100;
}

header .menu {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    font-weight: 500;
}
</style>