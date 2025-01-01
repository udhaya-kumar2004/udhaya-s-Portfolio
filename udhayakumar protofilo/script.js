
      function toggleReadMore() {
        const moreText = document.querySelector('.read-more-text');
        const btnText = document.querySelector('.read-more-btn');
        
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            btnText.textContent = "Show Less";
        } else {
            moreText.style.display = "none";
            btnText.textContent = "Read More";
        }
    } 
document.getElementById('showMoreCertBtn').addEventListener('click', function() {
    const extraCertificates = document.querySelector('.extra-certificates');
    const btn = document.getElementById('showMoreCertBtn');

    if (extraCertificates.style.display === "none" || extraCertificates.style.display === "") {
        extraCertificates.style.display = "flex"; 
        btn.textContent = "Show Less"; 
    } else {
        extraCertificates.style.display = "none"; 
        btn.textContent = "Show More"; 
    }
});
function toggleProjects() {
    const extraProjects = document.querySelector('.extra-projects');
    const button = document.getElementById('show-more-projects');

    if (extraProjects.style.display === 'none' || extraProjects.style.display === '') {
        extraProjects.style.display = 'grid';
        button.textContent = 'Show Less';
    } else {
        extraProjects.style.display = 'none';
        button.textContent = 'Show More';
    }
}
function toggleCertificates() {
    const extraCertificates = document.getElementById('extra-certificates');
    const toggleButton = document.getElementById('toggle-certificates');

    if (extraCertificates.style.display === 'none' || extraCertificates.style.display === '') {
        extraCertificates.style.display = 'flex'; 
        toggleButton.textContent = 'Show Less';
    } else {
        extraCertificates.style.display = 'none'; 
        toggleButton.textContent = 'Show More';
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var downloadButton = document.getElementById('download-resume');
    downloadButton.addEventListener('click', function(event) {
        event.preventDefault();   
        var link = document.createElement('a');
        link.href = downloadButton.href;
        link.download = downloadButton.download;
        link.click();
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var name = this.elements['name'].value;
    var email = this.elements['email'].value;
    var message = this.elements['message'].value;
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
function toggleInternships() {
    const extraInternships = document.querySelector('.extra-internships');
    const showMoreButton = document.getElementById('show-more-internships');
    
    if (extraInternships.style.display === 'none') {
        extraInternships.style.display = 'block';
        showMoreButton.textContent = 'Show Less';
    } else {
        extraInternships.style.display = 'none';
        showMoreButton.textContent = 'Show More';
    }
}


 // Get the form element
 const form = document.getElementById('contactForm');
    
 // Add event listener for form submission
 form.addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the form from submitting immediately

   // Get the input values
   const name = form.querySelector('input[name="name"]').value;
   const email = form.querySelector('input[name="email"]').value;
   const message = form.querySelector('textarea[name="message"]').value;

   // Validate input fields
   if (name && email && message) {
     // Construct the mailto link with the form data
     const subject = encodeURIComponent('Contact Form Message');
     const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
     const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
     
     // Open the user's email client with the pre-filled data
     window.location.href = mailtoLink;
     
     // Optionally, show a confirmation message
     alert('Your email client should open now.');
     
     // Reset the form
     form.reset();
   } else {
     // Alert if any field is missing
     alert('Please fill in all the fields.');
   }
 });