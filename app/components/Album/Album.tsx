"use client";

// import { Info as InfoIcon } from "@mui/icons-material";
import { Profile } from "./Profile";
import { useEffect, useState } from "react";

export function Album() {
  // This loaded check is required to avoid big Image el error. 
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  const profiles = [
    { id: 1, first: 'Mindy', last: 'Tippetts', path: "https://picsum.photos/seed/1" + Date.now() + "/300" },
    { id: 2, first: 'Joe', last: 'Tippetts', path: "https://picsum.photos/seed/2" + Date.now() + "/300" },
    { id: 3, first: 'Benson', last: 'Tippetts', path: "https://picsum.photos/seed/3" + Date.now() + "/300" },
  ];

  return (
    <div className="album">
      <div className="profiles">
        { loaded ? profiles.map(p => <Profile key={p.id} id={p.id} first={p.first} last={p.last} path={p.path} />) : null}
      </div>
    </div>
  );
}