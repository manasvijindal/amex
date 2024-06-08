

export default function Footer(){



    return (
        <div>
            <div className="row d-flex justify-content-center">
            <div className="col-lg-2 col-md-2 col-sm-12  pt-5 d-flex justify-content-center align-items-center ">
                <a href="https://github.com/daniel-lobster" target="_blank" className="">
                    <img src="./images/lobster.png" className=" float-lg-end " style={{borderRadius: "50%", width :"5em"}}/>
                </a>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-12  pt-5 ">
                <p className="fs-5 text-light mt-lg-0 mt-5">
                    Designed by Daniel Pulido-Mendez
                </p>
                <p className="text-light ">
                I help companies improve their on-line interactions with customers. My objective is to build intuitive and efficient software that helps businesses grow.
                </p>
                <div>
                    <a href="https://github.com/daniel-lobster/stock_montecarlo" target="_blank" className="mt-5"  style={{ color: '#3cfefe'}}>GitHub<span><i className="fa fa-angle-right" aria-hidden="true"></i></span></a>
                    <a href="https://www.youtube.com/watch?v=5wiC_8Lq3u8" target="_blank" className="mt-5"  style={{ color: '#3cfefe', marginLeft:"1em"}}>YouTube<span><i className="fa fa-angle-right" aria-hidden="true"></i></span></a>
                </div>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div style={{width:"1162px"}}>
                <br/>
                <hr style={{color:'white', height:'2px', opacity:'1'}}/>
                <p> Copyright © 2023  Daniel Pulido-Mendez</p>

                <p>This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, version 3 of the License.</p>

                <p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.</p>

                <p>For GNU General Public License see https://www.gnu.org/licenses/gpl-3.0.en.html</p>
            </div>
        </div>
    </div>
    )
}