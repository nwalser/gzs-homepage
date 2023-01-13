<script>
	import MainLayout from "./MainLayout.svelte";
</script>

<MainLayout>
	<span slot="header"><slot name="header" /></span>
	<span slot="body">
		<div class="grid grid-cols-3 gap-12">
			<div class="col-span-3 md:col-span-1">
				<slot name="side" />
			</div>
			<div class="col-span-3 md:col-span-2 md:order-last">
				<slot name="body" />
			</div>
		</div>
	</span>
</MainLayout>