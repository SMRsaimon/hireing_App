//   js education information
const generateID = () => {
  return Math.random().toString(36).slice(2);
};

const eduLevel = document.getElementById("eduLevel");
const educationYear = document.getElementById("educationYear");
const passingYear = document.getElementById("passingYear");
const groupName = document.getElementById("groupName");
const Institute = document.getElementById("Institute");
const result = document.getElementById("result");
const academicInputFiled = document.getElementById("academicInputFiled");

// education details
const educationDetailsSection = document.getElementById("educationDetails");
const eItemsContainer = document.getElementById("eItemsContainer");
educationDetailsSection.style.display = "none";
eItemsContainer.innerHTML = "";

const eData = {};

const submitEducationInformation = (e) => {
  (eData.eduLevel = eduLevel.value),
    (eData.educationYear = educationYear.value);
  eData.passingYear = passingYear.value;
  eData.groupName = groupName.value;
  eData.Institute = Institute.value;
  eData.result = result.value;
  (eData.id = generateID()), educationDetails(eData);
  educationDetailsSection.style.display = "block";
  academicInputFiled.style.display = "none";
  console.log(eData);
};

const showEduInputfiled = () => {
  academicInputFiled.style.display = "block";
};
// rander form result
const educationDetails = (eData) => {
  eItemsContainer.innerHTML += `
   
  
   <div id="${eData.id}" class="item">
     <h3 class="mb-30">${eData.eduLevel}</h3>
     <div class="singleItem d-flex align-items-center mb-50">
       <div class="singleItemImg">
         <img src="./images/img.png" alt="" />
       </div>
       <div class="singleItemContent borderBottom">
         <h4>${eData.Institute}</h4>
         <p>
          ${eData.groupName}
         </p>
         <p>${eData.educationYear}-${eData.passingYear}</p>
       </div>
       <div class="educationsicons">
         <button onclick="showEduInputfiled()"><i class="fas fa-plus"></i></button>
         <button onclick="onEditeFiled(${eData})"><i class="fas fa-pencil-alt"></i></button>
       </div>
     </div>
    
   </div>

   
   `;
};

// edite form

const onEditeFiled = (data) => {
  eduLevel.value = data.eduLevel;
  educationYear.value = data.educationYear;
  passingYear.value = data.passingYear;
  groupName.value = data.groupName;
  Institute.value = data.Institute;
  result.value = data.result;
};
