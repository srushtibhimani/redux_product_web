import React,{ useEffect,useState } from 'react'
import  axios  from 'axios';
import { Row,Card,Button,Col } from 'react-bootstrap';
function Product() {
    const [val,setval] = useState();
    const [status,setstatus]  = useState(false);
    
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(function (response) {
            console.log(response.data);
            setval(response.data);
            setstatus(true);
        })
        .catch(function (error) {
            console.log(error);
        })
    },[])
 if (status) {
    return (
        <>
            <section>
                <div className='bg_img position-relative'>
                    <img src={require('./images/bgimg.webp')}></img>
                    <div className='container'>
                        <div className='position-absolute text-position'>
                            <h5 className='fs-6 ms-5 ps-5'>CLOTHING</h5>
                            <h5 className='fs-6 ms-5 ps-5'>NEW COLLECTION</h5>
                            <h2 className='slider_text fw-normal mt-5 pt-5 ms-5 ps-5'>NEW ARRIVALS!</h2>
                            <h1 className='slider_text font-size  ms-5 ps-5'>SUMMER FASHION</h1>
                            <p className='ms-5 ps-5 mt-3'>We crack for this purely rock style with stitched quills in relief and metallic<br></br> hardware.</p>
                            <div className='ms-5 ps-5 mt-4'>
                            <button className='btn1 py-3 px-5 text-dark fw-bold'>read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mt-5 pt-4'>
                    <Row className='justify-content-center'>
                        {
                            val.map((item) => {
                               return(
                             <Col sm={3}>
                                   <Card className='border-none'>
                                <Card.Img variant="top" src={item.image} style={{width:"100%" , height:"350px"}} />
                                <Card.Body>
                                  <Card.Title>{item.title}</Card.Title>
                                  <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                  </Card.Text>
                                  <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                              </Card>
                             </Col>
                               )
                            })
                           
                        }
                    </Row>
                </div>
            </section>
        </>
      )
 }
 else{
    return(
        <>
                <h1>loading...</h1>
        </>
    )
 }
}

export default Product
