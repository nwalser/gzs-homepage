<script>
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
</script>

<MainLayout>
	<span slot="header">
		<ImageHeader
			alt="some text"
			src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
		/>
	</span>
	<span slot="body">
		<div class="prose prose-md max-w-none">
			<h1>Diese Seite konnte leider nicht gefunden werden</h1>
			<a href="/">> Zurück zur Startseite</a>
		</div>
	</span>
</MainLayout>
