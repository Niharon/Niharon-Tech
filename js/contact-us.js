function sendEmail() {

    var temParamsx = {
        to_name: "webdesk inc",
        from_name: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
        message: "phone : " + document.getElementById("Phone_no").value + " email : " + document.getElementById("email_id").value + " Message : " + document.getElementById("msg").value,
    };



    emailjs.send('service_u3shbvj', 'template_pw0963s', temParamsx, 'user_tddYoZg4Dc7m2gTSX0C0C')
        .then(function () {
            swal("Done!", "Message Sent Successfully!", "success");
            document.getElementById("cntForm").reset();
        }, function () {
            swal("Opps!", "Something Went Wrong", "warning");
        });


    // console.log(temParamsx);//
    


}

// window.onload = function () {
document.getElementById("cnt-submit-btn").
    addEventListener('click', () => {
        sendEmail();
    })

// }

