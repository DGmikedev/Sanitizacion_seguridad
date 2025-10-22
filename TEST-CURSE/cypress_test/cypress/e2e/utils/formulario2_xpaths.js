// Practice Automation
// Fomrulario y url
export const formulario2 = {
    /* URL DE FORMUALRIO */
    url: 'https://practice-automation.com/form-fields/',
    /* Campos de texto  */
    Name    :'//*[@id="name-input"]',
    Password:'//input[@type="password"]',
    Email   :'//*[@id="email"]',
    Message :'//*[@id="message"]',
    /* Compos radioButton  */
    Water:'//*[@id="drink1"]',
    Milk:'//*[@id="drink2"]',
    Coffee:'//*[@id="drink3"]',
    Wine:'//*[@id="drink4"]',
    Ctrl_Alt_Delight:'//*[@id="drink5"]',
    /* Check´s */
    Red:'//*[@id="color1"]',
    Blue:'//*[@id="color2"]',
    Yellow:'//*[@id="color3"]',
    Green:'//*[@id="color4"]',
    FFC0CB:'//*[@id="color5"]',
    /* SELECT Automation */
    like_automation:'//*[@id="automation"]',
    /* options de SELECT Automation */
    empty:'//*[@id="automation"]/option[@value="default"]',
    Yes:'//*[@id="automation"]/option[@value="yes"]',
    No:'//*[@id="automation"]/option[@value="no"]',
    Undecided:'//*[@id="automation"]/option[@value="undecided"]',
    /* Button Submmit */
    Submit:'//*[@id="submit-btn"]'
}