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

	// Build the schedule grid row-by-row so every room gets an explicit cell
	// (slot / continuation / empty) even when it has no talk at a given time.
	// Rendering nothing for a gap instead of a placeholder makes CSS grid
	// auto-placement shift later rooms' talks into the wrong column.
	const remainingSpan: Record<string, number> = Object.fromEntries(rooms.map(room => [room, 0]));

	const grid = timeSlots.map(timeSlot => {
		const slotsAtTime = schedule.filter(s => s.timeSlot === timeSlot);

		if (slotsAtTime.length === 1 && slotsAtTime[0].trackType === "common") {
			for (const room of rooms) remainingSpan[room] = 0;
			return { kind: "common" as const, slot: slotsAtTime[0] };
		}

		const cells = rooms.map(room => {
			if (remainingSpan[room] > 0) {
				remainingSpan[room]--;
				return { kind: "continuation" as const };
			}

			const slot = slotsAtTime.find(s => s.trackType === "single" && s.room === room);
			if (!slot) return { kind: "empty" as const };

			if (slot.type === "talk" && slot.trackType === "single" && slot.multiSlot) {
				remainingSpan[room] = slot.multiSlot - 1;
			}
			return { kind: "slot" as const, slot };
		});

		return { kind: "row" as const, cells };
	});

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
			<div class="italic text-lg">(Main events happen in the {rooms[0]} room)</div>

			<div class="mt-12 flex flex-col md:grid text-center gap-2 items-center" style="grid-template-columns: min-content repeat({rooms.length}, 1fr)">

				<div class="hidden md:block"></div>
				{#each rooms as room}
					<div class="hidden md:block">{room}</div>
				{/each}

				{#each grid as row, i}
					<div class="text-right text-xl font-bold md:font-normal md:text-base mt-6 md:mt-0 select-none">
						{timeSlots[i]}
					</div>

					{#if row.kind === "common"}
						<TimeSlot columns={rooms.length} slot={row.slot} />
					{:else}
						{#each row.cells as cell}
							{#if cell.kind === "slot"}
								<TimeSlot columns={rooms.length} slot={cell.slot} />
							{:else if cell.kind === "empty"}
								<div class="hidden md:block"></div>
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
