const theme = {
  root: {
    minWidth: '100vw',      // 100% of the viewport width
    minHeight: '100vh',     // 100% of the viewport height
    overflowX : 'hidden',
    background: 'url("appBackground.png") center/cover no-repeat fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Header: {
    backgroundColor: '#4D0EFF',
  },
  Footer:
  {
    backgroundColor: '#4D0EFF',
  },
  auth: {
    backgroundColor: '#0C0320',
    color: '#CCCCCC',
    textfield: {
      bgcolor: '#0C0320',
      color: 'white',
      '& .MuiInputLabel-root': { color: 'white' },
      '& .MuiFilledInput-root': { color: 'white', '&:before': { borderBottomColor: 'white' } }
    },
    button: {
      backgroundColor: '#4D0EFF',
      '&:hover': {
        backgroundColor: '#512da8',
      },
      color: '#FFFFFF',
    }
  },
  searchBarTheme: {
    textfield: {
      bgcolor: '#708090',
      color: 'white',
      '& .MuiInputLabel-root': { color: 'white' },
      '& .MuiFilledInput-root': { color: 'white', '&:before': { borderBottomColor: 'white' } }
    },
  },
  button: {
    backgroundColor: '#4D0EFF',
    '&:hover': {
      backgroundColor: '#512da8',
    },
    color: '#ffffff',
    textDecoration: 'none',
  },

}

export default theme;