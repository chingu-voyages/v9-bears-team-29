import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../../actions/userActions';
import Form from './Form' ;

function mapStateToProps(state) {
    const { user } = state.authentication;
    return { user }
}

class EditProfileConnect extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(userActions.getProfile(user.response._id));
    }

    render() {
        const { user } = this.props;

        return (
            <Form 
                adopterName={user.response.profile.adopterName}   
                adopterAdults={user.response.profile.adopterAdults}   
                adopterRel={user.response.profile.adopterRel}   
                adopterAdd={user.response.profile.adopterAdd}   
                adopterCity={user.response.profile.adopterCity}   
                adopterState={user.response.profile.adopterState}   
                adopterZip={user.response.profile.adopterZip}   
                adopterPhone={user.response.profile.adopterPhone}   
                adopterEmail={user.response.profile.adopterEmail}   
                adopterJob={user.response.profile.adopterJob}   
                adopterKids={user.response.profile.adopterKids}   
                adopterAdultNum={user.response.profile.adopterAdultNum}   
                adopterKidInfo={user.response.profile.adopterKidInfo}   
                refName1={user.response.profile.refName1}   
                refRel1={user.response.profile.refRel1}   
                refPhone1={user.response.profile.refPhone1}   
                refName2={user.response.profile.refName2}   
                refRel2={user.response.profile.refRel2}   
                refPhone2={user.response.profile.refPhone2}   
                houseType={user.response.profile.houseType}   
                houseTypeOther={user.response.profile.houseTypeOther}   
                houseRentType={user.response.profile.houseRentType}   
                fence={user.response.profile.fence}   
                fenceHeight={user.response.profile.fenceHeight}   
                pool={user.response.profile.pool}   
                poolFence={user.response.profile.poolFence}   
                landlordPerm={user.response.profile.landlordPerm}   
                landlordName={user.response.profile.landlordName}   
                landlordPhone={user.response.profile.landlordPhone}   
                petsNum={user.response.profile.petsNum}   
                pet1={user.response.profile.pet1}   
                petType1={user.response.profile.petType1}   
                petAge1={user.response.profile.petAge1}   
                petSex1={user.response.profile.petSex1}   
                petSpayed1={user.response.profile.petSpayed1}   
                petFrom1={user.response.profile.petFrom1}   
                petTime1={user.response.profile.petTime1}   
                pet2={user.response.profile.pet2}   
                petType2={user.response.profile.petType2}   
                petAge2={user.response.profile.petAge2}   
                petSex2={user.response.profile.petSex2}   
                petSpayed2={user.response.profile.petSpayed2}   
                petFrom2={user.response.profile.petFrom2}   
                petTime2={user.response.profile.petTime2}   
                pet3={user.response.profile.pet3}   
                petType3={user.response.profile.petType3}   
                petAge3={user.response.profile.petAge3}   
                petSex3={user.response.profile.petSex3}   
                petSpayed3={user.response.profile.petSpayed3}   
                petFrom3={user.response.profile.petFrom3}   
                petTime3={user.response.profile.petTime3}   
                prevpetsNum={user.response.profile.prevpetsNum}   
                prevpet1={user.response.profile.prevpet1}   
                prevpetType1={user.response.profile.prevpetType1}   
                prevpetAge1={user.response.profile.prevpetAge1}   
                prevpetSex1={user.response.profile.prevpetSex1}   
                prevpetSpayed1={user.response.profile.prevpetSpayed1}   
                prevpetFrom1={user.response.profile.prevpetFrom1}   
                prevpetTime1={user.response.profile.prevpetTime1}   
                prevpetEnd1={user.response.profile.prevpetEnd1}   
                prevpet2={user.response.profile.prevpet2}   
                prevpetType2={user.response.profile.prevpetType2}   
                prevpetAge2={user.response.profile.prevpetAge2}   
                prevpetSex2={user.response.profile.prevpetSex2}   
                prevpetSpayed2={user.response.profile.prevpetSpayed2}   
                prevpetFrom2={user.response.profile.prevpetFrom2}   
                prevpetTime2={user.response.profile.prevpetTime2}   
                prevpetEnd2={user.response.profile.prevpetEnd2}   
                prevpet3={user.response.profile.prevpet3}   
                prevpetType3={user.response.profile.prevpetType3}   
                prevpetAge3={user.response.profile.prevpetAge3}   
                prevpetSex3={user.response.profile.prevpetSex3}   
                prevpetSpayed3={user.response.profile.prevpetSpayed3}   
                prevpetFrom3={user.response.profile.prevpetFrom3}   
                prevpetTime3={user.response.profile.prevpetTime3}   
                prevpetEnd3={user.response.profile.prevpetEnd3}   
                petCare={user.response.profile.petCare}   
                petWhy={user.response.profile.petWhy}   
                petSleep={user.response.profile.petSleep}   
                outdoorInfo={user.response.profile.outdoorInfo}   
                petStay={user.response.profile.petStay}   
                petStayOther={user.response.profile.petStayOther}   
                offlimits={user.response.profile.offlimits}   
                space={user.response.profile.space}   
                spaceOther={user.response.profile.spaceOther}   
                travel={user.response.profile.travel}   
                keep={user.response.profile.keep}   
                keepOther={user.response.profile.keepOther}   
                financial={user.response.profile.financial}   
                keepOption={user.response.profile.keepOption}   
                other={user.response.profile.other} 
            />
        );
    }
}

const EditProfile = connect(mapStateToProps)(EditProfileConnect);

export default EditProfile; 

   