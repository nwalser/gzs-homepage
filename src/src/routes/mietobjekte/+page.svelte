<script lang="ts">
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Mietobjekte"
	titleTemplate="%s - Gewerbezentrum Strahlholz"
	description=""
/>

<TwoColumnLayout>
	<span slot="header">
		<ImageHeader alt="some text" src="/galerie/umgebung/gzs-umgebung-01.jpg" />
	</span>
	<span slot="body">
		<div class="prose prose-base md:prose-lg max-w-none">
			<h1>Mietobjekte</h1>
			<h2>Mietobjekte im Erdgeschoss</h2>
			<table class="table-fixed">
				<colgroup>
					<col span="1" style="width: 15%;" />
					<col span="1" style="width: 30%;" />
					<col span="1" style="width: 55%;" />
				</colgroup>
				<thead>
					<tr>
						<th>Nr</th>
						<th>Fläche</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>0.1</td>
						<td>48 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
					<tr>
						<td>0.2</td>
						<td>505 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
					<tr>
						<td>0.3</td>
						<td>12 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
					<tr>
						<td>0.4</td>
						<td>658 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
				</tbody>
			</table>
			<img src="/grundriss/230210_EG.svg" class="rounded-sm w-full" alt="EG" />

			<h2>Mietobjekte im 1. Obergeschoss</h2>
			<table class="table-fixed">
				<colgroup>
					<col span="1" style="width: 15%;" />
					<col span="1" style="width: 30%;" />
					<col span="1" style="width: 55%;" />
				</colgroup>
				<thead>
					<tr>
						<th>Nr</th>
						<th>Fläche</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1.1</td>
						<td>125 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
					<tr>
						<td>1.2</td>
						<td>414 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
				</tbody>
			</table>
			<img src="/grundriss/230210_1.OG.svg" class="rounded-sm w-full" alt="1 OG" />

			<h2>Mietobjekte im 2. Obergeschoss</h2>
			<table class="table-fixed">
				<colgroup>
					<col span="1" style="width: 15%;" />
					<col span="1" style="width: 30%;" />
					<col span="1" style="width: 55%;" />
				</colgroup>
				<thead>
					<tr>
						<th>Nr</th>
						<th>Fläche</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2.1</td>
						<td>133 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
					<tr>
						<td>2.2</td>
						<td>210 m2</td>
						<td class="text-end">frei</td>
					</tr>
					<tr>
						<td>2.3</td>
						<td>157 m2</td>
						<td class="text-end">frei</td>
					</tr>
				</tbody>
			</table>
			<img src="/grundriss/230210_2.OG.svg" class="rounded-sm w-full" alt="2 OG" />

			<h2>Mietobjekte im 3. Obergeschoss</h2>
			<table class="table-fixed">
				<colgroup>
					<col span="1" style="width: 15%;" />
					<col span="1" style="width: 30%;" />
					<col span="1" style="width: 55%;" />
				</colgroup>
				<thead>
					<tr>
						<th>Nr</th>
						<th>Fläche</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>3.1</td>
						<td>133 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
					<tr>
						<td>3.2</td>
						<td>43 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
					<tr>
						<td>3.3</td>
						<td>80 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
					<tr>
						<td>3.4</td>
						<td>90 m2</td>
						<td class="text-end">vermietet</td>
					</tr>
					<tr>
						<td>3.5</td>
						<td>157 m2</td>
						<td class="text-end">frei</td>
					</tr>
				</tbody>
			</table>
			<img src="/grundriss/230210_3.OG.svg" class="rounded-sm w-full" alt="3 OG" />
		</div>
	</span>
	<span slot="side">
		<div class="prose prose-base md:prose-lg max-w-none sticky top-12">
			<h2>Aktuell freie Mietobjekte</h2>
			<p>
				2. Obergeschoss - 210m2 <br />
				2. Obergeschoss - 157m2 <br />
				3. Obergeschoss - 157m2
			</p>
		</div>
	</span>
</TwoColumnLayout>
