<script lang="ts">
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Mieterschaft"
	titleTemplate="%s - Gewerbezentrum Strahlholz"
	description="Der lebendige Mieter-Mix - industrielle Elektronik, Leuchtsysteme,
	Dentalhandelsunternehmen, Treuhand, Fernbegleitung, Kunstmaler,
	Bergführer, Hobbyraumnutzer, Wohnungsmieter - wie auch die Lage
	im Grünen, am Rotbach gelegen, machen den Reiz des Gewerbezentrum
	Strahlholz aus. Dies in nächster Nähe zum Zentrum St. Gallen sowie
	im steuergünstigen Appenzell Innerrhoden gelegen."
/>

<TwoColumnLayout>
	<span slot="header">
		<ImageHeader alt="some text" src="/galerie/umgebung/gzs-umgebung-02.jpg" />
	</span>
	<span slot="body">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h1>Ein lebendiger Mieter-Mix</h1>
			<p>
				Der lebendige Mieter-Mix - industrielle Elektronik, Leuchtsysteme,
				Dentalhandelsunternehmen, Treuhand, Fernbegleitung, Kunstmaler,
				Bergführer, Hobbyraumnutzer, Wohnungsmieter - wie auch die Lage
				im Grünen, am Rotbach gelegen, machen den Reiz des Gewerbezentrum
				Strahlholz aus. Dies in nächster Nähe zum Zentrum St. Gallen sowie
				im steuergünstigen Appenzell Innerrhoden gelegen. 
			</p>
		</div>
	</span>
	<span slot="side">
		<a href="/mietobjekte">
			<div class="prose prose-base md:prose-lg max-w-none">
				<h2>Aktuell zu vermieten</h2>
				<p>
					variable Räume für Atelier, Praxis für Arzt/Zahnarzt, Büro, Schulung, Tanz- oder
					Foto-Studio, Labor und vieles mehr …
				</p>
			</div>
		</a>
	</span>
</TwoColumnLayout>
