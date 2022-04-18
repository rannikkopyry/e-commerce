import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    searchInputs: {
        margin-top: '105px;',
        display: 'flex',
      },
      
      searchinput: {
        background-color: 'white',
        border: '0',
        borderRadius: '2px',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
        fontSize: '18px',
        padding: '15px',
        height: '30px',
        width: '300px',
      },
      
      searchIcon: {
        height: 60px,
        width: 50px,
        background-color: white,
        display: grid,
        place-items: center,
      }
      
      input:focus {
        outline: none,
      }
      searchIcon svg {
        font-size: 35px,
      }
      
      dataResult {
        margin-top: 5px,
        width: 300px,
        height: 200px,
        background-color: white,
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px,
        overflow: hidden;
        overflow-y: auto;
      }
      
      dataResult::-webkit-scrollbar: {
        display: none,
      }
      
      dataResult .dataItem {
        width: 100%,
        height: 50px,
        display: flex,
        align-items: center,
        color: black,
      }
      
      dataItem p {
        margin-left: 10px,
      }
      a {
        text-decoration: none,
      }
      
      a:hover {
        background-color: lightgrey,
      }
      
      #clearBtn: {
        cursor: 'pointer',
      }
  }));