import React from 'react'

export default function Signup() {
    return (
        <section id="FirstPart">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 LogoPart">
                    <img src="Images/HospitalLine 1.png" class="img-fluid center" alt="Hospital Line Logo"/>
                    <img src="Images/Group 2.png" class="img-fluid design" alt="Design"/>
                </div>
                <div class="col-md-4 text-center RightSide3">
                    <h1 class="SubText3">Signup for Account</h1>
                    <h2 class="SubText4">Personal Information</h2>
                    <p class="True">Please make sure all the details is true and correct</p>
                    <form class="ThirdForm">
                        <div class="form-row mx-auto">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control ThirdInput" id="Firstname" placeholder="First Name"/>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control ThirdInput" id="Lastname" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div class="form-group mx-auto">
                            <input type="text" class="form-control Adjust" id="Mobile" placeholder="Mobile Number"/>
                        </div>
                        <div class="form-group mx-auto">
                            <input type="email" class="form-control Adjust" id="EmailAdd" placeholder="Company Email Address"/>
                        </div>
                          <a class="btn btn-primary btn-lg Loginbtn" href="WorkDetails.html">Next</a>
                          <p class="Direct">Already have an account? <a href="Login.html" class="Direct">Sign In</a></p>
                    </form>

                </div>

            </div>
        </div>
    </section>
    )
}
