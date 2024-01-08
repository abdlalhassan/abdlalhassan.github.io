var selectedBodyPart = ''; // Variable to store the selected body part

// Function to set the selected body part
function selectBodyPart(bodyPart) {
    selectedBodyPart = bodyPart;
    highlightBodyPart(bodyPart);
}

// Diagnosis data structure
const diagnoses = {
    'Head': {
        1: 'Head Selected:\n Possible mild headache or stress.',
        2: 'Head Selected:\n Potential migraine or sinus issue.',
        3: 'Head Selected:\n Severe headache or neurological concern.'
    },
    'Chest': {
        1: 'Chest Selected:\n Muscle strain, Mild chest wall pain (costochondritis), Early signs of a cold or mild bronchitis.',
        2: 'Chest Selected:\n Moderate asthma or bronchitis, Gastroesophageal reflux disease (GERD), Rib fracture or significant muscle strain.',
        3: 'Chest Selected:\n Myocardial infarction (heart attack), Severe pneumonia or pleurisy, Pulmonary embolism.'
    },
    'Abdomen': {
        1: 'Abdomen Selected:\n Minor digestive issues (e.g., gas, mild constipation), Minor food intolerance, Menstrual cramps.',
        2: 'Abdomen Selected:\n Gastritis or moderate gastroenteritis, Irritable bowel syndrome (IBS), Urinary tract infection (UTI).',
        3: 'Abdomen Selected:\n Appendicitis, Cholecystitis (gallbladder inflammation), Pancreatitis or kidney stones.'
    },
    'Limb': {
        1: 'Limb Selected:\n Minor strains, mild ankle sprain.',
        2: 'Limb Selected:\n Moderate knee pain (e.g., from meniscus tear), varicose veins.',
        3: 'Limb Selected:\n Deep vein thrombosis, fractures.'
    },
    'Armr': {
        1: 'Arm Selected:\n Mild strain, minor cuts',
        2: 'Arm Selected:\n Carpal tunnel syndrome, moderate sprains.',
        3: 'Arm Selected:\n Fractures, severe burns.'
    },
    'Arml': {
        1: 'Arm Selected:\n Mild strain, minor cuts',
        2: 'Arm Selected:\n Carpal tunnel syndrome, moderate sprains.',
        3: 'Arm Selected:\n Fractures, severe burns.'
    }
};

function highlightBodyPart(elementId) {
    var element = document.getElementById(elementId);
    element.classList.add("highlight");

    // Remove highlight after 1 second
    setTimeout(function() {
        element.classList.remove("highlight");
    }, 3000); // 1000 milliseconds = 1 second
}


// Function to get the diagnosis
function getDiagnosis(bodyPart, level) {
    if(diagnoses[bodyPart]) {
        return diagnoses[bodyPart][level];
    } else {
        return 'No diagnosis available for this body part.';
    }
}

// Event listener for the submit button
document.getElementById('submit-button').addEventListener('click', function() {
    const discomfortLevel = parseInt(document.getElementById('discomfort-level').value);
    const diagnosisResult = getDiagnosis(selectedBodyPart, discomfortLevel);
    document.getElementById('diagnosis-results').innerText = diagnosisResult;
});

// When the user clicks on <span> (x), close the popup
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    document.getElementById("popupBox").style.display = "none";
}

// To open the popup when the page loads
window.onload = function() {
    document.getElementById("popupBox").style.display = "block";
}
