import React from 'react'
import Footer from '../Components/Footer'
import HeaderBack from '../Components/HeaderBack'
import { ProfileDetails, Wrapper, ProfilePhoto, ProfileIcons, Details } from './Profile.styled'
import {IoBagHandleSharp} from 'react-icons/io5'
import {ImTicket, ImStarFull} from 'react-icons/im'


export default function Profile({
    src="https://picsum.photos/seed/asdf5/300",
    orderCount = 0,
    voucherCount = 0,
    reviewCount = 0,
    accountName = "Firstname Lastname",
    accountEmail = "email@email.com",
    accountDetails = 
        {accountName : 'Fullname',
        accountEmail : 'email@email.com',
        accountLocation : 'Location',
        accountZip : 'Zip',
        accountPhone : '09561234565'}
    
    
}) {
    return (
        <Wrapper>
            <HeaderBack title="Profile" />
            <ProfilePhoto>
                <img src={src} alt="" />
                <h3>{accountName}</h3>
                <p>{accountEmail}</p>
            </ProfilePhoto>
            <ProfileIcons>
                <div>
                    <IoBagHandleSharp size={25} color="tomato" style={{
                        backgroundColor:"rgba(255, 99, 71, 0.411)"
                    }} />
                    <p>Orders</p>
                    <h4>{orderCount}</h4>
                </div>
                <div>
                    <ImTicket size={25} color='royalblue' style={{
                        backgroundColor:"rgba(65, 105, 225, 0.164)"
                    }} />
                    <p>Voucher</p>
                    <h4>{voucherCount}</h4>
                </div>
                <div>
                    <ImStarFull size={25} color='orange' style={{
                        backgroundColor:"rgba(255, 68, 0, 0.096)"
                    }}/>
                    <p>Reviews</p>
                    <h4>{reviewCount}</h4>
                </div>
            </ProfileIcons>
            <ProfileDetails>
                <h3>Personal Information</h3>
                <Details>
                    <div>
                        <label>Name</label>
                        <p>{accountDetails.accountName}</p>
                    </div>
                    <div>
                        <label>Email</label>
                        <p>{accountDetails.accountEmail}</p>
                    </div>
                    <div>
                        <label>Location</label>
                        <p>{accountDetails.accountLocation}</p>
                    </div>
                    <div>
                        <label>Zip Code</label>
                        <p>{accountDetails.accountZip}</p>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <p>{accountDetails.accountPhone}</p>
                    </div>
                </Details>
            </ProfileDetails>
            <Footer />
        </Wrapper>
    )
}

