<script>
	import TagBlock from '$lib/components/core/TagBlock.svelte';
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
				<svg class="h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
					/>
				</svg>
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href={MASTODON_URL}
				aria-label="Mastodon"
				class="scale-[95%] transition-all hover:scale-[105%]"
			>
				<svg class="h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"
					/>
				</svg>
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href={LINKEDIN_URL}
				aria-label="LinkedIn"
				class="scale-[95%] transition-all hover:scale-[105%]"
			>
				<svg class="h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
					/>
				</svg>
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
