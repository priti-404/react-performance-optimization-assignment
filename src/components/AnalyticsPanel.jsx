import React, { useMemo } from 'react'

export default function AnalyticsPanel({ productCount }) {
  const bars = useMemo(
    () => Array.from({ length: 12 }, (_, index) => 30 + ((index * 17) % 65)),
    []
  )

  return (
    <section className="card analytics">
      <div className="section-heading">
        <div>
          <h2>Lazy-loaded analytics</h2>
          <p>This component is downloaded only when requested.</p>
        </div>
        <strong>{productCount} matches</strong>
      </div>

      <div className="bars" aria-label="Sample analytics chart">
        {bars.map((height, index) => (
          <div
            className="bar"
            key={index}
            style={{ height: `${height}%` }}
            title={`Metric ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
