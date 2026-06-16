<script lang="ts">
	import { yearData } from "$lib/data/registry";
	import { rooms as allRooms, timeSlots as allTimeSlots } from "$lib/data/types";
	import { YEAR, CONFERENCE_DATE } from "$lib/config";
	import TimeSlot from "$lib/components/schedule/TimeSlot.svelte";
	import Sponsors from "$lib/components/Sponsors.svelte";

	const data = yearData[YEAR];
	const schedule = data.schedule;
	const sponsors = data.sponsors;

	const timeSlots = allTimeSlots[YEAR];
	const rooms = allRooms[YEAR];

	const today = new Date();
	const target = new Date(`${CONFERENCE_DATE}, ${YEAR}`);

	const isConDay =
		today.getFullYear() === target.getFullYear() &&
		today.getMonth() === target.getMonth() &&
		today.getDate() === target.getDate();
</script>

<div class="m-8 mt-20 py-6">
	<div class="m-auto w-full max-w-3xl text-black flex flex-col items-center">
		<div class="mt-4 font-bold text-3xl">Schedule PyCon NL {YEAR}</div>

		{#if schedule.length === 0}
			<div class="mt-12 italic text-xl text-center">Coming soon</div>
		{:else}
			<div class="italic text-lg">(Main events happen in the Progress room)</div>

			<div class="mt-12 flex flex-col md:grid text-center gap-2 items-center" style="grid-template-columns: min-content repeat({rooms.length}, 1fr)">

				<div class="hidden md:block"></div>
				{#each rooms as room}
					<div class="hidden md:block">{room}</div>
				{/each}

				{#each timeSlots as timeSlot}
					<div class="text-right text-xl font-bold md:font-normal md:text-base mt-6 md:mt-0 select-none">
						{timeSlot}
					</div>

					{@const slots = schedule.filter(s => s.timeSlot === timeSlot)}

					{#if slots.length === 1 && slots[0].trackType === "common"}
						<TimeSlot columns={rooms.length} slot={slots[0]} />
					{:else}
						{#each rooms as column}
							{@const slot = slots.find(s => s.trackType === "single" && s.room === column)}
							{#if slot}
								<TimeSlot columns={rooms.length} {slot} />
							{/if}
						{/each}
					{/if}
				{/each}
			</div>
		{/if}
	</div>

	{#if isConDay}
		<div class="w-full flex flex-col items-center mt-16">
			<div class="text-2xl px-4 text-center font-bold">Thanks again to our sponsors:</div>
			<Sponsors {sponsors} small />
		</div>
	{/if}
</div>
