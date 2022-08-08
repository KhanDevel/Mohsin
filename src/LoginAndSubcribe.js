import './LoginAndSubcribe.css'

function LoginAndSubcrie (){

    return (
        <div className='LoginAndSubcribeWraper' >

            <div className='LoginAndSubcribe'>
                <div>
                    <h1>Stay Up <b>To date</b></h1>
                    <p>Subscribe now recive and leatest flight news</p>
                </div>
                <div>
                        <input type="text" placeholder='Name' className='inputName' ></input>
                        <input type="text"  placeholder='password' className='inputPassword' ></input>
                        <button className='LoginAndSubBtn' >SUBSCRIBE</button>
                </div>

                
            </div>
                <div className='divider' ></div>
                <div>
                    <div className='DonloadApp' >
                        <div>
                            <h1>Download App</h1>
                            <h1><b>Our Mobile app</b></h1>
                        </div>
                        <div className='line'></div>
                        <div>
                            <div className='playstoreWraper' >
                                <div className='playStore' >
                                    <div className='playIcon' >
                                      <i class="fa-solid fa-play"></i>
                                    </div>
                                    <div>
                                        <p>Get it</p>
                                        <h2>Google Play</h2>
                                    </div>
                                </div>
                                <div className='playStore' >
                                    <div className='playIcon' >

                                     <i class="fa-brands fa-apple"></i>
                                    </div>
                                    <div>
                                        <p>Get it</p>
                                        <h2>Google Play</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='GetDownload' >
                                <h1>Get Download link on your Store</h1>
                            </div>
                            <div>
                                <input className='inputName' placeholder='Enter your Moile Number' /><button className='LoginAndSubBtn' >SNED lINK YOUR MOBILE</button>
                            </div>
                        </div>
                        <div className='line'></div>

                            <div>

                                <div className='qrCodeWrapper' >
                                    <div className='qrcode' ><i class="fa-solid fa-qrcode"></i></div>
                                    <p>Scan the Qr code for the Download</p>
                                    <p>the Akber trevel download app</p>
                                </div>
                                
                            </div>

                    </div>
                </div>
        </div>
    )
}

export default LoginAndSubcrie