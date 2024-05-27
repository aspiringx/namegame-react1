"use client";

import Image from "next/image";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Album } from "./components/Album/Album";
import { Alert, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { Check as CheckIcon,  Info as InfoIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import React from "react";

export default function Home() {
  return (
    <div id="__next" className="page">
      <header className="flex justify-center items-center">
        <h1>NameGame</h1>
      </header>
      <div className="info mb-2">
        <Alert sx={{ borderRadius: 0}} icon={<InfoIcon fontSize="inherit" />} severity="info">
          NameGame is currently available to limited groups, by invitation only. 
          <br /><br />
          If you&apos;ve heard about NameGame and want to be considered,
          send a non-refundable $25 to&nbsp;
          <a href="https://account.venmo.com/u/tipjoe">#tipjoe on Venmo</a>&nbsp; 
          with your:
          <ul>
            <li>Name (personal)</li>
            <li>Group name</li>
            <li>Phone</li>
            <li>Email</li>
            <li>How you heard about this (person or organization)</li>
          </ul>
          We&apos;ll reach out to see if this is a good fit for your group.
        </Alert>
      </div>
      <footer className="flex justify-center items-center">
        Relationships are everything!
      </footer>
    </div>
  );
}

        // <div /* Register Form */ className="registerForm">
        //   Register Form
        //   <div /* Name Input */ className="nameInput">Name</div>
        //   <div /* Phone Input */ className="phoneInput">Phone</div>
        //   <div /* Picture Input */ className="pictureInput">Picture</div>
        //   <button /* Submit */ className="submitButton">Submit</button>
        // </div>