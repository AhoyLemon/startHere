/**
 * Main application entry point
 * Imports all necessary modules and initializes the app
 */

// Import utility functions
import * as Functions from "./globals/_functions.js";

// Import variables
import * as Variables from "./partials/_variables.js";

// Import and initialize Vue app
import "./partials/_vue.js";

// Make functions available globally for convenience
// (optional - you can also import them where needed)
(window as any).Functions = Functions;
(window as any).Variables = Variables;

console.log("App initialized");
