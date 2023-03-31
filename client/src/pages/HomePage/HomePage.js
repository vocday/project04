import React from "react";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";
import { ProjectList } from "../../components/ProjectList/ProjectList";

export const HomePage = () => {
  return (
    <MasterLayout>
      <ProjectList />
    </MasterLayout>
  );
};
