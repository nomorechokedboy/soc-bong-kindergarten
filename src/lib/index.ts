import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import * as zod from 'zod'

export * from './components'
export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)
export const registerSchema = zod.object({
	parentName: zod.string().nonempty({ message: 'Tên phụ huynh không được bỏ trống' }),
	studentName: zod.string().nonempty({ message: 'Tên bé không được bỏ trống' }),
	phoneNumber: zod
		.string()
		.regex(/^\d+$/, { message: 'Số điện thoại không được chứ ký tự khác ngoài chữ số' })
		.length(10, { message: 'Số điện thoại phải đúng 10 chữ số' }),
	studentDob: zod.string().nonempty({ message: 'Ngày sinh của bé không được bỏ trống' }),
	studentClass: zod.enum(['seed', 'buds', 'leaf']),
	note: zod.string()
})
export type RegisterSchema = zod.infer<typeof registerSchema>
