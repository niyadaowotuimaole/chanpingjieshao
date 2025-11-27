import { createClient } from '@supabase/supabase-js';

// Safely access environment variables to prevent runtime crashes if import.meta.env is undefined
// @ts-ignore
const env = import.meta.env || {};

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_KEY;

// 如果没有配置环境变量，给一个空客户端避免报错，但功能会失效
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;