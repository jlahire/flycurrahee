// Aircraft Specifications Configuration
// Edit this file to update aircraft details throughout the website

const AIRCRAFT_CONFIG = {
    // Basic Aircraft Information
    make: "Cessna",
    model: "172",
    year: "1965",
    
    // Engine Specifications - [edit] "O-300D" changed to new avionics suite
    engine: "O-300D",
    horsepower: "145 HP",
    
    // Avionics Suite - [ins. avionics card below aircraft specs]
    avionics: {
        garminSuite: "Avionics Suite",
        intercom: "GNC 255 Intercom",
        gps: "Garmin 650 GPS",
        navCom: "Garmin NAV/Com",
        transponder: "Garmin Transponder ADSB",
        attitude: "Garmin G5 Attitude",
        hsi: "Garmin GI275 HSI",
        backup: "**Classic 6 pack**"
    },
    
    // Performance Specifications
    cruiseSpeed: "122 knots",
    serviceCeiling: "13,100 ft",
    range: "640 nautical miles",
    
    // Physical Specifications
    seating: "4 seats",
    fuelCapacity: "36 gallons usable",
    
    // Additional Specifications
    emptyWeight: "1,404 lbs",
    maxGrossWeight: "2,300 lbs",
    usefulLoad: "896 lbs",
    
    
    // Maintenance & Condition
    annualDue: "Current",
    lastInspection: "100-hour current",
    condition: "Well-maintained"
};