function sendEmail() {

    var temParamsx = {
        to_name: "Niharon Technologies",
        from_name: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
        message: "phone : " + document.getElementById("Phone_no").value + " email : " + document.getElementById("email_id").value + " Message : " + document.getElementById("msg").value,
    };



    emailjs.send('service_c5etm8j', 'template_heqwhaq', temParamsx, 'c21Fne0wFGq-QfrhA')
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