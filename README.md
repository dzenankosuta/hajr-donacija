# Hajr Donacija

Web aplikacija za prikupljanje donacija za izgradnju džamije u selu Aliveroviće.

## O projektu

Ova aplikacija služi kao platforma za praćenje napretka humanitarne akcije "Budi Vakif". Cilj akcije je prikupiti sredstva za ukrovljenje džamije kroz donacije od 100€.

### Glavne funkcionalnosti

- Vizualni prikaz napretka donacija kroz interaktivni grid
- Progress bar sa ukupnim iznosom prikupljenih sredstava
- Galerija slika objekta
- Informacije o načinu doniranja
- Responsivan dizajn (desktop, tablet, mobitel)

## Tehnologije

- React + TypeScript
- Tailwind CSS
- Vite

## Pokretanje

```bash
npm install
npm run dev
```

## Ažuriranje broja donacija

U fajlu `src/components/DonationGrid.tsx` promijenite vrijednost `FILLED_DONATIONS`:

```typescript
const FILLED_DONATIONS = 0; // <- Promijeni ovaj broj
```
