import React from 'react';
import './food.css';
import image1 from './assets/food/Food1.jpeg';
import image2 from './assets/food/Food2.jpg';
import image3 from './assets/food/Food3.jpeg';
import image4 from './assets/food/Food4.jpg';
import foodcontent from './Foodcontent';

function Food() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row mt-5">
                    <h4 className='mb-3'>Famous & Local Food of Tamil Nadu</h4>
                    <div className="col">
                        <p className='indent mt-4'>The food of Tamil Nadu is rich in both vegetarian and non-vegetarian food. The diet mainly consists of rice, lentils, legumes with spices such as curry leaves, cinnamon, cloves, ginger, garlic etc. Coconut is widely used in various forms. People of Tamil Nadu believe that serving food to another living being, be it humans or animals, is a service to God himself. Therefore, they are incredibly generous when it comes to food, whether it is in their homes or temples or even restaurants. Traditionally, this south Indian cuisine is served on a banana leaf, and people sit on the floor to eat. A typical meal consists of Rice, Sambhar(Curry), two types of vegetables, curd and a pickle. Dosas, idlis, Upma, Parota, Sambhar, Rasam, Pongal, are the dishes with which the cuisine of Tamil Nadu is identified. Payasam, Kesari, Sweet Pongal are the sweet treasures of this cuisine. Filter coffee is a speciality of the south-Indian cuisine. The making of filter coffee is like a ritual; the coffee beans are first roasted and then powdered. They then use a filter set, few scoops of powdered coffee and enough amount of boiling water is added to prepare a very dark liquid called the decoction. A 3/4 mug of hot milk with sugar and a small quantity of decoction is then served in Dabarah, a unique Coffee cupHome Places To Visit Best Time To Visit Packages Destination Food</p>

                    </div>
                    <div className="col">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                    </div>
                </div>

            </div>
            <h4 className='text-center hed mt-5'>TAMILNADU</h4>
            <h4 className='text-center bhed mb-5'>FAMOUS AND LOCAL FOOD</h4>

            {
                foodcontent.map((result, index) => (
                    <div className="container mb-5" key={index}>
                        <div className="row ">
                            <div className="col outerbox">
                                <div className='box'>
                                    <h3 className='text-center'>{result.heading1}</h3>
                                    <p className='indent'>{result.content1}</p>
                                </div>
                            </div>
                            <div className="col outerbox">
                                <div className='box'>
                                    <h3 className='text-center'>{result.heading2}</h3>
                                    <p className='indent'>{result.content2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )) // Add parentheses to wrap the map function
            }
        </>
    )
}

export default Food;
