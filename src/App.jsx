import React, { Suspense, lazy, useCallback, useMemo, useState } from 'react'
import ProductList from './components/ProductList'

const AnalyticsPanel = lazy(() => import('./components/AnalyticsPanel'))

const products = Array.from({ length: 2500 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ['Technology', 'Books', 'Fitness', 'Travel'][i % 4],
  price: 100 + ((i * 37) % 1900),
}))

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [count, setCount] = useState(0)
  const [showAnalytics, setShowAnalytics] = useState(false)

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    return products.filter((product) => {
      const matchesText =
        !normalized ||
        product.name.toLowerCase().includes(normalized)

      const matchesCategory =
        category === 'All' || product.category === category

      return matchesText && matchesCategory
    })
  }, [query, category])

  const handleSelect = useCallback((product) => {
    console.log('Selected:', product.name)
  }, [])

  return (
    <main className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">React Performance Assignment</p>
          <h1>Performance Optimization</h1>
          <p className="subtitle">
            A practical demo of code splitting, memoization,
            React.memo and performance-friendly rendering.
          </p>
        </div>

        <div className="badge">Optimized</div>
      </header>

      <section className="card controls">
        <div className="control">
          <label htmlFor="search">Search products</label>
          <input
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try: Product 100"
          />
        </div>

        <div className="control">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Technology</option>
            <option>Books</option>
            <option>Fitness</option>
            <option>Travel</option>
          </select>
        </div>

        <div className="counter">
          <span>Unrelated state: {count}</span>
          <button onClick={() => setCount((value) => value + 1)}>
            Re-render
          </button>
        </div>
      </section>

      <section className="stats">
        <div className="stat card">
          <strong>{products.length}</strong>
          <span>Total products</span>
        </div>

        <div className="stat card">
          <strong>{filteredProducts.length}</strong>
          <span>Visible after memoized filtering</span>
        </div>

        <div className="stat card">
          <strong>Lazy</strong>
          <span>Analytics bundle loaded on demand</span>
        </div>
      </section>

      <section className="card">
        <div className="section-heading">
          <div>
            <h2>Memoized product list</h2>
            <p>
              The list component uses <code>React.memo</code> and stable props.
            </p>
          </div>

          <button onClick={() => setShowAnalytics((value) => !value)}>
            {showAnalytics ? 'Hide analytics' : 'Load analytics'}
          </button>
        </div>

        <ProductList
          products={filteredProducts.slice(0, 100)}
          onSelect={handleSelect}
        />
      </section>

      {showAnalytics && (
        <Suspense fallback={<div className="card loading">Loading analytics…</div>}>
          <AnalyticsPanel productCount={filteredProducts.length} />
        </Suspense>
      )}

      <footer>
        <p>
          Techniques demonstrated: code splitting • useMemo • useCallback • React.memo
        </p>
      </footer>
    </main>
  )
}
