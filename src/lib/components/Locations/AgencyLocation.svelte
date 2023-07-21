<script lang="ts">
	import LocationIcon from '~icons/mdi/location'
	import BuildingIcon from '~icons/bi/building-fill'
	import PhoneIcon from '~icons/fa6-solid/phone-flip'

	export let address: string
	export let phone: string
	export let name: string
</script>

<button class="flex flex-col gap-3 text-xs font-light text-[#414b56] lg:text-sm" on:click>
	<div class="flex items-center gap-5">
		<i class="text-green-700">
			<LocationIcon />
		</i>
		<h3 class="text-base font-bold text-[#00b14f] lg:text-lg">{name}</h3>
	</div>
	<div class="flex items-center gap-5">
		<i class="text-green-700">
			<BuildingIcon />
		</i>
		<p>{address}</p>
	</div>
	<div class="flex items-center gap-5">
		<i class="text-green-700">
			<PhoneIcon />
		</i>
		<p>{phone}</p>
	</div>
</button>
