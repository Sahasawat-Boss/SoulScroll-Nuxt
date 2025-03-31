<template>
    <header>
        <div class="logo">VSlide</div>
        <ul class="menu">
            <li>Home</li>
            <li>Blog</li>
            <li>Info</li>
        </ul>
        <div class="search">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div>
    </header>
</template>

<style scoped>
svg {
    width: 25px;
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

header .logo {
    font-weight: bold;
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