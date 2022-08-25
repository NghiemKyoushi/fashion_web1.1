import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Grid  from '@mui/material/Grid'; 
import Item from '../Item';
import style from './style.module.css';
import {collection, getDocs }  from 'firebase/firestore';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SelectComponent from '../../helpers/SelectComponent';
interface HomeContentProps {
  productList?: []
}

export default function HomeContent(props: HomeContentProps) {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <React.Fragment>
       <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="http://92wear.vn/storage/banner/92%20%C6%B0.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="http://92wear.vn/storage/banner/271752515_4914361671981964_4897833936941014480_n.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://92wear.vn/storage/banner/92.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className={style.filters}>
    {/* <h3>Sản phẩm nổi bật</h3> */}
    <Grid container spacing={3}>
    <Grid xs ={6} md={6} lg={6}>

    </Grid>
    <Grid xs ={2} md={2} lg={2}>
     <SelectComponent
     title='Type of product'
     handleChange={handleChange}
     />
      </Grid>
      <Grid xs ={4} md={4} lg={4}>

      </Grid>

    </Grid>
    
    </div>
    <Grid container className={style.itemContainer} spacing={3}>
        {props.productList?.map((item, index) => (
          <Grid item key={index} xs={8} sm={6} md={3} lg={3} >
            <Item item={item}/>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

// export async function getServerSideProps() {
//   const productCollectionRef = collection(db , 'products') 
//   const data1 = await getDocs(productCollectionRef);  
//   const productList = data1.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//   console.log(productList)
//   // Pass data to the page via props
//   return { props: {productList} }
// }

