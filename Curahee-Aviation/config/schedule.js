// Schedule Configuration
// Edit this file to update scheduling information

const SCHEDULE_CONFIG = {
    // Business Hours
    businessHours: {
        weekdays: "By appointment",
        saturday: "By appointment", 
        sunday: "By appointment",
        holidays: "Closed",
        notes: "Hours subject to weather conditions and aircraft availability"
    },
    
    // Booking Process Steps
    bookingSteps: [
        {
            title: "Call or Email",
            description: "Contact us to check aircraft availability for your desired date and time."
        },
        {
            title: "Provide Information", 
            description: "Share your pilot credentials, experience, and intended flight plan."
        },
        {
            title: "Schedule Checkout",
            description: "New renters must complete a checkout flight with approved instructor."
        },
        {
            title: "Confirm Booking",
            description: "We'll confirm your reservation and provide pre-flight instructions."
        },
        {
            title: "Arrive & Fly",
            description: "Arrive 30 minutes early for pre-flight inspection and paperwork."
        }
    ],
    
    // Weather Minimums
    weatherMinimums: {
        policy: "Weather minimums are pilot discretion", // [edit] "decision.." -> "discretion."
        responsibility: "Pilot-in-command determines flight safety",
        cancellation: "Weather cancellations are free of charge",
        note: "We encourage conservative decision-making for flight safety"
    },
    
    // What to Bring - [edit] "valid..." -> current medical, [rm] gov. id
    whatToBring: [
        "Valid pilot certificate",
        "Current medical", // [edit] from "Government-issued photo ID"
        "Current logbook",
        "Supplemental insurance (optional - aircraft is insured)",
        "Flight bag and personal equipment"
    ],
    
    // Additional Scheduling Info
    scheduling: {
        advanceNotice: "24-hour minimum advance booking",
        arrivalTime: "30 minutes early for paperwork",
        responseTime: "We respond to all inquiries within 24 hours"
    }
};