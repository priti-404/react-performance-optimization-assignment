# React Performance Optimization Assignment

## Objective
This project demonstrates practical React performance optimization techniques:

- Code splitting with `React.lazy()` and `Suspense`
- Memoization with `useMemo`
- Stable callbacks with `useCallback`
- Component memoization with `React.memo`
- Performance profiling using React DevTools Profiler
- Reducing unnecessary calculations and re-renders

## Setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

For a production build:

```bash
npm run build
npm run preview
```

## What was optimized

### 1. Code splitting
`AnalyticsPanel` is imported using `React.lazy()`. Its JavaScript is loaded only when the user clicks **Load analytics**.

### 2. useMemo
The 2,500-product filtering operation is wrapped in `useMemo`, so it is recalculated only when the search query or category changes.

### 3. useCallback
`handleSelect` is wrapped in `useCallback` so the function reference remains stable between unrelated renders.

### 4. React.memo
`ProductList` is wrapped with `React.memo`, preventing a re-render when its props have not changed.

### 5. Profiling
Use React Developer Tools -> Profiler:
1. Start recording.
2. Click **Re-render** several times.
3. Change the search/category.
4. Load analytics.
5. Compare render durations and component commits.

## Expected result
The optimized app should avoid unnecessary work during unrelated state updates, defer the analytics bundle until it is needed, and keep the product list from rendering when its props are unchanged.

## Submission
Upload this project to a GitHub repository and submit the repository URL in the assignment's Link field.

Suggested repository name:
`react-performance-optimization-assignment`
