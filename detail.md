# Asanzo Beach Hotel — Hotel Details

This file is the primary content reference for the Asanzo Beach Hotel website project.
Use these details when creating website content. Do not invent missing hotel information.
If information is missing or unclear, use a neutral placeholder or ask for confirmation.

## 1. Hotel Overview

- **Hotel name:** Asanzo Beach Hotel
- **Website:** https://asanzobeachhotel.com/
- **Location:** Pattaya, Chon Buri, Thailand
- **Opened:** 2024
- **Number of rooms:** 30
- **Approximate distance to the beach:** 1.8 km

### Hotel address

279/121 Soi Somprasong, Pattaya, Bang Lamung, Chon Buri Province, Thailand.

## 2. Contact Information

- **Phone / Reception:** +66-889804406
- **Email:** info@asanzobeachhotel.com

Use a clickable telephone link (`tel:+66889804406`) and email link (`mailto:info@asanzobeachhotel.com`) where appropriate.

Do not invent social media accounts, opening hours, reception hours, or other contact details.

## 3. Room Types and Prices

All prices below are in **Thai Baht (THB) per night**.

| Room type | Price per night |
|---|---:|
| Standard Double Room | ฿700 THB |
| Deluxe Double Room | ฿900 THB |
| Family Suite | ฿1,400 THB |

### Room content rules

- Display prices clearly with a `THB / night` or `/ night` label.
- Do not invent room capacity, bed configuration, room size, views, included meals, policies, or in-room facilities.
- Add room descriptions and features only when verified by the hotel/client.
- Use genuine photographs of the corresponding Asanzo Beach Hotel rooms when available.
- If genuine room photographs are unavailable, use clearly temporary/illustrative imagery and do not imply that stock photos show the actual rooms.

## 4. Booking and Reservation Rules

**The website does not provide online booking or reservation functionality.**

Do not create:
- Online booking forms.
- Check-in or check-out date pickers.
- Availability calendars.
- Payment or checkout flows.
- Reservation dashboards.
- Fake booking confirmations.

Every **Book Now** button must navigate to the website's Contact page so visitors can contact the hotel reception.

The Contact page should provide:
- A call option using the supplied phone number.
- An email option using the supplied email address.
- The hotel address and directions/map link.

WhatsApp may be offered only if the hotel confirms that this phone number is available on WhatsApp and the link is configured correctly.

Room prices are informational display prices only. Do not suggest that clicking a button reserves a room or confirms availability.

## 5. Amenities and Facilities

The following amenities were supplied for the hotel. Include them in the website, grouped into sensible categories. Use suitable React Icons or Lucide icons.

### Basic facilities and comfort
- Air Conditioning
- Elevator / Lift
- Power Backup
- Refrigerator
- Kitchen / Kitchenette
- Washing Machine
- Housekeeping
- Laundry
- Laundromat
- Umbrellas

### Food, drink, and relaxation
- Bar
- Restaurant
- Lounge
- Room Service

### Guest services
- Reception
- Luggage Assistance
- Newspaper
- General Services

### Connectivity
- Wi-Fi
- LAN

### Health, fitness, and safety
- Gym / Fitness Centre
- Fire Extinguishers
- First-aid Services

### Transport and parking
- Parking
- Airport Transfers
- EV Charging Station
- Driver's Accommodation

### Accessibility
- Wheelchair Accessibility

Do not add facilities that are not listed here unless the hotel/client confirms them.

## 6. Location Information

- **Area:** Pattaya, Bang Lamung, Chon Buri Province, Thailand
- **Address:** 279/121 Soi Somprasong, Pattaya, Bang Lamung, Chon Buri Province, Thailand
- **Beach distance:** Approximately 1.8 km

Use the exact supplied address for the map or directions link.

Do not invent:
- Exact walking or driving times to the beach.
- The name of a specific beach entrance.
- Nearby attractions, restaurants, transport stops, or distances unless verified.

## 7. Photography and Visual References

### Hotel photography

Use genuine Asanzo Beach Hotel photography wherever possible. Trip.com can be consulted as a reference/source when looking for photographs of this specific property and its rooms.

Reference website:
- https://asanzobeachhotel.com/

Photography rules:
- Prefer client-provided or verified hotel images.
- Do not present unrelated stock photography as actual hotel photography.
- If genuine hotel images cannot be found, use suitable tropical/hotel stock photography only as temporary illustrative imagery.
- Make temporary imagery easy to replace.
- Confirm image licensing or obtain permission before using images in the production website. A photo appearing on Trip.com does not automatically grant permission to reuse it.

### Design inspiration websites

Use these websites as visual inspiration, not as templates to copy:

1. Bellevoire — https://bellevoire.framer.website/
2. Brisa — https://brisa.framer.website/
3. FlatHaven — https://flathaven.framer.website/
4. Alba — https://alba-template.framer.website/
5. The Vila — https://thevila.framer.website/
6. The Hotel — https://thehotel.framer.website/
7. NOIRÉ — https://noirei.framer.website/

The intended visual direction is premium editorial hospitality: refined typography, spacious layouts, immersive photography, varied section compositions, and smooth, subtle motion.

## 8. Website Content Requirements

The complete website is expected to include these pages or sections:

- **Home:** Hotel introduction, hero, featured rooms and prices, amenities preview, gallery preview, location, and contact CTA.
- **About:** Hotel overview, opening year, room count, and hotel story using only verified information.
- **Rooms:** All three room types, THB/night prices, verified details, and Book Now links to Contact.
- **Amenities:** All supplied amenities, organized into clear categories.
- **Gallery:** Hotel, room, facility, and surrounding-area images, using verified imagery where possible.
- **Contact:** Address, phone, email, map/directions, beach distance, and reception contact actions.

## 9. Content and Accuracy Rules

- Treat this file as the primary source for the hotel facts listed above.
- Do not invent reviews, testimonials, awards, ratings, policies, room specifications, facilities, or hotel claims.
- Do not make unsupported claims such as “luxury resort,” “ beachfront,” “best hotel,” or “minutes from the beach.”
- Use “approximately 1.8 km from the beach” rather than implying the hotel is directly on the beach.
- Keep prices in Thai Baht and clearly label them as per night.
- Keep contact details and address consistent across all pages.
- If the client supplies updated information, update this file and the relevant centralized data files.

## 10. Implementation Note for Codex

Before building or editing hotel content:
1. Read this `detail.md`.
2. Check the existing project and `AGENTS.md`.
3. Keep hotel facts in centralized data files (for example, `hotelData.js`, `roomsData.js`, and `amenitiesData.js`).
4. Avoid duplicating hard-coded hotel information across components.
5. Do not implement online booking.
6. Ensure all room **Book Now** buttons navigate to Contact.
7. Flag missing information instead of making assumptions.
