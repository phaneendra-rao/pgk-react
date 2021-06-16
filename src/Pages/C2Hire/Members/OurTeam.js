import React from 'react';
import { TEAM } from '../constants';
import { teamMembers } from '../data';
import MemberSection from "../Components/MemberSection";

function OurTeam() {
  return (
    <MemberSection data={teamMembers} type ={TEAM} />
  );
}

export default OurTeam;
