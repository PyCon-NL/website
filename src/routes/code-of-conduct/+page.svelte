<script lang="ts">
	import { CODE_OF_CONDUCT_URL } from '$lib/config';
</script>

<!-- This page is never rendered: the load function in +page.ts redirects to the
     PyNetherlands Code of Conduct. It exists only as a fallback link target. -->
<div class="p-8 m-auto w-full max-w-4xl">
	<p class="mt-20 py-6">
		Our Code of Conduct has moved to
		<a class="underline decoration-ordina underline-offset-4" href={CODE_OF_CONDUCT_URL}>
			{CODE_OF_CONDUCT_URL}</a
		>.
	</p>
</div>
