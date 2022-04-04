import React from 'react';
import { DiFirebase} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle } from './skillsStyles';

const Skills = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I have come from Engineering background with expertise in Supply Chain, Strategic Management and International Sourcing.
    </SectionText>
    <List>
      <ListItem>
        <picture>
        <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            Operations Management</ListTitle>

        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Supply Chain Management</ListTitle>


        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            Garment Manufacturing</ListTitle>

        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            Project Management</ListTitle>

        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Product Development</ListTitle>

        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Marketing</ListTitle>

        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Sales</ListTitle>

        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Manufacturing</ListTitle>

        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Business Strategy</ListTitle>

        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Skills;
