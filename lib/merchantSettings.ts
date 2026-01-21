// lib/merchantSettings.ts
import { db } from './supabase'

export async function getMerchantSettings(merchantId: string) {
  const { data, error } = await db
    .from('merchant_settings')
    .select('*')
    .eq('merchant_id', merchantId)
    .single()

  if (error) throw error
  return data
}
