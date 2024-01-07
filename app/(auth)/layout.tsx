
const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return ( 
    <div className="bg-pink-500 h-full items-center-justify-center">
      {children}
    </div>
   );
}
 
export default AuthLayout;