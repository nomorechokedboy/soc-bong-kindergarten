<script lang="ts">
	import LocationIcon from '~icons/mdi/location'
	import BuildingIcon from '~icons/bi/building-fill'
	import PhoneIcon from '~icons/fa6-solid/phone-flip'
	import LeafletMap from '../LeafletMap.svelte'

	const locations = [
		{
			name: 'Soc bong 1',
			address: '380 Nguyễn Văn Lượng, phường 16, quận Gò Vấp, TP.HCM',
			phone: '0906 954 388'
		},
		{
			name: 'Soc bong 2',
			address: '380 Nguyễn Văn Lượng, phường 16, quận Gò Vấp, TP.HCM',
			phone: '0906 954 388'
		},
		{
			name: 'Soc bong 3',
			address: '380 Nguyễn Văn Lượng, phường 16, quận Gò Vấp, TP.HCM',
			phone: '0906 954 388'
		},
		{
			name: 'Soc bong 4',
			address: '380 Nguyễn Văn Lượng, phường 16, quận Gò Vấp, TP.HCM',
			phone: '0906 954 388'
		},
		{
			name: 'Soc bong 5',
			address: '380 Nguyễn Văn Lượng, phường 16, quận Gò Vấp, TP.HCM',
			phone: '0906 954 388'
		},
		{
			name: 'Soc bong 6',
			address: '380 Nguyễn Văn Lượng, phường 16, quận Gò Vấp, TP.HCM',
			phone: '0906 954 388'
		},
		{
			name: 'Soc bong 7',
			address: '380 Nguyễn Văn Lượng, phường 16, quận Gò Vấp, TP.HCM',
			phone: '0906 954 388'
		}
	]
</script>

<section class="py-12">
	<div class="mx-auto flex max-w-screen-2xl flex-col-reverse px-4 md:flex-row">
		<div class="flex-1">
			<LeafletMap />
		</div>
		<div class="flex flex-1 flex-col gap-5 bg-[#f4fdf4] p-5 lg:gap-10 lg:p-10">
			<h2 class="text-lg font-extrabold text-[#00b14f] lg:text-[42px]">Cơ sở Sóc Bông</h2>
			<div class="flex flex-col gap-5 lg:gap-10">
				{#each locations as location}
					<div class="flex flex-col gap-3 text-xs font-light text-[#414b56] lg:text-sm">
						<div class="flex items-center gap-5">
							<i class="text-green-700">
								<LocationIcon />
							</i>
							<h3 class="text-base font-bold text-[#00b14f] lg:text-lg">{location.name}</h3>
						</div>
						<div class="flex items-center gap-5">
							<i class="text-green-700">
								<BuildingIcon />
							</i>
							<p>{location.address}</p>
						</div>
						<div class="flex items-center gap-5">
							<i class="text-green-700">
								<PhoneIcon />
							</i>
							<p>{location.phone}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
