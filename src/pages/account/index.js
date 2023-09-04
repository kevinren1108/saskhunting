import React from 'react'
import styles from '../../styles/Home.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faLock } from '@fortawesome/fontawesome-free-solid'
import { faUser } from '@fortawesome/free-regular-svg-icons'

function Account() {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header_logo}>
                    <Link to="/">Saskatchewan Hunting</Link>
                </div>
            </div>
            <div style={{ background: "linear-gradient(#0d69c1, 83%, #917922)" }}>
                <a
                    className={styles.accountBak}>
                    <div className={styles.loginbox}>
                        <div className={styles.loading}>
                            <div className={styles.width_vertical}>
                                <div className={styles.corner_icon_view}>
                                    <FontAwesomeIcon icon={faQrcode} className={styles.iconfont} />
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
                                </div>
                                <div className={styles.login_content}>
                                    <div className={styles.login_switch_tab}>
                                        <div
                                            className={styles.password_login_tab_item}>
                                            Via Password
                                        </div>
                                        <div
                                            className={styles.sms_login_tab_item}>
                                            Via SMS
                                        </div>
                                    </div>

                                    <div className={styles.login_form}>
                                        <div className={styles.fm_field}>
                                            <div className={styles.fm_label_icon}>
                                                <FontAwesomeIcon icon={faUser} />
                                            </div>
                                            <input className={styles.fm_text}
                                                tabIndex={1}
                                                aria-label='Username/Email/Phone'
                                                placeholder='Username/Email/Phone'
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
                                            ></input>

                                        </div>

                                        <div className={styles.fm_btn} >
                                            <button type="submit"
                                                tabIndex={3}
                                                className={styles.fm_submit}>
                                                    Sign In
                                            </button>
                                        </div>

                                        <div className={styles.login_links}>
                                            <a className={styles.forgot_pwd}>Forgot Password</a>
                                            <a className={styles.forgot_pwd}>Sign Up</a>
                                        </div>

                                        

                                    </div>

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