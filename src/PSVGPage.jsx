import { useState } from 'react';
import { Link } from 'react-router-dom';




export default function PSVGPage() {
  const [tab, setTab] = useState('overview');
  const [code, setCode] = useState(`# Galaxy SVG Generator using PSVG\nfrom psvg import SVG\nfrom psvg.Draw.Circle import Circle\nimport math, random\n\nsvg = SVG(width=800, height=800)\ncenter_x, center_y = 400, 400\n\nnum_arms = 4\npoints_per_arm = 150\nspiral_spread = 0.4\nmax_radius = 300\n\nfor arm in range(num_arms):\n    arm_offset = (2 * math.pi / num_arms) * arm\n    for i in range(points_per_arm):\n        radius = max_radius * (i / points_per_arm)\n        angle = spiral_spread * math.log1p(i) + arm_offset + random.uniform(-0.1, 0.1)\n        x = center_x + radius * math.cos(angle)\n        y = center_y + radius * math.sin(angle)\n        size = random.uniform(0.5, 2.5)\n        opacity = random.uniform(0.2, 0.9)\n        color = f"rgb({255 - int(radius)}, {255 - int(radius * 0.8)}, 255)"\n        svg.add(Circle(x, y, size, fill=color, opacity=opacity))\n\nfor _ in range(200):\n    x = center_x + random.gauss(0, 15)\n    y = center_y + random.gauss(0, 15)\n    size = random.uniform(1.5, 3)\n    svg.add(Circle(x, y, size, fill='white', opacity=0.8))\n\nprint(svg)`);
  const [output] = useState('<svg><!-- SVG output will appear here --></svg>');

  return (
    <div className="p-8 bg-science-black min-h-screen text-gray-100 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-science-primary">🧬 PSVG</h1>
        <p className="text-xl text-science-muted mt-2">Declarative SVG Generation for Scientific and Technical Workflows</p>
        <p className="text-md text-gray-500">Author & Maintainer • GitHub / PyPI Downloads: ~50,000+</p>
        <div className="mt-6 flex gap-4 justify-center border-b border-gray-700 pb-2">
          <button onClick={() => setTab('overview')} className={`pill ${tab === 'overview' ? 'bg-science-primary text-black' : ''}`}>Overview</button>
          <button onClick={() => setTab('try')} className={`pill ${tab === 'try' ? 'bg-science-primary text-black' : ''}`}>Try It</button>
        </div>
      </header>

      {tab === 'overview' && (
        <div className="space-y-8">
          <Section title="Overview">
            <p className="text-science-muted">
              PSVG is a Python package for programmatically constructing SVG graphics through an object-oriented, declarative API. It enables precise, scalable vector visualization—especially suited for scientific, engineering, and automated reporting contexts—without requiring any external rendering engine.
            </p>
          </Section>

          <Section title="Key Features">
            <ul className="grid-list">
              <li>Graph-based DOM model for modular SVG composition</li>
              <li>Shape primitives (Circle, Rect, Path, etc.) with fully configurable stroke, fill, opacity, and transforms</li>
              <li>High-level layout abstractions including TextBox, Paragraph, and Table with alignment and background support</li>
              <li>Support for nested SVG sections, reusable components, and grouped transforms</li>
              <li>Designed for integration into automated report generation pipelines and lab data visualization</li>
            </ul>
          </Section>

          <Section title="Under the Hood">
            <ul className="grid-list">
              <li>SVG elements are modeled as nodes in a graph structure, supporting flexible tree traversal and conditional rendering</li>
              <li>Custom rendering logic outputs fully valid and human-readable SVG markup</li>
              <li>Precision-managed text layout and alignment tools allow for publication-grade vector outputs</li>
              <li>Written in pure Python with zero dependencies for maximum portability</li>
            </ul>
          </Section>

          <Section title="Impact">
            <ul className="grid-list list-disc">
              <li>Used internally at PinPoint Testing to produce scalable graphics for toxicological validation reports</li>
              <li>Used to generate publication-grade visualizations</li>
              <li>Lightweight, extensible, and downloaded over 50,000 times via PyPI</li>
            </ul>
          </Section>
        </div>
      )}

      {tab === 'try' && (
        <div className="bg-science-surface p-6 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-science-primary">Try PSVG</h3>
          <textarea value={code} onChange={e => setCode(e.target.value)} rows={20} className="w-full font-mono bg-gray-900 text-white p-4 rounded-md" />
          <button className="pill" >Run</button>
          <div className="bg-white text-black p-4 mt-4 rounded-md">
            <div dangerouslySetInnerHTML={{ __html: output }} />
          </div>
        </div>
      )}

      <div className="text-center mt-10">
        <Link to="/" className="text-science-accent underline">← Back to Portfolio</Link>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="text-2xl font-semibold text-science-info border-b border-gray-700 pb-1">{title}</h2>
      {children}
    </section>
  );
}
