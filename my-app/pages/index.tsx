// pages/index.tsx
import type { ReactElement } from 'react'
import Template from '../component/Layout'
import type { NextPageWithLayout } from './_app'
import HomeContent from '../component/homePage'
import {collection, getDocs }  from 'firebase/firestore';
import { db } from '../helpers/firebase'; 

const Home = (props:any) => {  
  return(
  
    // eslint-disable-next-line react/no-children-prop
    <Template children={<HomeContent  productList={props.productList}/>}/>
   
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
    {page}
    </>
  )
}

export async function getServerSideProps() {
  const productCollectionRef = collection(db , 'products') 
  const data1 = await getDocs(productCollectionRef);  
  const productList = data1.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  // Pass data to the page via props
  return { props: {productList} }
}

export default Home;
