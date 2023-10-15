

import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://tzahjcmrarsassebolxf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6YWhqY21yYXJzYXNzZWJvbHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MDMzNzYsImV4cCI6MjAxMTk3OTM3Nn0.1-6TqBLVWdZOY5ziLEZR6UQ35clDnoLmmyYP-Z5sfyE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;