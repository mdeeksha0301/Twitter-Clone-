// import Navbar from '../src/components/Navbar'

function MyApp({ Component, pageProps }){
  return (
    <>
      {/* <Navbar/> */}
      <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
