<script context="module">
   export const load = async ({ fetch }) => {
      const res = await fetch('/posts.json');
      const {posts} = await res.json();

      return {
         props: {posts}
      }
   };
</script>

<script>
   export let posts;
</script>

<svelte:head>
   <title>Sveltik Blog</title>
</svelte:head>

<h1 class="text-4xl my-10 font font-extrabold text-center">Welcome to SvelteKit Blog Test</h1>
<div class="grid grid-cols-12 gap-4">
   {#each posts as post (post.id)}
      <div class="card text-center shadow-2xl mb-20 col-span-12 md:col-span-6 lg:col-span-4" >
         <figure class="px-10 pt-10">
            <img src={post?.coverImage?.url} alt={post.title} class="rounded-xl">
         </figure>
         <div class="card-body">
            <h2 class="text-xl font-bold">{post.title}</h2>
            <p>{post.excerpt}</p>
            <div class="flex justify-center mt-5 space-x-2 mb-3">
               {#each post.tags as tag }
                  <span class="badge badge-primary">{tag}</span>
               {/each}
            </div>
            <div class="justify-center card-actions">
               <a href={`/posts/${post.slug}`} class="btn btn-outline btn-primary rounded-md" sveltekit:prefetch>Read &rArr;</a>
            </div>
         </div>
      </div>
   {/each}
</div>