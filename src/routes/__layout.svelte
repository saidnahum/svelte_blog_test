<script context="module">
   export const load = async ({ fetch }) => {
      const res = await fetch('/pages.json');
      const {pages} = await res.json();

      return {
         props: {pages}
      }
   };
</script>

<script>
	import '../app.css';
	import Navbar from '$lib/Nav.svelte';
   import { onMount } from 'svelte';
   import { themeChange } from 'theme-change'

   onMount(async () => {
      themeChange(false)
   });
   
   export let pages;
</script>

<Navbar {pages}/>

<main class="container mx-auto  px-4">
	<slot />
</main>
