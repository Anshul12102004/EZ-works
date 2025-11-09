// src/TexturedBg.jsx
import React from "react";

function makeNoiseDataUri({
  baseFrequency = 0.8,
  octaves = 2,
  color = "#FDD0C1",
  opacity = 0.08,
}) {
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>
    <filter id='noise'>
      <feTurbulence baseFrequency='${baseFrequency}' numOctaves='${octaves}' stitchTiles='stitch'/>
      <feColorMatrix type='saturate' values='0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#noise)' fill='${color}' opacity='${opacity}'/>
  </svg>`;
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
}

export default function TexturedBg({
  width = "100%",
  height = "100vh",
  bgColor = "#FFFFFF",
  baseFrequency = 0.8, // controls texture size
  octaves = 2,
  color = "#FDD0C1",   // your noise color
  opacity = 0.08,      // density / strength
  children,
}) {
  const noiseUri = makeNoiseDataUri({ baseFrequency, octaves, color, opacity });

  const style = {
    width,
    height,
    backgroundColor: bgColor,
    backgroundImage: noiseUri,
    backgroundRepeat: "repeat",
    backgroundBlendMode: "normal",
  };

  return <div style={style}>{children}</div>;
}
