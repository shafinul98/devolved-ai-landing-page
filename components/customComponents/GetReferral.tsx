"use client";

import { useEffect, useState } from "react";

export default function GetReferral() {
  const UCID = "EeQTn0VkqudBHfkE9leVA0AcX70";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.viral-loops.com/widgetsV2/core/loader.js";
    script.async = true;
    script.onload = () => setLoading(false);
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mt-5 mb-5">
      {loading ? (
        <div>Loading Campaign...</div>
      ) : (
        <form-widget ucid={UCID}></form-widget>
      )}
    </div>
  );
}
