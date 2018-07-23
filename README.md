# KIND_WebPortal
Developing a webportal to support KIND non-profit. Sponsored by Microsoft Hackathon.

This app utilizes [Ionic](https://ionicframework.com/), a framework for hybrid mobile app development. It uses Angular and allows for deploying apps to iOS and Android devices.

You will first need to install [Node and npm](https://nodejs.org/en/download/) (packaged together). To verify the installation, type the following commands into a terminal prompt:

<code>
node --version 

npm --version
</code>

Once Node and npm are installed, use the following command to install the Ionic CLI:

<code>
npm install -g ionic
</code>

If you have an Ionic account, you can also login and take advantage of Ionic Pro features with the following command:

<code>
ionic login
</code>

To run the app, cd into your app's directory (myApp in this case) and type:

<code>
ionic serve
</code>

# Deliverable #1: landing page with helpful documents for the children and attorneys
User Scenario:

* Kids: kids often do not have enough information about the process and hence may not feel comfortable or be able to navigate the process of the proceedings well

* Attorneys go through ramp-up process because they may be new to immigration and deportation cases

User goals:

* KIND employees and attorneys:

o Add content easily

* Kids and attorneys:

o Discover content easily that is relevant to them

o Consume content easily


# Deliverable #2: Enable interaction between pro bono attorneys, KIND employees, and children
User scenario: These three entities need to interact with each other need to have an easy way to communicate with each other to discuss the cases and insights into the process. Use cases include 1 to 1, 1 to many, and many to many communication possibilities. High touch communication is very important to be able to convey a human touch and add comfort for children and attorneys.

User goals:

* All entities:

o Should be able to search for the right person to reach out to, whether it is by name or type or experience (for example, an attorney should be able to search for the right KIND employee to reach out to for onboarding)

o Should be able to communicate with one or more persons via text, voice, or video

o Should be able to make announcements or ask questions to a larger group, like a broadcast

o Should be able to schedule voice or video calls with one or more persons


# Deliverable #3: Integration with LegalServer to have one-way information pull possible for attorneys
User scenarios: Attorneys have a pain point today that any information they need from LegalServer, they have to obtain by contacting KIND employees directly to ask for data or insights. There is a lot of

standard and case-specific information that may be available on LegalServer that the attorneys may be interested in consuming

User goals:

1. Case management

a. Attorneys:

i. Get case package

ii. Search for content easily

iii. Consume content easily

iv. Get notifications about calendar milestones (if these are implemented on LegalServer)

v. Add information about case such as legal insights, important milestones, next steps and have that populated in LegalServer

2. Login to LegalServer

a. Attorneys and KIND employees

i. Login to their LegalServer account

ii. Navigate the LegalServer portal from within Teams
