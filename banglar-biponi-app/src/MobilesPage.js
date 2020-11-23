import React from 'react'
import './MobilePage.css'
import Product from './Product'
function Home(){
    return(
        <div className="home">

            <div className="home__container">
                <h2>Mobiles</h2>
                <div className="home__row">
                    <Product id="1" title='iphone 12' price={999.99} image="data:image/jpeg;base64,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" rating={4}/>
                    <Product 
                        id="2"
                        title="Samsung Galaxy Note 20 Ultra"
                        price={1299}
                        image="data:image/jpeg;base64,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"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="3"
                        title="Oneplus 8 pro"
                        price={899}
                        rating={5}
                        image="https://cdn.opstatics.com/store/20170907/assets/images/events/instant-noodle/specs/color-8p.jpg"
                    />
                    <Product 
                        id="4"
                        title="Asus Rog Phone 3"
                        rating={4}
                        price={949.99}
                        image="data:image/jpeg;base64,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"
                    />
                    <Product 
                        id="5"
                        title="Sony Wperia 1 ii"
                        rating={4}
                        price={889.93}
                        image="https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-II-o.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="6"
                        title="Google Pixel 5"
                        rating={4}
                        price={699.99}
                        image="https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5-5g.jpg"
                    />
                </div>
            </div>           
        </div>
    )
}
export default Home