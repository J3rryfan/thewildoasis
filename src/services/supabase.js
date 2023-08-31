import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zbsrdpbcgibqktjupddy.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpic3JkcGJjZ2licWt0anVwZGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMzY3MDQsImV4cCI6MjAwNzkxMjcwNH0.-XK60N2T4tf9UB1myT5RUTcL__bW4AzKQUdFh1djrH8`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
