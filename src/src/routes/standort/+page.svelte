<script lang="ts">
	import Galery from 'src/components/galery/Galery.svelte';
	import GaleryItem from 'src/components/galery/GaleryItem.svelte';
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Standort"
	titleTemplate="%s - Gewerbezentrum Strahlholz"
	description="Das Gewerbezentrum Stahlholz ist von St.Gallen in nur 15 Autominuten zu erreichen. Es stehen
	ausreichend Parkplätze für Mieter und Besucher. In unmittelbarer Nähe befindet sich eine
	Haltestelle der Appenzeller Bahnen."
/>

<TwoColumnLayout>
	<span slot="header">
		<ImageHeader alt="some text" src="/galerie/umgebung/gzs-umgebung-01.jpg" />
	</span>
	<span slot="body">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h1>Strahlholz - mit Bahn-Anschluss</h1>
			<iframe
				title="karte"
				width="100%"
				height="600px"
				id="gmap_canvas"
				src="https://maps.google.com/maps?q=strahlholz&t=&z=11&ie=UTF8&iwloc=&output=embed"
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
			/>
		</div>
	</span>
	<span slot="side">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h2>Lage</h2>
			<p>
				Das Gewerbezentrum Strahlholz ist von St.Gallen in nur 15 Autominuten zu erreichen. Es stehen
				ausreichend Parkplätze für Mieter und Besucher zur Verfügung. In unmittelbarer Nähe befindet sich eine
				Haltestelle der Appenzeller Bahnen.
			</p>
		</div>
	</span>
</TwoColumnLayout>
