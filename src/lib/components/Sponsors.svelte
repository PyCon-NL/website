<script lang="ts">
    import { groupBy } from "lodash-es";
    import TagBlock from "$lib/components/core/TagBlock.svelte";
    import type { Sponsor, Tier } from "$lib/data/types";

    export let sponsors: Sponsor[] = [];
    export let small: boolean = false;

    const colors: Record<Tier, "north4" | "north" | "north2" | "north3"> = {
        platinum: "north4",
        gold: "north",
        silver: "north2",
        bronze: "north3",
    };

    $: byTier = groupBy(sponsors, s => s.tier) as Partial<Record<Tier, Sponsor[]>>;
    $: tiers = new Set(sponsors.map(s => s.tier));
    $: sortedTiers = (["platinum", "gold", "silver", "bronze"] as Tier[]).filter(t => tiers.has(t));
</script>

{#each sortedTiers as tier}
    {@const tierSponsors = byTier[tier] ?? []}
    <div class="w-full px-4 max-w-5xl {small ? 'mt-8' : 'mt-16'}">
        <div class="w-full text-center text-2xl font-bold capitalize">
            <TagBlock backgroundColor={colors[tier]} small={small} class="{small ? 'text-lg' : ''}">
                {tier}
            </TagBlock>
        </div>
        <div class="mt-4 flex flex-wrap gap-4 justify-center">
            {#each tierSponsors as sponsor}
                <a href={sponsor.url} target="_blank" aria-label={sponsor.name}>
                    <div
                        class="
                            rounded-xl bg-white
                            {small ? 'w-40' : 'w-52 md:w-80'}
                            aspect-square
                            grid place-items-center
                            bg-contain bg-no-repeat bg-center
                        "
                        style="background-image: url({sponsor.logo});"
                    >
                    </div>
                </a>
            {/each}
        </div>
    </div>
{/each}
