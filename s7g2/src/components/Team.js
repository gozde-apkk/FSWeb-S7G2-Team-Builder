import React from "react";

export default function (props) {
  const { team } = props;
  return (
    <div>
      <h2>Üye Listesi</h2>
      {team.map((member, index) => (
        <ul>
          <li key="membername">Üye Adı:{member.membername}</li>
          <li key="membername">Üye Soyadı:{member.membersurname}</li>
          <li key="membermail">Üye Email:{member.membermail}</li>
          <li key="memberposition">Üye Rolü:{member.position}</li>
        </ul>
      ))}
    </div>
  );
}