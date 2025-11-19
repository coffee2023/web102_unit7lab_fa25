import { createClient } from "@supabase/supabase-js";

const URL = "https://husougylupdhvxkyhhub.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1c291Z3lsdXBkaHZ4a3loaHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MTE2MTMsImV4cCI6MjA3OTA4NzYxM30.iMVmGUqS3BFrigz-FAXifZGeetRPyzTEow9mRXKFY2s";

export const supabase = createClient(URL, API_KEY);
