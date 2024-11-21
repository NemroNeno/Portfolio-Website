import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets:['latin'],
  weight: ['400','500','600','700','800'],
  variable:'--font-sora'

})


const Layout = ({children}) => {
 
  return <div className={`page bg-site bg-primary/30  text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
    <TopLeftImg/>
    <Nav/>
    <Header/>
    {children}
  </div>;
};

export default Layout;
