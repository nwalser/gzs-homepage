<script lang="ts">
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="Willkommen" titleTemplate="%s - Gewerbezentrum Strahlholz" description="" />

<TwoColumnLayout>
	<span slot="header">
		<ImageHeader alt="some text" src="/galerie/umgebung/gzs-umgebung-01.jpg" />
	</span>
	<span slot="body">
		<div class="prose prose-lg max-w-none">
			<h1>Mietobjekte</h1>
			<h2>Mietobjekte im Erdgeschoss</h2>
			<table class="table-fixed">
				<colgroup>
					<col span="1" style="width: 10%;" />
					<col span="1" style="width: 15%;" />
					<col span="1" style="width: 35%;" />
					<col span="1" style="width: 40%;" />
				</colgroup>
				<thead>
					<tr>
						<th>Nr</th>
						<th>Fläche</th>
						<th>Mieter</th>
						<th>Detail-Informationen</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><b>E.1</b></td>
						<td>48 m2</td>
						<td>W. Brändli</td>
						<td />
					</tr>
					<tr>
						<td><b>E.2</b></td>
						<td>505 m2</td>
						<td>LUMITEC AG</td>
						<td />
					</tr>
					<tr>
						<td><b>E.3</b></td>
						<td>12 m2</td>
						<td>IDP Treuhand AG</td>
						<td />
					</tr>
					<tr>
						<td><b>E.4</b></td>
						<td>658 m2</td>
						<td>ENZ ELECTRONIC AG</td>
						<td />
					</tr>
				</tbody>
			</table>
			<img src="/grundriss/etage-0.jpg" class="rounded-sm w-full" alt="etage 1" />

			<h2>Mietobjekte im 1. Obergeschoss</h2>
			<table class="table-auto">
				<colgroup>
					<col span="1" style="width: 10%;" />
					<col span="1" style="width: 15%;" />
					<col span="1" style="width: 35%;" />
					<col span="1" style="width: 40%;" />
				</colgroup>
				<thead>
					<tr>
						<th>Nr</th>
						<th>Fläche</th>
						<th>Mieter</th>
						<th>Detail-Informationen</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>1.1</strong></td>
						<td>125 m2</td>
						<td>IDP Treuhand AG</td>
						<td />
					</tr>
					<tr>
						<td><strong>1.2</strong></td>
						<td>414 m2</td>
						<td>LUMITEC AG</td>
						<td />
					</tr>
				</tbody>
			</table>
			<img src="/grundriss/etage-1.jpg" class="rounded-sm w-full" alt="etage 1" />

			<h2>Mietobjekte im 2. Obergeschoss</h2>
			<table class="table-auto">
				<colgroup>
					<col span="1" style="width: 10%;" />
					<col span="1" style="width: 15%;" />
					<col span="1" style="width: 35%;" />
					<col span="1" style="width: 40%;" />
				</colgroup>
				<thead>
					<tr>
						<th>Nr</th>
						<th>Fläche</th>
						<th>Mieter</th>
						<th>Detail-Informationen</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><b>2.1</b></td>
						<td>133 m2</td>
						<td>IDP Treuhand AG</td>
						<td />
					</tr>
					<tr>
						<td><strong>2.2</strong></td>
						<td>210 m2</td>
						<td>Reckhaus AG</td>
						<td class="font-bold">frei ab 1.7.2023 oder nach Vereinbarung</td>
					</tr>
					<tr>
						<td><strong>2.3</strong></td>
						<td>157 m2</td>
						<td>Reckhaus AG</td>
						<td class="font-bold">frei ab 1.7.2023 oder nach Vereinbarung</td>
					</tr>
				</tbody>
			</table>
			<img src="/grundriss/etage-2.jpg" class="rounded-sm w-full" alt="etage 2" />

			<h2>Mietobjekte im 3. Obergeschoss</h2>
			<table class="table-auto">
				<colgroup>
					<col span="1" style="width: 10%;" />
					<col span="1" style="width: 15%;" />
					<col span="1" style="width: 35%;" />
					<col span="1" style="width: 40%;" />
				</colgroup>
				<thead>
					<tr>
						<th>Nr</th>
						<th>Fläche</th>
						<th>Mieter</th>
						<th>Detail-Informationen</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><b>3.1</b></td>
						<td>133 m2</td>
						<td>Rico Brunner AG</td>
						<td />
					</tr>
					<tr>
						<td><b>3.2</b></td>
						<td>43 m2</td>
						<td>S. Moshin</td>
						<td />
					</tr>
					<tr>
						<td><b>3.3</b></td>
						<td>80 m2</td>
						<td>heico Dent GmbH</td>
						<td />
					</tr>
					<tr>
						<td><strong>3.4</strong></td>
						<td>90 m2</td>
						<td>H. J. Maier</td>
						<td />
					</tr>
					<tr>
						<td><strong>3.5</strong></td>
						<td>157 m2</td>
						<td />
						<td class="font-bold">frei</td>
					</tr>
				</tbody>
			</table>
			<img src="/grundriss/etage-3.jpg" class="rounded-sm w-full" alt="etage 3" />
		</div>
	</span>
	<span slot="side">
		<div class="prose prose-lg sticky top-12">
			<h2>Aktuell freie Mietobjekte</h2>
			<p>
				2. Obergeschoss - 210m2 <br />
				2. Obergeschoss - 157m2 <br />
				3. Obergeschoss - 157m2
			</p>
		</div>
	</span>
</TwoColumnLayout>
