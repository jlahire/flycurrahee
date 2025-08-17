# How to Update Your Website

This guide shows you how to update your website content without any coding knowledge.

## Quick Updates

### Change Phone or Email

1. Open `Curahee-Aviation/config/contact-info.js`
2. Click the pencil icon to edit
3. Update your info:

   ```javascript
   phone: "(123) 456-7890",
   email: "abc@def.co",
   ```

4. Click "Commit changes"
5. Website updates in 2-3 minutes

### Change Rates

1. Open `Curahee-Aviation/config/business-config.js`
2. Edit rates:

   ```javascript
   wetRate: "$180",
   dryRate: "$130",
   ```

3. Save changes

## What Each File Controls

- `contact-info.js` - Phone, email, business name
- `business-config.js` - Rates, aircraft model/year
- `aircraft.js` - Aircraft specs (engine, performance, etc.)
- `rental.js` - Pilot requirements
- `schedule.js` - Business hours, booking process
- `policies.js` - Cancellation, fuel, insurance policies
- `pricing.js` - What's included in each rate
- `airport-info.js` - Airport details, directions

## Update Images

### Aircraft Photos

Upload to `assets/images/aircraft/` with names:

```
Curahee-Aviation/assets/images/aircraft/
├── aircraft-1.JPG  ← Exterior view
├── aircraft-2.JPG  ← Cockpit view  
├── aircraft-3.JPG  ← Interior view
├── aircraft-4.JPG  ← Engine view
└── aircraft-5.JPG  ← Ramp view
```

## Business Hours

Edit `schedule.js`:

```javascript
businessHours: {
    weekdays: "8AM - 6PM",
    saturday: "9AM - 5PM", 
    sunday: "Closed"
}
```

## Important Rules

- Don't delete quotes, commas, or brackets
- Don't change words like `phone:` or `wetRate:`
- Wait 2-3 minutes after saving to see changes
- Edit one thing at a time

## If Something Breaks

Your repository keeps a history of all changes. You can always revert back to a previous version if something goes wrong.

## Need Help?

Reach out to me.