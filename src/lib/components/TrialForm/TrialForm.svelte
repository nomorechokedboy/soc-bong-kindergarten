<script lang="ts">
	import { Button } from '$lib';
</script>

<div class="flex w-full flex-col items-center gap-8 bg-white px-9 py-5 lg:absolute">
	<h3 class="w-full text-center text-lg font-extrabold uppercase text-indigo-950">
		ĐĂNG KÝ TRẢI NGHIỆM
		<br />
		LỚP HỌC THỬ
	</h3>
	<form action="" class="flex w-full flex-col gap-9">
		<input class="px-2.5 py-1" type="text" placeholder="Họ và tên Phụ Huynh" />
		<input class="px-2.5 py-1" type="text" placeholder="Số điện thoại" />
		<select name="cars" id="cars">
			<option value="volvo">Volvo</option>
			<option value="saab">Saab</option>
			<option value="opel">Opel</option>
			<option value="audi">Audi</option>
		</select>
		<select name="cars" id="cars">
			<option value="volvo">Volvo</option>
			<option value="saab">Saab</option>
			<option value="opel">Opel</option>
			<option value="audi">Audi</option>
		</select>
		<div class="grid place-items-center">
			<Button class="font-bold uppercase text-white">Đăng ký ngay</Button>
		</div>
	</form>
</div>
