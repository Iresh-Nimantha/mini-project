// Function to open popup window for feedback form
function openFeedbackForm() {
    const feedbackWindow = window.open("", "Feedback", "width=500,height=500");
    feedbackWindow.document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Feedback</title></head><body></body></html>");
    feedbackWindow.document.body.appendChild(document.getElementById("feedbackForm").cloneNode(true));
  }
  
  // Function to submit feedback form
  document.getElementById("feedbackFormContent").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
  
    // Redirect to feedback.html with query parameters
    window.location.href = `feedback.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&feedback=${encodeURIComponent(feedback)}`;
  });
  
  // Show feedback form when the submit button is clicked
  document.querySelector("button[type='submit']").addEventListener("click", openFeedbackForm);
  



  // Check if the user is returning from crop calendar page
  window.onpageshow = function(event) {
    if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
      // Check if the session storage flag is set
      const visitedCropCalendar = sessionStorage.getItem('visitedCropCalendar');
      if (visitedCropCalendar) {
        // Open the feedback form as a popup window
        openFeedbackForm();
        // Clear the session storage flag
        sessionStorage.removeItem('visitedCropCalendar');
      }
    }
  };

  // Function to open popup window for feedback form
  function openFeedbackForm() {
    const feedbackWindow = window.open("", "Feedback", "width=500,height=500");
    feedbackWindow.document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Feedback</title></head><body></body></html>");
    feedbackWindow.document.body.appendChild(document.getElementById("feedbackForm").cloneNode(true));
  }

  // Function to submit feedback form (same as before)
  document.getElementById("feedbackFormContent").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    window.location.href = `feedback.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&feedback=${encodeURIComponent(feedback)}`;
  });

  // Show feedback form when the submit button is clicked (same as before)
  document.querySelector("button[type='submit']").addEventListener("click", openFeedbackForm);

