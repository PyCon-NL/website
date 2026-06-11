<script lang="ts">
    import TagBlock from "$lib/components/core/TagBlock.svelte";
    import Fly from "$lib/components/fly/Fly.svelte";
    import { YEAR, LINKEDIN_URL, MASTODON_URL, CONTACT_EMAIL } from "$lib/config";

    import arrow from "$lib/assets/images/Holding the arrow-pana.svg?raw";
</script>

<div class="m-8 mt-20 py-6">
    <div class="m-auto w-full max-w-6xl text-black">
        <div class="w-full text-center font-bold text-xl">
            <TagBlock backgroundColor="north3">
                Coming soon!
            </TagBlock>
        </div>

        <div class="w-full flex justify-center top-image">
            {@html arrow}
        </div>

        <div class="mb-8 w-full flex justify-center">
            <p class="max-w-2xl text-center">
                This part of PyCon NL {YEAR} isn't ready yet. We're working hard behind the scenes,
                so check back soon!
            </p>
        </div>

        <div class="mb-8 w-full flex justify-center">
            <p class="max-w-2xl text-center">
                In the meantime, follow us on
                <a class="underline decoration-ordina underline-offset-4" href={LINKEDIN_URL}>LinkedIn</a>
                or
                <a class="underline decoration-ordina underline-offset-4" href={MASTODON_URL}>Mastodon</a>
                to be the first to know, or reach out via
                <a class="underline decoration-ordina underline-offset-4" href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
            </p>
        </div>

        <div class="mt-4 flex items-center justify-center">
            <Fly offset={10} duration={1000}>
                <TagBlock class="text-lg" backgroundColor="north" link="/">
                    <div class="font-bold">Back to home</div>
                </TagBlock>
            </Fly>
        </div>
    </div>
</div>

<style>
    .top-image > :global(svg) {
        max-height: 400px;
    }
</style>
