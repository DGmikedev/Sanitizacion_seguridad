
export const formulario3 = {
    Url:"https://www.zoho.com/commerce/free-demo.html", // url form
    name: "//form[@id='z_crmwebform_1']//input[@id='zcf_reported_by_1']", // Name * 
    email: "//form[@id='z_crmwebform_1']//input[@id='zcf_email_1']", // Business Email Address * 
    phone: "//form[@id='z_crmwebform_1']//input[@id='zcf_phone_1']", // Phone * 
    sellOnline: "//form[@id='z_crmwebform_1']//select[@id='zcf_users_1']", // Do you sell online? * 
    lookingFor: "//form[@id='z_crmwebform_1']//input[@id='zcf_achieve_1']",// Let us know what you're looking for *
    captcha: "//form[@id='z_crmwebform_1']//input[@id='zcf_enterdigest_1']",// Enter captcha code *
    submit: "//form[@id='z_crmwebform_1']//button[@id='zcf_submit_1']",// Submit
    // --- Campos ocultos o internos ---
    subject: "//form[@id='z_crmwebform_1']//input[@id='zcf_subject_1']",// Subject (hidden)
    zohoService: "//form[@id='z_crmwebform_1']//input[@id='zcf_zoho_service_1']",// Zoho Service (hidden)
    signupUrl: "//form[@id='z_crmwebform_1']//input[@id='zcf_signup_url_1']",// Signup URL (hidden)
    country: "//form[@id='z_crmwebform_1']//select[@id='zcf_address_country_1']",// Country (hidden)
    state: "//form[@id='z_crmwebform_1']//select[@id='zcf_state_1']"// State (hidden)
}