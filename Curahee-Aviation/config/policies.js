// Policies Configuration
// Edit this file to update rental policies

const POLICIES_CONFIG = {
    // Cancellation Policy
    cancellation: {
        notice: "24 hours advance notice required",
        weatherPolicy: "Weather cancellations free of charge",
        fees: {
            // Add specific fees as needed
            // lateFee: "$25 for cancellations under 24 hours",
            // noShowFee: "$50 for no-show appointments"
        },
        contact: "Contact us immediately for any changes"
    },
    
    // Scheduling Policy
    scheduling: {
        advanceBooking: "24-hour minimum advance booking",
        maximumBooking: "Subject to aircraft availability",
        modifications: "Schedule changes subject to availability",
        confirmation: "All bookings require confirmation"
    },
    
    // Fuel Policy
    fuel: {
        type: "100LL aviation fuel required",
        responsibility: "Renter provides all fuel",
        return: "Return aircraft with same fuel level",
        location: "Fuel available on field at KTOC"
    },
    
    // Insurance Policy
    insurance: {
        requirement: "Renter's insurance required for all flights",
        coverage: "Must meet minimum coverage requirements",
        documentation: "Certificate of insurance required before flight",
        verification: "Insurance verified at check-in"
    }
};