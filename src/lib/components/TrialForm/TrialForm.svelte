<script lang="ts">
	import { Button, registerSchema } from '$lib'
	import { showForm } from '$lib/stores'
	import type { RegisterSchema } from '$lib'
	import FloatingLabel from './FloatingLabel.svelte'
	import { createForm } from 'felte'
	import { validator } from '@felte/validator-zod'
	import Error from './Error.svelte'

	const { form, errors } = createForm<RegisterSchema>({
		onSubmit,
		extend: validator({ schema: registerSchema }),
		debounced: { timeout: 500 }
	})
	async function onSubmit(values: RegisterSchema) {
		try {
			await fetch('/api/registration', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'content-type': 'application/json'
				}
			})
			$showForm = false
		} catch (e) {
			console.error(e)
		}
	}
</script>

<div
	class="flex w-full flex-col items-center gap-4 bg-white px-9 py-5 md:gap-8 lg:px-[60px] lg:py-10 {$$props.class}"
	id={$$props.id}
>
	<h2 class="w-full text-center text-lg font-extrabold uppercase text-green-700 lg:text-2xl">
		ĐĂNG KÝ TRẢI NGHIỆM
		<br />
		LỚP HỌC THỬ
	</h2>
	<form class="flex w-full flex-col gap-5" use:form>
		<FloatingLabel error={$errors.parentName} name="parentName" placeholder="Họ và tên phụ huynh" />
		<FloatingLabel error={$errors.studentName} name="studentName" placeholder="Họ và tên của bé" />
		<FloatingLabel error={$errors.phoneNumber} name="phoneNumber" placeholder="Số điện thoại" />
		<div class="flex flex-col gap-2">
			<label
				class="text-sm text-gray-900 {$errors.studentDob ? 'text-red-600' : ''}"
				for="studentDob">Ngày sinh của bé</label
			>
			<input
				class="block w-full rounded-lg border border-green-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 {$errors.studentDob
					? 'border-red-600 focus:border-red-600'
					: ''}"
				type="date"
				name="studentDob"
				id="studentDob"
			/>
			{#if $errors.studentDob}
				{#each $errors.studentDob as e}
					<Error>{e}</Error>
				{/each}
			{/if}
		</div>
		<div class="flex flex-col gap-2">
			<label class="text-sm text-gray-900" for="studentClass">Lớp của bé</label>
			<select
				id="studentClass"
				class="block w-full rounded-lg border border-green-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500"
				name="studentClass"
			>
				<option selected value="seed">Lớp mầm</option>
				<option value="buds">Lớp chồi</option>
				<option value="leaf">Lớp lá</option>
			</select>
		</div>
		<div class="flex flex-col gap-2">
			<label class="text-sm text-gray-900" for="note">Ghi chú</label>
			<textarea
				class="block w-full rounded-lg border border-green-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500"
				name="note"
				id="note"
				placeholder="Ghi chú..."
			/>
		</div>
		<Button type="submit" class="font-bold uppercase text-white">Đăng ký ngay</Button>
	</form>
</div>
