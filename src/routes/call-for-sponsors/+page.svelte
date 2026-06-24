<script lang="ts">
    import TagBlock from '$lib/components/core/TagBlock.svelte';
	import Fly from "$lib/components/fly/Fly.svelte";
	import {
        CONTACT_EMAIL,
        YEAR,
        CONFERENCE_DATE,
        PLATINUM_PRICE,
        GOLD_PRICE,
        SILVER_PRICE,
        BRONZE_PRICE
    } from '$lib/config';
    import sponsors from "$lib/assets/images/Sponsor-pana.svg?raw";
    import tiers from "$lib/assets/images/Holding the arrow-pana.svg?raw";

    const headers = ["", "Platinum", "Gold", "Silver", "Bronze"];

    const tableRows = [
        {
            label: "Pricing",
            content: [
                ["Package price (excluding VAT)"],
                [PLATINUM_PRICE],
                [GOLD_PRICE],
                [SILVER_PRICE],
                [BRONZE_PRICE]
            ]
        },
        {
            label: "Availability",
            content: [
                ["Number of available slots"],
                ["2"],
                ["3"],
                ["4"],
                ["4"]
            ]
        },
        {
            label: "Session passes",
            content: [
                ["Free conference passes", "Exhibitor passes", "Discounted conference passes"],
                ["7", "5", "8"],
                ["5", "4", "6"],
                ["3", "3", "3"],
                ["2", "2", "1"]
            ]
        },
        {
            label: "Brand visibility",
            content: [
                [
                    "Prominent screen presence",
                    "Dedicated pre-event email",
                    "Logo on the conference T-shirt",
                    "Social media announcement",
                    "Mention in opening speech",
                    "Logo on badges",
                    "Logo on PyCon NL after video",
                    "Logo on PyCon NL banners",
                    "Logo on PyCon NL website",
                    "Option to distribute goodies at the event",
                    "Vacancy flyer may be distrubited",
                    "Logo in the PyCon NL digital program guide"
                ],
                ["✔", "✔", "✔", "✔", "✔", "✔", "✔", "✔", "✔", "✔", "✔", "✔"],
                ["", "", "✔", "✔", "✔", "✔", "✔", "", "✔", "✔", "✔", "✔"],
                ["", "", "", "✔", "", "✔", "✔", "", "✔", "€200 extra", "✔", "✔"],
                ["", "", "", "✔", "", "", "", "", "✔", "", "", "✔"]
            ]
        },
        {
            label: "Booths",
            content: [
                ["Power & Wi-Fi", "Premier booth location", "Booth dimensions"],
                ["✔", "✔", "4 × 2.5 (10m&sup2;)"],
                ["✔", "✔", "3 × 2 (6m&sup2;)"],
                ["✔", "", "2 × 1.5 (3m&sup2;)"],
                ["✔", "", "Shared Table"]
            ]
        }
    ];
</script>

<div class="m-8 mt-20 py-6">
    <div class="grid m-auto w-full max-w-6xl text-xl text-black place-items-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
            <Fly offset={-10} duration={1000}>
                <TagBlock class="float-left max-w-lg" direction="right" extend backgroundColor="north3">
                    <p>We are excited to invite you to explore our sponsor packages for PyCon NL {YEAR}, taking place on {CONFERENCE_DATE}, {YEAR}.</p>
                    <p>Our packages are designed to offer you maximum visibility and engagement with our vibrant community of Python enthusiasts from all over the world.</p>
                </TagBlock>
            </Fly>
            <Fly offset={10} duration={1000} delay={400}>
                <div class="svg-max">
                    {@html sponsors}
                </div>
            </Fly>
        </div>

        <h2 class="font-bold text-2xl mb-4 spacing-top">Package Details</h2>

        <div class="mt-8 max-w-3xl">
            <div class="grid gap-4">
                <TagBlock extend direction="both" backgroundColor="north4">
                    <h3 class="font-bold text-xl">Platinum Package</h3>
                    <p>The Platinum Package is our most exclusive tier, offering unparalleled visibility and premier access for our top-tier sponsors. Platinum sponsors receive prime booth placement, logo features across all conference materials and videos, a dedicated social media campaign, and prominent mentions throughout the event.</p>
                </TagBlock>
                <TagBlock extend direction="both" backgroundColor="north">
                    <h3 class="font-bold text-xl">Gold Package</h3>
                    <p>The Gold Package provides substantial visibility with logo placements, mentions in email newsletters, and social media promotions and the opening speech. Gold sponsors will also have 6 conference passes, and will be able to network directly with attendees via their networking table.</p>
                </TagBlock>
                <TagBlock extend direction="both" backgroundColor="north2">
                    <h3 class="font-bold text-xl">Silver Package</h3>
                    <p>Our Silver Package includes logo placements on the website and in promotional materials, as well as mentions in event communications. Silver sponsors will have 3 conference passes, connecting with industry professionals and enthusiasts.</p>
                </TagBlock>
                <TagBlock extend direction="both" backgroundColor="north3">
                    <h3 class="font-bold text-xl">Bronze Package</h3>
                    <p>The Bronze Package offers basic visibility with logo placements on the website and in select promotional materials. Bronze sponsors will be featured in event programs or on specific event pages and have 2 complimentary conference passes.</p>
                </TagBlock>
            </div>
        </div>

        <div class="w-full flex justify-center svg-max">
            {@html tiers}
        </div>

        <div class="mt-4 w-full overflow-x-auto">
            <table class="table-with-spacing responsive-table">
                <thead>
                    <tr class="header-row-color">
                    {#each headers as header}
                        <th class="px-4 py-2">{header}</th>
                    {/each}
                    </tr>
                </thead>
                <tbody>
                    {#each tableRows as row}
                    <tr class="spacer-row"><td colspan={headers.length}></td></tr>
                    <tr>
                        <td class="px-4 py-2 first-column-color">
                            <div class="row_header">{row.label}</div>
                        </td>
                        {#each [1, 2, 3, 4] as col}
                        <td class="px-4 py-2 cell-color"></td>
                        {/each}
                    </tr>
                    {#each row.content[0] as feature, i}
                    <tr>
                        <td class="px-4 py-2 first-column-color">
                            <div class="row_content">{@html feature}</div>
                        </td>
                        {#each [1, 2, 3, 4] as col}
                        <td class="px-4 py-2 cell-color">
                            <div class="row_content">{@html row.content[col][i] || "&nbsp;"}</div>
                        </td>
                        {/each}
                    </tr>
                    {/each}
                    {/each}
                </tbody>
            </table>
        </div>

        <div class="mt-4 flex items-center justify-center">
            <TagBlock class="text-lg" backgroundColor="north" link="/PYCON NL Sponsorship brochure 2026.pdf" externalLink>
                <div class="font-bold">
                    Download<span class="px-2">|</span><span class="text-ordina">PYCON NL Sponsorship brochure</span>
                </div>
            </TagBlock>
        </div>

        <div class="mt-20 max-w-4xl">
            <p>We would be delighted to discuss which package best aligns with your marketing and engagement goals. Please let us know if you have any specific requests or ideas for recognition that would make this partnership even more valuable for you.</p>
            <p class="mt-[1em]">If you are interested in participating or have any questions, please get in touch with us:</p>
        </div>

        <address class="italic mt-4">
            {CONTACT_EMAIL}<br />
        </address>

        <div class="mt-4 flex items-center justify-center">
            <TagBlock class="text-lg" backgroundColor="north" link="mailto:{CONTACT_EMAIL}" externalLink>
                <div class="font-bold">
                    Contact<span class="px-2">|</span><span class="text-ordina">Get in contact about sponsorship!</span>
                </div>
            </TagBlock>
        </div>

        <div class="mt-20 max-w-4xl">
            <p>Thank you for considering this opportunity. We look forward to the possibility of collaborating with you to make PyCon NL {YEAR} a success!</p>
        </div>

        <!-- TODO: add sponsors -->
    </div>
</div>

<style>
    /* colors determined by table in pdf */
    .header-row-color {
        background-color: #99acffFF;
    }
    .first-column-color {
        background-color: #cdd6ffFF;
    }
    .cell-color {
        background-color: #e3e8ffFF;
        text-align: center;
    }
    .table-with-spacing {
        display: table;
        /* alleen horizontale ruimte tussen kolommen; verticale scheiding tussen
           secties komt van de transparante spacer-row, zodat rijen binnen een
           sectie netjes tegen elkaar uitlijnen */
        border-spacing: 10px 0;
        border-collapse: separate;
    }
    .row_header {
        font-weight: bold;
        font-size: 1.2em;
    }
    .row_content {
        line-height: 1.2;
    }
    .spacer-row td {
        padding: 0;
        height: 10px;
        background-color: transparent;
    }
    /* Ik wil de tabel altijd volledig in beeld, met font grootte dat leesbaar is op elk apparaat. We passen het aan op basis van de view width */
    .responsive-table {
        width: 100%;
        font-size: clamp(0.6rem, 0.35rem + 1.1vw, 1rem);
    }
    .responsive-table td,
    .responsive-table th {
        vertical-align: top;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
    }
    /* Op kleine schermen verkleinen we de tussenruimte en padding zodat de hele tabel
       in beeld blijft zonder horizontaal scrollen */
    @media (max-width: 640px) {
        .table-with-spacing {
            border-spacing: 4px 0;
        }
        .responsive-table td,
        .responsive-table th {
            padding: 0.2rem 0.3rem;
        }
        .spacer-row td {
            height: 6px;
            padding: 0;
        }
    }
    .spacing-top {
        margin-top: 2rem;
    }

    .svg-max > :global(svg) {
        max-height: 400px;
        aspect-ratio: 1 / 1;
        width: 100%;
    }
</style>
