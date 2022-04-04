import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'M TANVIR AHMED <br />
          TEACHER,TRAINER & SPEAKER
        </SectionTitle>
        <SectionText>
        Tanvir Ahmed is the founder & CEO of online learning School. This is the largest online education platform in Bangladesh which teaches more than 253,000 students every single day, that too completely free of cost.
        </SectionText>
        <Button  onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;