

var keynoteData = {
  speakers: [
    { name: "Venkat Rangan", imageURL: "assets/images/speakers/venkat.jpg", title: "Microsoft Regional Director" },
    { name: "Srinivasan Panchapakesan", imageURL: "assets/images/speakers/srini.jpg", title: "SENIOR VICE PRESIDENT & GLOBAL HEAD - ATM BUSINESS & H&I DELIVERY - Hexaware" }
  ]
};

var featuredSpeakerData = {
  featuredSpeakers: [

    { name: "Ilyas", imageURL: "assets/images/speakers/ilyas.jpg", title: "Microsoft MVP, Organizer", linkedin: "https://www.linkedin.com/in/ilyasf/", facebook: "#", twitter: "https://twitter.com/ilyas_tweets" },
    { name: "Karthikeyan VK", imageURL: "assets/images/speakers/karthik.jpg", title: "Microsoft MVP, Organizer", linkedin: "https://www.linkedin.com/in/karthikeyan-vk-27508254/", facebook: "#", twitter: "https://twitter.com/karthik3030" },
    { name: "Saumya Venkataraman", imageURL: "assets/images/speakers/saumya.png", title: "Principal Program Manager, Microsoft", linkedin: "https://www.linkedin.com/in/saumya-venkataraman-5273418/", facebook: "#", twitter: "https://twitter.com/VSTS" },
    { name: "Murugadoss Balasubramanian", imageURL: "assets/images/speakers/murugadoss.jpg", title: "Founder, IoT Geeks | Team Leader, Caterpillar Inc", linkedin: "https://www.linkedin.com/in/murugadossb", facebook: "#", twitter: "#" },
    { name: "Ravikumar Sathyamurthy", imageURL: "assets/images/speakers/shakthiravi.jpg", title: "Microsoft MVP", linkedin: "https://www.linkedin.com/in/ravikumar-sathyamurthy", facebook: "#", twitter: "https://twitter.com/ShakthiRavi" },
    { name: "Rakesh", imageURL: "assets/images/speakers/rakesh.jpeg", title: "Architect, TCS", linkedin: "#", facebook: "#", twitter: "#" },
    { name: "Sathish Nadarajan", imageURL: "assets/images/speakers/sathishnadarajan.png", title: "Microsoft MVP, SharePoint Architect", linkedin: "https://www.linkedin.com/in/sathishnadarajan/", facebook: "#", twitter: "https://twitter.com/contactsathish" },
    { name: "Vaishnavi Jayakumar", imageURL: "assets/images/speakers/vaishnavi.png", title: "Consultant, Thoughtworks ", linkedin: "https://www.linkedin.com/in/vaishnavi-jayakumar", facebook: "#", twitter: "https://twitter.com/vaishnavi3490" },
    { name: "Sajani Deepa J", imageURL: "assets/images/speakers/sajani_001.png", title: "Senior Application Developer, Thoughtworks ", linkedin: "https://www.linkedin.com/in/deepasaj/", facebook: "#", twitter: "https://twitter.com/SajaniDeepa" },
    { name: "Dinesh Kumar Prabakaran", imageURL: "assets/images/speakers/dineshkumar.png", title: "Team Lead at Syncfusion Software Inc.", linkedin: "https://www.linkedin.com/in/dineshkumar-prabakaran-b95a6656/", facebook: "#", twitter: "https://twitter.com/Dinuswt22" },
    { name: "Sarthak Mahapatra", imageURL: "assets/images/speakers/sarthakmahapatra.jpg", title: "Xebia, Principle Consultant ", linkedin: "https://www.linkedin.com/in/msarthak/", facebook: "#", twitter: "https://twitter.com/sarthakm" },
    { name: "Akanksha Sharma", imageURL: "assets/images/speakers/akankshasharma.jpg", title: "Microland", linkedin: "https://www.linkedin.com/in/akankshasharmaiitg", facebook: "#", twitter: "https://twitter.com/Akanksha1012" },
    { name: "Saravanan Ganesan", imageURL: "assets/images/speakers/sarvn.jpg", title: "Cognizant", linkedin: "https://in.linkedin.com/in/saravanan-ganesan-23705a47", facebook: "#", twitter: "#" },
    { name: "Krishnanand Sivaraj", imageURL: "assets/images/speakers/krishnanandsivaraj.jpg", title: "Lead Engineer, Sofycrylic", linkedin: "https://www.linkedin.com/in/krishnanand-sivaraj-a07499b9", facebook: "#", twitter: "https://twitter.com/krishnanandsiva?s=09" },
    { name: "Archana B", imageURL: "assets/images/speakers/archana.jpeg", title: "Dev Consultant, Thoughtworks", linkedin: "https://in.linkedin.com/in/archana-balasundaram-a51432bb", facebook: "#", twitter: "https://twitter.com/Archana_B18" },
    { name: "Sukanya", imageURL: "assets/images/speakers/sukanya.jpg", title: "Dev Consultant, Thoughtworks", linkedin: "https://www.linkedin.com/in/sukanya-suresh-059936a7/", facebook: "#", twitter: "https://twitter.com/suku1994" },
    { name: "Abhishek Mishra", imageURL: "assets/images/speakers/abhishekmishra.jpg", title: "PyZure", linkedin: "https://www.linkedin.com/in/abhishek-mishra-359b1287", facebook: "#", twitter: "https://mobile.twitter.com/StalwardGeek" },
  ]
};

var speakerData = {
  speakers: [

    { name: "Anoop Chandran Nair", imageURL: "assets/images/speakers/anoop.jpg", title: "Enterprise Mobility Expert" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/default-speaker.png", title: "Cloud and Datacenter Management Expert" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/default-speaker.png", title: "Cloud and Datacenter Management Expert" },
    { name: "Swaminathan Vetri", imageURL: "assets/images/speakers/swami.jpg", title: "" },
    { name: "Vic Parmar", imageURL: "assets/images/speakers/vic.jpeg", title: "IoT Architect", linkedin: "#", facebook: "#", twitter: "#" }
  ]
};

var allSpeakersData = {};

allSpeakersData.speakers = [];

allSpeakersData.speakers =
  keynoteData.speakers.concat(
    featuredSpeakerData.featuredSpeakers.concat(
      speakerData.speakers));
