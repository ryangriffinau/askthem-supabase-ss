import type { ExpoConfig } from "@expo/config";

// #TODO can these supabase values be displayed here or do i need another .env?
const SUPABASE_URL = "https://coyjrvzliraguciolgjd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNveWpydnpsaXJhZ3VjaW9sZ2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0NjM4MzQsImV4cCI6MjAwNzAzOTgzNH0.HacF-WDtdQ9fQFioO7dxA6FkXFNP0-FhVeR-oL1JSdc";
if (typeof SUPABASE_URL !== "string" || typeof SUPABASE_ANON_KEY !== "string") {
  throw new Error("Missing Supabase URL or anonymous key");
}

const defineConfig = (): ExpoConfig => ({
  name: "expo",
  slug: "expo",
  scheme: "expo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1F104A",
    },
  },
  extra: {
    eas: {
      // projectId: "your-project-id",
    },
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
  },
  experiments: {
    tsconfigPaths: true,
  },
  plugins: ["./expo-plugins/with-modify-gradle.js"],
});

export default defineConfig;
