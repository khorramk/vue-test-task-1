<template>
  <nav class="navigation" role="navigation" aria-label="Main Navigation">
    <a href="#" class="navigation__logo">
      <client-only>
        <NuxtImg src="/img/logo.png" sizes="200px sm:400px lg:640px" />
      </client-only>
    </a>

    <a
      class="navigation__toggle"
      id="menu-toggle"
      role="button"
      aria-expanded="false"
      aria-controls="menu"
      href="#menu"
    >
      <svg
        class="hamburger-icon"
        viewBox="0 0 100 110"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect class="bar bar1" width="100" height="4" transform="translate(0 0)" />
        <rect
          class="bar bar2"
          width="100"
          height="4"
          transform="translate(0 45)"
        />
        <rect
          class="bar bar3"
          width="100"
          height="4"
          transform="translate(0 95)"
        />
      </svg>
    </a>

    <ul role="menubar" id="menu" class="navigation__list">
      <li v-for="(menu, i) in menuItems" :key="i" role="menuitem" class="navigation__item">
        <NuxtLink class="navigation__link"  :to="menu.link">{{ menu.name }}</NuxtLink>
      </li>
      <a href="#" class="clear-modal">&times;</a>
    </ul>
  </nav>
</template>

<script lang="ts" setup>

 const {menuItems} = useWebsiteStore();

</script>

