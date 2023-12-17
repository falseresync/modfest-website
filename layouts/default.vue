<template>
    <Header class="container" />
    <main class="container main">
        <img class="main__banner banner" src="@/assets/images/1.20_cover.png" alt="Modfest 1.20 &quot;Sky and Sea&quot; Dec. 18 - 31, 2023" />
        <section id="details" class="main__section-details section-details">
            <h2 class="section-details__title">
                A great excuse to try something new or flex your modding abilities
            </h2>
            <div class="section-details__content">
                <div class="section-details__theme card">
                    We encourage you your mod to follow our central theme:
                    <p class="detail-highlight">
                        <NuxtIcon name="moon-stars" class="detail-highlight__icon" />
                        <span class="detail-highlight__text">Sky and Sea</span>   
                        <NuxtIcon name="anchor" class="detail-highlight__icon" />
                    </p>
                </div>
                <div class="section-details__timing card">                    
                    The ModFest 1.20 event will be held in the very end of 2023 between:              
                    <p class="detail-highlight">
                        <NuxtIcon name="clock" class="detail-highlight__icon" />
                        <span class="detail-highlight__text">Monday, December 18th</span>   
                    </p>                     
                    <p class="detail-highlight">
                        <NuxtIcon name="alarm" class="detail-highlight__icon" />
                        <span class="detail-highlight__text">Sunday, December 31st</span>   
                    </p>          
                </div>
            </div>
            <a class="partnership" href="https://modrinth.com">
                <span class="partnership__text">In partnership with</span>
                <img class="partnership__icon" src="@/assets/manual-icons/modrinth-full.svg" alt="Modrinth logo" />
            </a>
        </section>
        <section id="faq" class="main__section-faq section-faq">
            <div class="section__title">
                <hr class="section__title__before" />
                <h2 class="section__title__text">F.A.Q.</h2>
                <hr class="section__title__after" />
            </div>
            <div class="card">
                <ul>
                    <li>
                        <h3 class="faq__question">Must I abide by the theme strictly?</h3>
                        <span>Nope, not at all! The theme is open to interpretation; try to come up with something interesting</span>
                    </li>
                    <li>
                        <h3 class="faq__question">Can I use pre-made assets?</h3>
                        <span>Yes, you can use pre-made assets and libraries. But not code</span>
                    </li>
                    <li>
                        <h3 class="faq__question">Can I team-up?</h3>
                        <span>
                            Yes, go ahead! The more the merrier, as one would say. You could find a teammate on 
                            <a :href="links.discord">our Discord server</a>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
        <section id="rules" class="main__section-rules section-rules">
            <div class="section__title">
                <hr class="section__title__before" />
                <h2 class="section__title__text">Rules</h2>
                <hr class="section__title__after" />
            </div>
            <div class="card">                
                <ul>
                    <li>
                        Mods must be compatible with the
                        <a href="https://fabricmc.net/">Fabric</a>             
                        mod loader and Minecraft 1.20.4
                    </li>
                    <li>
                        Mods cannot cause serious compatibility issues with other submissions
                    </li>
                    <li>
                        Mods must be created between the beginning of December 18th UTC and the end of December 31st UTC, 2023
                    </li>
                    <li>
                        Mods must be submitted via a public or unlisted project on 
                        <a href="https://modrinth.com/">Modrinth.</a>
                        Submissions are accepted through a bot in
                        <a :href="links.discord">our Discord server</a>
                    </li>
                </ul>
            </div>
        </section>
        <section id="register" class="main__section-register section-register">
            <div class="section__title section__title_large">
                <hr class="section__title__before" />
                <h2 class="section__title__text">Register</h2>
                <hr class="section__title__after" />
            </div>
            <div class="card">
                Join <a :href="links.discord">our Discord server</a>
                and use the 
                <code>/register</code> 
                command or click the button in the
                <code>#welcome</code>
                channel!
            </div>
        </section>
    </main>
    <footer class="container footer">
        <p>ModFest! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</p>
        <p>
            Website by
            <a href="https://github.com/falseresync">falseresync</a>
            &
            <a href="https://github.com/ModFest">the ModFest team</a>
        </p>
    </footer>
</template>

<style>
:root {
  --default-font: 'Commissioner', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
  --accent-font: 'Fredoka', 'Commissioner', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;

  --size-default: 16px;

  --size-sm: 0.75rem;
  --size-nm: 1rem;
  --size-md: 1.25rem;
  --size-lg: 1.5rem;
  --size-1xl: 2rem;
  --size-2xl: 3rem;

  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-nm: 1rem;
  --spacing-md: 1.25rem;
  --spacing-lg: 1.5rem;
  --spacing-1xl: 2rem;
  --spacing-2xl: 3rem;

  --padding-card: var(--spacing-md) var(--spacing-1xl) var(--spacing-nm) var(--spacing-1xl);

  --rounding-card: 0.75rem;
  --rounding-button: 0.5rem;

  --color-background:               hsl(210, 21%, 11%);
  --color-background-accent:        hsl(219, 13%, 20%);
  --color-background-card:          hsl(219, 13%, 14%);
  --color-text:                     hsl(221, 18%, 82%);
  --color-text-on-accent:           hsl(221, 18%, 75%);
  --color-link-tint:                hsla(217, 100%, 73%, 80%);

  --box-shadow-card: 0 3px 0 0 hsla(0, 0%, 0%, 75%);
  --box-shadow-button: 0 3px 0 0 hsla(210, 21%, 5%, 75%);
}

html,
body {
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: var(--default-font);
    font-size: var(--size-default);
    line-height: 1.5;
}

a {    
    color: var(--color-link-tint);
}

code {
    background-color: var(--color-background-accent);
    color: var(--color-text-on-accent);
    padding: 0 var(--spacing-xs);
}

.container {
    max-width: 64rem;
    box-sizing: border-box;
    margin: var(--spacing-sm) auto;
}

.card {
    background-color: var(--color-background-card);
    border-radius: var(--rounding-card);
    box-shadow: var(--box-shadow-card);
    padding: var(--padding-card);
}

.main {
    padding: var(--spacing-nm);

    display: grid;
    grid: 
        [row1-start] "banner             banner"             auto [row1-end] 
        [row2-start] "section-details    section-details"    auto [row2-end] 
        [row3-start] "section-faq        section-rules"      auto [row3-end] 
        [row4-start] "section-register   section-register"   auto [row4-end] 
        / 1fr 1fr;
    column-gap: var(--spacing-nm);
    row-gap: var(--spacing-1xl);
}

.main__banner {
    grid-area: banner;
}

.main__section-details {
    grid-area: section-details;
}

.main__section-faq {
    grid-area: section-faq;
}

.main__section-rules {
    grid-area: section-rules;
}

.main__section-register {
    grid-area: section-register;
}

.section__title {
    margin-bottom: var(--spacing-nm);

    display: flex;
    align-items: center;
    gap: var(--spacing-nm);
}

.section__title__before,
.section__title__after {
    flex: 1;
}

.section__title__text {
    font-family: var(--accent-font);
    font-size: var(--size-lg);
    font-weight: bold;

    margin: 0;
    padding: 0;
}

.section__title_large > .section__title__text {
    font-size: var(--size-1xl);
}

.banner {
    border-radius: var(--rounding-card);
    box-shadow: var(--box-shadow-card);

    width: 60rem;
    margin: 0 auto;

    filter: brightness(200%);
}

.section-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-nm);
}

.section-details__title {
    font-family: var(--accent-font);
    font-size: var(--size-lg);
    font-weight: bold;

    display: block;
    margin: 0;
    padding: 0;
}

.section-details__content {
    max-width: 80%;
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-nm);
}

.section-details__theme,
.section-details__timing {
    box-sizing: border-box;
    flex: 1;
}

.detail-highlight {
    padding: 0;
    margin: var(--spacing-xs) 0;

    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
}

.detail-highlight__icon.nuxt-icon > svg {
    height: var(--size-lg);
    width: var(--size-lg);
}

.detail-highlight__text {
    font-size: var(--size-md);
    font-weight: bold;
}

.partnership {
    color: var(--color-text);
    text-decoration: none;
    
    display: flex;
    align-items: center;
    gap: var(--spacing-nm);
}

.partnership__text {
    font-family: var(--accent-font);
    font-size: var(--size-md);
    font-weight: bold;
}

.partnership__icon {
    height: var(--size-1xl);
    fill: var(--color-text);
}

.faq__question {
    font-size: var(--size-nm);
    margin: var(--spacing-xs) 0;
}

.section-register {
    width: 40rem;
    margin: 0 auto;

    font-size: var(--size-md);
    line-height: var(--size-1xl);
}

.footer {
    padding: var(--spacing-1xl);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-nm);
}

.footer > p {
    margin: 0;
}
</style>