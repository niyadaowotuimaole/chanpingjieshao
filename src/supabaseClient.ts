/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

// 这些变量需要在 Vercel 的环境变量设置里配置
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

// 如果没有配置环境变量，给一个空客户端避免报错，但功能会失效
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;