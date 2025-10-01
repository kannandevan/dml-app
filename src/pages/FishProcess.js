import React from 'react';

// Import images for this page
import frozenOctopusImage from '../images/frozen-octopus.png';
import frozenLobsterImage from '../images/frrozen_lobster_tail.png';
import prawnsImage from '../images/prawns.jpg';
import frozenFishImage from '../images/frozen-fish.png';

const FishProcess = () => {
    return (
        <>
            <div className="bg-fish py-5">
                <div className="container py-5">
                    <div className="section-trans-bg1">
                        <h1>Diamante Mariscos Lda</h1>
                        <h4>Seafood Processing Plant Since 2010</h4>
                        <h3>EU APPROVAL No. 757.1</h3>
                        <hr />
                        <p className="text-justify py-2">
                            At <b>Diamante Mariscos Lda</b>, our fish processing operations are at the core
                            of delivering the finest quality seafood from the pristine waters of Angoche Bay.
                            Strategically located near this rich marine habitat, our processing facility ensures
                            that the seafood we procure from local fishermen is handled with the utmost care,
                            maintaining its natural freshness and flavor.
                        </p>
                        <hr />
                    </div>
                    <div className="row pt-5">
                        <div className="col-sm-12">
                            <p className="text-justify py-2">
                                We specialize in processing a wide variety of seafood, including <b>octopus, prawns, lobster, crabs</b>,
                                and various other fish species. Our procurement process begins with working closely with traditional
                                fishermen from the local community. These fishermen use time-honored, sustainable fishing techniques,
                                ensuring that we support not only the local economy but also the preservation of the marine ecosystem.
                            </p>
                        </div>
                        <div className="col-sm-12">
                            <p className="text-justify py-2">
                                Our processing plant is equipped with modern technology and stringent quality control systems,
                                adhering to international standards. From cleaning, sorting, and grading to freezing and packaging,
                                every step is meticulously managed to guarantee that our seafood retains its optimal quality.
                                The processing team, made up of over<b> 100 skilled local workers</b>, plays an essential role in
                                ensuring that each product meets the high standards our customers expect.
                            </p>
                        </div>
                        <div className="col-sm-12">
                            <p className="text-justify py-2">
                                At Diamante Mariscos, we take pride in maintaining a balance between traditional fishing practices
                                and modern processing methods, ensuring that our seafood is not only delicious but also responsibly
                                sourced and handled. Our commitment to the local community and sustainable fishing practices is reflected
                                in every product we process and deliver.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fish-products">
                {/* Octopus Section */}
                <div className="octopus section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <h1 className="text-justify octopus-color"><strong>Frozen Octopus </strong><br /><small>Octopus spp</small></h1>
                                <p className="text-justify octopus-bg text-white p-1">ORIGIN : <strong>MOZAMBIQUE</strong></p>
                                <p className="text-justify">Individually Quick Frozen with 3% Protective Glaze,<br /> Wrapped in Polythene and Packed in Master Cartons of 15Kg.</p>
                                <p className="text-justify"><b>Bacteriological Standards:</b> We follow National and EU Standards</p>
                                <hr />
                                <h3>Grade</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <table className="table-bordered table-hover table text-center">
                                            <tbody>
                                                <tr><td>TB</td><td>0-300</td></tr>
                                                <tr><td>TA</td><td>300-500</td></tr>
                                                <tr><td>T7</td><td>500-800</td></tr>
                                                <tr><td>T6</td><td>800-1200</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-6">
                                        <table className="table-bordered table-hover table text-center">
                                            <tbody>
                                                <tr><td>T5</td><td>1200-1500</td></tr>
                                                <tr><td>T4</td><td>1500-2000</td></tr>
                                                <tr><td>T3</td><td>2000-3000</td></tr>
                                                <tr><td>T2</td><td>3000-4500</td></tr>
                                                <tr><td>T1</td><td>4500 UP</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 justify-content-center align-items-center d-flex">
                                <img className="fishprocess-pic" src={frozenOctopusImage} alt="Frozen Octopus" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lobster Section */}
                <div className="lobster section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 justify-content-center align-items-center d-flex ">
                                <img className="fishprocess-pic" src={frozenLobsterImage} alt="Frozen Lobster Tail" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <h1 className="lobster-color"><strong>Frozen Lobster Tail </strong> <br /><small>Panulirus spp</small></h1>
                                <p className="text-justify lobster-bg text-white p-1">ORIGIN : <strong>MOZAMBIQUE</strong></p>
                                <p className="text-justify">Individually Quick Frozen with Polythene Wrap and Packed in Master Cartons or EPS Boxes</p>
                                <p className="text-justify"><b>Bacteriological Standards:</b> We follow National and EU Standards</p>
                                <hr />
                                <h3>16 KG PACKING</h3>
                                <hr />
                                <h3>Grade Weight</h3>
                                <table className="table-bordered table-hover table text-center">
                                    <tbody>
                                        <tr><td>2/4 OZ</td><td> 56-113 gms</td></tr>
                                        <tr><td>4/6 OZ</td><td> 113-170 gms</td></tr>
                                        <tr><td>6/8 OZ</td><td> 170-226 gms</td></tr>
                                        <tr><td>8/10 OZ</td><td> 226-283 gms</td></tr>
                                        <tr><td>10/12 OZ</td><td> 283-340 gms</td></tr>
                                        <tr><td>12/14 OZ</td><td> 340-396 gms</td></tr>
                                        <tr><td>14 UP OZ</td><td> &gt; 396 gms</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prawns Section */}
                <div className="prawns section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <h1 className="text-justify prawns-color"><strong>Frozen Prawns </strong> <br /><small>Penaeus spp</small></h1>
                                <p className="text-justify prawns-bg text-white p-1">ORIGIN : <strong>MOZAMBIQUE</strong></p>
                                <p className="text-justify">Bacteriological Standards: We follow National and EU Standards</p>
                                <hr />
                                <p className="text-justify">Frozen and packed in 2 Kg duplex cartons. The Master Carton has 6 duplex.</p>
                                <h3>Grades</h3>
                                <table className="table-bordered table text-center">
                                    <tbody>
                                        <tr>
                                            <td>U/5</td>
                                            <td>6/10</td>
                                            <td>11/20</td>
                                            <td>21/30</td>
                                            <td>31/40</td>
                                            <td>41/50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6 col-sm-12 justify-content-center align-items-center d-flex">
                                <img className="fishprocess-pic" src={prawnsImage} alt="Frozen Prawns" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Fishes Section */}
                <div className="fishes section">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6 col-sm-12 justify-content-center align-items-center d-flex">
                                <img className="fishprocess-pic" src={frozenFishImage} alt="Frozen Fish" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <h1 className="text-justify fishes-color"><strong>Frozen Fishes </strong> <br /><small>Different Species</small></h1>
                                <p className="text-justify fishes-bg text-white p-1">ORIGIN : <strong>MOZAMBIQUE</strong></p>
                                <p className="text-justify">Frozen whole gutted and non gutted fishes are available on demand. Fish fillets are also available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FishProcess;