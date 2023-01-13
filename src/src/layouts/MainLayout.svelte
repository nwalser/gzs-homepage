<script lang="ts">
	import Analytics from 'src/components/Analytics.svelte';

	import 'src/app.css';
	import MenuItem from 'src/components/main-menu/MenuItem.svelte';
	
	let menuOpen = false;

	function toggleNav() {
		menuOpen = !menuOpen;
	}
</script>

<Analytics />

<svelte:head>
	<meta name="theme-color" content="#d2031d" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<div class="bg-[#d2031d] relative z-0 overflow-hidden">
		<nav>
			<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div class="flex h-16 items-center justify-between px-4 sm:px-0">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<a href="/">
								<img class="h-8" src="/gzs-logo-white.svg" alt="Nathaniel Walser" />
							</a>
						</div>
						<div class="hidden md:block" />
					</div>
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline space-x-4">
							<MenuItem href="/mieterschaft">Mieterschaft</MenuItem>
							<MenuItem href="/mietobjekte">Mietobjekte</MenuItem>
							<MenuItem href="/galerie/mietobjekte">Galerie</MenuItem>
							<MenuItem href="/kontakt">Kontakt</MenuItem>
							<MenuItem href="/standort">Standort</MenuItem>
							<MenuItem href="/portrait">Portrait</MenuItem>
						</div>
					</div>
					<div class="-mr-2 flex md:hidden">
						<button
							type="button"
							class="inline-flex items-center justify-center rounded-md bg-red-900 p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span class="sr-only">Open main menu</span>
							<svg
								class="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								on:click={toggleNav}
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
							<svg
								class="hidden h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			{#if menuOpen}
				<div class="border-b border-gray-700 md:hidden" id="mobile-menu">
					<div class="space-y-1 px-2 py-3 sm:px-3">
						<MenuItem mobile={true} href="/mieterschaft">Mieterschaft</MenuItem>
						<MenuItem mobile={true} href="/mietobjekte">Mietobjekte</MenuItem>
						<MenuItem mobile={true} href="/galerie/mietobjekte">Galerie</MenuItem>
						<MenuItem mobile={true} href="/kontakt">Kontakt</MenuItem>
						<MenuItem mobile={true} href="/standort">Standort</MenuItem>
						<MenuItem mobile={true} href="/portrait">Portrait</MenuItem>
					</div>
				</div>
			{/if}
		</nav>
	</div>

	<slot name="header" />

	<main class="z-10 relative mt-14">
		<div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 text-slate-800">
			<slot name="body" />
		</div>
	</main>

	<footer class="bg-[#d2031d] mt-auto">
		<div class="mx-auto max-w-7xl overflow-hidden py-3 px-4 sm:px-6 lg:px-8">
			<p class="text-center text-base text-white">
				&copy; {new Date().getFullYear()} GZS Gewerbezentrum, Strahlholz, 9056 Gais | +41 71 791 70 11 | <a href="mailto:nicole.schoch@idpag.ch" class="underline">nicole.schoch@idpag.ch</a>
			</p>
		</div>
	</footer>
</div>
