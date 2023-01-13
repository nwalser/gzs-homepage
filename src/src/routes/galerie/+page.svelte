<script lang="ts">
	import Galery from 'src/components/galery/Galery.svelte';
	import GaleryItem from 'src/components/galery/GaleryItem.svelte';
	import ImageHeader from 'src/components/header/ImageHeader.svelte';
	import MainLayout from 'src/layouts/MainLayout.svelte';
	import TwoColumnLayout from 'src/layouts/TwoColumnLayout.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="Galerie" titleTemplate="%s - Gewerbezentrum Strahlholz" description="" />

<MainLayout>
	<span slot="header">
		<ImageHeader
			alt="some text"
			src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
		/>
	</span>
	<span slot="body">
		<Galery>
			<GaleryItem
				src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
				cols={2}
				rows={1}
			/>
			<GaleryItem
				src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
				cols={1}
				rows={1}
			/>
			<GaleryItem
				src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
				cols={3}
				rows={1}
			/>
			<GaleryItem
				src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
				cols={1}
				rows={2}
			/>
			<GaleryItem
				src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
				cols={2}
				rows={2}
			/>
		</Galery>
        <div class="border border-gray-300 w-full border-solid" />
        <Galery>
			<GaleryItem
				src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
				cols={2}
				rows={1}
			/>
			<GaleryItem
				src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
				cols={1}
				rows={1}
			/>
			<GaleryItem
				src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
				cols={3}
				rows={1}
			/>
			<GaleryItem
				src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
				cols={1}
				rows={2}
			/>
			<GaleryItem
				src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
				cols={2}
				rows={2}
			/>
		</Galery>
	</span>
</MainLayout>
