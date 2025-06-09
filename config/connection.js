require('dotenv').config();
const { createClient } = require('@supabase/supabase-js')

const apiKey = process.env.CHAVE_API;
const apiUrl = process.env.URL_API;

const supabase = createClient(apiUrl, apiKey);

module.exports = supabase;