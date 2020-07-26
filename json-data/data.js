
function createLink(link) {
    var x = `<a href=${link} target='_blank' style="color:#05f230">${link}</a>`
    return x;
}

const QA = [
    {
        id: "1",
        category: "About IP",
        data: [
            {
                q_id: "1",
                question: "What is IP?",
                answer: "Watch the below video<br>URL:" + createLink("https://www.youtube.com/watch?time_continue=142&v=OnKfrQrEOrk&feature=emb_logo")
            },
            {
                q_id: "2",
                question: "How to IP?",
                answer: "Watch the below video<br> URL:" + createLink("https://www.youtube.com/watch?v=Hs9npUUIg4I&feature=emb_logo")
            },
            {
                q_id: "3",
                question: "When will we get a joining letter? ",
                answer: "Joining letter to all the interns will be provided on or before the 31st of March 2020."
            },
            {
                q_id: "4",
                question: "Can we do another internship with IP?",
                answer: "Yes, you can do another internship outside of Cloud Counselage but please ensure to provide 1 hour a day or 7 hours a week for IP."
            },
            {
                q_id: "5",
                question: "When will we get an internship completion letter?",
                answer: "This is a three (3) month internship conducted in the month of March, June & July 2020. You will receive your internship experience letter in August during the convocation only if you successfully submit your Live Project."
            },
            {
                q_id: "6",
                question: "Is the induction online or offline?",
                answer: "As a precautionary measure to safeguard our intern’s health, we have decided to conduct all the inductions online."
            },
            {
                q_id: "7",
                question: "Is it okay to mention this internship as ongoing for college records?",
                answer: "Yes, we'll provide every intern a joining letter as soon as all interns are inducted."
            },
            {
                q_id: "8",
                question: "When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?",
                answer: "The dates to begin the learning paths (LP) are: -<br>"+ 
                "LP1 - 01/03/2020<br>"+
                "LP2 - 18/03/2020<br>"+
                "LP3 - 02/04/2020<br>"+ 
                "All learning Paths (LP) are expected to be completed by the interns before the first   week of June as Live Projects will begin in that time frame."                
            },
            {
                q_id: "9",
                question: "What to do when our university exams start?",
                answer: "We have provided our interns with preparatory leave from the exam season, nevertheless, you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first."
            },
            {
                q_id: "10",
                question: "I have opted for a blockchain internship, can I also learn about AI and do an internship in both?",
                answer: "You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for."
            },
            {
                q_id: "11",
                question: "Can I switch my technology now? / I had enrolled for two technologies at the time of form-filling and got selected for the technology I’m not interested in.",
                answer: " You cannot switch the technology currently. You have to continue with the one you are selected for. In the case of multiple form entries, you just got selected for one of them; the first one that you entered. You cannot make a switch right now."
            },
            {
                q_id: "12",
                question: "Can my friends still apply for the Internship Program (IP) - Maharashtra? Can we create awareness about this internship? Can we be the representative for Cloud Counselage in our college?",
                answer: "Yes, your friends can apply till the 30th of March 2020; "+createLink("https://www.cloudcounselage.com/ipmaharashtra/")+" To be a student representative of Cloud Counselage, please contact Cloud Counselage HR."
            },
            {
                q_id: "13",
                question: "Can we be a part of your future development team?/ Can we be hired by Cloud Counselage after this internship?",
                answer: "All our current interns if performing well in our internship programs can be offered an opportunity to interview for various positions in Cloud Counsealge. Many of our now full-time employees were interns in Cloud Counselage."
            },
            {
                q_id:"14",
                question:"Will you provide mentorship or doubt clearing sessions in this internship?",
                answer:"As this is an internship you’re expected to do self-learning, mentorship is not part of an internship. However, we have created forums to resolve your doubts in the form of workgroups. As an intern ensure that you are part of relevant workgroups, i.e. ‘202003 - IP’ and your resp. Technology workgroup. In case, you are not a part of these workgroups, please reach out to ‘Cloud Counselage HR’ on Bitrix24 Chat."
            },
            {
                q_id:"15",
                question:"Can we visit the office? How many times do we have to visit the office for this internship?",
                answer:"As this is an online internship you do not need to visit the offices in the duration of this internship. You will be requested to visit the Vikhroli office only once; i.e. on your internship convocation day which will be in July 2020. Nevertheless, you can visit our offices with an appointment."
            },
            {
                q_id:"16",
                question:"Can we extend this internship?",
                answer:"Yes, you can extend your internship by being part of our other online programs like, <b>‘Online Career Program’</b>."
            },
            {
                q_id:"17",
                question:"If we are working on more than one technology, are those technologies added to the certificate?",
                answer:"You are not restricted from doing the training of other technologies but you will only be given an internship certificate of the technology you’re selected for."
            },
            {
                q_id:"18",
                question:"What are the company policies for IP interns?",
                answer:"The company policies will be published on "+createLink("www.cloudcounselage.co.in/ippolicies")
            },
            {
                q_id:"19",
                question:"One of my friends had applied for the IP but she didn't receive any further updates.",
                answer:"Please ask them to send a mail to <i><b>hrsupport@cloudcounselage.in</b></i> and wait till 30th April 2020 for a reply."
            },
            {
                q_id:"20",
                question:"I didn't get my appointment letter yet.",
                answer:"If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March. Then you'll get your joining letter by 30th April 2020. If you have otherwise, please a mail to hrsupport@cloudcounselage.in or ping 'Cloud Counselage HR' in B24."
            }
        ]
    },
    {
        id:"2",
        category:"Getting started with IP",
        data:[
            {
                q_id:"1",
                question:"I just joined the group and I am not understanding what to do further. How do I start my internship?",
                answer:"Please go through the mail from which you have accepted the invite and check the task section as well."
            },
            {
                q_id:"2",
                question:"By when will we receive access to Bitrix24?",
                answer:"If you have submitted the ‘New Joinee Form’ after the 1st of March, please wait till the 31st of March to receive your access."
            },
            {
                q_id:"3",
                question:"I could not attend the induction last time, can I get an online induction again?/ I want some points said in the introduction, where can I get them.",
                answer:"We have created a separate page with a pre-recorded induction, please visit it; "+createLink("https://www.cloudcounselage.co.in/ipinduction")
            },
            {
                q_id:"4",
                question:"I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it? Will it cause any harm?",
                answer:"We have observed that there is such an attachment for a few mailing service providers like Gmail and yahoo, please ignore this attachment. It won’t cause any harm to your system."
            },
        ]
    },
    {
        id: "3",
        category: "IP training issues",
        data: [
            
            {
                q_id: "1",
                question: "Do I need to pass with the certificate in training",
                answer: "No, but please ensure you complete the training."
            },
            {
                q_id: "2",
                question: "I have complete one training, I didn't find any options to continue my training",
                answer: "Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time."
            },
            {
                q_id: "3",
                question: "I am not getting results of the training.",
                answer: "They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training"
            },
            {
                q_id: "4",
                question: "What to do after completing LP1/ LP2/ LP3?",
                answer: "Mark your task as finished and wait for the next instructions."
            },
            {
                q_id: "5",
                question: "Which Browser I should use?",
                answer: "Google Chrome is recommended."
            },
            {
                q_id: "6",
                question: "Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?",
                answer: "It's preferred if you complete the LP1 training in 2 weeks but not mandatory. LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that doesn't mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP)."
            },
            {
                q_id: "7",
                question: "Can we skip any training if we are already clear with the basics?",
                answer: "No, these pieces of training will cover basics and there is no harm in brushing up your skills before you start with the assignments later."
            },
            


        ]
    },
    {
        id: "4",
        category: "Accessing website/training/quiz",
        data: [
            
            {
                q_id: "1",
                question: "I tried it 3-4 times and have to enter token each time I visit it.",
                answer: "We understand that it sometimes becomes tedious to access the training and we highly appreciate your support in making the training possible. We only do this for security reasons and we're trying to find a way to minimise the token use. For now, please note that in LP1 there are 3 types tokens:"+
                "<br>1. One for each technology, you're a part of."+
                "<br>2. The lp1 home page."+
                "<br>3. The 6 tokens (one for each step)"
            },
            {
                q_id: "2",
                question: "I am not able to view a page/ I am logged in the training and still the website asks me to login",
                answer: "This could be because of some issue in the cookies or extension in your browser. Please try again with a different browser or open the tab with incognito mode. Also, you don't need to record your results, the quizzes are only for your knowledge check and not a metric to score you."
            },
            {
                q_id: "3",
                question: "Resource links not working. What to do? Should we skip?",
                answer: "Please do not skip any piece of training, in case you're not able to access any link please message to Cloud Counselage HR and drop an email to hrsupport@cloudcounselage.in regarding the same."
            },
            {
                q_id: "4",
                question: "How do I access my quiz?",
                answer: "As mentioned in the video: -"+
                "<br>Step1: Go to lp1 module"+
                "<br>Step2: Select module"+
                "<br>Step3: Put token (it will direct you to the home screen if the token is correct)"+
                "<br>Step4: Again go to lp1 module n select that module"+
                "<br>Step5: You will get the access by now"+
                "<br>Step6: Register there (each time for every module)"+
                "<br>Step7: Give the quiz"+
                "<br>Step8: Logout"
            },
            {
                q_id: "5",
                question: "I  am getting an error:: Exception: SQLSTATE[HY000]: General error: 1 no such table: layout, what should I do?",
                answer: "This is due to many webpages opened, please close your browser and try again or you can open a new incognito tab and try again."
            },           


        ]
    },
    {
        id: "5",
        category: "About LP1/LP2",
        data: [
            
            {
                q_id: "1",
                question: "Not able to access the LP1 page with my token/ When I put my token it redirects me to the home page/ Getting error while accessing the page- 'User Not Found'/Website Redirection Issue/Tokens not working.",
                answer: "Please watch the videos shared with the invite and you should not face any problems in accessing the training. Please follow the protocol shown in the videos."
            },
            {
                q_id: "2",
                question: "Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?",
                answer: "Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you'll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode."
            },
            {
                q_id: "3",
                question: "I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do?/ Tokens not working",
                answer: "For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode."
            },
            {
                q_id: "4",
                question: "I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task",
                answer: "Ensure you're using the right token"
            },
            {
                q_id: "5",
                question: "What do I do after completing the quiz? how to complete the entire lp1",
                answer: "There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin."
            },
            {
                q_id: "6",
                question: "Do I need to register every time I do different tasks of lp1?",
                answer: "There are codes in the LP1 assignment, and each time you have to register also, please check your task description."
            },
            {
                q_id: "7",
                question: "Unable to access the quiz",
                answer: "Please retry after some time in an incognito window"
            },
            {
                q_id: "8",
                question: "Can you help me by telling how can I get to know about my progress of LP 1",
                answer: "There is no metric to score your progress in any learning paths as it will be at a different pace for every individual."
            },
            {
                q_id: "9",
                question: "What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level?",
                answer: ") The main focus of LP2 is to provide you with a basic foundation of the technology you're interested in. The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start your study for the selected technology and in no terms is the only/ final training you should look into. Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice."
            },
            {
                q_id: "10",
                question: "Is it necessary to attend LP1 for other domains as well if we want to take its training. ",
                answer: "LP1 training is common across all the technologies"
            },
            {
                q_id: "11",
                question: "Why only this training for LP2?",
                answer: ") They are our training partners and we have handpicked this training to cover a certain topic for you. These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point."
            },
            {
                q_id: "12",
                question: "Could I have done this training from other websites/ resources?",
                answer: ") Yes, you could have but the reason to have these videos is to keep an enclosed environment for you to watch these tutorials without distractions with quizzes and forums for you to discuss in. As mentioned earlier, our main aim is to provide you with a starting point and baseline for the technology of your choice."
            },
            {
                q_id: "13",
                question: "Can I do certification for the training provided in LP2? ",
                answer: "Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at 'no profit no loss' basis for Cloud Counselage, that we receive from the partnership. Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to hrsupport@cloudcounselage.in."
            },
            {
                q_id: "14",
                question: "The videos of LP2 are taking too much time to load.",
                answer: "We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more; depending on your computer's RAM and internet connection."
            },
            {
                q_id: "15",
                question: "Are LP1/ LP2/ LP3 a part of the Live Project?",
                answer: "LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship."
            },

        ]
    },
    {
        id: "6",
        category: "About LP3",
        data: [
            
            {
                q_id: "1",
                question: "What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?",
                answer: "LP3 will be assignment based and its execution and content vary from technology to technology. This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers."
            },
            {
                q_id: "2",
                question: "What to do after LP3?",
                answer: "You'll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June."
            },
            {
                q_id: "3",
                question: "What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects? ",
                answer: "Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2."
            },
            {
                q_id: "4",
                question: "Live Project/ LP3 has to be submitted individually or it will be a group project? ",
                answer: "All the LP3/  Live Projects are on an individual scale."
            },
            {
                q_id: "5",
                question: "Are LP1/ LP2/ LP3 a part of the Live Project?",
                answer: "LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship."
            },
            {
                q_id: "6",
                question: "Where do we push the code in LP3?",
                answer: "Please push you to code in a public repo of your GitHub account if required by your LP3 assignment."
            },
            {
                q_id: "7",
                question: "Where should we share our hacker rank id/ where should we share the link/ anything relate to LP3 assignment submission?",
                answer: "For now, please concentrate on completing the task. We will ask all the interns to submit their work in the first week of June. Ensure you make it up to the mark till then as there would be no extension given that time."
            },
            {
                q_id: "8",
                question: "I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?",
                answer: "As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)"
            },
            {
                q_id: "9",
                question: "I have a query with respect to LP3, what should I do and whom should I ask?",
                answer: "As mentioned in the '202003-IP' workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S  in your message."
            },
            {
                q_id: "10",
                question: "For some reason, I'm unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it?",
                answer: "Since some of you are not able to download, please find the same document in your technology drive in the folder LP3. We have made an announcement in your respective technology workgroup as well, please check."
            }
        ]
    },
    
    {
        id: "7",
        category: "Bitrix24 issues",
        data: [
            {
                q_id: "1",
                question: "I m not able to access my Bitrix24 account?",
                answer: "Go to " + createLink("https://cloudcounselage24.bitrix24.com/") + "<br> On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. In case the problem persists, please write a mail to :<b><i>hrsupport@cloudcounselage.in</i></b>"
            },
            {
                q_id: "2",
                question: "What is the job profile? Will we be able to work only in the tech we have chosen for the internship?",
                answer: "Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'. Yes, you'll only work in the technology you're selected for but you can take the training of other technologies."
            },
            {
                q_id: "3",
                question: "How many workgroups will an intern be a part of?/ How many workgroups should I be in?",
                answer: "Every intern should be a part of 2 workgroups." +
                    "1. '202003-IP'  -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup." +
                    "2. '202003-IP-Technology'  -- This is a technology-specific workgroup. You'll be added to the technology you had enrolled for. For example '202003-IP-Python' for students who enrolled for python."
            },
            {
                q_id: "4",
                question: " I am not able to see my tasks.",
                answer: "Please remove the default 'In Progress' from your filter of the task section and try."
            },
            {
                q_id: "5",
                question: "What do we do in the work report?",
                answer: "As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on 'send to supervisor'."
            },
            {
                q_id: "6",
                question: "I am having trouble finding the workgroup ( no workgroup is visible)",
                answer: "Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen. To search, use the keywords, <b>202003-IP-TechnologyName</b>. Ex '<b>202003-IP-DevOps</b>'. In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups '<b>202003-IP</b>' which is a general workgroup and the other one is '<b>202003-IP-Technology</b>' which is a technology-specific workgroup."
            },
            {
                q_id: "7",
                question: "I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page",
                answer: "Please follow the instructions given in the videos or the one in the Bitrix24 mail (these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page."
            },
            {
                q_id:"8",
                question:"I had press finished button of LP1 task but want to resume the task, how to do that?",
                answer:"You can go back to that task and then click on 'More' and then 'resume' to restart that task."
            },
            {
                q_id:"9",
                question:"The web pages on mobile are not showing properly.",
                answer:"They are purposefully only configured for Desktops/ Laptops. In an emergency, you can use the 'show as desktop' mode of your browser."
            },
            {
                q_id:"10",
                question:"Is it ok to clock-out before an hour is completed if the tasks are completed? Do we need to clock-in and compulsorily complete 7 hours a week even if the tasks are completed?",
                answer:"If the tasks are completed, there is no need to clock-in and clock-out unnecessarily for hours. However, you should keep a track of all the updates of the internship being posted on the groups."
            },
            {
                q_id:"11",
                question:"Not able to see the task as not part of the IP workgroup. ",
                answer:"Please message ‘Cloud Counselage HR’ in Bitrix24 "
            },
            {
                q_id:"12",
                question:"How can we check our weekly hours? ",
                answer:"In the menu select 'time and reports' ->worktime and then you could see your worktime or click on this link once you’re logged in to Bitrix24; "+createLink("https://cloudcounselage24.bitrix24.com/timeman/timeman.php")
            },
            {
                q_id:"13",
                question:"I forgot to clock in for a few days, will this affect my internship?",
                answer:"This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now."
            },
            {
                q_id:"14",
                question:"I have not got the acknowledgment from you regarding the weekly report.",
                answer:"Once you submit your weekly report, your supervisor and the HR team shall take the cognizance. They would reach out to you in case of discrepancies, so you need not worry about the confirmation."
            },
            {
                q_id:"15",
                question:"In my work time I can see one exclamation mark?/ What does the remaining time mean?",
                answer:"It is showing the remaining time because it's configured for 8 working hours per day. Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week."
            },
            {
                q_id:"16",
                question:"Is it necessary to clock-in if I am done with my tasks?",
                answer:"Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, but adherence to clock-in/ clock-out policy is utterly important."
            },
            {
                q_id:"16",
                question:"Can we be online after 1 hr in a day?",
                answer:"Yes, you can be."
            },
        ]
    },
    {
        id: "8",
        category: "Live Project",
        data: [
            
            {
                q_id: "1",
                question: "What to do after Live Projects? Are we getting an offer letter/Stipend?",
                answer: "Submit your project and once it's reviewed as successful, collect your internship letter. Your internship is complete after this. There is no stipend for live projects. If your work is sublime and we have a vacancy in the position you're interested in, you may be offered a chance for interviews and can get an offer letter from Cloud Counselage Pvt. Ltd."
            },
            {
                q_id: "2",
                question: "What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects? ",
                answer: "Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2."
            },
            {
                q_id: "3",
                question: "Live Project/ LP3 has to be submitted individually or it will be a group project? ",
                answer: "All the LP3/  Live Projects are on an individual scale."
            },
            {
                q_id: "4",
                question: "Problem statements of the Live Project will be chosen by the intern or will be provided by Cloud Counselage?",
                answer: "Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation."
            },
            {
                q_id: "5",
                question: "Will Live Projects have only one technology or a mixture of technologies?",
                answer: "Live Projects will have only your part of technology even if there are multiple technologies that are a part of the project, you will be working only on the part that covers your technology."
            },
            {
                q_id: "6",
                question: "Will I get LP3 and Live project of technology other than what I am selected for?",
                answer: "No, you will receive LP3 and Live Projects of your respective technology."
            },
            {
                q_id: "7",
                question: "I have not been added to the technology I preferred to work on? ",
                answer: "We do understand that you might be interested in other technologies and are eager to learn more, but we have prescribed the technologies based on your first inputs and cannot change your base technology. Nevertheless, you do have the opportunity to go through the training of all the technologies."
            },
            {
                q_id: "8",
                question: "Live project's use case will be provided or can we have our own use case?",
                answer: "Live project's use case will strictly be provided by Cloud Counselage and you cannot choose your own use case."
            },
            {
                q_id: "9",
                question: "I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?",
                answer: "As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)"
            },
            {
                q_id: "10",
                question: "When will the step 3 of the internship program start?",
                answer: "Hope you and your family are in the best of health given the current scenario and you are making the most of your time through the 'Internship Program' by Cloud Counselage.According to the schedule of this internship program, some of you must have completed steps 1 and 2 of your internship and some of you must be in the process of completing step 2."+
                "<br>Please note that as per the program schedule "+createLink("https://www.cloudcounselage.com/ipmaharashtra/")+", the following are the dates for entering step 3, wherein interns take preparatory leaves for exams:a) 16th April 2020 - access given before 31st March 2020<br>b) 01st May 2020 - access given after 31st March 2020. Kindly note that we are in touch with the DTE - Maharashtra for the exam schedules of various universities in Maharashtra and the start of step 4 will be announced accordingly via individual email and our social media pages."+
                "<br>While step 3 is in progress, you do not need to login to Bitrix24 or submit your timesheet until you are in step 4.<br>All the best and please stay safe! See you soon in step 4."
            },


        ]
    },
    {
        id: "9",
        category: "Tasks for interns",
        data: [            
            {
                q_id: "1",
                question: "I am trying to complete social media tasks. I completed that day and clicked finish but it didn't show finished in the task menu. What should I do?",
                answer: "Our team will verify and then only your task shall be accepted as completed. Please wait till the verification's complete."
            },
            {
                q_id: "2",
                question: "My Efficiency is 0% what should I do?",
                answer: "Ensure that you have clicked ‘Start’ when you resume a task, the ‘Finish’ button gets active only after the task is started. Once you complete the task you can then click on ‘Finish’ and then the efficiency is updated in the system. However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis."
            },
            {
                q_id: "3",
                question: "Can I just finish the task that you have just uploaded as I have attended the live induction session on 22nd of march",
                answer: "Yes. Although, you can always revisit the induction so that you can review what has been said in it."
            },
            {
                q_id: "4",
                question: "When will my review on social media update task be done?",
                answer: "We will review this task in May 2020."
            },
            {
                q_id: "5",
                question: "If my technology is IOT/ AI/ ML/ etc., do I still have to complete the mandatory training for LP1 'Cloud Computing'?",
                answer: "Yes, you'll need to complete the mandatory training as cloud computing is fundamental to many technologies and this additional knowledge will help you in your career."
            },
        ]
    },
    
];

module.exports = QA;


