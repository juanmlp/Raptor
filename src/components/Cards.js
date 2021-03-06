import React from "react";
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <>
            <div className="relative justify-center my-24">
                <div className="justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:max-w-8xl lg:px-8">
                    <div className="relative grid grid-cols justify-center gap-y-8 sm:grid-cols-1 gap-x-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6">
                        <div>
                            <CardItem
                                src='images/MVC.jpg'
                                dron='MVC Solar 1.v'
                                stars='5'
                                description='Sed posuere porta vestibulum. Etiam commodo, ante et imperdiet.'
                                price='$499'
                            />
                        </div>
                        <div>
                            <CardItem
                                src='images/MVC acc.jpg'
                                dron='MVC Pack'
                                stars='4.5'
                                description='Nullam efficitur diam vel arcu dignissim, a porta leo lacinia. Nulla mollis enim vel.'
                                price='$699'
                            />
                        </div>
                        <div>
                            <CardItem
                                src='images/MVC cam.jpg'
                                dron='MVC Camera'
                                stars='5'
                                description='Aenean semper ac lorem vel bibendum. Praesent lorem mi, suscipit id libero ac.'
                                price='$799'
                            />
                        </div>
                        <div>
                            <CardItem
                                src='images/MVC terra.jpg'
                                dron='MVC Terra'
                                stars='3'
                                description='Vestibulum lacinia eros sit amet massa sollicitudin auctor.'
                                price='$899'
                            />
                        </div>
                        <div>
                            <CardItem
                                src='images/MVC 2.jpg'
                                dron='MVC Solar 2.v'
                                stars='4.5'
                                description='Nullam a fringilla enim, vitae iaculis justo. Mauris sollicitudin feugiat mi ut scelerisque.'
                                price='$1099'
                            />
                        </div>
                        <div>
                            <CardItem
                                src='images/MVC Super.jpg'
                                dron='MVC Super'
                                stars='5'
                                description='Donec placerat elit sit amet eros tempus, quis suscipit est blandit.'
                                price='$1299'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;