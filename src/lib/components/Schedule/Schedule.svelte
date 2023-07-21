<script context="module" lang="ts">
	export type ScheduleData = { timeRange: string; activities: [{ text: string }] }
</script>

<script lang="ts">
	export let title: string
	export let data: ScheduleData[]
</script>

<div class="flex w-full flex-col">
	<header class="flex items-center gap-5 bg-green-900 pl-5 text-xl font-semibold text-white">
		{#if title == 'Buổi Sáng'}
			<slot name="sunIcon" />
		{:else}
			<slot name="cloudSunIcon" />
		{/if}
		<h3 class="uppercase">
			{title}
		</h3>
	</header>
	<div class="grid flex-1 grid-cols-3 bg-green-100 text-sm font-light text-neutral-700">
		{#each data as { activities, timeRange } (timeRange)}
			<div class="col-span-1 border-r border-neutral-300 px-7 pb-2 pt-2.5">{timeRange}</div>
			<div class="col-span-2 flex flex-col px-7 pb-2 pt-2.5">
				{#each activities as activity}
					<div class="mb-[5px]">
						{activity?.text}
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
