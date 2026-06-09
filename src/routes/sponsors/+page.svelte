<script lang="ts">
	import Sponsors from "$lib/components/Sponsors.svelte";
	import { yearData } from "$lib/data/registry";
	import { YEAR } from "$lib/config";

	const sponsors = yearData[YEAR].sponsors;
</script>

<div class="w-full flex flex-col items-center pt-20 mt-16">
    <div class="text-3xl px-4 text-center font-bold">Made possible by our sponsors:</div>
    <Sponsors {sponsors} />
</div>
