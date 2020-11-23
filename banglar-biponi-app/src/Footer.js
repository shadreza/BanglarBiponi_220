import React from 'react'
import './Footer.css'
import Product from './Product'
function Footer(){

    return(
        
        <div className="footer"> 
            <table className="footer__table">
                <tr>
                    <th>
                        <h2 className="footer__text footer__textFirst">
                            The Store U Love!
                        </h2>
                        <h4 className="footer__text">
                            We Are An Online Store That Meets Your Need.
                            Bringing Quality Products To You.
                            
                        </h4>
                        <h4 className="footer__text footer__textLast">
                            Working All Over Bangladesh.
                        </h4>
                    </th>
                </tr>
                <tr className="footer__bottomRow">
                    <th>
                        <a className="footer__links" href="https://www.facebook.com/profile.php?id=100009732251679" target="blank"><img src="https://www.svgrepo.com/show/158427/facebook.svg"></img></a>
                        <a className="footer__links" href="https://github.com/shadreza" target="blank"><img src="https://www.svgrepo.com/show/217753/github.svg"></img></a>
                    </th>
                </tr>  
            </table>    
        </div>
    )
}
export default Footer