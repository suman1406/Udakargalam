'use client';

export default function GlobalError() {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#fef8f4', color: '#1f2937', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <main style={{ display: 'grid', minHeight: '100vh', placeItems: 'center', padding: '24px' }}>
          <section style={{ maxWidth: '640px', borderLeft: '4px solid #3b82a6', background: '#eff6f8', padding: '40px' }}>
            <p style={{ color: '#276b8f', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Site error</p>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.4rem', margin: '12px 0' }}>Something went wrong.</h1>
            <p style={{ lineHeight: 1.6 }}>Please refresh the page or return to the project home.</p>
            <a href="/" style={{ color: '#276b8f', fontWeight: 700 }}>Return to home</a>
          </section>
        </main>
      </body>
    </html>
  );
}
