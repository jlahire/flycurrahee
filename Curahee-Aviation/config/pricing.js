// Pricing Configuration
// Edit this file to update pricing details and inclusions

const PRICING_CONFIG = {
    // Wet Rate Details
    wetRate: {
        description: "Aircraft rental with standard equipment",
        includes: [
            "Aircraft rental",
            "Standard avionics and equipment", 
            "Pre-flight inspection",
            "Customer provides fuel"
        ],
        bestFor: "10+ hrs"
    },
    
    // Dry Rate Details
    dryRate: {
        description: "Basic aircraft rental",
        includes: [
            "Aircraft rental",
            "Customer provides fuel",
            "Customer responsible for pre-flight",
            "Basic equipment package"
        ],
        bestFor: "everyone"
    },
    
    // Payment Information - [typo] fixed "possiblea" -> "possible"
    payment: {
        method: "Cash only",
        timing: "Payment due at pre-flight",
        notes: "Please bring exact change when possible"
    },
    
    // Additional Fees (customize as needed)
    additionalFees: {
        // Placeholder for future fees
        // overnightFee: "$50 per night",
        // cleaningFee: "$25 if required",
        // fuelHandlingFee: "$10 per fill-up"
    }
};