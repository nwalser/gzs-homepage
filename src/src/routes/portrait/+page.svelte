<script lang="ts">
	import Galery from 'src/components/galery/Galery.svelte';
	import GaleryItem from 'src/components/galery/GaleryItem.svelte';
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Portrait"
	titleTemplate="%s - Gewerbezentrum Strahlholz"
	description="Das auf Innerrhoder Gebiet liegende aber organisatiorisch zu Gais AR gehörende Gewerbe
	Zentrum Strahlholz beherbergt über zehn Unternehmen aus unterschiedlichen Branchen."
/>

<TwoColumnLayout>
	<span slot="header">
		<ImageHeader alt="some text" src="/galerie/umgebung/gzs-umgebung-01.jpg" />
	</span>
	<span slot="body">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h1>Wer wir sind</h1>
			<h2>Die Initianten</h2>
			<p>
				Das Gewerbezentrum Strahlholz ist aus der Umnutzung einer ehemaligen Zwirnerei entstanden.
				Es waren vor allem der Industrie nahestehende Personen aus Gais, Bühler und Teufen die aktiv wurden. 
				Sie gründeten die Gewerbezentrum Strahlholz AG (GZS).
			</p>
			<p>
				Das auf Innerrhoder Gebiet liegende aber organisatorisch zu Gais AR gehörende Gewerbezentrum 
				Strahlholz beherbergt Unternehmen aus unterschiedlichen Branchen. So haben
				verschiedene Unternehmen und Mieter im 'Strahlholz' ein ideales Umfeld für ihre Tätigkeiten
				gefunden.
			</p>
		</div>
	</span>
	<span slot="side">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h2>Verwaltung</h2>
			<p>
				IDP Treuhand AG <br />
				Strahlholz 13 <br />
				9056 Gais
			</p>
		</div>
	</span>
</TwoColumnLayout>
