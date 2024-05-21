import { Card, Grid } from "@mui/material";
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
    name: "Omar Mohamed",
    role: "Backend Developer",
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
const Team = () => {
  return (
    <Grid container spacing={6} sx={{ p: 3 }}>
      <Grid item xs={2.5}>
        <Card elevation={3} sx={{ p: 3 }}>
          First 7oko
        </Card>
      </Grid>
    </Grid>
  );
};
export default Team;
