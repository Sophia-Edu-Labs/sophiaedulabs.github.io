import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Important target group',
    Svg: require('@site/static/img/children.svg').default,
    description: (
      <>
        Sophia educates the future generation.
      </>
    ),
  },
  {
    title: 'Wide access',
    Svg: require('@site/static/img/smartphone.svg').default,
    description: (
      <>
        All you need is a smartphone.
      </>
    ),
  },
  {
    title: 'Better together',
    Svg: require('@site/static/img/handshake.svg').default,
    description: (
      <>
        This leads to much better educational justice.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
