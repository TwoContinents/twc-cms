# Property Services Content Model

This adds service detail pages and shared template content for those pages.

## Collection Type: Property Service

API UID: `api::property-service.property-service`

REST endpoints:

- `GET /api/property-services`
- `GET /api/property-services/:documentId`

Suggested frontend route:

- `/services/:slug`

Fields:

- `title`: required localized string
- `slug`: required UID generated from `title`
- `subtitle`: required localized text
- `details`: required localized CKEditor HTML content
- `mainImage`: required single image, not localized
- `gallery`: optional image gallery, not localized
- `seo`: required `shared.seo` component

Example service entries:

- Property Management
- Holiday Homes
- Interior Design
- Maintenance

Recommended query for a service detail page:

```text
/api/property-services?filters[slug][$eq]=property-management&populate[mainImage]=true&populate[gallery]=true&populate[seo][populate]=*
```

## Single Type: Property Services Page

API UID: `api::property-services-page.property-services-page`

REST endpoint:

- `GET /api/property-services-page`

Purpose:

Shared template content used across all property service detail pages.

Fields:

- `seo`: required `shared.seo` component
- `moreInformationSection`: required `shared.section` component with `title`, `subtitle`, and `tag`
- `moreInformationText`: required localized CKEditor HTML content

Recommended query:

```text
/api/property-services-page?populate[seo][populate]=*&populate[moreInformationSection]=true
```

## Notes

Both content types use draft/publish and i18n localization, matching the existing property-facing CMS models.

Media fields are intentionally not localized, following the existing property image pattern.

The generated TypeScript files in `types/generated` were not edited manually. Strapi will regenerate them the next time `npm.cmd run develop` runs.
