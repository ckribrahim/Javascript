const ocPrivacy = new bootstrap.Offcanvas('#ocPrivacy');

const isPrivaryPolicyAccepted = localStorage.getItem("privacy-policy");
!isPrivaryPolicyAccepted && ocPrivacy.show();



document.getElementById("btnAcceptPrivacy").addEventListener("click", ()=>{
    localStorage.setItem("privacy-policy", true);
    ocPrivacy.hide();
})