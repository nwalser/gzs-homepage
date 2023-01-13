<script lang="ts">
	export let src: string;
	export let alt: string;

	export let cols: number;
	export let rows: number;
</script>

<div
	class="overflow-hidden p-3"
	style="grid-column: span {cols} / span {cols}; grid-row: span {rows} / span {rows}; aspect-ratio: {cols}/{rows}"
>
	<img class="object-cover h-full w-full rounded-md p-0" {alt} {src} />
</div>
