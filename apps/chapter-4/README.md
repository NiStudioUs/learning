# Chapter 4: RecipeVerse

## Overview

A full-featured recipe discovery application built with React 18 and TypeScript. Showcases 20 rich, handcrafted recipes across 8 cuisines and 5 categories with search, filtering, interactive cooking guidance, and a favourites system.

**GitHub Page**: [Live Demo](https://nistudious.github.io/learning/apps/chapter-4/index.html)

## Key Features

- **Recipe Grid**: Responsive 3-column layout with beautifully styled Brutalist cards
- **Live Search**: Filters recipes live by title, description, tags, cuisine, or category
- **Category & Cuisine Filters**: Chip-based filtering for fine-grained discovery  
- **Recipe Detail View**: Full recipe page with step-by-step instructional walkthrough with progress tracking
- **Interactive Ingredient Checklist**: Tick off ingredients as you gather them
- **Nutrition Info**: Calories, protein, carbs, fat, fibre per recipe
- **Favourites**: Heart-icon toggle with `localStorage` persistence across page reloads
- **Dark/Light Mode**: Full Warm Brutalism theme in both modes, toggled from the navbar

## Tech Stack

- **Framework**: React 18  
- **Build Tool**: Vite 5  
- **Styling**: Material UI v5 (custom Warm Brutalism theme) + Vanilla CSS animations  
- **Language**: TypeScript (strict)  
- **Routing**: `react-router-dom` v6 with `HashRouter`  
- **Animations**: Framer Motion (page transitions, card hovers)  
- **Data**: Local mock API (`src/data/mockApi.ts`) based on `chapter-1/js/api.js` structure  

## Design Philosophy

This chapter uses a **"Warm Brutalism"** hybrid theme — completely distinct from Chapter 2's Minimalism and Chapter 3's Glassmorphism/Aurora aesthetic:

- **Editorial Typography**: `Playfair Display` (serif) for headings — bold, literary, editorial
- **Palette**: Terracotta (`#C2410C`), warm amber (`#F59E0B`), cream, and charcoal
- **Cards**: Hard offset box-shadows (`4px 4px 0 #1C1917`), 2px borders, squared corners
- **Buttons**: Uppercase labels, bold shadows, interactive offset displacement on click
- **Background**: Clean off-white (light) / deep charcoal (dark) — no aurora blobs

## How to Run Locally

1. From the repo root: `npm run build && npm run preview` — then click the Chapter 4 card in the Hub
2. Or independently: `cd apps/chapter-4 && npm install && npm run dev`

## Mock API

All recipes are served entirely locally — no network calls. The `src/data/mockApi.ts` module exports the same function signatures as `apps/chapter-1/js/api.js`:

```typescript
fetchAllRecipes()          // All 20 recipes
fetchRandomRecipes(n)      // n shuffled recipes
fetchRecipeById(id)        // Single recipe by ID
searchRecipes(query)       // Search by title / tags / cuisine
filterRecipesByCategory()  // Filter by category
filterRecipesByCuisine()   // Filter by cuisine
fetchRandomRecipe()        // One random recipe
```
