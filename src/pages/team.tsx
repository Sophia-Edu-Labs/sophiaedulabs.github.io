import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/*}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        */}
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, alignItems: 'center',
    justifyContent: 'center', }}>
    <div>
      <h2>
        Friedrich Wicke
      </h2>
      <h3>Co-Founder</h3>
      <p style = {{ textAlign: "left", fontSize: 12}}>
      Friedrich is what Germans call a bunter Hund “colorful dog”: He completed two Bachelor’s degrees (Econ and Mathematics) in Berlin, studied & did Research at Harvard and Max Planck Institute and started several projects related to Entrepreneurship and Education: *starcode, a non profit that wants to increase Gender Diversity in Computer Science by offering coding courses to High School Girls, a university group that connects ambitious students interested in Artificial Intelligence from all of Berlin, a podcast about successful Entrepreneurs and Researchers from Europe. While his education is mostly in science, he draws a lot of inspiration from visual and performing arts.
      </p>
    </div>
    <div>
        <img src="img/friedrichgero.png" alt="hero"/>
    </div>
    {/*}
    <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            See how it works
          </Link>
    </div>
    */}
    <div>
    <h2>
        Gero Embser
      </h2>
      <h3>Co-Founder</h3>
      <p style = {{ textAlign: "left", fontSize: 12}}>
      Gero can be considered a bit of a child prodigy: When he was still in school, he was already writing apps to improve the German education system, and that with huge success: He received a “Jugend forscht” prize and Apple was so im-pressed by his work, they flew him out to California to participate in a Developers conference. Originally from Mönchen-gladbach, he moved to Berlin to study Computer Science, where he started a non-profit called Lern-Fair. Lern-Fair con-nects pupils with University students for free Online tutoring. They won countless awards and by now have several full time employees. Besides being a successful non-profit Entrepreneur, Gero shares a passion for architecture. For a long time, everyone thought he was going to be an architect (including himself). He's still that architecture-loving perfectionist who can't stop incorporating good design and perfect functionality into his software. 
      </p>
    </div>
  </div>

      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/*<HomepageFeatures />*/}
      </main>
    </Layout>
  );
}