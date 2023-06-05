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
    title: 'Great Education for All',
    Svg: require('@site/static/img/world.svg').default,
    description: (
      <>
        In 2030, there will be 2 Billion school-age children in the world.
        Every single one of them deserves a great education.
        That is our goal.
      </>
    ),
  },
  {
    title: 'We make learning Fun',
    Svg: require('@site/static/img/books.svg').default,
    description: (
      <>
        We don't just want children to learn.
        We want them to want to learn.
        Sophia makes learning fun and engaging, like playing with your friends.
      </>
    ),
  },
  {
    title: 'Individuality leads to success',
    Svg: require('@site/static/img/child.svg').default,
    description: (
      <>
        Each child is unique.
        Each child has strenghts, Each child has special needs.
        Our app's sole focus is to best serve these needs, at an individual level.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
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
