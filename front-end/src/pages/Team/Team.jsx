import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
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
const Team = () => {
  return (
    <Grid container spacing={10} sx={{ px: 10 }} justifyContent="center">
      {teamMembers.map((member) => (
        <Grid item xs={4} key={member.name}>
          <Card
            elevation={3}
            sx={{ px: 3, display: "flex", alignItems: "center" }}
          >
            <CardMedia
              component="img"
              sx={{ width: 75, borderRadius: "50%" }}
              image={member.image}
            />
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
export default Team;
