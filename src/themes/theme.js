const theme = {
  rootTheme: {
    width: '100vw',      // 100% of the viewport width
    height: '100vh',     // 100% of the viewport height
    //backgroundColor: '#41404F', // Background color (adjust as needed)
    background: 'url("appBackground.png") center/cover no-repeat fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authTheme: {
    backgroundColor: "black",
    color: '#ffffff',
  },
  buttonTheme: {
    backgroundColor: '#4D0EFF',
    '&:hover': {
      backgroundColor: '#512da8',
    },
    color: '#ffffff',
    textDecoration: 'none',
  },

}

export default theme;