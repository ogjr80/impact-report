'use client';

import { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';

export default function LineChart({ data, xKey, yKey, xLabel, yLabel, title }) {
  const ref = useRef();

  useEffect(() => {
    const chart = Plot.plot({
      title: title,
      x: { label: xLabel },
      y: { label: yLabel },
      marks: [
        Plot.line(data, { x: xKey, y: yKey }),
        Plot.dot(data, { x: xKey, y: yKey })
      ]
    });
    ref.current.append(chart);
    return () => chart.remove();
  }, [data, xKey, yKey, xLabel, yLabel, title]);

  return <div ref={ref} />;
}
