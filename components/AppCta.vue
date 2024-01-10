<template>
  <header class="cta-hero" role="banner" aria-label="Hero Section">
    <div class="cta-img-container">
      <client-only>
        <img
          src="/img/ctaMobilePlacheolder.svg"
          width="600"
          height="1000"
          role="img"
          srcset="
            /img/ctaMobilePlacheolder.svg  600w,
            /img/ctaPlaceholder.svg       1200w
          "
          sizes="(max-width: 700px) 400px, (max-width: 800px) 1400px"
        />
      </client-only>
    </div>

    <div class="cta-hero__content">
      <h1 class="cta-hero__title">Get Online week 2021</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ea
        repudiandae soluta enim modi ratione minima illo rerum facere aliquam
        consequuntur, neque at qui, culpa adipisci praesentium. Nesciunt, magnam
        deleniti.
      </p>

      <app-link-button page="/learn-more" :bordered="false">
        Learn more
      </app-link-button>
      
    </div>
  </header>
</template>
