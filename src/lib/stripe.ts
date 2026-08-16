import Stripe from "stripe";

// The Stripe constructor throws synchronously on an empty key, which would
// crash the build (this module is imported at build time to collect route
// data, even for routes that are never actually invoked). A placeholder
// keeps construction safe; callers check STRIPE_SECRET_KEY themselves and
// return a friendly error before ever making a real request with it.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_not_configured", {
  apiVersion: "2026-07-29.dahlia",
});
