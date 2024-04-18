// toggle for bill yearly and monthly
function setActive(selectedElement) {
    var bilMonthly = document.getElementById('bilMonthly');
    var bilYearly = document.getElementById('bilYearly');

    // Remove active class from both elements
    bilMonthly.classList.remove('active');
    bilYearly.classList.remove('active');
    
    // Add active class to the clicked element
    selectedElement.classList.add('active');
}

// for selecting plan//////////////////////////////////////////
    document.addEventListener("DOMContentLoaded", function() {
    var gotoBusiness = document.getElementById('gotoBusiness');
    var signupForFree = document.getElementById('signupForFree');
    var goToPro = document.getElementById('goToPro');

    var allDivs = [gotoBusiness, signupForFree, goToPro];

    function setActive(element) {
        // Check if the element is already active
        if (element.classList.contains('active')) {
            // If active, remove the active class
            element.classList.remove('active');
        } else {
            // Remove active class from all elements
            allDivs.forEach(div => div.classList.remove('active'));
            
            // Add active class to the clicked element
            element.classList.add('active');
        }
    }

    gotoBusiness.addEventListener('click', function() {
        setActive(gotoBusiness);
    });

    signupForFree.addEventListener('click', function() {
        setActive(signupForFree);
    });

    goToPro.addEventListener('click', function() {
        setActive(goToPro);
    });
});

// //////////////////////////////////////////
// signup form code////////////////////////////////////////
function openForm() {
    var signupForm = document.getElementById('signup');
    var mainContent = document.getElementById('mainContent');
    

    signupForm.style.display = 'block';
    mainContent.classList.add('blur');
    document.body.style.overflow = 'hidden';
    
}

function closeForm() {
    var signupForm = document.getElementById('signupForm');
    var mainContent = document.getElementById('mainContent');
    
    signupForm.style.display = 'none';
    mainContent.classList.remove('blur');
    document.body.style.overflow = '';
}

// To close the form when clicking outside of it
window.onclick = function(event) {
    var signupForm = document.getElementById('signupForm');
    if (event.target === signupForm) {
        closeForm();
    }
}
// ends here
// login form//////////////////////
function openLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Lock the body's scrolling.
}

function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.body.style.overflow = ''; // Re-enable the body's scrolling.
}
// ends here/////////////////////////////////
// local storge/////////////////

// document.getElementById('submitBtn').addEventListener('click', function() {
//     var formElement = document.getElementById('signupForm');
    
//     var formData = {
//         name: formElement.name.value,
//         email: formElement.email.value,
//         phone: formElement.phone.value,
//         password: formElement.password.value
//     };

//     // Save the formData to localStorage
//     localStorage.setItem('signupData', JSON.stringify(formData));

//     // Here you could also call a function to send data to Google Sheets if needed
//     // sendToGoogleSheets(formData);
// });

// function closeForm() {
//     document.getElementById('signupForm').style.display = 'none';
// }
// ////////////////////////////////////////
//////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    if (!submitBtn) {
        console.error("Submit button not found.");
        return;
    }

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default form submission which causes the reload

        const formElement = document.getElementById('signupForm');
        if (!formElement) {
            console.error('Form not found');
            return;
        }

        const formData = {
            name: formElement.name.value.trim(),
            email: formElement.email.value.trim(),
            phone: formElement.phone.value.trim(),
            password: formElement.password.value
        };

        if (!formData.name || !formData.email || !formData.phone || !formData.password) {
            console.error('All form fields must be filled');
            alert('Please fill in all fields.');
            return;
        }

        // Store the formData in localStorage
        localStorage.setItem('signupData', JSON.stringify(formData));
        console.log('Form data saved:', formData);

        // Optionally, provide feedback to user
        alert('Data successfully saved to local storage!');
    });
});