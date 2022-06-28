<script context="module">
   export const load = async ({ fetch, params }) => {

      const slug = params.slug

      const res = await fetch(`/posts/${slug}.json`);
      const {post} = await res.json();

      return {
         props: {post}
      }
   };
</script>

<script>
   export let post;
</script>

<svelte:head>
   <title>SvelteKit Blog | {post.title}</title>
</svelte:head>

<div class="max-w-3xl mx-auto my-10">
   <div class="sm:-mx-5, md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
      <img src={post?.coverImage?.url} alt={post.title} class="">
   </div>
   
   <h1 class="text-4xl font-semibold mb-5 text-center">{post.title}</h1>

   <a href="/" class="inline-flex items-center mb-3">
      <img 
         src={post.author.picture.url} 
         alt={post.author.name} 
         class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
      />

      <span class="flex-grow flex flex-col pl-4">
         <span class="title-font font-medium">{post.author.name}</span>
         <span class="text-secondary text-xs tracking-widest mt-0.5">{post.author.authorTitle}</span>
      </span>
   </a>

   <p class="text-secondary text-xs tracking-widest font-semibold">
      { new Date(post.date).toDateString() }
   </p>

   {#if post.tags }
      <div class="mt-5 space-x-2 mb-5">
         {#each post.tags as tag }
            <span class="badge badge-primary rounded-xl p-4">{tag}</span>
         {/each}
      </div>
   {/if}

   <article class="prose prose-p:text-justify max-w-full">
      {@html post.content.html}
   </article>
</div>