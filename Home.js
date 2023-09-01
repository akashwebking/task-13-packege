import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import './Home.css'
import cimage1 from './assets/chennai1.jpeg';
import cimage2 from './assets/chennai2.jpeg';
import cimage3 from './assets/chennai3...jpeg';
import cimage4 from './assets/chennai4.jpeg';
import image1 from './assets/banner.1.jpg'
import image2 from './assets/pic1.jpeg';
import image3 from './assets/pic2.jpeg';
import image4 from './assets/pic3.jpeg';
import image5 from './assets/pic4.jpeg';
import rimage from './assets/Rameshwaran.jpeg';
import rimage1 from './assets/rameshwarem1.jpeg';
import rimage2 from './assets/rameshwarem2.jpeg';
import rimage3 from './assets/Rameshwaram3..jpeg';
import rimage4 from './assets/rameshwarem1 (6).jpeg';
import kimage from './assets/Kodaikanal.jpeg';
import kimage1 from './assets/kodaikanal1....jpeg';
import kimage2 from './assets/kodaikanal2.jpeg';
import kimage3 from './assets/kodaikanal3..jpeg';
import kimage4 from './assets/kodaikanal4.jpeg';
import oimage from './assets/Ooty.jpeg';
import oimage1 from './assets/ooty1 (1).jpeg'
import oimage2 from './assets/ooty1 (2).jpeg'
import oimage3 from './assets/ooty1 (3).jpeg'
import oimage4 from './assets/ooty1 (4).jpeg'
import kaimage from './assets/Kanyakumari.jpeg'
import kaimage1 from './assets/kanyakumari1 (1).jpeg'
import kaimage2 from './assets/kanyakumari1.(2).jpeg'
import kaimage3 from './assets/kanyakumari1 (3).jpeg'
import kaimage4 from './assets/kanyakumari1 (4).jpeg'
import kuimage from './assets/Kumbakonam.jpeg';
import kuimage1 from './assets/kumbakonam1 (1).jpeg'
import kuimage2 from './assets/kumbakonam1 (2).jpeg'
import kuimage3 from './assets/kumbakonam1 (3).jpeg'
import kuimage4 from './assets/kumbakonam1 (4).jpeg'
import maimage from './assets/Madurai.jpeg';
import maimage1 from './assets/madurai1.jpeg';
import maimage2 from './assets/madurai2.jpeg';
import maimage3 from './assets/madurai3..jpeg';
import maimage4 from './assets/madurai4..jpeg';
import yimage from './assets/Yarcaud.jpeg';
import yimage1 from './assets/yercaud...(1).jpeg';
import yimage2 from './assets/yercaud1 (2).jpeg';
import yimage3 from './assets/yercaud1.(3).jpeg';
import yimage4 from './assets/yercaud1 (4).jpeg';
import thimage from './assets/Theni.jpeg';
import thimage1 from './assets/theni1.(1).jpeg';
import thimage2 from './assets/theni1 (2).jpeg';
import thimage3 from './assets/theni1.(3).jpeg';
import thimage4 from './assets/theni1.(4).jpeg'
import himage from './assets/Hogenakkal.jpeg'
import himage1 from './assets/hogenakkal1.jpeg'
import himage2 from './assets/hogenakkal2..jpeg'
import himage3 from './assets/hogenakkal3.jpeg'
import himage4 from './assets/hokenakkal4..jpeg'






function Home() {
    return (
        <>
            <div className='container'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={image1} class="img-fluid" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image2} class="img-fluid" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image3} class="img-fluid" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image4} class="img-fluid" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image5} class="img-fluid" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col text-align-center">
                        <h1 class="text-center">Tourist Place To Tamil Nadu</h1>
                        <h1 class="text-center">Here Are The Top Place To Visit 2023</h1>
                    </div>
                    <div className="row text-center navlink">
                        <div className="col">
                        <ScrollLink to="chennai" smooth={false}>Chennai</ScrollLink>
                        </div>
                        <div className="col">
                        <ScrollLink to="rameshwaram" smooth={false}>rameshwarem</ScrollLink>
                        </div>
                        <div className="col">
                        <ScrollLink to="Kodaikanal" smooth={false}>Kodaikanal</ScrollLink>
                        

                           
                        </div>
                        <div className="col">
                           <ScrollLink to="ooty" smooth={false}> Ooty </ScrollLink>
                        </div>
                        <div className="col">
                           <ScrollLink to="kanyakumari" smooth={false}> Kanyakumari </ScrollLink>
                            
                        </div>

                    </div>
                    <div className="row text-center navlink">
                        <div className="col">
                           <ScrollLink to="kumbakonam" smooth={false}> kumbakonam </ScrollLink>
                           
                        </div>
                        <div className="col">
                           <ScrollLink to="madurai" smooth={false}> Madurai</ScrollLink>
                        </div>
                        <div className="col">
                           <ScrollLink to="yarcaud" smooth={true}>Yarcaud</ScrollLink>
                            
                        </div>
                        <div className="col">
                           <ScrollLink to="thenni" smooth={false}>Thenni</ScrollLink>
                            
                        </div>
                        <div className="col">
                           <ScrollLink to="hogenakkal" smooth={false}> Hogenekkal</ScrollLink>
                            
                        </div>

                    </div>
                </div>
            </div>
            <section id='chennai' class="my-5">
                <div className="container box my-5">
                    <div className="row">
                        <h1>01.chennai</h1>
                        <div className="row">
                            <div className="col">
                                <img src="https://www.holidify.com/images/bgImages/CHENNAI%20.jpg"class="img-fluid" alt="" />
                            </div>
                            <div className="col">
                                <h3>"The Drediot of India"</h3>
                                <p className='par'>Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of the south', is one among the four metropolitan siblings of India, having a rich cultural history which it perfectly balances with its metropolis lifestyle.</p>
                                <p className='par'>Amid its chaos of traffic and sweltering humid climate, Chennai is worth visiting for its temples steeped in south-Indian culture, British-era museums and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h1 className='text-center mb-5'>Must Visit Place In Chennai</h1>
                        <div className="row">

                            <div className="col">
                                <div class="card">
                                    <img src={cimage1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Marina Beach</h5>
                                        <p class="card-text">Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={cimage2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">MGR Flim City</h5>
                                        <p class="card-text">Having been established in the year 1994, a considerably new structure, the MGR Film city is

managed...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={cimage3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Marundeeswarar Temple</h5>
                                        <p class="card-text">The magnificent

Marundeeswarar Temple, in

Tiruvanmiyur, near Chennai has the temple deity Shiva..</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={cimage4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Breezy Beach</h5>
                                        <p class="card-text">Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='rameshwaram' class="my-5">
                <div className="container box my-5">
                    <div className="row">
                        <h1>02.Rameshwaram</h1>
                        <div className="row">
                            <div className="col">
                                <img src={rimage} alt="" />
                            </div>
                            <div className="col">
                                <h3>"The Bridge on the Indian Ocean"</h3>
                                <p className='par'>Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka!</p>
                                <p className='par'>Renowned for its magnificent prakaras with massive sculptured pillars on either side, The Ramanathaswamy Temple houses the longest corridor in the world. Agniteertham is famous for its sacred waters and Pilgrims perform poojas in honour of their ancestors at this seashore. The five-faced Hanuman Temple holds the floating stone which was used to build the bridge between India and Sri Lanka. Rameshwaram has the first 'sea bridge connecting the town of Mandapam with Pamban Island, and Rameswaram.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h1 className='text-center mb-5'>Must Visit Place In Rameshwaram</h1>
                        <div className="row">

                            <div className="col">
                                <div class="card">
                                    <img src={rimage1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Dhanushkodi Temple</h5>
                                        <p class="card-text">Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a....</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={rimage2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Lakshmana Temple</h5>
                                        <p class="card-text">Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama In order</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={rimage3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Rameshwaram Temple</h5>
                                        <p class="card-text">A perfect blend of mind- boggling architecture and spiritual significance, Rameshwaram Temple, also....</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={rimage4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Villoondi Tirtham</h5>
                                        <p class="card-text">Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst tourists...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='Kodaikanal'>
                <div className="container box my-5">
                    <div className="row">
                        <h1>03.Kodaikanal</h1>
                        <div className="row">
                            <div className="col">
                                <img src={kimage} alt="" />
                            </div>
                            <div className="col">
                                <h3>"The Princess of Hill Stations"</h3>
                                <p className='par'>Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means 'the gift of the forests'.</p>
                                <p className='par'>Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city life, and this hill station lets you sit back and connect with nature as you head out on biking or trekking trails or take a stroll through the vast forests surrounding the town.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h1 className='text-center mb-5'>Must Visit Place In Kodaikanal</h1>
                        <div className="row">

                            <div className="col">
                                <div class="card">
                                    <img src={kimage1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Green Valley View</h5>
                                        <p class="card-text">Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={kimage2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Kodai Lake</h5>
                                        <p class="card-text">Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={kimage3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Bear Shola Falls </h5>
                                        <p class="card-text">Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular..   </p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={kimage4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Pillar Rocks</h5>
                                        <p class="card-text">Situated in the 'Princess of Hill stations', Kodaikanal, the Pillar Rocks have become a lovely picnic..</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='ooty'>
                <div className="container box my-5">
                    <div className="row">
                        <h1>04.Oody</h1>
                        <div className="row">
                            <div className="col">
                                <img src={oimage} alt="" />
                            </div>
                            <div className="col">
                                <h3>"Queen of the Nilgiris"</h3>
                                <p className='par'>Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is
a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway.</p>
                                <p className='par'>The Nilgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and Malaika Arora matching steps on top of a train? Remember the breathtaking locales as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h1 className='text-center mb-5'>Must Visit Place In Ooty</h1>
                        <div className="row">

                            <div className="col">
                                <div class="card">
                                    <img src={oimage1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Nilgiri Mountain Railway</h5>
                                        <p class="card-text"> Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill.. </p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={oimage2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Ooty Botanical Gardens</h5>
                                        <p class="card-text">Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={oimage3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Emerald Lake</h5>
                                        <p class="card-text">Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={oimage4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Dolphin's Nose</h5>
                                        <p class="card-text">Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level. The tip...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='kanyakumari'>
                <div className="container box my-5">
                    <div className="row">
                        <h1>05.Kanyakumari</h1>
                        <div className="row">
                            <div className="col">
                                <img src={kaimage} alt="" />
                            </div>
                            <div className="col">
                                <h3>"Cape Comorin or The Land's End"</h3>
                                <p className='par'>Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.</p>
                                <p className='par'>Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower. The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h1 className='text-center mb-5'>Must Visit Place In Kanyakumari</h1>
                        <div className="row">

                            <div className="col">
                                <div class="card">
                                    <img src={kaimage1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Kanyakumari Beach</h5>
                                        <p class="card-text">Located in the southernmost part of India, Kanyakumari beach with its beautiful hue- changing beaches...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={kaimage2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Vivekananda Memorial</h5>
                                        <p class="card-text">The magnificent Vivekananda Rock Memorial is located on a small island off Kanyakumari. It has the picturesque...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={kaimage3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Thiruvalluvar Status</h5>
                                        <p class="card-text">Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={kaimage4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Thirparappu Falls</h5>
                                        <p class="card-text">Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='kumbakonam'>
                <div className="container box my-5">
                    <div className="row">
                        <h1>06.Kumbakonam</h1>
                        <div className="row">
                            <div className="col">
                                <img src={kuimage} alt="" />
                            </div>
                            <div className="col">
                                <h3>"The Cambridge of India"</h3>
                                <p className='par'>Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu. The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism.</p>
                                <p className='par'>The town is also known for its grand festival called Mahamaham festival which is celebrated every twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h1 className='text-center mb-5'>Must Visit Place In Kumbakonam</h1>
                        <div className="row">

                            <div className="col">
                                <div class="card">
                                    <img src={kuimage1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Sarangapani Temple</h5>
                                        <p class="card-text">Sarangapani Temple, an ancient temple dedicated to LordVishnu, is located in the town of Kumbakonam... </p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={kuimage2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Nageswaran Temple</h5>
                                        <p class="card-text">Nageswaran Temple Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={kuimage3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Adi Kumbeshwara Temple</h5>
                                        <p class="card-text">Adi Kumbeshwara TempleLocated in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara....</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={kuimage4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Airavatesvara Temple</h5>
                                        <p class="card-text">Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered...
Read More</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='madurai'>
                <div className="container box my-5">
                    <div className="row">
                        <h1>07.Madurai</h1>
                        <div className="row">
                            <div className="col">
                                <img src={maimage} alt="" />
                            </div>
                            <div className="col">
                                <h3>"The Lotus City"</h3>
                                <p className='par'>Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus City' as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.</p>
                                <p className='par'>There are many other ancient temples in Madurai, including Thiruparankundram. It is one of the important old temples dedicated to Lord Muruga(Karthikeya) and is located on a hillock approximately 8 km from the city. Having trade ties with ancient Rome, the place holds a great cultural heritage. With bustling bazaars and fantastic street food, Madurai has heritage walks conducted throughout the day.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h1 className='text-center mb-5'>Must Visit Place In Madurai</h1>
                        <div className="row">

                            <div className="col">
                                <div class="card">
                                    <img src={maimage1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Vaigai Dam</h5>
                                        <p class="card-text">Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Then....</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={maimage2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Meghamalai</h5>
                                        <p class="card-text">Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={maimage3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Samanar Hills</h5>
                                        <p class="card-text">Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={maimage4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Thirumalai Nayakar</h5>
                                        <p class="card-text">Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='yarcaud'>
                <div className="container box my-5">
                    <div className="row">
                        <h1>08.yercaud</h1>
                        <div className="row">
                            <div className="col">
                                <img src={yimage} alt="" />
                            </div>
                            <div className="col">
                                <h3>"The Land of Seven Forests."</h3>
                                <p className='par'>Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor', this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather.</p>
                                <p className='par'>Yercaud lake is the main point of attraction of the region.One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h1 className='text-center mb-5'>Must Visit Place In Yercaud</h1>
                        <div className="row">

                            <div className="col">
                                <div class="card">
                                    <img src={yimage1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Pagoda point</h5>
                                        <p class="card-text">Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated .</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={yimage2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Botanical Garden</h5>
                                        <p class="card-text">Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={yimage3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Emerald Laket</h5>
                                        <p class="card-text">The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={yimage4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Lady's Seat</h5>
                                        <p class="card-text">Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam..</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='thenni'>
                <div className="container box my-5">
                    <div className="row">
                        <h1>09.Thenni</h1>
                        <div className="row">
                            <div className="col">
                                <img src={thimage} alt="" />
                            </div>
                            <div className="col">
                                <h3>"A little hamlet in Tamil Nadu"</h3>
                                <p className='par'>Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery.</p>
                                <p className='par'>There temples like Kamatchi Amman Temple, Vellappar Temple, and Balasubramanya Temple which are brimming with devotees from all around the country throughout the year. The vibrant local markets of Theni are shoppers' paradise. The local handloom products and agricultural products are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the crown jewels of Theni.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h1 className='text-center mb-5'>Must Visit Place In Theni</h1>
                        <div className="row">

                            <div className="col">
                                <div class="card">
                                    <img src={thimage1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Chinna Suruli Falls</h5>
                                        <p class="card-text">Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={thimage2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Kumbakkarai Falls</h5>
                                        <p class="card-text">Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that..</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={thimage3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Meghamalai</h5>
                                        <p class="card-text">Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={thimage4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Suruli Falls</h5>
                                        <p class="card-text">Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='hogenakkal'>
                <div className="container box my-5">
                    <div className="row">
                        <h1>10.Hogenakkal</h1>
                        <div className="row">
                            <div className="col">
                                <img src={himage} alt="" />
                            </div>
                            <div className="col">
                                <h3>"The one that will take your breath away"</h3>
                                <p className='par'>"The one that will take your breath away"
Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.</p>
                                <p className='par'>Sometimes referred to as the "Niagara Falls of India," it is also known for the medicinal baths. Also known at Marikottayam, Hoge actually means smoke and Kal means rock. Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink. Weekends can be crowded. Keep all these points in mind before visiting.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h1 className='text-center mb-5'>Must Visit Place In Hogenakkal</h1>
                        <div className="row">

                            <div className="col">
                                <div class="card">
                                    <img src={himage1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Theerthamalai Temple </h5>
                                        <p class="card-text">Theerthamalai is a popular pilgrim centre close to
Hogenakkal. One of its most popular destinations is the...
</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={himage2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Hogenakkal Falls</h5>
                                        <p class="card-text">Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={himage3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Pennagram Village</h5>
                                        <p class="card-text">The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every..</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="card">
                                    <img src={himage4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Mettur Dam</h5>
                                        <p class="card-text">situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Home;

export function Card(props) {
    return (
        <>

           
        </>


    )
}