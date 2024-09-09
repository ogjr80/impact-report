'use client';

import { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';

export default function BarChart({ data, xKey, yKey, xLabel, yLabel, title }) {
  const ref = useRef();

  useEffect(() => {
    const chart = Plot.plot({
      title: title,
      x: { label: xLabel },
      y: { label: yLabel },
      marks: [
        Plot.barY(data, { x: xKey, y: yKey }),
        Plot.ruleY([0])
      ]
    });
    ref.current.append(chart);
    return () => chart.remove();
  }, [data, xKey, yKey, xLabel, yLabel, title]);

  return <div ref={ref} />;
}
