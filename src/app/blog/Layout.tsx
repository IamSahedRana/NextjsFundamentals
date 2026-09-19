
import React from "react";

const LayoutPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h1>This is Blog Layout Page</h1>

      <div>{children}</div>
    </div>
  );
};

export default LayoutPage;