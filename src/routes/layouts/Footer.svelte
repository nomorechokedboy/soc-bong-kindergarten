<script lang="ts">
	import EmailIcon from '~icons/tabler/mail-filled'
	import HouseIcon from '~icons/ph/house-fill'

	const locations: { name: string; address: string; phone: string; email: string }[] = []
</script>

<footer class="flex flex-col">
	<section class="flex flex-col gap-5">
		<div class="flex flex-col">
			<h2 class="text-base font-bold text-black">New york</h2>
			<div class="text-base font-medium text-neutral-500">
				<div class="flex items-center gap-2.5">
					<p>Huntersville, 957 Hill Hills Suite 941 United States</p>
				</div>
				<div class="flex items-center gap-2.5">
					<HouseIcon />
					<p>Office: +12(3) 456 7890 1234</p>
				</div>
				<div class="flex items-center gap-2.5">
					<EmailIcon />
					<p>Support: company@name.com</p>
				</div>
			</div>
		</div>
	</section>
</footer>
