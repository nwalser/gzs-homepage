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
		<div class="prose prose-lg max-w-none">
			<h1>Wer wir sind</h1>
			<h2>Die Initianten</h2>
			<p>
				Das Gewerbezentrum Strahlholz ist aus der Umnutzung einer ehemaligen Zwirnerei entstanden.
				Es waren vor allem der Industrie nahe stehende Personen aus Gais, Bühler und Teufen, die
				unter der Führung des damaligen Ausserrhoder Volkswirtschafts-Direktors Hanswalter Schmid,
				Gais, aktiv wurden. Sie gründeten die Gewerbezentrum Strahlholz AG (GZS).
			</p>
			<p>
				Das auf Innerrhoder Gebiet liegende aber organisatiorisch zu Gais AR gehörende Gewerbe
				Zentrum Strahlholz beherbergt über zehn Unternehmen aus unterschiedlichen Branchen. So haben
				verschiedene Unternehmen und Mieter im 'Strahlholz' ein ideales Umfeld für ihre Tätigkeiten
				gefunden. Sie bieten rund 50 Mitarbeitenden einen Arbeitsplatz.
			</p>

			<h2>Die Aktionäre</h2>
			<p>
				Hanswalter Schmid, Gais, Präsident <br />
				Eisenhut Immobilien AG, Gais <br />
				ENZ ELECTRONIC AG, Gais <br />
				Fürsorgestiftung der Firma Heimann Koller A. G., Gais <br />
				LUMITEC AG, Gais <br />
				TISCA Tischhauser stiftung, Bühler <br />
				Personalstiftung Willig Koller & Co.
			</p>
		</div>
	</span>
	<span slot="side">
		<div class="prose prose-lg">
			<h2>Verwaltung</h2>
			<p>
				IDP Treuhand AG <br />
				Strahlholz 13 <br />
				9056 Gais
			</p>
		</div>
	</span>
</TwoColumnLayout>
