import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  container: {
    margin: "0",
    padding: "0",
    width: '100vw',
    height: "100vh",
    backgroundColor: "white",
  },
  title: {
      marginTop: "100px",
      textAlign: "center",
  },
  image: {
      textAlign: "center",
      height: "100px",
  },
  content: {
      textAlign: "center",
  },
}));
