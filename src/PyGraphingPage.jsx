import {Link} from "react-router-dom";

export default function PyGraphingPage() {
    return (
        <div className="p-8 bg-science-black min-h-screen text-gray-100 space-y-8">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-science-primary">🧪 PyGraphing</h1>
                <p className="text-xl text-science-muted mt-2">Powerful Technical Graphing Extension for PSVG</p>
                <p className="text-md text-gray-500">Author & Maintainer • GitHub / PyPI Downloads: ~27,000+</p>
            </header>

            <div className="space-y-8">
                <Section title="Overview">
                    <p className="text-science-muted">
                        PyGraphing is a Python-based scientific plotting toolkit focused on technical class based
                        visualizations.
                        Leveraging a PSVG backbone,
                        it empowers scientists and engineers to generate clean,
                        scalable graphics directly from their data pipelines.
                    </p>
                </Section>

                <Section title="Key Features">
                    <ul className="grid-list list-disc">
                        <li>SVG-first rendering with clean, portable output</li>
                        <li>Chainable syntax for building complex plots with minimal code</li>
                        <li>Extensible Classes for clean, organized, and highly complex customization</li>
                        <li>Dedicated modules for frames, axes, legends, bezier curves, and series types</li>
                        <li>Absolute layout control: define margins, scaling, tick marks, and labels</li>
                        <li>Ready for integration with LIMS and Django validation platforms</li>
                    </ul>
                </Section>

                <Section title="Under the Hood">
                    <ul className="grid-list list-disc">
                        <li>PyGraphing is built from a PSVG backbone, retaining its tree structure yielding efficient
                            and fast svg generation
                        </li>
                        <li>Class based architecture reinforces an organized approach regardless of complexity</li>
                        <li>Custom rendering logic outputs fully valid and human-readable SVG markup</li>
                        <li>Precision-managed text layout and alignment tools allow for publication-grade images</li>
                        <li>Written in pure Python with zero dependencies for maximum portability</li>
                    </ul>
                </Section>

                <Section title="Impact">
                    <ul className="grid-list list-disc">
                        <li>Used internally at PinPoint Testing to produce scalable graphics for toxicological
                            validation reports
                        </li>
                        <li>Produced visualizations for multiple peer-reviewed publications and conference
                            presentations
                        </li>
                        <li>Lightweight, extensible, and downloaded over 27,000 times via PyPI</li>
                    </ul>
                </Section>
            </div>
            <div className="text-center mt-10">
                <Link to="/" className="text-science-accent underline">← Back to Portfolio</Link>
            </div>

        </div>
    )
        ;
};

function Section({ title, children }) {
    return (
        <section className="section">
            <h2 className="text-2xl font-semibold text-science-info border-b border-gray-700 pb-1">{title}</h2>
            {children}
        </section>
    );
}
