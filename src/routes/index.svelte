<Head_Language lang="en" />
<Head_HTML
	title="DevLove - Milk"
	description="Milk Website Booster"
	keywords="Milk, Website"
/>
<Head_Facebook />
<!-- <Head_Twitter /> -->
<Layout_Main id="page-homepage">
	<Hero id="main-hero">
		{#if logo}
			<img
				class="logo"
				src={logo}
				alt={title}
				width={logo_width}
				height={logo_height}
			/>
		{/if}
		{#if title}<h1>{title}</h1>{/if}
		{#if tagline}<h2>{tagline}</h2> {/if}
		{#if excerpt}<p>{excerpt}</p>{/if}
		{#if details}<div class="details">{details}</div>{/if}
	</Hero>
	<div class="content">
		<div class="content-inner">
			<h1>
				Welcome to 🥛Milk<span
					class="font-resize"
					style="--resize-by: 0.60">.js</span
				>
			</h1>
			<div>
				<ul>
					<li>
						<a href="/documentation/milk">Milk.js Documentation</a>
					</li>
					<li>
						<a href="/documentation/theme">
							Theme Documentation ({$milk?.theme?.name})
						</a>
					</li>
					<li>
						<a href="/documentation/browser">
							Milk's Browser Tests
						</a>
					</li>
				</ul>
				<div>{the_title}</div>
			</div>
		</div>
	</div>
</Layout_Main>

<script>
	/* ## Svelte ## */
	import { onMount, onDestroy } from 'svelte';
	/* ## MILK ## */
	import { milk, browser } from '$milk/milk.js';
	/* ## Components ## */
	import Head_Language from '$milk/lib/Head_Language.svelte';
	import Head_HTML from '$milk/lib/Head_HTML.svelte';
	import Head_Facebook from '$milk/lib/Head_Facebook.svelte';
	// import Head_Twitter from '$milk/lin/Head_Twitter.svelte';
	import Layout_Main from '$theme/Layout_Main.svelte';
	import Hero from '$milk/lib/Hero.svelte';
	/* ## Variables ## */
	let title;
	let tagline;
	let excerpt;
	let details;
	let logo;
	let logo_width;
	let logo_height;
	$: title ||= $milk?.credits?.title || '';
	$: tagline ||= $milk?.credits?.tagline || '';
	$: excerpt ||= $milk?.credits?.excerpt || '';
	$: details ||= $milk?.credits?.details || '';
	$: logo ||= $milk?.credits?.logo || '';
	$: logo_width ||= $milk?.credits?.logo_width || '200';
	$: logo_height ||= $milk?.credits?.logo_height || '200';

	/* ## Data Loading ## */
	let unsubscribe = () => {};
	let the_title = 'Loading...';
	import { Q_GET_POST_BYID } from '$graphql/wordpress.graphql.js';
	/* ## Main ## */
	onMount(async () => {
		let queryVariables = { id: 1 };
		let getPost = $milk?.data?.gql(
			Q_GET_POST_BYID,
			$milk.data.sources.wordpress,
			queryVariables
		);
		unsubscribe = await getPost?.subscribe(async (fetched_data) => {
			let data = await fetched_data;
			the_title = data?.postBy?.title;
			// console.log(data);
		});
	});
	/* ## Exit ## */
	onDestroy(() => {
		unsubscribe(); // important for garbage collection otherwise memory leak
	});
</script>

<style>
</style>
