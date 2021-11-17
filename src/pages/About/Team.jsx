import React from "react";
import TeamMember from "./TeamMember";
const members = [
  {
    name: "Kristin Lane",
    designation: "Art Director",
    img: "https://i.ibb.co/wN5zYWX/team4.jpg",
  },
  {
    name: "Philip Howard",
    designation: "Lead Developer",
    img: "https://i.ibb.co/0FJfSLt/team7.jpg",
  },
  {
    name: "Stella Flores",
    designation: "Marketing",
    img: "https://i.ibb.co/D80Vxsn/team8.jpg",
  },
];
const Team = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              This is our advisory team
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {members.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
