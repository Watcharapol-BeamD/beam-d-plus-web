import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Link from "next/link";
import beam_d_img from "@/app/assets/beamD-logo.png";
import Image from "next/image";
export default function DrawerComponent() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const link = [
    "/",
    "/about-us",
    "/our-service",
    "/our-strengths",
    "/our-teams",
    "/contact-us",
  ];

  const DrawerList = (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          "HOME",
          "ABOUT US",
          "OUR SERVICE",
          "OUR STRENGTHS",
          "OUR TEAMS",
          "CONTACT US",
        ].map((text, index, array) => (
          <Link key={text} href={link[index]} passHref>
            <ListItem disablePadding>
              <ListItemButton>
                {index + 1 === array.length ? (
                  <div className="bg-primary px-4 py-2 rounded-full text-white">
                    <ListItemText primary={text} sx={{ textAlign: "left" }} />
                  </div>
                ) : (
                  <ListItemText
                    primary={text}
                    sx={{ textAlign: "left" }}
                    className="pl-4"
                  />
                )}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="w-full h-18 flex items-center bg-primary drop-shadow-md">
      <div className="flex justify-between w-full px-2">
        <div className="h-10 w-10 "> </div>
        <Link href={"/"} className=" ">
          <Image alt="" src={beam_d_img} className="h-10 w-18" />
        </Link>

        <button onClick={toggleDrawer(true)}>
          <MenuIcon fontSize="large" className="text-white" />
        </button>
      </div>

      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <div className="flex justify-between items-center h-18 w-full px-2 bg-primary ">
          <div className="h-10 w-10 "> </div>
          <Image alt="" src={beam_d_img} className="h-10 w-18" />
          <button onClick={toggleDrawer(false)}>
            <HighlightOffIcon fontSize="large" className="text-white" />
          </button>
        </div>
        {DrawerList}
      </Drawer>
    </div>
  );
}
