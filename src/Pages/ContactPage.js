//import React from 'react';
//import styled from 'styled-components';
//import {MainLayout, InnerLayout} from '../styles/Layouts';
//import Title from '../Components/Title';
//import PhoneIcon from '@material-ui/icons/Phone';
//import EmailIcon from '@material-ui/icons/Email';
//import LocationOnIcon from '@material-ui/icons/LocationOn';
//import ContactItem from '../Components/ContactItem';
//import PrimaryButton from '../Components/PrimaryButton';
//
//const ContactPage=()=> {
//    const phone = <PhoneIcon />
//    const email = <EmailIcon />
//    const location = <LocationOnIcon />
//    return (
//        <MainLayout>
//            <Title title={'Contact'} span={'Contact'} />
//            <ContactPageStyled >
//            <InnerLayout className={'contact-section'}>
//                <div className="left-content">
//                    <div className="map-sect" >
//                        {/*<iframe src="https://www.google.com/maps/d/u/3/embed?mid=1zAtQtpmlNiMt87lePW1MG1nE_BoD4qI3" width="700" height="500"style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>*/}
//                        <iframe src="https://www.google.com/maps/d/u/3/embed?mid=12K1fT7DQgAgdppMgyvha5beqzmxQe5by" width="700" height="600"style={{border:1}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
//                    </div>
//
//
//                </div>
//                <div className="right-content">
//                    <ContactItem title={'Phone'} icon={phone} cont1={'+880-1516159311'} cont2={'+880-1762178895'} />
//                    <ContactItem title={'Email'} icon={email} cont2={'sultanparvez77.sp@gmail.com'} cont1={'sultanparvez097@gmail.com'} cont3={"sultan.parvez@dsinnovators.com"}  />
//                    <ContactItem title={'Address'} icon={location} cont1={'Post office Road, Middle Badda , Dhaka'} cont2={'Bangladesh'} />
//
//                </div>
//            </InnerLayout>
//            </ContactPageStyled>
//        </MainLayout>
//    )
//}
//
//const ContactPageStyled = styled.section`
//    .contact-section{
//        display: grid;
//        grid-template-columns: repeat(2, 1fr);
//        grid-column-gap: 2rem;
//        @media screen and (max-width: 978px){
//            grid-template-columns: repeat(1, 1fr);
//            .f-button{
//                margin-bottom: 3rem;
//            }
//        }
//        .right-content{
//            display: grid;
//            grid-template-columns: repeat(1, 1fr);
//            @media screen and (max-width: 502px){
//                width: 100%;
//            }
//        }
//        .contact-title{
//            h4{
//                color: var(--white-color);
//                padding: 1rem 0;
//                font-size: 1.8rem;
//            }
//        }
//
//    }
//`;
//
//export default ContactPage
import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    <form  className="form">
                        <div className="form-field">
                            <label htmlFor="name"  >Enter your name*</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Enter your email*</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Enter your subject</label>
                            <input type="text" id="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field f-button">
                            <PrimaryButton title={'Send Email'} />
                        </div>
                    </form>
                </div>
                <div className="right-content">
                  <ContactItem title={'Phone'} icon={phone} cont1={'+880-1516159311'} cont2={'+880-1762178895'} />
                  <ContactItem title={'Email'} icon={email} cont2={'sultanparvez77.sp@gmail.com'} cont1={'sultanparvez097@gmail.com'} cont3={"sultan.parvez@dsinnovators.com"}  />
                  <ContactItem title={'Address'} icon={location} cont1={'Dhaka, Bangladesh'}  />

                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }


        }
    }
`;

export default ContactPage
