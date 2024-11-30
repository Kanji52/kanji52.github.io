document.addEventListener("DOMContentLoaded", () => {
        const splashScreen = document.getElementById("splash-screen");
        const splashMessage = document.getElementById("splash-message");
        const mainContent = document.getElementById("main-content");

        // Array of random messages
        const messages = [
            "همة حتى القمة 🏔️",
            "A+ بانتظارك 🔥",
            "شد وتوكل، تعدي وتهون.",
        ];

        // Select a random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        splashMessage.innerText = randomMessage;

           
            // Show splash screen for 1 second
            setTimeout(() => {
                splashScreen.classList.add("hidden"); // Add class to trigger fade-out
                setTimeout(() => {
                    splashScreen.style.display = "none"; // Fully hide after fade-out
                    mainContent.style.display = "block"; // Show main content
                }, 1000); // Match the transition duration (1s)
            }, 1000); // Delay before fading out the splash screen
        

    const gradePoints = {
        "A+": 4.0,
        "A": 3.75,
        "B+": 3.5,
        "B": 3.0,
        "C+": 2.5,
        "C": 2.0,
        "D+": 1.5,
        "D": 1.0
    };
    let subjectCount = 0;

    window.addSubject = function () {
    const form = document.getElementById("subjectsForm");

    // Set subjectCount based on the current number of subjects
    const subjectCount = form.children.length + 1; // Starts from 1 for each new addition

    // Create a new subject div and add necessary elements
    const subjectDiv = document.createElement("div");
        subjectDiv.classList.add("subject", "slide-in-blurred-top", "glowing-line"); // Add swing animation class


    const nameLabel = document.createElement("label");
    nameLabel.innerText = `المادة ${subjectCount}:`;

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = `المادة ${subjectCount}`;  // Default placeholder
    nameInput.required = true;

    const creditHoursInput = document.createElement("input");
    creditHoursInput.type = "number";
    creditHoursInput.placeholder = "عدد الساعات (CR) *";
    creditHoursInput.min = "1";
    creditHoursInput.required = true;

        // Array of random messages
        const messages = [
            "ايش؟! ودك بمعدل سالب؟!",
            "تعديت مرحلة الرسوب الله يعافيك.",
            "موتنا؟💀 موتنا!☠️",
            "راجع نفسك يا أخي الكريم. (الساعات تكون بالموجب) ",
        ];

        // Add a message element for negative input feedback
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
       

        // Check for negative input
        creditHoursInput.addEventListener("input", () => {
            if (creditHoursInput.value < 0) {
                // Pick a random message
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                errorMessage.innerText = randomMessage;
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.display = "none";
            }
        });

    const gradeSelect = document.createElement("select");
    gradeSelect.required = true;
    for (let grade in gradePoints) {
        const option = document.createElement("option");
        option.value = grade;
        option.innerText = grade;
        gradeSelect.appendChild(option);
    }

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.innerText = "إزالة";
    removeButton.type = "button";
        removeButton.onclick = () => {
            // Add the slide-out-blurred-bottom animation class
            subjectDiv.classList.remove("slide-in-blurred-top"); // Remove add animation
            subjectDiv.classList.add("slide-out-blurred-bottom"); // Apply the new slide-out animation class

            // Wait for the animation to complete before removing the element
            subjectDiv.addEventListener("animationend", () => {
                form.removeChild(subjectDiv); // Remove from DOM
                updateSubjectLabels(); // Update subject labels
            }, { once: true }); // Ensure listener runs only once
        };


    subjectDiv.appendChild(nameLabel);
    subjectDiv.appendChild(nameInput);
    subjectDiv.appendChild(creditHoursInput);
     subjectDiv.appendChild(errorMessage);
    subjectDiv.appendChild(gradeSelect);
    subjectDiv.appendChild(removeButton);
    form.appendChild(subjectDiv);

    // Update labels after adding a new subject
    updateSubjectLabels();
}


	function updateSubjectLabels() {
    const subjects = document.getElementById("subjectsForm").children;
    Array.from(subjects).forEach((subject, index) => {
        // Update the label text
        subject.querySelector("label").innerText = `المادة ${index + 1} :`;
        
        // Update the placeholder for the input field (name input for subject)
        const nameInput = subject.querySelector("input[type='text']");
        nameInput.placeholder = `اسم المادة`;
    });
}




    window.calculateGPA = function () {
    const subjects = document.getElementsByClassName("subject");
    let totalGradePoints = 0;
    let totalCreditHours = 0;
    let totalPoints = 0;

    for (let subject of subjects) {
        const creditHoursInput = subject.querySelector("input[type='number']");
        const gradeSelect = subject.querySelector("select");

        const creditHours = parseFloat(creditHoursInput.value);
        const grade = gradeSelect.value;

        if (!creditHours) {
            alert("يُرجى إدخال جميع عدد الساعات.");
            return;
        }

        const subjectPoints = gradePoints[grade] * creditHours;
        totalGradePoints += subjectPoints;
        totalCreditHours += creditHours;
        totalPoints += subjectPoints;
    }

    if (totalCreditHours === 0) {
        alert("يُرجى إضافة مادة على الأقل.");
        return;
    }

    const gpa = totalGradePoints / totalCreditHours;

    // Update the result box content
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <span>المعدل التراكمي: ${gpa.toFixed(2)}</span><br>
        <span>مجموع النقاط: ${totalPoints.toFixed(2)}</span>
    `;

    // Display the result box with animation
    resultElement.style.display = "block";
    resultElement.classList.add("fade-in");
}


    window.toggleTheme = function () {
        const body = document.body;
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");
    }
});