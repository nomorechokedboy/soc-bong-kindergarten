<script lang="ts">
	export let variant: 'filled' | 'subtle' = 'filled'
	export let fullWidth = false
	export let type: 'button' | 'submit' | 'reset' | undefined = undefined
	export let disabled: boolean | undefined = undefined
</script>

<button
	class="px-5 py-2 {variant === 'filled' ? 'bg-green-700' : ''} {fullWidth
		? 'w-full'
		: ''} rounded-sm active:translate-y-1 {$$props.class}"
	on:click
	{type}
	{disabled}
>
	<div class="flex items-center justify-center gap-2.5">
		<slot name="leftIcon" />
		<slot />
		<slot name="rightIcon" />
	</div>
</button>
