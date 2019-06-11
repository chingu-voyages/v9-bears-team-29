import React, { PureComponent } from 'react';
import { adopterInfoFields, 
    adopterHouseInfo, 
    adopterReferences, 
    currentPets, 
    prevPets, 
    newPetInfo 
} from './formData';
import { connect } from 'react-redux';
import InputText from './FormText';
import InputSelect from './FormSelect';
import { MDBBtn } from 'mdbreact';
import { userActions } from '../../../actions/userActions';

function mapStateToProps(state) {
    const { user } = state.authentication;
    return { user };
}

class ConnectedForm extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            formData: {
                adopterName: this.props.adopterName || ' ',
                adopterAdults: this.props.adopterAdults || ' ',
                adopterRel: this.props.adopterRel || ' ',
                adopterAdd: this.props.adopterAdd || ' ',
                adopterCity: this.props.adopterCity || ' ',
                adopterState: this.props.adopterState || ' ',
                adopterZip: this.props.adopterZip || ' ',
                adopterPhone: this.props.adopterPhone || ' ',
                adopterEmail: this.props.adopterEmail || ' ',
                adopterJob: this.props.adopterJob || ' ',
                adopterKids: this.props.adopterKids || ' ',
                adopterAdultNum: this.props.adopterAdultNum || ' ',
                adopterKidInfo: this.props.adopterKidInfo || ' ',
                refName1: this.props.refName1 || ' ',
                refRel1: this.props.refRel1 || ' ',
                refPhone1: this.props.refPhone1 || ' ',
                refName2: this.props.refName2 || ' ',
                refPhone2: this.props.refPhone2 || ' ',
                refRel2: this.props.refRel2 || ' ',
                houseType: this.props.houseType || ' ',
                houseTypeOther: this.props.houseTypeOther || ' ',
                houseRentType: this.props.houseRentType || ' ',
                fence: this.props.fence || ' ',
                fenceHeight: this.props.fenceHeight || ' ',
                pool: this.props.pool || ' ',
                poolFence: this.props.poolFence || ' ',
                landlordPerm: this.props.landlordPerm || ' ',
                landlordName: this.props.landlordName || ' ',
                landlordPhone: this.props.landlordPhone || ' ',
                petsNum: this.props.petsNum || ' ',
                pet1: this.props.pet1 || ' ',
                petType1: this.props.petType1 || ' ',
                petAge1: this.props.petAge1 || ' ',
                petSex1: this.props.petSex1 || ' ',
                petSpayed1: this.props.petSpayed1 || ' ',
                petFrom1: this.props.petFrom1 || ' ',
                petTime1: this.props.petTime1 || ' ',
                pet2: this.props.pet2 || ' ',
                petType2: this.props.petType2 || ' ',
                petAge2: this.props.petAge2 || ' ',
                petSex2: this.props.petSex2 || ' ',
                petSpayed2: this.props.petSpayed2 || ' ',
                petFrom2: this.props.petFrom2 || ' ',
                petTime2: this.props.petTime2 || ' ',
                pet3: this.props.pet3 || ' ',
                petType3: this.props.petType3 || ' ',
                petAge3: this.props.petAge3 || ' ',
                petSex3: this.props.petSex3 || ' ',
                petSpayed3: this.props.petSpayed3 || ' ',
                petFrom3: this.props.petFrom3 || ' ',
                petTime3: this.props.petTime3 || ' ',
                prevPetsNum: this.props.prevPetsNum || ' ',
                prevpet1: this.props.prevpet1 || ' ',
                prevpetType1: this.props.prevType1 || ' ',
                prevpetAge1: this.props.prevpetAge1 || ' ',
                prevpetSex1: this.props.prevpetSex1 || ' ',
                prevpetSpayed1: this.props.prevpetSpayed1 || ' ',
                prevpetFrom1: this.props.prevpetFrom1 || ' ',
                prevpetTime1: this.props.prevpetTime1 || ' ',
                prevpetEnd1: this.props.prevpetEnd1 || ' ',
                prevpet2: this.props.prevpet2 || ' ',
                prevpetType2: this.props.prevType2 || ' ',
                prevpetAge2: this.props.prevpetAge2 || ' ',
                prevpetSex2: this.props.prevpetSex2 || ' ',
                prevpetSpayed2: this.props.prevpetSpayed2 || ' ',
                prevpetFrom2: this.props.prevpetFrom2 || ' ',
                prevpetTime2: this.props.prevpetTime2 || ' ',
                prevpetEnd2: this.props.prevpetEnd2 || ' ',
                prevpet3: this.props.prevpet3 || ' ',
                prevpetType3: this.props.prevType3 || ' ',
                prevpetAge3: this.props.prevpetAge3 || ' ',
                prevpetSex3: this.props.prevpetSex3 || ' ',
                prevpetSpayed3: this.props.prevpetSpayed3 || ' ',
                prevpetFrom3: this.props.prevpetFrom3 || ' ',
                prevpetTime3: this.props.prevpetTime3 || ' ',
                prevpetEnd3: this.props.prevpetEnd3 || ' ',
                petCare: this.props.petCare || ' ',
                petWhy: this.props.petWhy || ' ',
                petSleep: this.props.petSleep || ' ',
                outdoorInfo: this.props.outdoorInfo || ' ',
                petStay: this.props.petStay || ' ',
                petStayOther: this.props.petStayOther || ' ',
                offlimits: this.props.offlimits || ' ',
                space: this.props.space || ' ',
                spaceOther: this.props.spaceOther || ' ',
                travel: this.props.travel || ' ',
                keep: this.props.keep || ' ',
                keepOther: this.props.keepOther || ' ',
                financial: this.props.financial || ' ',
                keepOption: this.props.keepOption || ' ',
                other: this.props.other || ' '
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e){
        const { name, value } = e.target;
        const { formData } = this.state;
        this.setState({ formData: {
            ...formData,
            [name]: value
        }  });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { formData } = this.state;
        const { dispatch } = this.props;
        dispatch(userActions.saveProfile(formData, this.props.user.response._id));
        this.setState({ formData: {} })
    }

    render() {

        let formField1 = []; let formField2 = []; let formField3 = [];
        let formField4 = []; let formField5 = []; let formField6 = [];

        adopterInfoFields.map(( field ) => {
            const { fieldId, fieldType, fieldname, fieldOptions } = field;
                if (fieldType === 'text'){
                    formField1.push(<InputText name={fieldname} id={fieldId} onChange={this.handleChange} value={this.state.formData[fieldId]} />);
                }

                if(fieldType === 'select'){
                    formField1.push(<InputSelect name={fieldname} id={fieldId} fieldOptions={fieldOptions} onChange={this.handleChange}  value={this.state.formData[fieldId]} />)
                } 
        });

        adopterHouseInfo.map(( field ) => {
            const { fieldId, fieldType, fieldname, fieldOptions } = field;
                if (fieldType === 'text'){
                    formField2.push(<InputText name={fieldname} id={fieldId} onChange={this.handleChange}  value={this.state.formData[fieldId]} />);
                }

                if(fieldType === 'select'){
                    formField2.push(<InputSelect name={fieldname} id={fieldId} fieldOptions={fieldOptions} onChange={this.handleChange}  value={this.state.formData[fieldId]} />)
                } 
        });

        adopterReferences.map(( field ) => {
            const { fieldId, fieldType, fieldname, fieldOptions } = field;
                if (fieldType === 'text'){
                    formField3.push(<InputText name={fieldname} id={fieldId} onChange={this.handleChange}  value={this.state.formData[fieldId]} />);
                }

                if(fieldType === 'select'){
                    formField3.push(<InputSelect name={fieldname} id={fieldId} fieldOptions={fieldOptions} onChange={this.handleChange}  value={this.state.formData[fieldId]} />)
                } 
        });

        currentPets.map(( field ) => {
            const { fieldId, fieldType, fieldname, fieldOptions } = field;
                if (fieldType === 'text'){
                    formField4.push(<InputText name={fieldname} id={fieldId} onChange={this.handleChange}  value={this.state.formData[fieldId]} />);
                }

                if(fieldType === 'select'){
                    formField4.push(<InputSelect name={fieldname} id={fieldId} fieldOptions={fieldOptions} onChange={this.handleChange}  value={this.state.formData[fieldId]} />)
                } 
        });

        prevPets.map(( field ) => {
            const { fieldId, fieldType, fieldname, fieldOptions } = field;
                if (fieldType === 'text'){
                    formField5.push(<InputText name={fieldname} id={fieldId} onChange={this.handleChange}  value={this.state.formData[fieldId]} />);
                }

                if(fieldType === 'select'){
                    formField5.push(<InputSelect name={fieldname} id={fieldId} fieldOptions={fieldOptions} onChange={this.handleChange}  value={this.state.formData[fieldId]} />)
                } 
        });

        newPetInfo.map(( field ) => {
            const { fieldId, fieldType, fieldname, fieldOptions } = field;
                if (fieldType === 'text'){
                    formField6.push(<InputText name={fieldname} id={fieldId} onChange={this.handleChange}  value={this.state.formData[fieldId]} />);
                }

                if(fieldType === 'select'){
                    formField6.push(<InputSelect name={fieldname} id={fieldId} fieldOptions={fieldOptions} onChange={this.handleChange}  value={this.state.formData[fieldId]} />)
                } 
        });

        return (
            <div className="content">

            <div className="profile" style={{paddingTop: '25px'}}>

            <form onSubmit={this.handleSubmit} id="profileForm">
                <h3>Adopter Information</h3>
                        {formField1}
                <h3>Home Information</h3>
                    {formField2}
                <h3>Two Personal References</h3>
                    {formField3}
                <h3>Current Pets</h3>
                    {formField4}
                <h3>Previous Pets</h3>
                    {formField5}
                <h3>Your New Pet</h3>
                    {formField6}
                <MDBBtn color="success" size="md" type="submit">Save</MDBBtn>
            </form>
            
            </div>
        </div>
        )
    }
};

const Form = connect(mapStateToProps)(ConnectedForm);

export default Form;