import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv';
config();

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)