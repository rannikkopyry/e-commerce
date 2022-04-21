import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    height: '350px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontSize: "17px"
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  addToBasket: {
    fontSize: "15px",
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight: '50px'
  },
})); 
