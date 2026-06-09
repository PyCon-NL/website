<script lang="ts">
	import { schedule2025 } from "$lib/data/schedules";
	import { rooms as allRooms, timeSlots as allTimeSlots, type Year } from "$lib/data/types";
	import { YEAR } from "$lib/config";
	import TimeSlot from "$lib/components/schedule/TimeSlot.svelte";
	import Sponsors from "$lib/components/Sponsors.svelte";

	const year: Year = YEAR

	const timeSlots = allTimeSlots[year]
	const rooms = allRooms[year]

	const today = new Date();
	const target = new Date(`${YEAR}-10-16`);

	const isConDay =
		today.getFullYear() === target.getFullYear() &&
		today.getMonth() === target.getMonth() &&
		today.getDate() === target.getDate();

</script>

<div class="m-8 mt-20 py-6">
	<div class="m-auto w-full max-w-3xl text-black flex flex-col items-center">
		<div class="mt-4 font-bold text-3xl">Schedule PyCon NL {YEAR}</div>
		<div class="italic text-lg">(Main events happen in the Progress room)</div>

		<div class="mt-12 flex flex-col md:grid md-schedule-columns text-center gap-2 items-center">

			<div class="hidden md:block"></div>
			{#each rooms as room}
				<div class="hidden md:block">{room}</div>
			{/each}

			{#each timeSlots as timeSlot}
				<div class="text-right text-xl font-bold md:font-normal md:text-base mt-6 md:mt-0 select-none">
					{timeSlot}
				</div>

				{@const slots = schedule2025.filter(s => s.timeSlot === timeSlot)}

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
	</div>


	{#if isConDay}
		<div class="w-full flex flex-col items-center mt-16">
			<div class="text-2xl px-4 text-center font-bold">Thanks again to our sponsors:</div>
			<Sponsors small />
		</div>
	{/if}
</div>

<style>
	@media (min-width: 768px) {
		.md-schedule-columns {
			grid-template-columns: min-content repeat(2, 1fr);
		}
	}
</style>