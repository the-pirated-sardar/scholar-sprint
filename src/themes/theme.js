const theme = {
  rootTheme: {
    minWidth: '100vw',      // 100% of the viewport width
    minHeight: '100vh',     // 100% of the viewport height
    background: 'url("appBackground.png") center/cover no-repeat fixed',
    display: 'flex',
    flexDirection: 'column',
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