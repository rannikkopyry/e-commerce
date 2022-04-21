import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    margin: "0",
    padding: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#d7f542",
  },
  title: {
    textAlign: "center",
    marginTop: "100px",
  },
  categoryTitle: {
    marginBottom: "25px",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
