<template>
    <header class="header">
        <nav class="header__nav">
            <NuxtLink class="logo" to="/">
                <img class="logo__image" src="@/assets/logo.svg" alt="ModFest logo">
                <h1 class="logo__text">ModFest</h1>
            </NuxtLink>
            <ul class="nav">
                <li>
                    <NuxtLink class="nav__item" to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="nav__item" to="/1.20">ModFest 1.20</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="nav__item" to="/archive">Archive</NuxtLink>
                </li>
            </ul>
        </nav>
        <ul class="socials">
            <li>
                <a class="socials__item socials-item" href="https://github.com/ModFest">
                    <img class="socials-item__icon" src="@/assets/manual-icons/github.svg" alt="GitHub">
                </a>
            </li>
            <li>
                <a class="socials__item socials-item" href="https://modrinth.com/user/ModFest">
                    <img class="socials-item__icon" src="@/assets/manual-icons/modrinth.svg" alt="GitHub">
                </a>
            </li>
            <li>
                <a class="socials__item socials-item" href="https://cohost.org/modfest">
                    <img class="socials-item__icon" src="@/assets/manual-icons/cohost.svg" alt="GitHub">
                </a>
            </li>
            <li>
                <a class="socials__item socials-item" :href="links.discord">
                    <img class="socials-item__icon" src="@/assets/manual-icons/discord.svg" alt="Discord">
                </a>
            </li>
        </ul>
    </header>
</template>

<style scoped>
.header {
    padding: var(--spacing-nm);

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__nav {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
}

.logo {
    color: var(--color-text);
    text-decoration: none;
    
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.logo__image {
    height: var(--size-2xl);
    width: var(--size-2xl);
}

.logo__text {
    font-family: var(--accent-font);
    font-size: var(--size-lg);
    font-weight: bold;

    padding: 0;
    margin: 0;
}

.nav,
.socials {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    gap: var(--spacing-xs)
}

.nav__item,
.socials__item {
    color: var(--color-text);
    text-decoration: none;
    font-family: var(--accent-font);

    padding: var(--spacing-xs) var(--spacing-sm);

    display: block;
}

.nav__item:hover,
.nav__item:focus,
.socials__item:hover,
.socials__item:focus  {
    background-color: var(--color-background-accent);
    
    /* transform: scale(1.0125); */
    transition: background-color 0.25s ease-in-out;
}

.socials-item {
    display: flex;
    align-items: center;
}

.socials-item__icon {
    height: var(--size-md);
    width: var(--size-md);
}
</style>
