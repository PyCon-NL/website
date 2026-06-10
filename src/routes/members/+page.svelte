<script lang="ts">
    import TagBlock from '$lib/components/core/TagBlock.svelte';
    import Fly from '$lib/components/fly/Fly.svelte';
    import {
        GITHUB_URL,
        PYNETHERLANDS_URL,
        LINKEDIN_URL,
        INSTAGRAM_URL,
        CONTACT_EMAIL,
    } from '$lib/config';

    import team from '$lib/assets/images/Solidarity-pana.svg?raw';
    import ambassador from '$lib/assets/images/Group discussion-pana.svg?raw';
</script>

<div class="m-8 mt-20 py-6">
    <div class="m-auto w-full max-w-6xl text-black">

        <!-- Hero -->
        <div class="grid grid-cols-1 lg:grid-cols-2 m-auto w-full items-center">
            <Fly offset={-10} delay={200} duration={1000}>
                {@html team}
            </Fly>

            <div>
                <Fly offset={10} duration={1000}>
                    <TagBlock class="max-w-lg" direction="left" extend backgroundColor="north2">
                        <p class="font-bold text-2xl">PyNetherlands Foundation</p>
                        <p>
                            PyCon NL is organised under the PyNetherlands foundation, a community-driven
                            non-profit dedicated to growing the Dutch Python ecosystem.
                        </p>
                    </TagBlock>
                </Fly>

                <Fly offset={10} duration={1000} delay={200}>
                    <TagBlock class="mt-4 ml-6 max-w-lg" direction="left" extend backgroundColor="north3">
                        <p>
                            Our foundation brings together passionate Python developers, educators, and
                            enthusiasts from across the Netherlands to share knowledge, build community, and
                            celebrate the language we love.
                        </p>
                    </TagBlock>
                </Fly>

                <Fly offset={10} duration={1000} delay={400}>
                    <TagBlock class="mt-4 ml-12 max-w-lg" direction="left" extend backgroundColor="north2">
                        <p>
                            Have questions or want to get in touch with the team? Reach us at
                            <a class="underline decoration-ordina underline-offset-4" href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
                        </p>
                    </TagBlock>
                </Fly>
            </div>
        </div>

        <!-- Board & Members -->
        <div class="my-12">
            <div class="my-8 text-3xl font-bold text-center">Board &amp; Members</div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 m-auto w-full">
                <Fly offset={-10} duration={1000}>
                    <div class="p-8 bg-north3 text-shark">
                        <div class="text-xl font-bold mb-4">Foundation Board</div>
                        <p>
                            The PyNetherlands foundation is steered by a board of dedicated community
                            members who oversee the strategic direction of the organisation and ensure that
                            PyCon NL remains a community-first event.
                        </p>
                    </div>
                </Fly>

                <Fly offset={10} duration={1000}>
                    <div class="p-8 bg-north2 text-white">
                        <div class="text-xl font-bold mb-4">Community Members</div>
                        <p>
                            Membership in the PyNetherlands foundation is open to anyone in the Dutch
                            Python community. Members participate in decisions about the future of PyCon NL
                            and the broader Python ecosystem in the Netherlands.
                        </p>
                    </div>
                </Fly>
            </div>
        </div>

        <!-- Volunteers -->
        <div class="grid grid-cols-1 lg:grid-cols-2 m-auto w-full items-center">
            <Fly offset={-10} duration={1000}>
                <TagBlock class="max-w-lg" direction="right" backgroundColor="fountain" extend>
                    <p class="font-bold text-xl">Our Volunteers</p>
                    <p>
                        PyCon NL would not be possible without the incredible volunteers who give their
                        time and energy to make the conference happen.
                    </p>
                </TagBlock>
                <div class="mt-8 max-w-2xl p-8 bg-north3 text-shark">
                    <div class="text-xl font-bold">Volunteers contribute to:</div>
                    <ul class="mt-4 pl-8 list-disc">
                        <li class="pb-2">Conference logistics and on-site coordination</li>
                        <li class="pb-2">Promotion and community outreach</li>
                        <li class="pb-2">Talk selection via the program committee</li>
                        <li class="pb-2">Sponsor and speaker relations</li>
                    </ul>
                </div>
            </Fly>

            <Fly offset={10} duration={1000}>
                {@html ambassador}
            </Fly>
        </div>

        <!-- Connect with us -->
        <div class="my-12">
            <div class="my-8 text-3xl font-bold text-center">Connect with Us</div>

            <div class="flex flex-wrap gap-6 justify-center">
                <Fly offset={-10} duration={1000}>
                    <TagBlock backgroundColor="north" link={PYNETHERLANDS_URL} externalLink>
                        <div class="flex items-center gap-3 font-bold">
                            <!-- placeholder: website icon -->
                            <span class="inline-block w-6 h-6 bg-white opacity-50 rounded"></span>
                            PyNetherlands Website
                        </div>
                    </TagBlock>
                </Fly>

                <Fly offset={-10} duration={1000} delay={100}>
                    <TagBlock backgroundColor="north2" link={LINKEDIN_URL} externalLink>
                        <div class="flex items-center gap-3 font-bold">
                            <!-- placeholder: linkedin icon -->
                            <span class="inline-block w-6 h-6 bg-white opacity-50 rounded"></span>
                            LinkedIn
                        </div>
                    </TagBlock>
                </Fly>

                <Fly offset={-10} duration={1000} delay={200}>
                    <TagBlock backgroundColor="north3" link={INSTAGRAM_URL} externalLink>
                        <div class="flex items-center gap-3 font-bold">
                            <!-- placeholder: instagram icon -->
                            <span class="inline-block w-6 h-6 bg-shark opacity-50 rounded"></span>
                            Instagram
                        </div>
                    </TagBlock>
                </Fly>

                <Fly offset={-10} duration={1000} delay={300}>
                    <TagBlock backgroundColor="north" link={GITHUB_URL} externalLink>
                        <div class="flex items-center gap-3 font-bold">
                            <!-- placeholder: github icon -->
                            <span class="inline-block w-6 h-6 bg-white opacity-50 rounded"></span>
                            GitHub
                        </div>
                    </TagBlock>
                </Fly>
            </div>
        </div>

    </div>
</div>

<style>
    :global(.top-image svg) {
        max-height: 20em;
    }
</style>
