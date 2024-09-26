import { api_key, api_url } from '@/utils/utils';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(api_url, api_key);
