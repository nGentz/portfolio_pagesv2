import CopyEmail from './CopyEmail';

export default function AboutPage() {
  return (
    <main className="page-container" style={{ fontFamily: 'Sweden Sans, system-ui, sans-serif', minHeight: '100vh', display: 'flex', justifyContent: 'center', paddingBottom: '3rem' }}>
      <div style={{ maxWidth: 700, width: '100%' }}>
        {/* About Section */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 500, marginBottom: '2rem', color: '#111' }}>About</h1>
          <p style={{ fontSize: '1.08rem', color: 'var(--color-subtext)', margin: 0 }}>
            Data Analyst passionate about analytics, visualization, and making sense of data. Currently pursuing an M.S. in Analytics (2026). Always eager to learn and take on new challenges.
          </p>
        </section>

        {/* Work Experience Section */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '1.5rem' }}>Work Experience</h2>
          <div style={{ marginBottom: '2rem', display: 'flex', gap: '2.5rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>2024 - Present</div>
            <div>
              <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>Data Analyst</div>
              <div style={{ color: 'var(--color-subtext)', fontSize: '1.05rem' }}>Mount Sinai South Nassau</div>
            </div>
          </div>
          <div style={{ marginBottom: '2rem', display: 'flex', gap: '2.5rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>2023 - 2024</div>
            <div>
              <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>Solutions Analyst</div>
              <div style={{ color: 'var(--color-subtext)', fontSize: '1.05rem' }}>Westgate Resorts</div>
            </div>
          </div>
          <div style={{ marginBottom: '2rem', display: 'flex', gap: '2.5rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>2022 - 2023</div>
            <div>
              <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>Production Assistant</div>
              <div style={{ color: 'var(--color-subtext)', fontSize: '1.05rem' }}>Paradox Customs</div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '1.5rem' }}>Education</h2>
          <div style={{ marginBottom: '2rem', display: 'flex', gap: '2.5rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>2024 - 2026</div>
            <div>
              <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>M.S. in Analytics</div>
              <div style={{ color: 'var(--color-subtext)', fontSize: '1.05rem' }}>Georgia Institute of Technology</div>
            </div>
          </div>
          <div style={{ marginBottom: '2rem', display: 'flex', gap: '2.5rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>2019 - 2023</div>
            <div>
              <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>B.S. in Computer Science</div>
              <div style={{ color: 'var(--color-subtext)', fontSize: '1.05rem' }}>Long Island University Post</div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '1.5rem' }}>Certifications</h2>
          <div style={{ marginBottom: '1.25rem', display: 'flex', gap: '2.5rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>Coursera</div>
            <div>
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/LYLBU28MZ34E"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#111', textDecoration: 'none', fontSize: '1.05rem' }}
              >
                <span style={{ textDecoration: 'underline' }}>IBM Data Science Specialization</span>
                <span aria-hidden="true" style={{ marginLeft: 6, fontSize: '0.9em', textDecoration: 'none' }}>↗</span>
              </a>
            </div>
          </div>
          <div style={{ marginBottom: '1.25rem', display: 'flex', gap: '2.5rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>Credly</div>
            <div>
              <a
                href="https://www.credly.com/badges/294bfcb9-0db4-4d50-bda0-3170978ca7a0/public_url"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#111', textDecoration: 'none', fontSize: '1.05rem' }}
              >
                <span style={{ textDecoration: 'underline' }}>Tableau Certified Data Analyst</span>
                <span aria-hidden="true" style={{ marginLeft: 6, fontSize: '0.9em', textDecoration: 'none' }}>↗</span>
              </a>
            </div>
          </div>
          <div style={{ marginBottom: '1.25rem', display: 'flex', gap: '2.5rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>Kaggle</div>
            <div>
              <a
                href="https://www.kaggle.com/learn/certification/nickgentz/pandas"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#111', textDecoration: 'none', fontSize: '1.05rem' }}
              >
                <span style={{ textDecoration: 'underline' }}>Programming in Python using Pandas</span>
                <span aria-hidden="true" style={{ marginLeft: 6, fontSize: '0.9em', textDecoration: 'none' }}>↗</span>
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>Udemy</div>
            <div>
              <a
                href="https://www.udemy.com/certificate/UC-a55739af-8bb1-4a77-b7cb-145a6f74c95b/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#111', textDecoration: 'none', fontSize: '1.05rem' }}
              >
                <span style={{ textDecoration: 'underline' }}>Tableau Bootcamp for Data Visualization</span>
                <span aria-hidden="true" style={{ marginLeft: 6, fontSize: '0.9em', textDecoration: 'none' }}>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '1.5rem' }}>Contact</h2>
          <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '1.2rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>Email</div>
            <div>
              <CopyEmail />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            <div style={{ minWidth: 120, color: '#aaa', fontWeight: 400, fontSize: '1.1rem' }}>GitHub</div>
            <div>
              <a
                href="https://github.com/nGentz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--color-primary)',
                  textDecoration: 'underline',
                  fontSize: '1.05rem'
                }}
              >nGentz</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
