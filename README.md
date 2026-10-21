# Opal Properties

Opal Properties is a property listing site for homes and investment listings across Pakistan. Visitors can browse and search properties, open a listing for price, location, and owner contact, and send a message to the Karachi office. Signed-in owners can add, edit, and remove their own listings from a dashboard.

The public sales desk is in DHA Phase 6, Karachi. A second line in Lahore handles scheduled viewings in Punjab.

| | |
| --- | --- |
| Sales desk | +92 21 111 672 257 |
| Lahore viewing line | +92 42 3578 4410 |
| Email | enquiries@opalproperties.pk |
| Office | 14-B, Khayaban-e-Shahbaz, DHA Phase 6, Karachi |
| Hours | Monday–Saturday, 10:00 AM – 7:00 PM |

## Pages

- **Home** — hero and a short set of latest listings
- **Properties** — paginated listing grid
- **Search** — match listings by title, address, or location
- **Property details** — images, description, map link, price, and the owner’s contact
- **About** — mission and the Karachi and Lahore desks
- **Contact** — office details and a message form
- **Login / Signup** — account access for people listing a property
- **Dashboard** — your listings, add or edit a property, incoming messages, and profile

## Stack

- Next.js 15 (App Router) and React 19
- MongoDB with Mongoose
- Cloudinary for property images
- JWT session stored in an HTTP cookie
- Bootstrap 5 and Font Awesome from CDN

## Setup

Use Node.js 18 or newer.

```bash
npm install
```

Create a `.env` file in the project root:

```env
MONGO_URI=mongodb://localhost:27017/opal-properties
JWT_SECRET=replace-with-a-long-random-string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

`NEXT_PUBLIC_BASE_URL` is used when the properties page loads the next page of listings. Cloudinary credentials are required only when adding or replacing property photos.

Start the app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build
npm start
npm run lint
```

## Project layout

```text
app/
  page.jsx                 Home
  about/                   About Opal Properties
  contact/                 Office details and message form
  properties/              All listings
  search/[searchTerm]/     Search results
  property_details/[p_id]/ Single listing
  login/  signup/          Accounts
  dashboard/               Owner tools
  api/                     Auth, properties, and messages
  components/              Navbar, footer, hero, cards
lib/                       Database, Cloudinary, and JWT helpers
```

Messages sent from the contact form are stored in MongoDB and shown under Dashboard → Messages.
