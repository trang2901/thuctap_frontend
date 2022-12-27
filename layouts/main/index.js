import React, { useState, useEffect } from "react";
import { MainHeader } from "./MainHeader";
import {MainFooter} from "./MainFooter"
export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
