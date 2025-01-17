import React, { useState } from 'react'

interface IStepSixProps {
    email: string
    password: string
    rePassword: string
    membershipType: string
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
    setRePassword: (value: string) => void;
    setMembershipType: (value: string) => void;
    handlePrevious: () => void;
    registerHandle: () => void;
}

function Step6(props: IStepSixProps) {

    const { email, password, rePassword, membershipType,setEmail, setPassword, setRePassword, handlePrevious, registerHandle, setMembershipType } = props;

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleRePasswordVisibility = () => {
        setShowRePassword(!showRePassword);
    }

    return (
        <>
            <div className="logo-box"><a href="#" className="logo-text">Üyelik Bilgileriniz</a></div>
            <div className="form-group">
                <input type="email" className="form-control" value={email} onChange={evt => { setEmail(evt.target.value) }} placeholder="Şirket Email Adresi" style={{ fontSize: '18px' }} />
            </div>
            <div className="form-group">
                <input type={showPassword ? 'text' : 'password'}  className="form-control" value={password} onChange={evt => { setPassword(evt.target.value) }} placeholder="Şifreniz" style={{ fontSize: '18px' }} />
                <button type="button" onClick={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    right: '45px',
                    top: '50%',
                    transform: 'translateY(-125%)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                    {showPassword ? (
                    <i className="material-icons">visibility</i> 
                  ) : (
                    <i className="material-icons">visibility_off</i> 
                  )}
                </button>
            </div>
            <div className="form-group">
                <input type={showRePassword ? 'text' : 'password'}  className="form-control" value={rePassword} onChange={evt => { setRePassword(evt.target.value) }} placeholder="Şifre Yeniden" style={{ fontSize: '18px' }} />
                <button type="button" onClick={toggleRePasswordVisibility}
                  style={{
                    position: 'absolute',
                    right: '45px',
                    top: '50%',
                    transform: 'translateY(125%)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                    {showRePassword ? (
                    <i className="material-icons">visibility</i> 
                  ) : (
                    <i className="material-icons">visibility_off</i> 
                  )}
                </button>
            </div>
            <select className="form-select mb-3 p-3" value={membershipType} onChange={evt => {setMembershipType(evt.target.value) }} style={{ height: '60px', borderRadius: '30px', fontSize: '17px', color: 'gray', fontWeight: 'bold' }} aria-label="Default select example">
                <option selected>Ne Kadar Süre Üye Olmak İstiyorsunuz?</option>
                <option value="ONE_MONTH">1 Ay</option>
                <option value="THREE_MONTHS">3 Ay</option>
                <option value="SIX_MONTHS">6 Ay</option>
                <option value="TWELVE_MONTHS">12 Ay</option>
            </select>
            <div className="row">
                <div className="col-6 text-center">
                    <button className="btn btn-secondary btn-block btn-submit" style={{ fontSize: '17px' }} onClick={handlePrevious}>Geri</button>

                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-primary btn-block btn-submit " style={{ width: '300px', fontSize: '17px' }} onClick={registerHandle} >Kaydet</button>
                </div>
            </div>
        </>
    )
}

export default Step6