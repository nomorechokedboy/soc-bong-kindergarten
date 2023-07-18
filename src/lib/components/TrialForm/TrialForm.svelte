<script lang="ts">
	import { Button } from '$lib'
	import FloatingLabel from './FloatingLabel.svelte'
</script>

<div
	class="flex w-full flex-col items-center gap-8 bg-white px-9 py-5 lg:px-[60px] lg:py-10 {$$props.class}"
	id={$$props.id}
>
	<h2 class="w-full text-center text-lg font-extrabold uppercase text-green-700 lg:text-2xl">
		ĐĂNG KÝ TRẢI NGHIỆM
		<br />
		LỚP HỌC THỬ
	</h2>
	<form action="" class="flex w-full flex-col gap-9">
		<FloatingLabel placeholder="Họ và tên phụ huynh" />
		<FloatingLabel placeholder="Họ và tên của bé" />
		<FloatingLabel placeholder="Số điện thoại" />
		<div class="flex flex-col gap-2">
			<label class="text-sm text-gray-900" for="dob">Ngày sinh của bé</label>
			<input
				class="block w-full rounded-lg border border-green-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500"
				type="date"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label class="text-sm text-gray-900" for="">Lớp của bé</label>
			<select
				id="countries"
				class="block w-full rounded-lg border border-green-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500"
			>
				<option selected value="">Lớp mầm</option>
				<option value="FR">Lớp chồi</option>
				<option value="DE">Lớp lá</option>
			</select>
		</div>
		<div class="flex flex-col gap-2">
			<label class="text-sm text-gray-900" for="">Ghi chú</label>
			<textarea
				class="block w-full rounded-lg border border-green-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500"
				name=""
				id=""
				placeholder="Ghi chú..."
			/>
		</div>
		<div class="grid place-items-center">
			<Button class="font-bold uppercase text-white">Đăng ký ngay</Button>
		</div>
	</form>
</div>
