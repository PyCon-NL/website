<script lang="ts">
	import Sponsors from "$lib/components/Sponsors.svelte";
	import { yearData } from "$lib/data/registry";
	import { YEAR } from "$lib/config";

	const sponsors = yearData[YEAR].sponsors;
	const support = yearData[YEAR].support;
</script>

<div class="w-full flex flex-col items-center pt-20 mt-16">
    <div class="text-3xl px-4 text-center font-bold">Made possible by our sponsors:</div>
    <Sponsors {sponsors} />

    {#if support.length > 0}
        <div class="w-full px-4 max-w-5xl mt-16 flex flex-col items-center">
            <div class="text-xl text-center font-bold">Supported by:</div>
            <div class="mt-4 flex flex-wrap gap-4 justify-center">
                {#each support as supporter}
                    {#if supporter.url}
                        <a href={supporter.url} target="_blank" rel="noreferrer" aria-label={supporter.name}>
                            <div
                                class="
                                    rounded-xl bg-white
                                    w-40
                                    aspect-square
                                    grid place-items-center
                                    bg-contain bg-no-repeat bg-center
                                "
                                style="background-image: url({supporter.logo});"
                            >
                            </div>
                        </a>
                    {:else}
                        <div
                            role="img"
                            aria-label={supporter.name}
                            class="
                                rounded-xl bg-white
                                w-40
                                aspect-square
                                grid place-items-center
                                bg-contain bg-no-repeat bg-center
                            "
                            style="background-image: url({supporter.logo});"
                        >
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    {/if}
</div>
