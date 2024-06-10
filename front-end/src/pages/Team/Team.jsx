// Importing necessary components from the Material-UI library
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

// Array of team members with their names, roles, and images
const teamMembers = [
  {
    name: "Kirolos Magdy",
    role: "AI Developer",
    image: "https://avatars.githubusercontent.com/u/77224296?v=4",
  },
  {
    name: "Marwa Hany",
    role: "AI Developer",
    image: "https://avatars.githubusercontent.com/u/77224296?v=4",
  },
  {
    name: "Omar Mohammed",
    role: "Back-end Developer",
    image: "https://avatars.githubusercontent.com/u/77224296?v=4",
  },
  {
    name: "Salma Ayman",
    role: "Back-end Developer",
    image: "https://avatars.githubusercontent.com/u/77224296?v=4",
  },
  {
    name: "Ahmed Khafaga",
    role: "Front-end Developer",
    image: "https://avatars.githubusercontent.com/u/77224296?v=4",
  },
  {
    name: "Martrem Yasser",
    role: "Front-end Developer",
    image: "https://avatars.githubusercontent.com/u/77224296?v=4",
  },
  {
    name: "Nirvana Demian",
    role: "Front-end Developer",
    image: "https://avatars.githubusercontent.com/u/77224296?v=4",
  },
];

// Team component
const Team = () => {
  return (
    // Grid container to hold the team members' cards
    <Grid container spacing={10} sx={{ px: 10 }} justifyContent="center">
      {teamMembers.map((member) => (
        // Grid item for each team member
        <Grid item xs={4} key={member.name}>
          {/* Card component to display team member information */}
          <Card
            elevation={3}
            sx={{ px: 3, display: "flex", alignItems: "center" }}
          >
            {/* CardMedia component to display team member image */}
            <CardMedia
              component="img"
              sx={{ width: 75, borderRadius: "50%" }}
              image={member.image}
            />
            {/* CardContent component to display team member name and role */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

// Exporting the Team component as the default export
export default Team;
