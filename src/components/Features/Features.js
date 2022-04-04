import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, TitleContent, UtilityList, Img } from './FeaturesStyle';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { features } from '../../constants/constants';

const Features = () => (
  <Section nopadding id="features">
    <SectionDivider />
    <SectionTitle main>Features</SectionTitle>
    <GridContainer>
      {features.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <UtilityList>

              <ExternalLinks href={p.source}>More Details</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>

  </Section>
);

export default Features;