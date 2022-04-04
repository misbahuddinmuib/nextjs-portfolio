import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AchievementsStyles';

const data = [
  { number: 20, text: 'Awards' },
  { number: 1000, text: 'Training', },
  { number: 52, text: 'Achievements', },
  { number: 5000, text: 'Total Clients', }
];

const Achievements = () => (
  <Section id='achievements'>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    
  </Section>
);

export default Achievements;
