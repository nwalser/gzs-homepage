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
			<table class="table-auto">
				<thead>
					<tr>
						<th>Mieter</th>
						<th>Verwendungszweck</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>ENZ ELECTRONIC AG</td>
						<td>Industrielle Elektronik</td>
					</tr>
					<tr>
						<td>Fässler, Walter &amp; Fuchs, Pat.</td>
						<td>Parkplätze</td>
					</tr>
					<tr>
						<td>IDP Treuhand AG</td>
						<td>Treuhand</td>
					</tr>
					<tr>
						<td>Isenring Hauswartungen GmbH</td>
						<td>Lagerraum</td>
					</tr>
					<tr>
						<td>LUMITEC AG</td>
						<td>Leuchtsysteme</td>
					</tr>
					<tr>
						<td>Maier, Hans Joachim</td>
						<td>Hobbyraum</td>
					</tr>
					<tr>
						<td>Maier, Hans Michael</td>
						<td>Wohnungsmieter</td>
					</tr>
					<tr>
						<td>Meier, Martin</td>
						<td>Hobbyraum</td>
					</tr>
					<tr>
						<td>Oggenfuss Pascal</td>
						<td>Hobbyraum</td>
					</tr>
					<tr>
						<td>Pazzaglia Enzo</td>
						<td>Hobbyraum</td>
					</tr>
					<tr>
						<td>pfistotech, H. Pfister</td>
						<td>Hobbyraum</td>
					</tr>
					<tr>
						<td>Schläpfer, Christian</td>
						<td>Hobbyraum</td>
					</tr>
					<tr>
						<td>Schweizer Hans und Harlis</td>
						<td>Maler, Atlelier</td>
					</tr>
					<tr>
						<td>Steininger Werner</td>
						<td>Bergführer und Kunstmaler</td>
					</tr>
					<tr>
						<td>Wyss Reto</td>
						<td>Hobbyraum</td>
					</tr>
					<tr>
						<td>Reckhaus AG</td>
						<td>insect Respect</td>
					</tr>
					<tr>
						<td>Brunner Bernadette</td>
						<td>Wohnungsmiete</td>
					</tr>
					<tr>
						<td>heico Dent GmbH</td>
						<td>Dentalhandelsunternehmen</td>
					</tr>
					<tr>
						<td>Rico Brunner AG</td>
						<td>Fernbegleitung</td>
					</tr>
					<tr>
						<td>Brändli Werner</td>
						<td>Hobbyraum</td>
					</tr>
					<tr>
						<td>Spirig Katja</td>
						<td>Hobbyraum</td>
					</tr>
					<tr>
						<td>Moshin Sheraz</td>
						<td>Hobbyraum</td>
					</tr>
					<tr>
						<td>Iff Matthias Ulrich</td>
						<td>Hobbyraum</td>
					</tr>
				</tbody>
			</table>
		</div>
	</span>
	<span slot="side">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h2>Vielfältige Erfolgsfaktoren</h2>
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
</TwoColumnLayout>
