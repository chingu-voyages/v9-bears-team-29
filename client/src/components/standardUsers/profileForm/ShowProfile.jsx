import React, { Component } from 'react';
import { adopterInfoFields, 
    adopterReferences, 
    adopterHouseInfo,
    currentPets,
    prevPets,
    newPetInfo 
} from './formData';

class ShowProfile extends Component {
render(){
    const data = this.props.data;


    let lineStyle = {
        paddingBottom: '10px'
    }

    let adoptInfo = []; let adoptRef = []; let houseInfo = []; let currPet = [];
    let prevPet = []; let newPet = [];

    for(let i in data){

        adopterInfoFields.map((field) => {
            const { fieldId, fieldname } = field;

            if (i === fieldId){
                adoptInfo.push(
                    <div style={lineStyle}>
                        <strong><p>{fieldname}</p></strong>
                        <h5>{data[i]}</h5>
                    </div>
                )
            }
        });

        adopterReferences.map((field) => {
            const { fieldId, fieldname } = field;

            if (i === fieldId){
                adoptRef.push(
                    <div style={lineStyle}>
                        <strong><p>{fieldname}</p></strong>
                        <h5>{data[i]}</h5>
                    </div>
                )
            }
        });

        adopterHouseInfo.map((field) => {
            const { fieldId, fieldname } = field;

            if (i === fieldId){
                houseInfo.push(
                    <div style={lineStyle}>
                         <strong><p>{fieldname}</p></strong>
                        <h5>{data[i]}</h5>
                    </div>
                )
            }
        });

        currentPets.map((field) => {
            const { fieldId, fieldname } = field;

            if (i === fieldId){
                currPet.push(
                    <div style={lineStyle}>
                         <strong><p>{fieldname}</p></strong>
                        <h5>{data[i]}</h5>
                    </div>
                )
            }
        });

        prevPets.map((field) => {
            const { fieldId, fieldname } = field;

            if (i === fieldId){
                prevPet.push(
                    <div style={lineStyle}>
                         <strong><p>{fieldname}</p></strong>
                        <h5>{data[i]}</h5>
                    </div>
                )
            }
        });

        newPetInfo.map((field) => {
            const { fieldId, fieldname } = field;

            if (i === fieldId){
                newPet.push(
                    <div style={lineStyle}>
                         <strong><p>{fieldname}</p></strong>
                        <h5>{data[i]}</h5>
                    </div>
                )
            }
        });
    }

    return ( 
        <div id="showProfile">
            <h2 style={lineStyle}>Adopter Information</h2>
                {adoptInfo}
            <h2 style={lineStyle}>Household Information</h2>
                {houseInfo}
            <h2 style={lineStyle}>Two Personal References</h2>
                {adoptRef}
            <h2 style={lineStyle}>Current Pets</h2>
                {currPet}
            <h2 style={lineStyle}>Previous Pets</h2>
                {prevPet}
            <h2 style={lineStyle}>New Pet Information</h2>
                {newPet}

        </div>
    )
};
};

export default ShowProfile;
