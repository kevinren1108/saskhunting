import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faLock, faKey } from '@fortawesome/fontawesome-free-solid'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMobile, faSms, faDesktop} from '@fortawesome/free-solid-svg-icons'
import QRCode from 'react-qr-code'

function Account() {

    const [pwLoginView, setPwLoginView] = useState(true);
    const [smsLoginView, setSmsLoginView] = useState(false)
    const [qrLoginView, setQrLoginView] = useState(false)

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [verf, setVerf] = useState("")
    const [loginFail, setLoginFail] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")
    

    //qrToken should fetch from backend, backend TBD
    const qrToken = "99885e8a13d2b4d79c71ba3008ce1515"


    function handlePwLoginClick(){
        setPwLoginView(true) 
        setSmsLoginView(false)
        setQrLoginView(false)
        setAlertMsg("")
    }

    function handleSmsLoginClick(){
        setPwLoginView(false)
        setSmsLoginView(true)
        setQrLoginView(false)
        setAlertMsg("")
    }

    function handleQrLoginClick(){
        setPwLoginView(true)
        setSmsLoginView(false)
        setQrLoginView(!qrLoginView)
        setAlertMsg("")
    }

    function verifyInput(){
        if(pwLoginView){
            if(!userName || !password || loginFail){
                setAlertMsg("Incorrect Username or Password")
            }else{
                setAlertMsg("")
            }
        }
        if(smsLoginView){
            if(!phone || !verf || loginFail){
                setAlertMsg("Incorrect Phone or Verification Code")
            }else{
                setAlertMsg("")
            }
        }
    }

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header_logo}>
                    <Link to="/">Saskatchewan Hunting</Link>
                </div>
            </div>
            <div style={{ background: "linear-gradient(#0d69c1, 83%, #917922)" }}>
                <a  
                    href={() => false}
                    className={styles.accountBak}>
                    <div className={styles.loginbox}>
                        <div className={styles.loading}>
                            <div className={styles.width_vertical}>
                                <div className={styles.corner_icon_view}>
                                    {qrLoginView?
                                        <FontAwesomeIcon 
                                            icon={faDesktop}
                                            className={styles.iconfont}
                                            onClick={handleQrLoginClick}
                                        /> : 
                                        <FontAwesomeIcon
                                            icon={faQrcode}
                                            className={styles.iconfont}
                                            onClick={handleQrLoginClick}
                                        />}
                                    {qrLoginView? 
                                        //qr code login title
                                        <div className={styles.login_title_wrapper}>
                                            <div className={styles.master_login_title}> 
                                                Login Quick and Safe
                                            </div> 
                                        </div>
                                         
                                        :
                                        //qr code login tool tip
                                        <div className={styles.login_tip}>
                                            <div className={styles.poptip}>
                                                <div className={styles.poptip_arrow}>
                                                    <em></em>

                                                </div>
                                                <div className={styles.poptip_content}>
                                                    Login with QR code
                                                </div>
                                            </div>

                                        </div>
                                    }
                                    
                                </div>
                                {qrLoginView?
                                // qr code login view
                                <div className={styles.qr_login_content}>
                                    <div className={styles.qrcode_login}>
                                        <div className={styles.qrcode_img}>
                                            <QRCode
                                                size={256}
                                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                value={qrToken}
                                                viewBox={`0 0 256 256`}
                                            />
                                        </div>
                                        <div className={styles.qrcode_desc}>
                                            <FontAwesomeIcon 
                                                className={styles.qrcode_desc_icon}
                                                icon={faKey} 
                                            />
                                            <p className={styles.qrcode_desc_text}>
                                                Scan with Sask Hunting Mobile APP
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                :    
                                // password or sms login view
                                    <div className={styles.login_content}>
                                        <div className={styles.login_switch_tab}>
                                            <div
                                                className={pwLoginView?styles.password_login_tab_item:styles.sms_login_tab_item}
                                                onClick={handlePwLoginClick}
                                                >
                                                Via Password
                                            </div>
                                            <div
                                                className={pwLoginView?styles.sms_login_tab_item:styles.password_login_tab_item}
                                                onClick={handleSmsLoginClick}
                                                >
                                                Via SMS
                                            </div>
                                        </div>
                                        
                                        {alertMsg===""? null:
                                            <div className={styles.login_error} >
                                                {alertMsg}
                                            </div>
                                            
                                        
                                        }
                                        

                                        <div className={styles.login_form}>

                                            {pwLoginView? 
                                            <div>
                                                <div className={styles.fm_field}>
                                                    <div className={styles.fm_label_icon}>
                                                        <FontAwesomeIcon icon={faUser} />
                                                    </div>
                                                    
                                                    <input className={styles.fm_text}
                                                        tabIndex={1}
                                                        aria-label='Username/Email/Phone'
                                                        placeholder='Username/Email/Phone'
                                                        onChange={e => setUserName(e.target.value)}
                                                    ></input>

                                                </div>

                                                <div className={styles.fm_field}>
                                                    <div className={styles.fm_label_icon}>
                                                        <FontAwesomeIcon icon={faLock} />
                                                    </div>
                                                    <input className={styles.fm_text}
                                                        tabIndex={2}
                                                        aria-label='Please Enter Password'
                                                        placeholder='Please Enter Password'
                                                        type={'password'}
                                                        onChange={e => setPassword(e.target.value)}
                                                    ></input>

                                                </div>
                                            </div>:<></>}

                                            {smsLoginView? 
                                            <div>
                                                <div className={styles.fm_field}>
                                                    <div className={styles.fm_label_icon}>
                                                        <FontAwesomeIcon icon={faMobile} />
                                                    </div>
                                                    {/* area code */}
                                                    <div className={styles.phone_code_wrapper} >
                                                        <div className={styles.phone_code}>
                                                            +1
                                                        
                                                        </div>
                                                    </div>
                                                    
                                                    <input className={styles.fm_field_mobile}
                                                        tabIndex={1}
                                                        aria-label='Please Enter Phone Number'
                                                        placeholder='Please Enter Phone Number'
                                                        onChange={e => setPhone(e.target.value)}
                                                    ></input>

                                                </div>

                                                <div className={styles.fm_field}>
                                                    <div className={styles.fm_label_icon}>
                                                        <FontAwesomeIcon icon={faSms} />
                                                    </div>
                                                    <input className={styles.fm_text}
                                                        tabIndex={2}
                                                        aria-label='Verification Code'
                                                        placeholder='Verification Code'
                                                        onChange={e => setVerf(e.target.value)}
                                                    ></input>
                                                    <div className={styles.send_btn}>
                                                        <a 
                                                            href={() => false}
                                                            className='send_btn_link'>
                                                            Get Code
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>:<></>}
                                            

                                            <div className={styles.fm_btn} >
                                                <button type="submit"
                                                    tabIndex={3}
                                                    className={styles.fm_submit}
                                                    onClick={verifyInput}    
                                                >
                                                        Sign In
                                                </button>
                                            </div>

                                            
                                            

                                        </div>

                                    </div>
                                }
                                
                                <div className={styles.login_links}>
                                    <a href={() => false}
                                        className={styles.forgot_pwd}>Forgot Password
                                    </a>
                                    <a href={() => false}
                                        className={styles.forgot_pwd}>Sign Up
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>
            </div>



        </div>
    )
}



export default Account