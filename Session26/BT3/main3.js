function filterValidEmails(emails) {
    return emails.filter(email => email.includes("@") && !email.includes(" "));
}

let emailList = ["caotatthanh@gmail.com", "caotatthanh.com", "go88@online.net", " Sumwin.com"];

let validEmails = filterValidEmails(emailList);
console.log(validEmails); 