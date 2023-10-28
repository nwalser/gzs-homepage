<script lang="ts">
	import Galery from 'src/components/galery/Galery.svelte';
	import GaleryItem from 'src/components/galery/GaleryItem.svelte';
	import GaleryMenu from 'src/components/GaleryMenu.svelte';
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Kontakt"
	titleTemplate="%s - Gewerbezentrum Strahlholz"
	description=""
/>

<TwoColumnLayout>
	<span slot="header">
		<ImageHeader alt="" src="/galerie/mietobjekte/gzs-raume-03.jpg" />
	</span>
	<span slot="body">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h1>Herzlichen Dank für Ihr Interesse</h1>

			<h2>Verwaltung und Vermietung</h2>
			<p>
				IDP Treuhand AG <br />
				Strahlholz 13 <br />
				9056 Gais
			</p>

			<h2>Kontaktperson</h2>
			<p>
				Nicole Schoch <br />
				Telefon: +41 71 791 70 11 <br />
				E-Mail: <a href="mailto:nicole.schoch@idpag.ch" class="underline">nicole.schoch@idpag.ch</a>
			</p>

			<p>
				Schreiben Sie uns ein E-Mail oder rufen Sie uns einfach an. <br />
				Wir geben Ihnen gerne nähere Auskünfte.
			</p>
		</div>
	</span>
	<span slot="side">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h2>Behörden</h2>
			<a href="https://www.ar.ch/">Kanton AR</a>
			<br />
			<a href="https://www.gais.ch/">Gemeinde Gais</a>
			<br />
			<a href="https://www.buehlerar.ch/">Gemeinde Bühler</a>
			<br />
			<a href="https://www.ai.ch/">Kanton AI</a>
			<br />
			<a href="https://www.schlatt-haslen.ch/">Schlatt Haslen</a>
			<h2>Öffentlicher Verkehr</h2>
			<a href="https://www.sbb.ch/">Fahrplan SBB</a>
		</div>
	</span>
</TwoColumnLayout>
