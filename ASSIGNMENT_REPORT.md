# Performance Optimization – Assignment Report

## 1. Introduction
React applications can become slow when they perform expensive calculations, render large component trees, or load unnecessary JavaScript during the initial page load. Performance optimization improves loading speed, responsiveness and the overall user experience.

## 2. Techniques Implemented

### Code Splitting
The analytics component is loaded using `React.lazy()` and `Suspense`. This reduces the amount of JavaScript needed during the initial load.

### Memoization
`useMemo` caches the result of the product filtering operation. The calculation runs again only when the search query or category changes.

### React.memo
The product list is wrapped in `React.memo`. If its props remain the same, React can skip an unnecessary re-render.

### useCallback
The product selection callback is memoized with `useCallback`. This keeps the function reference stable and works together with `React.memo`.

### Performance Profiling
React Developer Tools Profiler can be used to record renders, identify components with unnecessary updates and compare commit durations before and after optimization.

## 3. Application Description
The application displays a searchable and filterable product list containing 2,500 generated products. It also contains an unrelated counter to demonstrate unnecessary renders and a lazily loaded analytics section.

## 4. Expected Benefits
- Faster initial page loading
- Less unnecessary computation
- Fewer unnecessary component renders
- Better responsiveness during interactions
- Reduced initial JavaScript bundle through code splitting

## 5. Conclusion
The project demonstrates how React performance techniques can be combined in a practical application. Memoization should be applied selectively where calculations or renders are actually expensive, while code splitting is useful for features that are not required immediately.
