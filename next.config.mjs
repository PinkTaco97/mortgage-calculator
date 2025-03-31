import path from 'path';
import dotenv from 'dotenv';

// Path to environment variables.
const __dirname = path.resolve();
const env = dotenv.config({ path: __dirname + `/src/environments/${process.env.ENV}/.env` })

/** @type {import('next').NextConfig} */
const nextConfig = { env: env.parsed };

export default nextConfig;