<script lang="ts">
	let blok = $$props.data
</script>

{#if blok}
	<select name={blok.name} id={blok.name}>
		{#if blok.dropdown_menu.length !== 0}
			{#each Object.values(blok.dropdown_menu) as name, i}
				<option value={i}>{name}</option>
			{/each}
		{/if}
	</select>
{/if}
