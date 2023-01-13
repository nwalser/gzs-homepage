<script lang="ts">
	import Galery from 'src/components/galery/Galery.svelte';
	import GaleryItem from 'src/components/galery/GaleryItem.svelte';
	import GaleryMenu from 'src/components/GaleryMenu.svelte';
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="Galerie" titleTemplate="%s - Gewerbezentrum Strahlholz" description="" />

<TwoColumnLayout>
	<span slot="header">
		<ImageHeader alt="" src="/galerie/mietobjekte/gzs-raume-03.jpg" />
	</span>
	<span slot="body">
		<div class="prose prose-md max-w-none">
			<h1>Galerie Umgebung</h1>
		</div>
		<Galery>
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-01.jpg" alt="" cols={2} rows={1} />
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-02.jpg" alt="" cols={1} rows={1} />
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-03.jpg" alt="" cols={1} rows={1} />
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-04.jpg" alt="" cols={2} rows={2} />
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-05.jpg" alt="" cols={1} rows={1} />
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-06.jpg" alt="" cols={3} rows={1} />
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-07.jpg" alt="" cols={2} rows={1} />
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-08.jpg" alt="" cols={1} rows={1} />
			<GaleryItem src="/galerie/umgebung/gzs-umgebung-09.jpg" alt="" cols={3} rows={1} />
		</Galery>
	</span>
	<span slot="side">
		<GaleryMenu />
	</span>
</TwoColumnLayout>
