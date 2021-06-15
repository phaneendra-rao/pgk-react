import React from "react";
import { MentorMembers } from '../data';
import MemberSection from "../Components/MemberSection";
import { MENTOR } from "../constants";

function Mentors() {
  return (
    <MemberSection data={MentorMembers} type ={MENTOR} />
  );
}

export default Mentors;
