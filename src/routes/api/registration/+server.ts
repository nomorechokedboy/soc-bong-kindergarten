import { json, error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'
import { registerSchema, supabase } from '$lib'

export async function POST({ request }: RequestEvent) {
	const body = await request.json()
	const { success } = registerSchema.safeParse(body)
	if (!success) {
		throw error(400, 'Bad request')
	}

	const { error: dbErr, status, statusText } = await supabase.from('registrations').insert(body)
	if (dbErr !== null) {
		throw error(status, statusText)
	}

	return json({ message: statusText })
}
