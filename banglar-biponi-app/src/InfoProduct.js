import React from 'react'
import './InfoProduct.css'
import { Link } from 'react-router-dom';
import Product from './Product'
function InfoProduct(){
    var carousel = document.getElementById('carousel');
    var slides = 3;
    var speed = 7000; // 5 seconds

    function carouselHide(num) {
        indicators[num].setAttribute('data-state', '');
        slides[num].setAttribute('data-state', '');

        slides[num].style.opacity=0;
    }

    function carouselShow(num) {
        indicators[num].checked = true;
        indicators[num].setAttribute('data-state', 'active');
        slides[num].setAttribute('data-state', 'active');

        slides[num].style.opacity=1;
    }

    function setSlide(slide) {
        return function() {
            // Reset all slides
            for (var i = 0; i < indicators.length; i++) {
                indicators[i].setAttribute('data-state', '');
                slides[i].setAttribute('data-state', '');
                
                carouselHide(i);
            }

            // Set defined slide as active
            indicators[slide].setAttribute('data-state', 'active');
            slides[slide].setAttribute('data-state', 'active');
            carouselShow(slide);

            // Stop the auto-switcher
            clearInterval(switcher);
        };
    }

    function switchSlide() {
        var nextSlide = 0;

        // Reset all slides
        for (var i = 0; i < indicators.length; i++) {
            // If current slide is active & NOT equal to last slide then increment nextSlide
            if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
                nextSlide = i + 1;
            }

            // Remove all active states & hide
            carouselHide(i);
        }

        // Set next slide as active & show the next slide
        carouselShow(nextSlide);
    }

    if (carousel) {
        var slides = carousel.querySelectorAll('.slide');
        var indicators = carousel.querySelectorAll('.indicator');

        var switcher = setInterval(function() {
            switchSlide();
        }, speed);

        for (var i = 0; i < indicators.length; i++) {
            indicators[i].addEventListener("click", setSlide(i));
        }
    }
    return(
        
        <div className="home">
            <div>
                <h2>Asus GL504gm</h2>
            </div>
            <br></br>
            <div className="inner">
                
                
                
                
                
            </div>

            <div id="carousel" class="carousel">
                    <div class="slides">
                        <div class="slide" data-state="active"><img src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/gl504gm-scare/gl504gm-scare-1-500x500.jpg"></img></div>
                        <div class="slide"><img src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/gl504gm-scare/gl504gm-scare-2-500x500.jpg"></img></div>
                        <div class="slide"><img src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/gl504gm-scare/gl504gm-scare-4-500x500.jpg"></img></div>
                    </div>
                    <div class="indicators">
                        <input class="indicator" name="indicator" data-slide="1" data-state="active" checked type="radio" />
                        <input class="indicator" name="indicator" data-slide="2" type="radio" />
                        <input class="indicator" name="indicator" data-slide="3" type="radio" />
                    </div>
                </div>

            <div className="inner2">
                <br></br>
                    <h3>Price : 1500 $</h3>
                </div>
            <br></br>
            <div className="info">
                <h3>Basic Information</h3><br></br>
                Processor	Intel® Core™ i7-8750H Processor (9M Cache,2.20 GHz up to 4.10 GHz, 6 Cores, 12 Threads)<br></br>
                Display	15.6” FHD (1920*1080) High Refresh Rate 144Hz IPS-Type Display with slim 5mm bezel, 3ms response time<br></br>
                Memory	16GB DDR4<br></br>
                Storage	1TB HDD+8GB SSHD & 128GB SSD<br></br>
                Graphics	Nvidia GTX 1060, 6GB DDR5<br></br>
                Chipset	Mobile Intel® HM370 Express Chipsets<br></br>
                Operating System	Genuine Win 10<br></br>
                Battery	66WHrs, 4S1P, 4-cell Li-ion<br></br>
                Audio	Audio Enjoy clearer, louder, and more accurate audio via powerful side-firing speakers that provide immersive sound.<br></br>

                <br></br><br></br><br></br><br></br><h3>Input Devices</h3><br></br>
                Keyboard	RGB Keyboard<br></br>
                Optical Drive	No<br></br>
                WebCam	HD Web Camera<br></br>
                Card Reader	1x SD Card Reader<br></br>
                
                <br></br><br></br><br></br><br></br><h3>Network & Wireless Connectivity</h3><br></br>
                LAN	1x RJ45 LAN Jack for LAN insert<br></br>
                Wi-Fi	802.11AC<br></br>
                Bluetooth	5.0<br></br>
                
                <br></br><br></br><br></br><br></br><h3>Ports, Connectors & Slots</h3><br></br>
                USB (s)	1x USB Type-C 3.1(Gen 2)<br></br>
                2x USB Type-A 3.1(Gen.1)<br></br>
                1x USB Type-A 3.1(Gen 2)<br></br>
                HDMI	1x HDMI<br></br>
                Audio Jack Combo	1x Headphone-out & Audio-in Combo Jack<br></br>
                
                <br></br><br></br><br></br><br></br><h3>Physical Specification</h3><br></br>
                Dimensions (W x D x H)	14.2" x 10.3" x 1.0"<br></br>
                Weight	5.3 lbs<br></br>
                Color(s)	Gun Metal (Scar)<br></br>
                
                <br></br><br></br><br></br><br></br><h3>Warranty</h3><br></br>
                Manufacturing Warranty	02 years International Limited Warranty (Terms & condition Apply As Per Asus)<br></br>
            </div>              
        </div>
    )
}
export default InfoProduct