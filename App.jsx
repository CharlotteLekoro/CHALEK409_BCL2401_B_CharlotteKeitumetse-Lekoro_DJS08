import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Vans from "../src/pages/Vans/Vans";
import Login from "../src/pages/Login";
import VanDetail from "../src/pages/Vans/VanDetails";
import Layout from "../src/components/Layout";
import Dashboard from "../src/pages/Host/Dashboard";
import Reviews from "../src/pages/Host/Reviews";
import Income from "../src/pages/Host/Income";
import HostVans from "../src/pages/Host/HostVans";
import HostVanDetail from "../src/pages/Host/HostVanDetail";
import HostVanInfo from "../src/pages/Host/HostVanInfo";
import HostVanPricing from "../src/pages/Host/HostVanPricing";
import HostVanPhotos from "../src/pages/Host/HostVanPhotos";
import NotFound from "../src/pages/NotFound";
import HostLayout from "../src/components/HostLayout";
import AuthRequired from "../src/components/AuthRequired";

import "./server";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
