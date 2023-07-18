<script lang="ts">
	export let placeholder: string | undefined = undefined
</script>

<div class="floatingContainer">
	<input
		type="text"
		id="floating_standard"
		class="peer block w-full appearance-none border-0 border-b-2 border-green-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
		placeholder=" "
	/>
	<label
		for="floating_standard"
		class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600"
		>{placeholder}</label
	>
</div>

<style>
	.floatingContainer {
		position: relative;
		z-index: 0;
	}
</style>
