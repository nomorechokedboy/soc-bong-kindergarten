<script lang="ts">
	let blok = $$props.data
</script>

{#if blok}
	<div>
		<input
			class="px-2.5 py-1 {$$props.class}"
			type={blok.type}
			placeholder={blok.placeholder}
			id={blok.name}
			required={blok.required}
		/>
	</div>
{/if}
