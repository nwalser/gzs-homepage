<script lang="ts">
	import Galery from 'src/components/galery/Galery.svelte';
	import GaleryItem from 'src/components/galery/GaleryItem.svelte';
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Willkommen"
	titleTemplate="%s - Gewerbezentrum Strahlholz"
	description="Variable Räume für Atelier, Praxis für Arzt/Zahnarzt, Büro, Schulung, Tanz- oder
	Foto-Studio, Labor und vielem mehr zu vermieten."
/>

<TwoColumnLayout>
	<span slot="header">
		<ImageHeader alt="some text" src="/galerie/umgebung/gzs-umgebung-01.jpg" />
	</span>
	<span slot="body">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h1>Willkommen im Gewerbezentrum Strahlholz Gais</h1>
			<p>
				Das GZS setzt durch behutsame Renovierung und Modernisierung der ehemaligen Textilfabrik
				markante Akzente. Es vereinigt Dienstleistungs- und Gewerbe-Betriebe unterschiedlicher
				Ausrichtung, vom Künstler bis zum High-Tech Labor.
			</p>
		</div>
		<Galery>
			<GaleryItem src="/galerie/infrastruktur/gzs-infrastruktur-01.jpg" alt="" cols={2} rows={1} />
			<GaleryItem src="/galerie/mietobjekte/gzs-raume-03.jpg" alt="" cols={1} rows={1} />
			<GaleryItem src="/galerie/mietobjekte/gzs-raume-04.jpg" alt="" cols={1} rows={1} />
			<GaleryItem src="/galerie/mietobjekte/gzs-raume-12.jpg" alt="" cols={2} rows={2} />
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-01.jpg" alt="" cols={1} rows={1} />
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-02.jpg" alt="" cols={3} rows={2} />
		</Galery>
	</span>
	<span slot="side">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h2>für clevere (Jung-) Unternehmer – aktuell zu vermieten</h2>
			<p>
				variable Räume für Atelier, Praxis für Arzt/Zahnarzt, Büro, Schulung, Tanz- oder
				Foto-Studio, Labor und vieles mehr …
			</p>
			<h2>Flexible Räume und Flächen</h2>
			<p>
				Insgesamt 2'000m2 Fläche sind auf vier Etagen verteilt. Die Räume sind 3.60m hoch, sehr hell
				und werden unterteilt nach Ihren Anforderungen. Sie gestalten den Arbeitplatz nach Ihren
				Bedürfnissen.
			</p>
		</div>
	</span>
</TwoColumnLayout>
