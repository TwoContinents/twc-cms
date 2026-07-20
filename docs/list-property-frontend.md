# List Property Content Model

This file documents the `List Property` single type for frontend integration and CMS entry setup.

## Single Type: List Property

API UID: `api::list-property.list-property`

REST endpoint:

- `GET /api/list-property`

Recommended query:

```text
/api/list-property?populate[mainImage]=true
```

## Fields

- `title`: required localized string
- `subtitle`: required localized text
- `mainImage`: required single image, not localized
- `text`: required localized CKEditor HTML content

## English Content Draft

- `title`: List Your Property
- `subtitle`: Share your property with us and let our team help you present it to the right audience.
- `mainImage`: list-property-main.jpg
- `mainImageAlt`: Modern property prepared for listing
- `text`:

```html
<p>Whether you want to sell, rent, or professionally manage your property, our team can help you take the next step with clarity and confidence.</p>
<p>Submit the key details about your property and we will review the information, understand your goals, and guide you through the most suitable options.</p>
```

## Romanian Content Draft

- `title`: Listează Proprietatea
- `subtitle`: Prezintă-ne proprietatea ta, iar echipa noastră te va ajuta să o aduci în fața publicului potrivit.
- `mainImage`: list-property-main.jpg
- `mainImageAlt`: Proprietate modernă pregătită pentru listare
- `text`:

```html
<p>Fie că vrei să vinzi, să închiriezi sau să administrezi profesionist proprietatea, echipa noastră te poate ajuta să faci următorul pas cu claritate și încredere.</p>
<p>Trimite-ne detaliile principale despre proprietate, iar noi vom analiza informațiile, vom înțelege obiectivele tale și te vom ghida către cele mai potrivite opțiuni.</p>
```

## Notes

This content type uses draft/publish and i18n localization.

The image is intentionally not localized, matching the existing property media pattern.

The generated TypeScript files in `types/generated` are not the source of truth. Strapi will regenerate them when `npm.cmd run develop` runs.
