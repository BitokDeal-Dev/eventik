import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env:{
      NEXT_PUBLIC_API_URL:process.env.NEXT_PUBLIC_API_URL,
      GOOGLE_RECAPTCHA_SITE_KEY:process.env.GOOGLE_RECAPTCHA_SITE_KEY,
  }
};

export default nextConfig;
