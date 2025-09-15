import  Header  from '@/components/header';
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
        <div className='gradient min-h-screen'></div>
        <Header />
        <main className='container'></main>
        
        <Outlet/>
        <div className='p-10 text-center bg-gray-800 mt-10'>Made by 💗 Shivam</div>
    </div>
    
  );
};

export default AppLayout;
