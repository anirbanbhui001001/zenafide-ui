
import { createClient } from "@supabase/supabase-js";

//TODO: later move these to vercel env variables
const REACT_APP_SUPABASE_URL = 'https://gqthubfnnmcuoypitroh.supabase.co';
const REACT_APP_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxdGh1YmZubm1jdW95cGl0cm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNDMwMzgsImV4cCI6MjA1ODYxOTAzOH0.RPbZZ_SKQs3m6xHN6qCtSuuRQbHfgNusMDICuwyuoPo';

export const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);
