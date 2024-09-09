// 'use client';

// import { useEffect, useRef } from 'react';
// import * as Plot from '@observablehq/plot';

// export default function PieChart({ data, valueKey, labelKey, title }) {
//   const ref = useRef();

//   useEffect(() => {
//     const chart = Plot.plot({
//       title: title,
//       marks: [
//         Plot.arc(data, {
//           value: valueKey,
//           label: labelKey,
//           stroke: "white",
//           strokeWidth: 1,
//         })
//       ]
//     });
//     ref.current.append(chart);
//     return () => chart.remove();
//   }, [data, valueKey, labelKey, title]);

//   return <div ref={ref} />;
// }


// app/impact-reports/components/charts/PieChart.js
'use client';

import { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';

export default function PieChart({ data, valueKey, labelKey, title }) {
  const ref = useRef();

  useEffect(() => {
    const chart = Plot.plot({
      title: title,
      height: 500,
      width: 500,
      margin: 50,
      r: { range: [0, 180] },
      color: { scheme: "category10" },
      marks: [
        Plot.pie(data, {
          value: valueKey,
          angle: valueKey,
          label: labelKey,
          stroke: "white",
          strokeWidth: 1,
        }),
        Plot.text(data, Plot.pieArcLabel({
          value: valueKey,
          label: labelKey,
          textRadius: 200
        }))
      ]
    });
    ref.current.append(chart);
    return () => chart.remove();
  }, [data, valueKey, labelKey, title]);

  return <div ref={ref} />;
}