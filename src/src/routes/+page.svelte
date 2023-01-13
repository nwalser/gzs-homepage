<script lang="ts">
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="Willkommen" titleTemplate="%s - Gewerbezentrum Strahlholz" description="" />

<TwoColumnLayout>
	<span slot="header">
		<ImageHeader
			alt="some text"
			src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
		/>
	</span>
	<span slot="body">
		<div class="prose prose-md max-w-none">
			<h1>Willkommen im Gewerbezentrum Strahlholz Gais</h1>
			<p>
				Das GZS setzt durch behutsame Renovierung und Modernisierung der ehemaligen Textilfabrik
				markante Akzente. Es vereinigt Dienstleistungs- und Gewerbe-Betriebe unterschiedlicher
				Ausrichtung, vom Künstler bis zum High-Tech Labor.
			</p>
		</div>
	</span>
	<span slot="side">
		<div class="prose prose-lg">
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
