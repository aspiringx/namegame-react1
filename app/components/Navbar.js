'use client';
import * as React from 'react';
import { Box, Link, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from '@mui/material';

export default function Navbar() {

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link key="Home" href="/" className="no-underline">
          <ListItem key="Home" disablePadding>
            <ListItemButton>
              <ListItemText className="font-semibold text-2xl text-black">Name Game</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        {[['About Us', '/about-us'], ['Contact Us', '/contact-us'], ['Login', '/login']].map((item, index) => (
          <Link key={item[0]} href={item[1]} className="no-underline text-slate-500 active:text-black">
            <ListItem key={item[0]} disablePadding>
              <ListItemButton>
                <ListItemText primary={item[0]} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );


  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-t to-orange-300 from-orange-400 lg:px-5 py-3 shadow">
      <div className="flex items-center flex-shrink-0 text-white lg:mr-7">
        <a href="/" className="w-32 px-3">
          <img className="" src="/aspiring-logo-white.png" alt="Logo" width="100%" height="100%"></img>
        </a>
      </div>
      <div className="block lg:hidden ml-auto pr-3">
        <React.Fragment key={'right'}>
          <button onClick={toggleDrawer('right', true)} className="flex items-center px-3 py-2 border rounded text-white border-white">
            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
            PaperProps={{
              sx: { width: "80%" },
            }}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
        <div className="text-sm lg:flex-grow">
          <a href="/about-us" className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4">
            About Us
          </a>
          <a href="/contact-us" className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4">
            Contact Us
          </a>
        </div>
        <div>
          <a href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-400 hover:bg-white mt-4 lg:mt-0">Login</a>
        </div>
      </div>
      <div>

      </div>
    </nav>
  );
}