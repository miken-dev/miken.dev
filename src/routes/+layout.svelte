<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Logo from '$lib/Logo.svg'
	import Footer from '$lib/Footer.svelte';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';

	import { GithubSolid, TwitterSolid } from 'flowbite-svelte-icons';	
	let { children } = $props();

	let activeURL = $derived(page.url.pathname);
</script>

<Navbar class="dark:bg-slate-900">
	<NavBrand href="/">
		<img src="{Logo}" class="me-3 h-6 sm:h-9" alt="miken.dev logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>miken.dev</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeURL} class="">
<!--		<NavLi href="/freelance">Freelance</NavLi> -->
		<NavLi href="/mobileapps">Mobile Apps</NavLi>
		<!-- <NavLi href="/about">About</NavLi> -->
		<NavLi href="/contact">Contact Me</NavLi>
		<NavLi href="https://github.com/miken-dev"><GithubSolid /></NavLi>
		<NavLi href="https://bsky.app/profile/miken.dev"><TwitterSolid /> </NavLi>
		<NavLi><DarkMode class="p-0"/></NavLi>
	</NavUl>
</Navbar>

{@render children()}

<Footer />
