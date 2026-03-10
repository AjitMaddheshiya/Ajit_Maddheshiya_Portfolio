# Certificate Section Implementation Plan

## Information Gathered:
- The project uses React + Vite + Tailwind CSS
- Work component displays projects in a grid with modal for details
- App.jsx order: Navbar → About → Skills → Work → Education → Contact → Footer

## Plan:
1. Create `src/components/Certificate/Certificate.jsx` - Similar to Work.jsx but for certificates
2. Add certificate data array to `src/constants.js`
3. Import and add Certificate component in `src/App.jsx` below Work

## Followup Steps:
- Test that the new section displays correctly
- Verify all images and links work

