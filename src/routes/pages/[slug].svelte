<script context="module">
   export const load = async ({ fetch, params }) => {

      const slug = params.slug

      const res = await fetch(`/pages/${slug}.json`);
      const {page} = await res.json();

      return {
         props: {page}
      }
   };
</script>

<script>
   export let page;
</script>

<svelte:head>
   <title>SvelteKit Blog | {page.title}</title>
</svelte:head>

<div class="max-w-xl mx-auto my-10">
   <h1 class="text-4xl font-semibold mb-5">{page?.title}</h1>
   
   <article class="prose">
      {@html page?.content?.html}
   </article>
</div>