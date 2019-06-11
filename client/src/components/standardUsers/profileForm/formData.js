export var adopterInfoFields = [
    {
        fieldname: "Name",
        fieldId: "adopterName",
        fieldType: "text"
    },
    {
        fieldname: "Name(s) of other adult(s) in household",
        fieldId: "adopterAdults",
        fieldType: "text"
    },
    {
        fieldname: "Relationship to you",
        fieldId: "adopterRel",
        fieldType: "radio",
        fieldOptions: ["-", "Spouse", "Partner", "Roommate"]
    },
    {
        fieldname: "Address",
        fieldId: "adopterAdd",
        fieldType: "text"
    },
    {
        fieldname: "City",
        fieldId: "adopterCity",
        fieldType: "text"
    },
    {
        fieldname: "State",
        fieldId: "adopterState",
        fieldType: "select",
        fieldOptions: ['-', 'Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    },
    {
        fieldname: "Zipcode",
        fieldId: "adopterZip",
        fieldType: "text"
    },
    {
        fieldname: "Phone",
        fieldId: "adopterPhone",
        fieldType: "text"
    },
    {
        fieldname: "Email",
        fieldId: "adopterEmail",
        fieldType: "text"
    },
    {
        fieldname: "Occupation",
        fieldId: "adopterJob",
        fieldType: "text"
    },
    {
        fieldname: "Number of children living in home (part or full-time)",
        fieldId: "adopterKids",
        fieldType: "select",
        fieldOptions: ["-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]
    },
    {
        fieldname: "Number of adults living in home",
        fieldId: "adopterAdultNum",
        fieldType: "select",
        fieldOptions: ["-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]
    },
    {
        fieldname: "Names and ages of children, if applicable",
        fieldId: "adopterKidInfo",
        fieldType: "text"
    }
];

export var adopterReferences = [
    {
        fieldname: "Reference Name",
        fieldId: "refName1",
        fieldType: "text"
    },
    {
        fieldname: "Reference Relationship",
        fieldId: "refRel1",
        fieldType: "text"
    },
    {
        fieldname: "Reference Phone",
        fieldId: "refPhone1",
        fieldType: "text"
    },
    {
        fieldname: "Reference Name 2",
        fieldId: "refName2",
        fieldType: "text"
    },
    {
        fieldname: "Reference Relationship 2",
        fieldId: "refRel2",
        fieldType: "text"
    },
    {
        fieldname: "Reference Phone 2",
        fieldId: "refPhone2",
        fieldType: "text"
    }
];

export var adopterHouseInfo = [
    {
        fieldname: "Type of dwelling",
        fieldId: "houseType",
        fieldType: "select",
        fieldOptions: ["-", "Apartment", "House", "Condo", "Other"]
    },
    {
        fieldname: "If other what type?",
        fieldId: "houseTypeOther",
        fieldType: "text"
    },
    {
        fieldname: "Own or Rent",
        fieldId: "houseRentType",
        fieldType: "select",
        fieldOptions: ["-", "Own", "Rent"]
    },
    {
        fieldname: "If you have a yard",
        fieldId: "fence",
        fieldType: "select",
        fieldOptions: ["-", "Fenced", "Unfenced"]
    },
    {
        fieldname: "How high is your fence",
        fieldId: "fenceHeight",
        fieldType: "text"
    },
    {
        fieldname: "Does your home have a pool?",
        fieldId: "pool",
        fieldType: "select",
        fieldOptions:  ["-", "Yes", "No"]
    },
    {
        fieldname: "If you have a pool, is it fenced?",
        fieldId: "poolFence",
        fieldType: "select",
        fieldOptions: ["-", "Yes", "No"]
    },
    {
        fieldname: "If you are not a homeowner, do you have the landlord's permission to have a pet?",
        fieldId: "landlordPerm",
        fieldType: "select",
        fieldOptions: ["-", "Yes", "No"]
    },
    {
        fieldname: "Landlord's Name",
        fieldId: "landlordName",
        fieldType: "text"
    },
    {
        fieldname: "Landlord's Phone",
        fieldId: "landlordPhone",
        fieldType: "text"
    }
];

export var currentPets = [
    {
        fieldname: "Number of current pets",
        fieldId: "petsNum",
        fieldType: "select",
        fieldOptions: ["-", "0", "1", "2", "3", "4", "5+"]
    },
    {
        fieldname: "Pet's Name",
        fieldId: "pet1",
        fieldType: "text"
    },
    {
        fieldname: "Type of animal",
        fieldId: "petType1",
        fieldType: "select",
        fieldOptions: ["-", "Dog", "Cat", "Rabbit", "Reptile", "Rodent (Hamster, Mouse, Rat, etc)", "Other"]
    },
    {
        fieldname: "Approximate Age",
        fieldId: "petAge1",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "Sex",
        fieldId: "petSex1",
        fieldType: "select",
        fieldOptions: ["-", "Male", "Female"]
    },
    {
        fieldname: "Spayed/Neutured",
        fieldId: "petSpayed1",
        fieldType: "select",
        fieldOptions: ["-", "Yes", "No"]
    },
    {
        fieldname: "Where did you obtain this pet?",
        fieldId: "petFrom1",
        fieldType: "select",
        fieldOptions: ["-", "Pet store", "Breeder", "Shelter", "Rescue Group", "Friend or Relative", "Bred in your home"]
    },
    {
        fieldname: "How many years have you had this pet?",
        fieldId: "petTime1",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "Pet's Name 2",
        fieldId: "pet2",
        fieldType: "text"
    },
    {
        fieldname: "Type of animal",
        fieldId: "petType2",
        fieldType: "select",
        fieldOptions: ["-", "Dog", "Cat", "Rabbit", "Reptile", "Rodent (Hamster, Mouse, Rat, etc)", "Other"]
    },
    {
        fieldname: "Approximate Age",
        fieldId: "petAge2",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "Sex",
        fieldId: "petSex2",
        fieldType: "select",
        fieldOptions: ["-", "Male", "Female"]
    },
    {
        fieldname: "Spayed/Neutured",
        fieldId: "petSpayed2",
        fieldType: "select",
        fieldOptions: ["-", "Yes", "No"]
    },
    {
        fieldname: "Where did you obtain this pet?",
        fieldId: "petFrom2",
        fieldType: "select",
        fieldOptions: ["-", "Pet store", "Breeder", "Shelter", "Rescue Group", "Friend or Relative", "Bred in your home"]
    },
    {
        fieldname: "How many years have you had this pet?",
        fieldId: "petTime2",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "Pet's Name 3",
        fieldId: "pet3",
        fieldType: "text"
    },
    {
        fieldname: "Type of animal",
        fieldId: "petType3",
        fieldType: "select",
        fieldOptions: ["-", "Dog", "Cat", "Rabbit", "Reptile", "Rodent (Hamster, Mouse, Rat, etc)", "Other"]
    },
    {
        fieldname: "Approximate Age",
        fieldId: "petAge3",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "Sex",
        fieldId: "petSex3",
        fieldType: "select",
        fieldOptions: ["-", "Male", "Female"]
    },
    {
        fieldname: "Spayed/Neutured",
        fieldId: "petSpayed3",
        fieldType: "select",
        fieldOptions: ["-", "Yes", "No"]
    },
    {
        fieldname: "Where did you obtain this pet?",
        fieldId: "petFrom3",
        fieldType: "select",
        fieldOptions: ["-", "Pet store", "Breeder", "Shelter", "Rescue Group", "Friend or Relative", "Bred in your home"]
    },
    {
        fieldname: "How many years have you had this pet?",
        fieldId: "petTime3",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    }
];

export var prevPets = [
    {
        fieldname: "Number of previous pets",
        fieldId: "prevpetsNum",
        fieldType: "select",
        fieldOptions: ["-", "0", "1", "2", "3", "4", "5+"]
    },
    {
        fieldname: "Pet's Name",
        fieldId: "prevpet1",
        fieldType: "text"
    },
    {
        fieldname: "Type of animal",
        fieldId: "prevpetType1",
        fieldType: "select",
        fieldOptions: ["-", "Dog", "Cat", "Rabbit", "Reptile", "Rodent (Hamster, Mouse, Rat, etc)", "Other"]
    },
    {
        fieldname: "Approximate Age",
        fieldId: "prevpetAge1",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "Sex",
        fieldId: "prevpetSex1",
        fieldType: "select",
        fieldOptions: ["-", "Male", "Female"]
    },
    {
        fieldname: "Spayed/Neutured",
        fieldId: "prevpetSpayed1",
        fieldType: "select",
        fieldOptions: ["-", "Yes", "No"]
    },
    {
        fieldname: "Where did you obtain this pet?",
        fieldId: "prevpetFrom1",
        fieldType: "select",
        fieldOptions: ["-", "Pet store", "Breeder", "Shelter", "Rescue Group", "Friend or Relative", "Bred in your home"]
    },
    {
        fieldname: "How many years did you have this pet?",
        fieldId: "prevpetTime1",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "What happened to this pet?",
        fieldId: "prevpetEnd1",
        fieldType: "text"
    },
    {
        fieldname: "Pet's Name 2",
        fieldId: "prevpet2",
        fieldType: "text"
    },
    {
        fieldname: "Type of animal",
        fieldId: "prevpetType2",
        fieldType: "select",
        fieldOptions: ["-", "Dog", "Cat", "Rabbit", "Reptile", "Rodent (Hamster, Mouse, Rat, etc)", "Other"]
    },
    {
        fieldname: "Approximate Age",
        fieldId: "prevpetAge2",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "Sex",
        fieldId: "prevpetSex2",
        fieldType: "select",
        fieldOptions: ["-", "Male", "Female"]
    },
    {
        fieldname: "Spayed/Neutured",
        fieldId: "prevpetSpayed2",
        fieldType: "select",
        fieldOptions: ["-", "Yes", "No"]
    },
    {
        fieldname: "Where did you obtain this pet?",
        fieldId: "prevpetFrom2",
        fieldType: "select",
        fieldOptions: ["-", "Pet store", "Breeder", "Shelter", "Rescue Group", "Friend or Relative", "Bred in your home"]
    },
    {
        fieldname: "How many years did you have this pet?",
        fieldId: "prevpetTime2",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "What happened to this pet?",
        fieldId: "prevpetEnd2",
        fieldType: "text"
    },
    {
        fieldname: "Pet's Name 3",
        fieldId: "prevpet3",
        fieldType: "text"
    },
    {
        fieldname: "Type of animal",
        fieldId: "prevpetType3",
        fieldType: "select",
        fieldOptions: ["-", "Dog", "Cat", "Rabbit", "Reptile", "Rodent (Hamster, Mouse, Rat, etc)", "Other"]
    },
    {
        fieldname: "Approximate Age",
        fieldId: "prevpetAge3",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "Sex",
        fieldId: "prevpetSex3",
        fieldType: "select",
        fieldOptions: ["-", "Male", "Female"]
    },
    {
        fieldname: "Spayed/Neutured",
        fieldId: "prevpetSpayed3",
        fieldType: "select",
        fieldOptions: ["-", "Yes", "No"]
    },
    {
        fieldname: "Where did you obtain this pet?",
        fieldId: "prevpetFrom3",
        fieldType: "select",
        fieldOptions: ["-", "Pet store", "Breeder", "Shelter", "Rescue Group", "Friend or Relative", "Bred in your home"]
    },
    {
        fieldname: "How many years did you have this pet?",
        fieldId: "prevpetTime3",
        fieldType: "select",
        fieldOptions: ["-", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12+ years"]
    },
    {
        fieldname: "What happened to this pet?",
        fieldId: "prevpetEnd3",
        fieldType: "text"
    }
];

export var newPetInfo = [
    {
        fieldname: "Who would be responsible for the care of the pet?",
        fieldId: "petCare",
        fieldType: "text"
    },
    {
        fieldname: "What is your primary reason for adopting a pet?",
        fieldId: "petWhy",
        fieldType: "select",
        fieldOptions: ["-", "Companion", "Guard animal", "Hunting", "Fighting", "Other"]
    },
    {
        fieldname: "Where would the pet sleep?",
        fieldId: "petSleep",
        fieldType: "select",
        fieldOptions: ["-", "Indoors", "Outdoors"]
    },
    {
        fieldname: "If outdoors",
        fieldId: "outdoorInfo",
        fieldType: "select",
        fieldOptions: ["-", "Yard", "Patio", "Kennel", "Garage", "Other"]
    },
    {
        fieldname: "When you are at home, the pet would be:",
        fieldId: "petStay",
        fieldType: "select",
        fieldOptions: ["-", "Inside", "Outside", "Other"]
    },
    {
        fieldname: "If other, where?",
        fieldId: "petStayOther",
        fieldType: "text"
    },
    {
        fieldname: "Which rooms or areas of the home/yard will be off-limits to the pet?",
        fieldId: "offlimits",
        fieldType: "text"
    },
    {
        fieldname: "If the pet will be outside at all, what space if available for the pet?",
        fieldId: "space",
        fieldType: "select",
        fieldOptions: ["-", "Yard", "Run", "Patio", "Balcony", "Unfenced Yard", "Other"]
    },
    {
        fieldname: "If other, what space?",
        fieldId: "spaceOther",
        fieldType: "text"
    },
    {
        fieldname: "When you travel, who will care for the pet while you are gone?",
        fieldId: "travel",
        fieldType: "text"
    },
    {
        fieldname: "Under what circumstances would you not keep the pet?",
        fieldId: "keep",
        fieldType: "select",
        fieldOptions: ["-", "Divorce", 
        "Illness in family", 
        "Moving", 
        "New baby", "Chewing", 
        "Housetraining problem", 
        "Barking", "Digging", 
        "Allergies", "Grew too big", 
        "Shedding too much", "Pet became ill", 
        "Kids ignored pet", "Pets didn't get along", 
        "Obedience issues", 
        "Would not give up for any of the above", "Other"]
    },
    {
        fieldname: "If other reason, why?",
        fieldId: "keepOther",
        fieldType: "text"
    },
    {
        fieldname: "If the pet becomes ill or injured, are you financially prepared to provide the medical care?",
        fieldId: "financial",
        fieldType: "select",
        fieldOptions: ["-", "Yes", "No"]
    },
    {
        fieldname: "Your pet may live 15+ years, what would you do with your pet if you could no longer care for it?",
        fieldId: "keepOption",
        fieldType: "text"
    },
    {
        fieldname: "Is there anything else you would like to tell us about yourself?",
        fieldId: "other",
        fieldType: "textarea"
    }
]


let fields = adopterInfoFields;

fields.push(adopterReferences, adopterHouseInfo, currentPets, prevPets, newPetInfo);

export const allFields = fields;