import React from "react";
import { Card } from "reactstrap";

const MyCard = ({ profile }) => {
  return (
    <Card>
      <CardTitle className="text-center">
        <p src={profile.name} />
      </CardTitle>
    </Card>
  );
}
export default MyCard;