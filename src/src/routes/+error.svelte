<script>
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
</script>

<MainLayout>
	<span slot="header">
		<ImageHeader
			alt="some text"
			src="/galerie/infrastruktur/gzs-infrastruktur-07.jpg"
		/>
	</span>
	<span slot="body">
		<div class="prose prose-md max-w-none">
			<h1>Diese Seite konnte leider nicht gefunden werden</h1>
			<a href="/">> Zurück zur Startseite</a>
		</div>
	</span>
</MainLayout>
