// DOM Elements
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const authContainer = document.getElementById("auth-container");
const authForm = document.getElementById("authForm");
const formHeader = document.getElementById("form-header");
const toggleText = document.getElementById("toggle-text");
const toggleLink = document.getElementById("toggle-link");
const emailField = document.getElementById("email");
const emailLabel = document.getElementById("email-label");
const submitBtn = document.getElementById("submit-btn");
const message = document.getElementById("message");
const dynamicButtons = document.getElementById("dynamic-buttons");
const mainContainer = document.getElementById("main-container");
const header = document.getElementById("header");
const searchBar = document.getElementById("searchBar");
const contentSection = document.getElementById("content-section");

let isSignupMode = false;// Track if the form is in signup mode
// Show Auth Form
loginBtn.addEventListener("click", () => {
  authContainer.style.display = "flex";
});

signupBtn.addEventListener("click", () => { 
  authContainer.style.display = "flex";
  toggleToSignup();
});

// Toggle Between Login and Signup
toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isSignupMode = !isSignupMode;

  if (isSignupMode) {
    toggleToSignup();
  } else {
    toggleToLogin();
  }
});

function toggleToSignup() {
  formHeader.textContent = "Sign Up";
  emailField.style.display = "block";
  emailLabel.style.display = "block";
  toggleText.innerHTML = 'Already have an account? <a href="#" id="toggle-link">Log In</a>';
  submitBtn.textContent = "Sign Up";
}

function toggleToLogin() {
  formHeader.textContent = "Login";
  emailField.style.display = "block";
  emailLabel.style.display = "block";
  toggleText.innerHTML = "Don't have an account? <a href='#' id='toggle-link'>Sign Up</a>";
  submitBtn.textContent = "Login";
}

// Handle Form Submission
authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = emailField.value.trim();

  if (isSignupMode) {
    // Signup Logic
    if (username && password && email) {
      localStorage.setItem(username, JSON.stringify({ email, password }));
      message.style.color = "green";
      message.textContent = "Signup successful! Please log in.";
      toggleToLogin();
    } else {
      message.style.color = "red";
      message.textContent = "Please fill in all fields.";
    }
  } else {
    // Login Logic
    const user = localStorage.getItem(username);
    if (user) {
      const userData = JSON.parse(user);
      if (userData.password === password) {
        message.style.color = "green";
        message.textContent = `Welcome, ${username}!`;

        // Hide Forms and Buttons
        authContainer.style.display = "none";
        header.style.display = "none";
        mainContainer.style.display = "block";

        // Enable Search Bar
        searchBar.disabled = false;
      } else {
        message.style.color = "red";
        message.textContent = "Incorrect password.";
      }
    } else {
      message.style.color = "red";
      message.textContent = "User not found. Please sign up.";
    }
  }
});
// Festival data
const festivals = {
    Holi: {
        bgImage: "https://images.unsplash.com/photo-1587586291914-bdbe84ec1416?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your actual URL
        images: [
          "https://images.unsplash.com/photo-1551757891-24a8dabd2708?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1553334490-011441d86dbb?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1617184003067-675a8191ddf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
          "Holi is an ancient Hindu festival that originated in India and Nepal and is now celebrated in many places around the world. The date changes each year depending on the full moon, but it is held some time between the end of February and the middle of March, and lasts a night and a day.Holi, the festival of colors, celebrates the victory of good over evil.",
          "Holi (Hindi pronunciation: ['hoːli:]) is a popular and significant Hindu festival celebrated as the Festival of Colours, Love, and Spring.It celebrates the eternal and divine love of the deities Radha and Krishna.Additionally, the day signifies the triumph of good over evil,as it commemorates the victory of Vishnu as Narasimha over Hiranyakashipu. Holi originated and is predominantly celebrated in the Indian subcontinent, but has also spread to other regions of Asia and parts of the Western world through the Indian diasporaThe celebration involves throwing colors, dancing, and feasting.",
          "Holi also celebrates the arrival of spring in India, the end of winter, and the blossoming of love.It is also an invocation for a good spring harvest season.It lasts for a night and a day, starting on the evening of the Purnima (full moon day) falling on the Hindu calendar month of Phalguna, which falls around the middle of March in the Gregorian calendar.Holi signifies the arrival of spring and unity among communities."
        ],
        activities: [
            "Pooja (Holi prayers) - Requirements: Incense sticks, flowers, offerings",
            "Playing with colors - Using gulal and water balloons",
            "Water fights - Water balloon fights and squirt guns",
            "Dancing to Holi songs - Traditional and modern music",
            "Feasting - Special sweets like Gujiya and Thandai"
          ]
      },
      Diwali: {
        bgImage: "https://images.unsplash.com/photo-1577083753695-e010191bacb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1633368516165-f7b04d6428d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1718476971217-677d43112daa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
        ],
        description: [
          "Diwali (English: /dɪˈwɑːliː/), also called Deepavali (IAST: Dīpāvalī) or Deepawali (IAST: Dīpāwalī),is the Hindu festival of lights, with variations celebrated in other Indian religions such as Jainism and Sikhism.[a] It symbolises the spiritual victory of Dharma over Adharma, light over darkness, good over evil, and knowledge over ignorance.Diwali is celebrated during the Hindu lunisolar months of Ashvin (according to the amanta tradition) and Kartika—between around mid-September and mid-November.The celebrations generally last five or six days..",
          "Primarily a Hindu festival, variations of Diwali are also celebrated by adherents of other faiths. The Jains observe their own Diwali which marks the final liberation of Mahavira. The Sikhs celebrate Bandi Chhor Divas to mark the release of Guru Hargobind from a Mughal prison. Newar Buddhists, unlike other Buddhists, celebrate Diwali by worshipping Lakshmi, while the Hindus of Eastern India and Bangladesh generally celebrate Diwali by worshipping the goddess Kali",
          "Diwali is connected to various religious events, deities and personalities, such as being the day Rama returned to his kingdom in Ayodhya with his wife Sita and his brother Lakshmana after defeating the demon king Ravana.It is also widely associated with Lakshmi, the goddess of prosperity, and Ganesha, the god of wisdom and the remover of obstacles. Other regional traditions connect the holiday to Vishnu, Krishna, Durga, Shiva, Kali, Hanuman, Kubera, Yama, Yami, Dhanvantari, or Vishvakarman."
        ],
        activities: [
            "Lighting diyas and candles,",
            "Creating rangoli,",
            "Sharing sweets and gifts, ",
            "Watching firework displays, ",
            " Praying to Lakshmi and Ganesh."
          ]
      },
      Onam: {
        bgImage: "https://images.unsplash.com/photo-1691075220591-035b2a9a06f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1691075219397-9dc8bd8dd12f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1716714607603-8aa6a2f16d84?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1681794702196-914d70e7cd65?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
          "Onam commemorates the return of the generous daitya king Mahabali after he was banished to the netherworld by Vamana (the fifth avatar of Hindu deity Vishnu).According to the Hindu legends, after Indra (the king of the devas) is defeated by Mahabali (the king of the asuras), the devas ultimately seek refuge in Vishnu, who agrees to restore Indra to power. To do so, Vishnu incarnates as a dwarf priest called Vamana. The king Mahabali (himself a devotee of Vishnu) conducts ritual prayers, one of which is attended by Vamana, who requests only three feet (steps) of land to build a fire-altar. Mahabali agrees, despite being told about Vamana's divine nature by the sage Shukra",
          "Vamana grows in size, and in three strides, encompasses all of the universe and beyond. The three worlds are restored to Indra, and Mahabali and the asuras are banished to the netherworld (Patala). However, witnessing Mahabali's love for his subjects, Vamana grants the king's sole wish to visit his kingdom once every year. This homecoming of Mahabali is celebrated as Onam in Kerala every year..",
          "The date of Onam celebration is based on the Panchangam, and falls on the 22nd nakshatra Thiruvonam in the month Chingam of Malayalam calendar, which in Gregorian calendar falls between August–September."
        ],
        activities: [
            "Creating Pookalam (flower rangoli), ",
            "Enjoying Onam Sadya (feast)",
            "Watching Vallam Kali (boat race)",
            "Performing Thiruvathira Kali (folk dance)",
            "Participating in Onapottan (comic performance"
          ]
      },
      Pongal: {
        bgImage: "https://media.licdn.com/dms/image/v2/D4E12AQHSx7Ri88AN4A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705306163826?e=2147483647&v=beta&t=Fwj8j0xtLbrvQPQjIqiWnb9reIwwqCDIxO6-HCODDuk",
        images: [
          "https://www.dagadevelopers.com/media/blog/full/2024/3/65fa684de013a_1710909517.webp",
          "https://www.holidify.com/images/cmsuploads/compressed/Office_Pongal_celebration_20190206155822jpg",
          "https://i2.wp.com/www.ujwalasdelicacies.com/wp-content/uploads/2016/01/fire-3010102_1280.jpg?resize=1080%2C834&ssl=1"
        ],
        description: [
          "Sankranti is marked as the beginning of a month in the sidereal solar calendars followed in South Indian states: Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Karnataka; Himalayan states: Jammu region, Himachal Pradesh, Uttarakhand, North Punjab and states of Eastern India: Odisha, Mithila region of Bihar and Nepal.",
          "Makar Sankranti: Marks the transition of the Sun into Makara Râshi (Capricorn) on its celestial path, and the six-month Uttarayana period.[2] Makar Sankranti is also called Uttarayana - the day on which the sun begins his northward journey. The traditional Indian calendar is based on lunar positions, Sankranti is a solar event. The date of Makar Sankranti remains constant over a long term, 14 January or occasionally, 15 January as the Sun begins to rise in Makara Râshi.",
          "Each Sankranti is marked as the beginning of a month in the sidereal solar calendars followed in South Indian states: Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Karnataka; Himalayan states: Jammu region, Himachal Pradesh, Uttarakhand, North Punjab and states of Eastern India: Odisha, Mithila region of Bihar and Nepal. On the other hand, in the sidereal solar Bengali calendar and Assamese calendar, a Sankranti is marked as the end of each month and the day following as the beginning of a new month."
        ]
        ,activities: [
            "Playing with colors - Using gulal and water balloons",
            "Water fights - Water balloon fights and squirt guns",
            "Dancing to Holi songs - Traditional and modern music",
            "Feasting - Special sweets like Gujiya and Thandai"
          ]
      },
      Dussehra: {
        bgImage: "https://images.unsplash.com/photo-1547366868-f5d6fab0440f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1606293926980-ff0313a65624?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1666264474951-7e9c7f004e21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1622279488670-123d0fd161cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
          "Vijayadashami (Sanskrit: विजयादशमी, romanized: Vijayadaśamī), more commonly known as Dassahra in Hindi-Urdu,[a] and also known as Dashāhra or Dashain in Maithili and Nepali, is a major Hindu festival celebrated every year at the end of Durga Puja and Navarahtri. It is observed on the tenth day of the month of Ashvin, the seventh in the Hindu lunisolar calendar. The festival typically falls in the Gregorian calendar months of September and October, more specifically between 27 September and 26 October. It is celebrated on the tenth day of the waxing moon (Shukla Paksha) of the Ashvayuja month.Diwali, the Festival of Lights, marks the triumph of light over darkness.",
          "Vijayadashami is observed for different reasons and celebrated differently in various parts of India and Nepal.In the southern, eastern, northeastern, and some northern states of India, Vijayadashami marks the end of Durga Puja, commemorating goddess Durga's victory against Mahishasura to restore and protect dharma.In the northern, central, and western states, it marks the end of Ramlila and commemorates the deity Rama's victory over Ravana.Alternatively, it marks a reverence for one of the aspects of Durga.Houses are decorated with diyas, candles, and rangoli.",
          "Vijayadashami celebrations include processions to a river or ocean front that involve carrying clay statues of Durga,Lakshmi, Saraswati, Ganesha, and Kartikeya, accompanied by music and chants, after which the images are immersed in the water for dissolution and farewell. In other places, towering effigies of Ravana, symbolising evil, are burnt with fireworks, marking evil's destruction. The festival also starts the preparations for Diwali, the important festival of lights, which is celebrated twenty days after Vijayadashami.The festival signifies prosperity and the return of Lord Rama to Ayodhya."
        ],
        activities: [
            "Burning effigies of Ravana",
            "Performing Ram Leela",
            "Visiting temples, ",
            "Shopping for new clothes,",
            ". Offering prayers to Goddess Durg"
          ]
      },
     Eid  : {
        bgImage: "https://plus.unsplash.com/premium_photo-1689061987936-e41e532d2a47?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://plus.unsplash.com/premium_photo-1661964206630-6f0e8b767348?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1590100344239-45ac4a6e0ec0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1562442507-cfa3c80f9c03?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
        " Eid al-Fitr (/ˌiːd əl ˈfɪtər, -trə/ EED əl FIT-ər, -⁠rə; Arabic: عيد الفطر, romanized: ʿĪd al-Fiṭr, IPA: [ʕiːd al ˈfɪtˤr]) is the earlier of the two official holidays celebrated within Islam (the other being Eid al-Adha). Eid al-Fitr is celebrated by Muslims worldwide because it marks the end of the month-long dawn-to-dusk fasting of Ramadan.Eid al-Fitr falls on the first day of Shawwal in the Islamic calendar; this does not always fall on the same Gregorian day, as the start of any lunar Hijri month varies based on when the new moon is sighted by local religious authorities. The holiday is known under various other names in different languages and countries around the world. ",
          "The day is also known as the First Eid or as the Lesser Eid (Arabic: العيد الصغير, romanized: al-ʿĪd al-Ṣaghīr) by some Muslim communities.Eid al-Fitr has a particular salah that consists of two rakats generally performed in an open field or large hall. It may only be performed in congregation (jamāʿat) and features seven additional Takbirs (raising of the hands to the ears whilst reciting the Takbir, saying Allāhu ʾAkbar, meaning God is the greatest. In the Hanafi school of Sunni Islam, there are three Takbirs at the start of the first rakat and three just before rukūʿ in the second rakat.[7] Other Sunni schools usually have 12 Takbirs, similarly split in groups of seven and five.",
        "In Shia Islam, the salat has six Takbirs in the first rakat at the end of Tilawa, before rukūʿ, and five in the second tikDepending on the juristic opinion of the locality, this salat is either farḍ (فرض, obligatory) or mustaḥabb (strongly recommended). After the salat, Muslims celebrate the Eid al-Fitr in various ways with food being a central theme,which also gives the holiday the nickname Sweet Eid or Sugar Feast"
      ],
      activities: [
        " Offering prayers (namaz) at the mosque",
        "Visiting family and friends,",
        "Exchanging gifts,",
        "Enjoying delicious food (seviyan, biryani),",
        " Donating to charity"
      ]
      },
      Ramadan: {
        bgImage: "https://plus.unsplash.com/premium_photo-1676232732108-27c7ff6dc5cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://plus.unsplash.com/premium_photo-1676208754544-f68a9492d2c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1574246604907-db69e30ddb97?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1573939705721-9fa2cdcda901?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
          "Ramadan is the month on which the Quran was revealed as a guide for humanity with clear proofs of guidance and the standard ˹to distinguish between right and wrong˺. So whoever is present this month, let them fast. But whoever is ill or on a journey, then ˹let them fast˺ an equal number of days ˹after Ramaḍân˺. Allah intends ease for you, not hardship, so that you may complete the prescribed period and proclaim the greatness of Allah for guiding you, and perhaps you will be grateful.",
          "Fasting from dawn to sunset is obligatory (fard) for all adult Muslims who are not acutely or chronically ill, travelling, elderly, breastfeeding, diabetic, pregnant, or menstruating.[16] The predawn meal is referred to as suhur, and the nightly feast that breaks the fast is called iftar.[17][18] Although rulings (fatawa) have been issued declaring that Muslims who live in regions with a midnight sun or polar night should follow the timetable of Mecca,[19] it is common practice to follow the timetable of the closest country in which night can be distinguished from day.",
          "Ramadan is a time of spiritual reflection, self-improvement, and heightened devotion and worship. Muslims are expected to put more effort into following the teachings of Islam. The fast (sawm) begins at dawn and ends at sunset. In addition to abstaining from eating and drinking, Muslims abstain from sexual relations[3] and sinful speech and behaviour during Ramadan. Fasting is said to redirect the heart away from worldly activities, and to cleanse the soul by freeing it from harmful impurities."
        ],
        activities: [
            " Fasting from dawn to dusk,",
            "Offering special prayers (Taraweeh),",
            "Reciting the Quran",
            "Donating to charity (Zakat)",
            " Celebrating Iftar (breaking the fast)."
          ]
      },
      Muharram: {
        bgImage: "https://example.com/diwali-bg.jpg",
        images: [
          "https://www.orissapost.com/wp-content/uploads/2023/07/Muslim-Muharram-Prayer-India.jpg",
          "https://images.cnbctv18.com/wp-content/uploads/2018/09/AP18261470174139.jpg?impolicy=website&width=640&height=360",
          "https://example.com/diwali3.jpg"
        ],
        description: [
          "Muharram (Arabic: ٱلْمُحَرَّم, romanized: al-Muḥarram) is the first month of the Islamic calendar. It is one of the four sacred months of the year when warfare is banned. It precedes the month of Safar. The tenth of Muharram is known as Ashura, an important day of commemoration in Islam. For Sunni Muslims, the day marks the parting of the Red Sea by Moses and the salvation of the Israelites, celebrated through supererogatory fasting and other acceptable expressions of joy. By contrast, Ashura is a day of mourning for Shia Muslims, who annually commemorate the death of Husayn ibn Ali, grandson of the Islamic prophet Muhammad and the third Shia imam. Husayn was killed, alongside most of his relatives and his small retinue, in the Battle of Karbala in 680 CE against the army of the Umayyad caliph Yazid ibn Mu'awiya (r. 680–683). The Shia rituals .",
          "Muharram (lit. 'sacred') is the first month of the Islamic calendar, with (at most) thirty days. Warfare in Muharram is forbidden and it has been so since before the advent of Islam.The word Muharram is short for Muharram Safar lit. 'sacred Safar', which distinguishes in the ancient Arab calendar between Safar I, which was sacred, and Safar II, which was not. Over time, however, the adjective Muharram itself became the name of the first month of the year..",
          "Tenth of Muharram is known as Ashura, an important day of commemoration in Islam. For Sunni Muslims, Ashura marks the parting of the Red Sea by Moses and the salvation of the Israelites.Also on this day, Noah disembarked from the Ark God forgave Adam, and Joseph was released from prison, among various auspicious events on Ashura in Sunni tradition.[4] Ashura is celebrated in Sunni Islam through supererogatory fasting, and also other pious acts and acceptable expressions of joy.In some Sunni communities, the annual Ashura festivities include carnivals, bonfires, and special dishes,[5even though some Sunni scholars have criticized such practices."
        ],
        activities: [
            " Mourning the martyrdom of Imam Hussain",
            "Participating in processions (matam)",
            "Self-flagellation (matam),",
            " Offering prayers and reciting Nohas."
          ]
      },
      Christmas
      : {
        bgImage: "https://images.unsplash.com/photo-1576422585159-7093c54597ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1418073067875-c5f5ba16fe75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1600167459757-fd86a69699d9?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1482433504097-a3cde62f7882?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
          "Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25[a] as a religious and cultural celebration among billions of people around the world. It is a feast central to Christianity. In the liturgical year, preparation for Christmas begins on the First Sunday of Advent (the fourth Sunday before), and it is followed by Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night. Christmas Day is a public holiday in many countries, is celebrated religiously by a majority of Christians, as well as culturally by many non-Christians, and forms an integral part of the holiday season surrounding it.",
          "There are different hypotheses regarding the date of Jesus's birth. In the early fourth century, the church fixed the date as December 25, the date of the winter solstice in the Roman calendar. It is nine months after Annunciation on March 25, also the Roman date of the spring equinox. Most Christians celebrate on December 25 in the Gregorian calendar, which has been adopted almost universally in the civil calendars used in countries throughout the world. However, part of the Eastern Christian Churches celebrate Christmas on December 25 of the older Julian calendar, which currently corresponds to January 7 in the Gregorian calendar. For Christians, believing that God came into the world in the form of man to atone for the sins of humanity rather than knowing Jesus's exact birth date is considered to be the primary purpose of celebrating Christmas.",
          "The customs associated with Christmas in various countries have a mix of pre-Christian, Christian, and secular themes and origins. Popular holiday traditions include gift giving; completing an Advent calendar or Advent wreath; Christmas music and caroling; watching Christmas movies; viewing a Nativity play; an exchange of Christmas cards; attending church services; a special meal; and displaying various Christmas decorations, including Christmas trees, Christmas lights, nativity scenes, garlands, wreaths, mistletoe, and holly. Additionally, several related and often interchangeable figures, known as Santa Claus, Father Christmas, Saint Nicholas, and Christkind, are associated with bringing gifts to children during the Christmas season and have their own body of traditions and lore."
        ],
        activities: [
            "Decorating Christmas trees",
            "Attending Christmas mass, ",
            "Exchanging gifts",
            ". Singing Christmas carols,",
            "Enjoying a festive Christmas dinner."
          ]
      },
      Easter:
       {
        bgImage: "https://images.unsplash.com/photo-1583105133796-c7c2dbd6a099?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1661600061141-3b9eebf04d4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1522774832635-430f6deecd28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
          "Easter,[nb 1] also called Pascha[nb 2] (Aramaic, Greek, Latin) or Resurrection Sunday,[nb 3] is a Christian festival and cultural holiday commemorating the resurrection of Jesus from the dead, described in the New Testament as having occurred on the third day of his burial following his crucifixion by the Romans at Calvary c. 30 AD.It is the culmination of the Passion of Jesus, preceded by Lent (or Great Lent), a 40-day period of fasting, prayer, and penance",
          "Easter-observing Christians commonly refer to the week before Easter as Holy Week, which in Western Christianity begins on Palm Sunday (marking the entrance of Jesus in Jerusalem), includes Spy Wednesday (on which the betrayal of Jesus is mourned),[12] and contains the days of the Easter Triduum including Maundy Thursday, commemorating the Maundy and Last Supper,as well as Good Friday, commemorating the crucifixion and death of Jesus. In Eastern Christianity, the same events are commemorated with the names of days all starting with Holy or Holy and Great and Easter itself might be called Great and Holy Pascha. In both Western and Eastern Christianity, Eastertide, the Easter or Paschal season, begins on Easter Sunday and lasts seven weeks, ending with the coming of the 50th day, Pentecost Sunday, but in Eastern Christianity the leavetaking of the feast is on the 39th day, the day before the Feast of the Ascension.",
          "Easter and its related holidays are moveable feasts, not falling on a fixed date; its date is computed based on a lunisolar calendar (solar year plus Moon phase) similar to the Hebrew calendar, generating a number of controversies. The First Council of Nicaea (325) established common Paschal observance by all Christians on the first Sunday after the first full moon on or after the vernal equinox.[16] Even if calculated on the basis of the Gregorian calendar, the date of that full moon sometimes differs from that of the astronomical first full moon after the March equinox."
        ],
        activities: [
            "Attending Easter mass,",
            "Decorating Easter eggs",
            "Participating in Easter egg hunts,",
            "Enjoying Easter brunc",
            "Giving Easter gifts"
          ]
      },
      Goodfriday:
       {
        bgImage: "https://images.unsplash.com/photo-1586426007064-4cd565ee1034?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1586015530974-66bba8e530ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1711739752750-91a4bba3d34f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1678313763403-8486cf8f7c60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
          "Good Friday is a Christian holy day observing the crucifixion of Jesus and his death at Calvary. It is observed during Holy Week as part of the Paschal Triduum. It is also known as Black Friday, Holy Friday, Great Friday, Good Friday of the Passion of the Lord, Great and Holy Friday (also Holy and Great Friday).",
          "Members of many Christian denominations, including the Catholic, Eastern Orthodox, Lutheran, Anglican, Methodist, Oriental Orthodox, United Protestant and some Reformed traditions (including certain Continental Reformed, Presbyterian and Congregationalist churches), observe Good Friday with fasting and church services. In many Catholic, Lutheran, Anglican and Methodist churches, the Service of the Great Three Hours' Agony is held from noon until 3 p.m.—the hours the Bible records darkness covering the land until Jesus' death on the cross.Communicants of the Moravian Church have a Good Friday tradition of cleaning gravestones in Moravian cemeteries.",
          "The date of Good Friday varies from one year to the next in both the Gregorian and Julian calendars. Eastern and Western Christianity disagree over the computation of the date of Easter and therefore of Good Friday. Good Friday is a widely instituted legal holiday around the world, including in most Western countries and 12 U.S. states.needs updatefailed verification Some predominantly Christian countries, such as Germany, have laws prohibiting certain acts—public dancing, horse racing—in remembrance of the somber nature of Good Friday."
        ],
        activities: [
            "Attending Good Friday church service,",
            ". Participating in Stations of the Cross,",
            "Fasting and prayer," ,
             "Reading the Bible,",
            "Reflecting on the crucifixion of Jesus Christ.",
            
          ]
      },
      Newyear:
       {
        bgImage: "https://images.unsplash.com/photo-1482329833197-916d32bdae74?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
        " https://images.unsplash.com/photo-1641385984912-97b6e7188eb2?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1564415337367-ce4eac97fedc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1577046847380-eaf32b2775d8?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
          "The New Year is the time or day at which a new calendar year begins and the calendar's year count increments by one. Many cultures celebrate the event in some manner.In the Gregorian calendar, the most widely used calendar system today, New Year occurs on January 1 (New Year's Day, preceded by New Year's Eve). This was also the first day of the year in the original Julian calendar and the Roman calendar (after 153 BC).",
          "Other cultures observe their traditional or religious New Year's Day according to their own customs, typically (though not invariably) because they use a lunar calendar or a lunisolar calendar. Chinese New Year, the Islamic New Year, Tamil New Year (Puthandu), and the Jewish New Year are among well-known examples. India, Nepal, and other countries also celebrate New Year on dates according to their own calendars that are movable in the Gregorian calendar.",
          "During the Middle Ages in Western Europe, while the Julian calendar was still in use, authorities moved New Year's Day, depending upon locale, to one of several other days, including March 1, March 25, Easter, September 1, and December 25. Since then, many national civil calendars in the Western World and beyond have changed to using one fixed date for New Year's Day, January 1—most doing so when they adopted the Gregorian calendar."
        ],
        activities: [
            "Attending New Year's Eve parties ",
            "Watching fireworks display",
            "Making New Year's resolutions",
            "Sending New Year's greetings",
            "Enjoying a festive dinner."
          ]
      },
      Ugadi: {
        bgImage: "https://example.com/diwali-bg.jpg",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/6/6b/A_Happy_Ugadi_puja_tray_Telugu_Hindu_New_Year_Vaisakhi.jpg",
          "https://ruralindiaonline.org/media/images/01-Ugadi-celebrations--tradition-power-and-.max-1000x500.jpg",
          "https://images.deccanherald.com/deccanherald%2F2024-04%2Fa8e65470-e82a-4b2f-98f9-aa89acf6e3d5%2FUgadi2.jpeg?w=1200"
        ],
        description: [
          "Ugadi or Yugadi, also known as Samvatsarādi (meaning beginning of the year), is New Year's Day according to the Hindu calendar and is celebrated in the Indian states of Andhra Pradesh, Telangana and Karnataka.The cycle actually consists of 60 years, each year individually named. The first day of each year is called 'Ugadi'. The word Ugadi can be split into two: Uga means Course of Stars and Adi means Starting. It is festively observed in these regions on the first day of the Hindu lunisolar calendar month of Chaitra.This typically falls in late March or early April of the Gregorian calendar.",
          "The day is observed by drawing colourful patterns on the floor called Muggulu/ Rangoli, mango leaf decorations on doors called torana, buying and giving gifts such as new clothes, giving charity to the poor, oil massages followed by special baths, preparing and sharing a special food called pachadi, and visiting Hindu temples.The pachadi is a notable festive food that combines all flavors – sweet, sour, salty, bitter, astringent and piquant.",
          "Telugu and Kannada Hindu traditions, it is a symbolic reminder that one must expect all flavors of experiences in the coming new year and make the most of them. Followers of the Souramana calendar system observe Ugadi in Karnataka, when the sun transits into the Aries Constellation, which is also the festival of Baisakhi, and is locally known as Souramana Ugadi or Mesha Sankranti."
        ],
        activities: [
            "Bath with oil and turmeric",
            "Preparing a special dish called Bevu Bella, ",
            " Offering prayers to Hindu deities,",
            "Exchanging greetings and gifts, ",
            " Watching cultural programs and performances."
          ]
      },
      Janmashtami:
       {
        bgImage: "https://images.unsplash.com/photo-1625580917212-e86139d26e1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1597237698944-f17195950882?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1674898515636-72d46dff9373?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
          ".Krishna Janmashtami (Sanskrit: कृष्णजन्माष्टमी, romanized: Kṛṣṇajanmāṣṭamī), also known simply as Krishnashtami, Janmashtami, or Gokulashtami, is an annual Hindu festival that celebrates the birth of Krishna, the eighth avatar of Vishnu. In certain Hindu texts, such as the Gita Govinda, Krishna has been identified as supreme God and the source of all avatars.[5] Krishna's birth is celebrated and observed on the eighth day (Ashtami) of the dark fortnight (Krishna Paksha) in Shravana Masa (according to the amanta tradition). According to the purnimanta tradition), Krishna's birth is celebrated on the eighth day (Ashtami) of the dark fortnight (Krishna Paksha) in Bhadrapada Masa.",
          "It is an important festival, particularly in the Vaishnavism tradition of Hinduism.The celebratory customs associated with Janmashtami include a celebration festival, reading and recitation of religious texts, dance and enactments of the life of Krishna according to the Bhagavata Purana, devotional singing till midnight (the time of Krishna's birth), and fasting (upavasa), amongst other things. Some break their daylong fast at midnight with a feastt.",
          "Krishna Janmashtami holds significant importance to Krishnaites as well as Hindus around the world, and it is celebrated in diverse forms depending on their regional and cultural customs.Hindus celebrate Janmashtami by fasting, singing, praying together, preparing and sharing special food, night vigils, and visiting Krishna or Vishnu temples. The places of Mathura and Vrindavan are visited by pilgrims. Some mandirs organize recitation of Bhagavad Gita in the days leading up to Janmashtami. Many northern Indian communities organize dance-drama events called Rasa Lila or Krishna Lila."
        ],
        activities: [
            "* Decorating homes with colorful flags and lights  ",
            " Performing Dahi Handi (breaking a pot of curd)",
            " Offering prayers to Lord Krishna, ",
            "Singing devotional songs,",
            " Enjoying a delicious feast."
          ]
      },
      Ganeshchathurti: {
        bgImage: "https://images.unsplash.com/photo-1622033494390-202df736a453?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1539014861783-7ac37e9d290c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1582541974533-e277fca1cce6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1598194809258-bc9375f063b6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: [
          "Ganesh Chaturthi (ISO: Gaṇeśa Caturthī), also known as Vinayaka Chaturthi (Vināyaka Caturthī) or Vinayaka Chavithi (Vināyaka Cavithī) or Vinayagar Chaturthi (Vināyagar Caturthī), is a Hindu festival celebrating the birthday of Hindu deity Ganesh.The festival is marked with the installation of Ganesha's murtis (devotional representations of a deity) privately in homes and publicly on elaborate pandals (temporary stages). Observances include chanting of Vedic hymns and Hindu texts, such as prayers and vrata (fasting).Offerings and prasada from the daily prayers, that are distributed from the pandal to the community, include sweets such as modak as it is believed to be a favourite of Ganesha.",
          "The festival ends on the tenth day after start, when the murti is carried in a public procession with music and group chanting, then immersed in a nearby body of water such as a river or sea, called visarjana on the day of Ananta Chaturdashi. In Mumbai alone, around 150,000 murtis are immersed annually.The festival celebrates Ganesha as the God of New Beginnings, the Remover of Obstacles and the God of Wisdom and Intelligence, and is observed throughout the Indian subcontinent by Hindus, especially in the states such as Maharashtra, Madhya Pradesh, Karnataka, Odisha, Telangana, Andhra Pradesh, Tamil Nadu and Goa, as well as Nepal",
          "Ganesh Chaturthi is also observed by the Hindu diaspora elsewhere such as in Australia, New Zealand, Canada, Singapore, Malaysia, Sri Lanka, Trinidad and Tobago, Guyana, Suriname, other parts of the Caribbean, Fiji, Mauritius, South Africa,[9] the United States, and Europe. In the Gregorian calendar, Ganesh Chaturthi falls between 22 August and 20 September every year."
           
        ],
        activities: [
            " Installing Ganesh idols at homes and pandals",
            " 2. Offering prayers and performing aarti",
            " Decorating the idols with flowers and sweets",
            "Performing Ganesh visarjan (immersion of idols)",
            "Enjoying modaks and other sweets."
          ]
      },
    };

const festivalIntroSection = document.getElementById("festival-intro");
const festivalBoxes = document.querySelectorAll(".festival-card");
const activityList = document.getElementById("activity-list");
const generateActivitiesButton = document.getElementById("generate-activities");
generateActivitiesButton.style.display ="none"

// Create Plan and Calendar Elements
const planButton = document.createElement("button");
planButton.textContent = "Create Plan";
planButton.style.display = "none";
planButton.classList.add("plan-button");
document.getElementById("activities-section").appendChild(planButton);

const datePicker = document.createElement("input");
datePicker.type = "date";
datePicker.id = "date-picker";
datePicker.style.display = "none";
datePicker.classList.add("date-picker");
document.getElementById("activities-section").appendChild(datePicker);

// Dynamic Share Tradition Button
const shareButton = document.createElement("button");
shareButton.textContent = "Share Tradition";
shareButton.id = "share-tradition-button";
shareButton.classList.add("share-button");
shareButton.style.display = "none"; // Hidden initially
document.getElementById("activities-section").appendChild(shareButton);
 
// State Variables
let isPlanCreated = false;

  // Event Listener for Search
  searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const query = searchBar.value.trim();
      const festival = festivals[query];
      if (festival) {
        // Hide festival intro and card
        if (festivalIntroSection) {
            festivalIntroSection.style.display = "none";
        }
        festivalBoxes.forEach((card) => {
          card.style.display = "none";
      });
      
        // Update background
        document.body.style.background = `url('${festival.bgImage}') no-repeat center center fixed`;
        document.body.style.backgroundSize = "cover";
  
        // Clear existing content
        contentSection.innerHTML = "";
        activityList.innerHTML = "";
  
        // Display content
        festival.images.forEach((image, index) => {
          const contentBlock = document.createElement("div");
          contentBlock.classList.add("content-block");
          contentBlock.innerHTML = `
            <img src="${image}" alt="${query}">
            <div class="text">${festival.description[index]}</div>
          `;
          contentSection.appendChild(contentBlock);
        });
  
        // Show "Generate Activities" button
        generateActivitiesButton.style.display = "block";
      } else {
        alert("Festival not found. Please try again.");
      }
    }
  });
  
  // Event Listener for Generating Activities
  generateActivitiesButton.addEventListener("click", () => {
    const query = searchBar.value.trim();
    const festival = festivals[query];
    if (festival) {
      activityList.innerHTML = ""; // Clear previous activity list
      festival.activities.forEach((activity, index) => {
        const activityItem = document.createElement("li");
        activityItem.innerHTML = `
          <input type="checkbox" id="activity-${index}" class="activity-checkbox">
          <label for="activity-${index}">${activity}</label>
          <input type="time" id="time-${index}" class="time-slot" style="margin-left: 10px;">
          <input type="checkbox" id="reminder-${index}" class="reminder-checkbox" style="margin-left: 10px;">
          <label for="reminder-${index}">Set Reminder</label>
        `;
        activityList.appendChild(activityItem);
      });
  
      // Show the plan button and date picker
      planButton.style.display = "block";
      datePicker.style.display = "block";
    } else {
      alert("Please search for a festival first.");
    }
  });
  
  // Event Listener for Create Plan
  planButton.addEventListener("click", () => {
    const query = searchBar.value.trim();
    const festival = festivals[query];
    const selectedDate = datePicker.value; // Get the selected date
  
    if (festival) {
      const selectedActivities = [];
      const checkboxes = document.querySelectorAll(".activity-checkbox");
  
      // Collect selected activities with time slots and reminders
      checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
          const timeSlot = document.getElementById(`time-${index}`).value;
          const reminderChecked = document.getElementById(`reminder-${index}`).checked;
          selectedActivities.push({
            activity: festival.activities[index],
            timeSlot: timeSlot,
            reminder: reminderChecked
          });
        }
      });
  
      if (selectedActivities.length > 0 && selectedDate) {
        // Display the plan
        const planSection = document.createElement("div");
        planSection.innerHTML = `
          <h2>Your Plan for ${query}</h2>
          <p>Date: ${selectedDate}</p>
          <ul>
            ${selectedActivities.map(item => `
              <li>
                ${item.activity} - Time: ${item.timeSlot || 'TBD'} 
                ${item.reminder ? '<strong>Reminder Set</strong>' : ''}
              </li>
            `).join("")}
          </ul>
        `;
        document.getElementById("activities-section").appendChild(planSection);
        shareButton.style.display = "block";
      } else {
        alert("Please select at least one activity, pick a date, and set a time slot to create a plan.");
      }
    } else {
      alert("Please search for a festival first.");
    }
  });
  
  // Event Listener for Share Tradition Button
  shareButton.addEventListener("click", () => {
    // Redirect to share-tradition.html
    window.location.href = "share-tradition.html";
  });