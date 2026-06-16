<script>
	import TagBlock from '$lib/components/core/TagBlock.svelte';
	import InstagramIcon from '$lib/components/icons/InstagramIcon.svelte';
	import MastodonIcon from '$lib/components/icons/MastodonIcon.svelte';
	import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
	import { GITHUB_URL, YEAR, CONFERENCE_DATE, INSTAGRAM_URL, MASTODON_URL, LINKEDIN_URL } from '$lib/config';
</script>

<div
	class="mt-16 flex-center relative w-full flex-col bg-north-300 pt-16 pb-8 text-white"
	id="practical-information"
>
	<div class="text-3xl font-bold">Practical information</div>

	<TagBlock class="mt-5 md:mr-28" direction="right" extend backgroundColor="north3">
		<div class="flex w-screen max-w-xl justify-center md:justify-end text-black">
			<div class="px-5 text-xl sm:pl-0"><span class="font-bold">When:</span> {CONFERENCE_DATE}th {YEAR}</div>
		</div>
	</TagBlock>

	<TagBlock class="mt-8" direction="left" extend backgroundColor="north2">
		<div class="flex w-full">
			<div class="flex flex-col items-center gap-2 md:flex-row">
				<a target="_blank" rel="noreferrer" href="https://goo.gl/maps/PM1SP5jn8Z9M3LZa7"
					><img
						class="w-60 rounded-full p-1 ring-2 ring-north-50 scale-[95%] hover:scale-[100%] transition-all"
						src="/map.png"
						alt="A map showing where the Jaarbeurs Utrecht is located"
					/></a
				>
				<div class="flex flex-col text-center md:text-right">
					<div class="text-xl"><span class="font-bold">Where:</span> Jaarbeurs Utrecht</div>
					<div class="text-lg mt-4">Jaarbeursplein 6</div>
					<div class="text-lg">3521 AL Utrecht</div>
					<div class="text-lg">The Netherlands</div>
					<TagBlock small backgroundColor="ordina" class="m-4 font-bold" link='/practical-information'>
						More info
					</TagBlock>
				</div>
			</div>
		</div>
	</TagBlock>

	<TagBlock class="mt-8 md:mr-28" direction="right" extend backgroundColor="north3">
		<div class="flex w-screen max-w-xl items-center justify-center gap-5 md:justify-end text-black">
			<span class="text-xl font-bold">Follow us:</span>
			<a
				target="_blank"
				rel="noreferrer"
				href={INSTAGRAM_URL}
				aria-label="Instagram"
				class="scale-[95%] transition-all hover:scale-[105%]"
			>
				<InstagramIcon class="h-7 w-7" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href={MASTODON_URL}
				aria-label="Mastodon"
				class="scale-[95%] transition-all hover:scale-[105%]"
			>
				<MastodonIcon class="h-7 w-7" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href={LINKEDIN_URL}
				aria-label="LinkedIn"
				class="scale-[95%] transition-all hover:scale-[105%]"
			>
				<LinkedInIcon class="h-7 w-7" />
			</a>
		</div>
	</TagBlock>

	<div class="mt-16 flex flex-col gap-4 lg:block">
		<span class="text-sm mt-12 w-full text-center">
    		Made with Svelte
		</span>

		<TagBlock
			class="mx-8"
			backgroundColor="north3" small
			link={GITHUB_URL}
			externalLink
		>
			Source on GitHub
		</TagBlock>

		<span class="text-sm">
    		<a href="https://storyset.com/people">People illustrations by Storyset</a>
		</span>

	</div>
</div>
