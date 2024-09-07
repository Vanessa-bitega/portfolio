
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    
    console.log("Sending email with params:", params);
  
    const serviceID = "service_18nsgrs";
    const templateID = "template_5nel0zc";
  
    emailjs.send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log("Email sent successfully. Response:", res);
        alert("Message sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Error sending message. Please try again later.");
      });
  }
  