import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import GlobalStyles from '@mui/material/GlobalStyles';
import Head from 'next/head'
import {useAuth} from '../../context/useAuthen'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import style from './style.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
type DashboardLayoutProps = {
  children: React.ReactElement,
};
export default function Template({ children }: DashboardLayoutProps) {
  const {user, logout} = useAuth();
  return (
    <React.Fragment>
      <Head>
    <link rel = "stylesheet" href = "https://use.typekit.net/yey1brs.css"/>
    </Head>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
       className={style.appBar}
        elevation={0}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h5" color="CaptionText" noWrap sx={{ flexGrow: 1, fontFamily: 'cursive' }}>
           Forelsket
          </Typography>
          
          <div className={style.navContainer}>
            <Link  href="#"><a className={style.linkDecoration}>Features</a></Link>            
            <Link  href="#"><a className={style.linkDecoration}>Features</a></Link>
            <Link  href="#"><a className={style.linkDecoration}>Features</a></Link>
            <Link  href="#"><a className={style.linkDecoration}>Features</a></Link>
           
            
            {/* <Link className={style.linkDecoration} href="/about"> <a>Features</a></Link>
            <Link className={style.linkDecoration} href="/support"><a>Features</a></Link> */}
          </div>
           <form className={style.formSearch}>
            <input className={style.search} placeholder="Tìm kiếm..." type={'text'}/>
            <input type="submit" className={style.btnSearch}/>
            </form>
          {
              user?.uid !== undefined ?
              <div style={{marginLeft:15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>{user?.email.charAt(0).toUpperCase()}</Avatar>
              <IconButton onClick={logout}>
              <LogoutIcon/>

              </IconButton>
              </div>
              :
              <div style={{display: 'flex',justifyContent:'space-between', paddingTop:10}}>
              <Link href="/signin">
           <p className={style.authenText}>Login</p>
           </Link>
          <Link href="/signup">
            <p style={{marginLeft:5}} className={style.authenText} >Register</p>
          </Link>
              </div>
            }
          
          
        </Toolbar>
      </AppBar>
      <main style={{marginTop:80, width: '100%'}}>
        {children}
      </main>
      {/* Hero unit */}
      
    </React.Fragment>
  );
}

// export default function Layout() {
//   return <Template key={null} type={''} props={undefined}/>;
// }