import React from "react";
import { Card } from "reactstrap";

const GenerateQr = (value) => {
  return (
    <Card>
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </Card>
  );
}