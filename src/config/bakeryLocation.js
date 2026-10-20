/**
 * =========================================================================
 * GOLDEN CRUST BAKERY - LOCATION & BUSINESS ADDRESS CONFIGURATION
 * =========================================================================
 * Confirmed Bakery Location:
 * Golden Crust Bakery
 * Adyar, Mangaluru, Karnataka – 575002, India.
 *
 * NOTE: This address identifies the general bakery area in Adyar, Mangaluru.
 * All fields remain easily editable here for future updates.
 */

export const BAKERY_LOCATION_CONFIG = {
  // Activated with confirmed bakery location
  isConfigured: true,

  // Business Name
  bakeryName: "Golden Crust Bakery",

  // Confirmed Area & Locality (No artificial street number invented)
  area: "Adyar",

  // City, State, and PIN Code
  city: "Mangaluru",
  state: "Karnataka",
  pincode: "575002",
  country: "India",

  // Displayed Full Address String
  fullAddress: "Adyar, Mangaluru, Karnataka – 575002, India",

  // Specific note respecting location precision
  locationNote: "Adyar area, Mangaluru. (General bakery location)",

  // Contact telephone number for bakery location
  phoneNumber: "+91 98765 43210 (Configurable)",

  // Contact email for location enquiries
  email: "contact@goldencrustbakery.example",

  // Bakery Opening Hours
  openingHours: [
    { days: "Tuesday – Saturday", hours: "08:00 AM – 08:30 PM" },
    { days: "Sunday", hours: "08:00 AM – 06:00 PM" },
    { days: "Monday", hours: "Closed for prep & private baking" }
  ],

  // Confirmed Google Maps Search Directions URL
  customDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Adyar%2C%20Mangaluru%2C%20Karnataka%20575002",

  // Confirmed Google Maps Responsive Embed URL for Adyar, Mangaluru, Karnataka 575002
  customEmbedUrl: "https://maps.google.com/maps?q=Adyar%2C%20Mangaluru%2C%20Karnataka%20575002&t=&z=14&ie=UTF8&iwloc=&output=embed"
};

/**
 * Returns formatted address string.
 */
export const getFullAddress = () => {
  return BAKERY_LOCATION_CONFIG.fullAddress;
};

/**
 * Returns the confirmed Google Maps directions URL.
 */
export const getDirectionsUrl = () => {
  return BAKERY_LOCATION_CONFIG.customDirectionsUrl;
};

/**
 * Returns the confirmed Google Maps iframe embed URL.
 */
export const getEmbedMapUrl = () => {
  return BAKERY_LOCATION_CONFIG.customEmbedUrl;
};
