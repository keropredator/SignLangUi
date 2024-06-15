// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Collapse,
  IconButton,
} from "@mui/material";
import { GitHub, Facebook, LinkedIn } from "@mui/icons-material";
import KiroImage from "./team_images/kiro.jpeg";
import MarwaImage from "./team_images/marwa.jpeg";
import OmarImage from "./team_images/omar.jpeg";
import SalmaImage from "./team_images/salma.jpeg";
import AhmedImage from "./team_images/ahmed.jpeg";
import MartremImage from "./team_images/martrem.jpeg";
import NirvanaImage from "./team_images/nirvana.jpeg";

// Array of team members with their names, roles, images, and context
const teamMembers = [
  {
    name: "Kirolos Magdy",
    role: "AI Developer",
    image: KiroImage,
    context:
      "Kirolos specializes in developing and training AI models, focusing on sign language recognition.",
    github: "https://github.com/keropredator",
    facebook: "https://www.facebook.com/kero.top.9081/",
    linkedin: "https://www.linkedin.com/in/kirolos-magdy-charon/",
  },
  {
    name: "Marwa Hany",
    role: "AI Developer",
    image: MarwaImage,
    context:
      "Marwa works on enhancing AI algorithms for better accuracy and efficiency in sign language translation.",
    github: "https://github.com/Marwa-Hany",
    facebook: "https://www.facebook.com/marwahanyfouad",
    linkedin: "https://www.linkedin.com/in/marwa-hany-fouad/",
  },
  {
    name: "Omar Mohammed",
    role: "Back-end Developer",
    image: OmarImage,
    context:
      "Omar manages the server-side logic and ensures the smooth operation of the application's back-end.",
    github: "",
    facebook: "https://www.facebook.com/miromido2010",
    linkedin: "",
  },
  {
    name: "Salma Ayman",
    role: "Back-end Developer",
    image: SalmaImage,
    context:
      "Salma designs and implements scalable back-end services, focusing on data handling and security.",
    github: "https://github.com/SalmaAyman2002",
    facebook: "https://www.facebook.com/profile.php?id=100088308382566",
    linkedin: "https://www.linkedin.com/in/salma-ayman-402053314/",
  },
  {
    name: "Ahmed Khafaga",
    role: "Front-end Developer",
    image: AhmedImage,
    context:
      "Ahmed creates interactive and user-friendly interfaces, ensuring an excellent user experience.",
    github: "https://github.com/ahmedkhafaga621",
    facebook: "https://www.facebook.com/dido.soubhy",
    linkedin: "https://www.linkedin.com/in/ahmed-khafaga-414707231/",
  },
  {
    name: "Martrem Yasser",
    role: "Front-end Developer",
    image: MartremImage,
    context:
      "Martrem specializes in responsive design and front-end performance optimization.",
    github: "https://github.com/MartreemMuris",
    facebook: "https://www.facebook.com/profile.php?id=100010903544569",
    linkedin: "https://www.linkedin.com/in/martrem-yasser-856140241/",
  },
  {
    name: "Nirvana Demian",
    role: "Front-end Developer",
    image: NirvanaImage,
    context:
      "Nirvana focuses on developing accessible and visually appealing front-end components.",
    github: "https://github.com/nirvanademian",
    facebook: "https://m.facebook.com/mora.damian.5?mibextid=LQQJ4d",
    linkedin: "https://www.linkedin.com/in/nirvana-demian-4b1525269/",
  },
];

// Team component
const Team = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (name) => {
    setExpanded(expanded === name ? null : name);
  };

  return (
    // Grid container to hold the team members' cards
    <Grid container spacing={10} sx={{ px: 10 }} justifyContent="center">
      {teamMembers.map((member) => (
        // Grid item for each team member
        <Grid item xs={12} sm={6} md={4} key={member.name}>
          {/* Card component to display team member information */}
          <Card
            elevation={3}
            sx={{
              px: 3,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
              },
            }}
            onClick={() => handleExpandClick(member.name)}
          >
            {/* CardMedia component to display team member image */}
            <CardMedia
              component="img"
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                marginTop: 2,
              }}
              image={member.image}
            />
            {/* CardContent component to display team member name and role */}
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.role}
              </Typography>
              {/* Collapse component to show/hide context */}
              <Collapse
                in={expanded === member.name}
                timeout="auto"
                unmountOnExit
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  {member.context}
                </Typography>
              </Collapse>
            </CardContent>
            {/* Icons for GitHub, Facebook, and LinkedIn */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <IconButton
                component="a"
                href={member.github}
                target="_blank"
                aria-label="GitHub"
                sx={{ color: "#171515" }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href={member.facebook}
                target="_blank"
                aria-label="Facebook"
                sx={{ color: "#1877F2" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href={member.linkedin}
                target="_blank"
                aria-label="LinkedIn"
                sx={{ color: "#0A66C2" }}
              >
                <LinkedIn />
              </IconButton>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

// Exporting the Team component as the default export
export default Team;
