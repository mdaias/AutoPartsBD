import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img alt='' src="https://i.ibb.co/n7YWt4p/banner-1.png" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='' src="https://i.ibb.co/dbkf89k/banner222.png" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='' src="https://i.ibb.co/r26XwDP/banner22-1.png" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='' src="https://i.ibb.co/dbkf89k/banner222.png" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;