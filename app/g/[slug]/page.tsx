"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Alert, Button } from "@mui/material";
import { Check as CheckIcon,  Info as InfoIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import React from "react";
import { Album } from "../../components/Album/Album";

export default function Group({ params }: { params: { slug: string } }) {
  const queryClient = new QueryClient();
  // params.slug = hilltop
  return (
    <QueryClientProvider client={queryClient}>
      <div className="page">
        <div className="info mb-2">
          <Alert sx={{ borderRadius: 0}} icon={<CheckIcon fontSize="inherit" />} severity="success">
            Congrats, you just met <b>Mindy</b>! 
          </Alert>
          <Alert sx={{ borderRadius: 0}} icon={<InfoIcon fontSize="inherit" />} severity="info">
            You&apos;re in <b>anonymous guest mode</b>. To participate and let
            others remember you, <a href="#">click here</a>.
          </Alert>
        </div>
        <Album />
        <footer className="flex justify-evenly items-center">
          <Button variant="contained" size="medium">Meet</Button>
          <Button variant="contained" size="medium">Share</Button>
        </footer>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );

}