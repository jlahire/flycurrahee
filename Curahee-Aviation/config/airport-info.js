// Airport Information Configuration
// Edit this file to update airport and location details

const AIRPORT_CONFIG = {
    // Airport Details
    airport: {
        identifier: "KTOC",
        name: "Toccoa Regional Airport",
        address: "899 Airport Rd, Toccoa, GA 30577",
        elevation: "948 feet MSL",
        runway: "5/23 - 4,001 x 75 feet",
        surface: "Asphalt",
        lighting: "MIRL, PAPI, Beacon",
        services: "100LL fuel available"
    },
    
    // Driving Directions
    directions: {
        fromLocation: "From Atlanta (90 minutes)",
        steps: [
            "Take I-85 North to Exit 177 (Lavonia/Toccoa)",
            "Turn right on Highway 17 North", 
            "Continue 8 miles to Toccoa",
            "Turn left on Airport Road",
            "Follow signs to terminal building"
        ],
        gpsCoordinates: "34.5928°N, 83.2956°W"
    },
    
    // Location Details
    location: {
        city: "Toccoa",
        state: "GA",
        region: "North Georgia mountains",
        driveTimeFromAtlanta: "90 minutes"
    }
};