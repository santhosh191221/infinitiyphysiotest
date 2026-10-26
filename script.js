
// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 4000);
}

// Dynamic content loading
document.querySelectorAll(".main-nav-bar a, .mobile-nav-bar a")
  .forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const section = event.target.dataset.section;
      loadContent(section);
      closeHamburgerMenu(); // auto-close hamburger on mobile
    });
  });

  const main = document.getElementById("content");
  if (main && content[section]) {
    main.innerHTML = content[section];
  }


function loadContent(section) {
    const content = {
        "about-us": `<h2>About Us</h2><p>Our team of expert physiotherapists is dedicated to helping you achieve optimal health and wellness.</p>`,
        "vision": `<section class="alt-section about-section">
  <div class="alt-content">
    <div class="alt-text">
      <h2>About Us – Infinity Physio and Rehab</h2>
      <p>
        At Infinity Physio and Rehab, we believe physiotherapy is more than treatment—it is a lifelong journey of recovery, prevention, and empowerment. 
        Born from the passion of two young physiotherapists, our aim is to make high-quality rehabilitation accessible, blending evidence-based care with compassion and innovation.
      </p>

      <h3>Our Founders</h3>
      <p>
        <strong>Dr. Keerthana, PT, MIAP (Reg. No: 69211)</strong> is the Founder of Infinity Physio and Rehab. 
        A graduate of Meenakshi College of Physiotherapy, she completed her internships at MAHER, Gericare, and Omanthurar Multi-Speciality Hospital, 
        gaining expertise across orthopaedics, geriatrics, neurology, oncology, and sports rehabilitation. 
        Currently pursuing her Master’s in Orthopaedics, she is passionate about musculoskeletal and occupational health, 
        with research focused on musculoskeletal disorders among weavers and factory workers.
      </p>

      <p>
        <strong>Dr. Tamilvasan, PT</strong> is the Co-Founder, CEO, and Chief Consultant Physiotherapist. 
        He completed his training at MAHER, NIPMED, and Omanthurar Multi-Speciality Hospital, with expertise in pediatrics, neurology, oncology, sports, and cardiology rehabilitation. 
        His research on fear of falling in the elderly reflects his interest in geriatric physiotherapy. 
        With leadership and dedication, he drives the vision of Infinity Physio and Rehab as a trusted rehabilitation brand.
      </p>

      <h3>Our Vision</h3>
      <p>
        To be a trusted leader in physiotherapy and rehabilitation, empowering individuals to achieve pain-free movement, independence, and long-term wellness, 
        while redefining recovery standards through innovation, compassion, and professional excellence.
      </p>

      <h3>Our Mission</h3>
      <ul>
        <li>Deliver comprehensive, evidence-based physiotherapy services.</li>
        <li>Empower patients through awareness, prevention, and recovery.</li>
        <li>Expand accessibility through clinics, rural camps, and community programs.</li>
        <li>Build Infinity Physio and Rehab into a premier brand in rehabilitation.</li>
      </ul>

      <h3>Our Core Values</h3>
      <ul>
        <li><strong>Compassion</strong> – treating every patient with empathy and respect.</li>
        <li><strong>Commitment</strong> – ensuring consistent and high-quality care.</li>
        <li><strong>Community</strong> – reaching people through camps and awareness programs.</li>
        <li><strong>Collaboration</strong> – continuous learning and teamwork.</li>
        <li><strong>Credibility</strong> – ethical, evidence-based, and trusted practice.</li>
      </ul>
    <br>
      </div>


    <div class="alt-image">
      <img src="about-us.jpg" alt="About Infinity Physio and Rehab">
    </div>
  </div>
</section>
`,
        "appointment": `
            <section id="appointment-section">
                <h2>Book an Appointment</h2>
                <form id="appointment-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required>
                    <label for="message">Write Your Messages (about condition and inquiries):</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    <button type="submit">Book an Appointment</button>
                </form>
                <p id="form-status"></p>
            </section>
        `,
       "our-services": `
            <h2>Our Expert Services Include</h2>
            <div class="service-list">
                <div class="service-item">
                    <h3>Geriatric Physiotherapy & Fall Prevention</h3>
                    <img src="gen.jpeg" alt="Geriatric Physiotherapy" class="service-img">
                    <p>
                        Our geriatric care program is designed to help older adults maintain their independence and mobility.
                        We focus on fall prevention, balance training, and exercises to improve strength and flexibility.
                    </p>
                    <a href="#" class="learn-more" data-service="geriatric">Learn more</a>
                </div>

                <div class="service-item">
                    <h3>Chronic Pain Management</h3>
                    <img src="gen.jpeg" alt="Chronic Pain Management" class="service-img">
                    <p>
                        We use a multidisciplinary approach to manage chronic pain, including physical therapy,
                        medication management, and lifestyle modification. Our goal is to help patients manage
                        their pain and improve their quality of life.
                    </p>
                    <a href="#" class="learn-more" data-service="chronic-pain">Learn more</a>
                </div>

                <div class="service-item">
                    <h3>Post-Surgical Rehabilitation</h3>
                    <img src="gen.jpeg" alt="Post-Surgical Rehabilitation" class="service-img">
                    <p>
                        Our post-surgical rehabilitation program is designed to help patients recover from surgery as quickly
                        and safely as possible. We create personalized rehabilitation plans that address the patient's
                        specific needs and goals.
                    </p>
                    <a href="#" class="learn-more" data-service="post-surgical">Learn more</a>
                </div>

                <div class="service-item">
                    <h3>Sports Injury Recovery</h3>
                    <img src="gen.jpeg" alt="Sports Injury Recovery" class="service-img">
                    <p>
                        We offer comprehensive treatment and rehabilitation for athletic injuries, including acute and chronic conditions.
                        Our goal is to help athletes return to their sport quickly and safely.
                    </p>
                    <a href="#" class="learn-more" data-service="sports-injury">Learn more</a>
                </div>

                <div class="service-item">
                    <h3>Neurological Rehabilitation</h3>
                    <img src="gen.jpeg" alt="Neurological Rehabilitation" class="service-img">
                    <p>
                        Our neurological rehabilitation program is designed to help patients with neurological conditions such as stroke,
                        spinal cord injury, and Parkinson's disease. We focus on improving functional abilities and promoting independence.
                    </p>
                    <a href="#" class="learn-more" data-service="neurological">Learn more</a>
                </div>

                <div class="service-item">
                    <h3>Pediatric Physiotherapy</h3>
                    <img src="gen.jpeg" alt="Pediatric Physiotherapy" class="service-img">
                    <p>
                        We provide developmental and rehabilitative services for children with conditions such as cerebral palsy,
                        developmental delay, and congenital anomalies. Our goal is to help children reach their full potential.
                    </p>
                    <a href="#" class="learn-more" data-service="pediatric">Learn more</a>
                </div>

                <div class="service-item">
                    <h3>Women's Health Physiotherapy</h3>
                    <img src="gen.jpeg" alt="Women's Health Physiotherapy" class="service-img">
                    <p>
                        Our women's health program addresses a range of concerns, including prenatal and postnatal care,
                        pelvic floor dysfunction, and osteoporosis management. We provide personalized care and education to help women manage their health.
                    </p>
                    <a href="#" class="learn-more" data-service="womens-health">Learn more</a>
                </div>

                <div class="service-item">
                    <h3>Fitness & Wellness Programs</h3>
                    <img src="gen.jpeg" alt="Fitness & Wellness Programs" class="service-img">
                    <p>
                        We offer proactive programs to promote healthy lifestyles, injury prevention, and optimal physical function.
                        Our goal is to help individuals achieve their health and wellness goals.
                    </p>
                    <a href="#" class="learn-more" data-service="fitness-wellness">Learn more</a>
                </div>

                <div class="service-item">
                    <h3>Ergonomic Solutions & Postural Correction</h3>
                    <img src="gen.jpeg" alt="Ergonomic Solutions & Postural Correction" class="service-img">
                    <p>
                        We provide workplace assessments and interventions to prevent injury, improve productivity,
                        and enhance overall well-being. Our goal is to help individuals work safely and efficiently.
                    </p>
                    <a href="#" class="learn-more" data-service="ergonomic-solutions">Learn more</a>
                </div>

                <div class="service-item">
                    <h3>Headache & Migraine Management</h3>
                    <img src="gen.jpeg" alt="Headache & Migraine Management" class="service-img">
                    <p>
                        We use a multimodal approach to manage headaches and migraines, including manual therapy,
                        exercise, and lifestyle modification. Our goal is to help patients reduce their symptoms and improve their quality of life.
                    </p>
                    <a href="#" class="learn-more" data-service="headache-migraine">Learn more</a>
                </div>
            </div>
        `,

        "reviews": `<section>
  <h3>Reviews</h3>
  <div class="review-section" style="text-align:center; margin-bottom:40px;">
    <p>See what our patients say about Infinity Physio and Rehab!</p>
    <a href="https://g.page/r/CfolFhQlZVeLEBI/review" target="_blank" class="google-review-btn">
      <img src="review.png" alt="Google Reviews" style="width:32px;vertical-align:middle;margin-right:8px;">
      Read Our Google Reviews
    </a>
    <!-- Review Slideshow -->
    <div class="review-slideshow">
      <div class="review-slide active">
        <blockquote>
          "The therapists are very professional and caring. My recovery was faster than expected!"
        </blockquote>
        <cite>- Priya S.</cite>
      </div>
      <div class="review-slide">
        <blockquote>
          "Infinity Physio and Rehab helped my father regain his mobility. Highly recommended!"
        </blockquote>
        <cite>- Ramesh K.</cite>
      </div>
      <div class="review-slide">
        <blockquote>
          "Clean clinic, friendly staff, and excellent treatment plans. Thank you!"
        </blockquote>
        <cite>- Anjali M.</cite>
      </div>
      <div class="review-slide">
        <blockquote>
          "I loved the home physiotherapy option. Very convenient and effective."
        </blockquote>
        <cite>- Suresh D.</cite>
      </div>
      <div class="review-slide">
        <blockquote>
          "Great experience! The team is knowledgeable and supportive throughout the process."
        </blockquote>
        <cite>- Kavitha P.</cite>
      </div>
    </div>
  </div>
</section>`,
        "why-choose-us": `
            <h2>Why Choose Us?</h2>
            <div class="home-highlights">
        <div class="service-item"><h3>Expertise in Geriatric Care</h3> <p>Our team includes physiotherapists with specialized training in geriatric care, ensuring that each treatment plan is customized to meet the unique needs of seniors.</div>
        <div class="service-item"><h3>Holistic Approach</h3> We prioritize not only physical rehabilitation but also mental and emotional well-being, incorporating education, guidance, and support for both patients and their families.</div>
        <div class="service-item"><h3>Tailored Treatment Plans</h3> Each program is designed to address the specific health concerns, physical limitations, and goals of the individual, ensuring a personalized and effective approach to care.</div>
        <div class="service-item"><h3>Home-Based and Online Options</h3> We understand the challenges of mobility, so we offer convenient home visits and virtual consultations to ensure that care is accessible and effective.</div>
        <div class="service-item"><h3>Proven Results</h3> With a track record of helping seniors regain and maintain independence, our services are grounded in evidence-based practices and have shown significant improvement in patient outcomes.</div>
        <div class="service-item"><h3>Continuous Support</h3> We provide ongoing assessments and progress tracking to ensure that our patients continue to make progress and adjust to their evolving needs as they age.</div>
        <div class="service-item"><h3>Multidisciplinary Collaboration</h3> Our team works closely with other healthcare providers, including doctors, occupational therapists, and nurses, to ensure a coordinated approach to care.</div>
        <div class="service-item"><h3>Education and Empowerment</h3> We believe in educating our patients and their families on how to maintain mobility, prevent injuries, and adopt healthy lifestyle changes for long-term well-being.</div>
        </div>
        <p>By focusing on each patient’s individual needs and goals, our geriatric physiotherapy program ensures that older adults can lead healthier, more active, and independent lives. Let us help you or your loved ones navigate the aging process with confidence, mobility, and comfort.</p>
        <br>
        `
    };
    document.getElementById("content").innerHTML = content[section];
    if (section === "appointment") {
        document.getElementById("appointment-form").addEventListener("submit", handleFormSubmit);
    }
}
document.getElementById("content").innerHTML = content[section];

if (section === "our-services") {
    setTimeout(() => {
        document.querySelectorAll(".learn-more").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const serviceId = this.getAttribute("data-service");
                openModal(serviceId); // This function must exist
            });
        });
    }, 100); // Slight delay to ensure DOM content is ready
}

// Modal functionality
const modal = document.getElementById("serviceModal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close");

// Service details data
const serviceDetails = {
    "geriatric": {
        title: "Geriatric Physiotherapy & Fall Prevention",
        content: `
            <h2>Geriatric Physiotherapy</h2>
            <h3>Introduction</h3>
            <p>Geriatric physiotherapy is a specialized branch of physiotherapy aimed at improving the health and well-being of older adults. This area of care focuses on enhancing mobility, strength, balance, and overall functionality, helping seniors to maintain independence and improve their quality of life. It addresses various age-related conditions, including arthritis, osteoporosis, post-stroke rehabilitation, balance disorders, and mobility issues. The core aim is to prevent complications associated with aging, reduce pain, and enable individuals to perform daily activities with greater ease and safety.</p>
            
            <h3>What It Highlights</h3>
            <p>Geriatric physiotherapy takes a holistic approach to treatment by assessing and addressing both physical and mental health challenges common in older adults. Treatment is tailored to individual needs, with a focus on functional recovery, pain management, fall prevention, and the improvement of daily living activities. The therapy often involves exercises designed to restore strength, flexibility, and endurance, enhancing the senior's ability to perform regular tasks, walk, climb stairs, and engage in physical activities.</p>
            
            <p>Key features include:</p>
            <ul>
                <li><strong>Fall Prevention:</strong> Physiotherapists utilize balance exercises, strength-building activities, and posture correction techniques to help reduce the risk of falls, which are a major cause of injury in older adults.</li>
                <li><strong>Pain Management:</strong> Techniques such as manual therapy, heat/cold therapy, and ultrasound treatments are employed to manage chronic pain caused by arthritis, musculoskeletal conditions, and other degenerative diseases.</li>
                <li><strong>Post-Stroke Rehabilitation:</strong> Focus on improving motor function, coordination, and mobility after a stroke, allowing patients to regain as much independence as possible.</li>
                <li><strong>Strength and Endurance Building:</strong> Tailored exercises help rebuild muscle strength and cardiovascular endurance, preventing frailty and enhancing overall stamina.</li>
                <li><strong>Posture Correction:</strong> Special attention is given to correcting posture imbalances, which can lead to discomfort, pain, and reduced mobility.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Improves Mobility:</strong> Physiotherapy helps older adults regain or maintain the ability to move freely, enhancing their independence and overall functionality.</li>
                <li><strong>Promotes Fall Prevention:</strong> A core focus of geriatric physiotherapy is to reduce fall risk by improving balance, muscle strength, and joint stability.</li>
                <li><strong>Reduces Pain and Discomfort:</strong> Specialized techniques aim to alleviate pain caused by age-related conditions like arthritis and osteoporosis, improving overall comfort.</li>
                <li><strong>Boosts Strength and Endurance:</strong> Strengthening exercises are designed to combat muscle weakness, enhancing physical stamina and making daily activities easier to perform.</li>
                <li><strong>Encourages Independence:</strong> By addressing mobility challenges, physiotherapy helps older adults maintain their independence and carry out daily activities without assistance.</li>
                <li><strong>Increases Confidence:</strong> Through a structured rehabilitation program, older adults gain confidence in their ability to perform physical activities, reducing anxiety and fear related to falling.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Prevention of Falls:</strong> Physiotherapy programs reduce the risk of falls, which are a leading cause of injury and hospitalization for seniors, by focusing on balance and coordination.</li>
                <li><strong>Enhances Quality of Life:</strong> Reducing pain and improving mobility allows seniors to participate in social, recreational, and physical activities, leading to a better overall quality of life.</li>
                <li><strong>Slows Functional Decline:</strong> Physiotherapy plays a critical role in preventing the progressive loss of function often seen in aging, helping seniors to maintain their ability to perform essential tasks.</li>
                <li><strong>Supports Mental Health:</strong> Maintaining mobility and reducing discomfort can significantly improve mental well-being, reducing the feelings of isolation and depression that often accompany physical limitations.</li>
                <li><strong>Improves Post-Surgical Recovery:</strong> For seniors recovering from surgeries like hip or knee replacements, physiotherapy speeds up rehabilitation, promoting a faster and safer recovery process.</li>
            </ul>
            <h3>By focusing on each patient’s individual needs and goals, our geriatric physiotherapy program ensures that older adults can lead healthier, more active, and independent lives. Let us help you or your loved ones navigate the aging process with confidence, mobility, and comfort.</h3>
        `
    },
    // Add other services here following the same structure
    "chronic-pain": {
        title: "Chronic Pain Management",
        content: `
            <h2>Chronic Pain Management</h2>
            <h3>Introduction</h3>
            <p>Chronic pain can significantly affect an individual's quality of life, limiting their ability to perform daily activities, enjoy social interactions, or maintain a productive lifestyle. Our chronic pain management program provides a multidisciplinary approach to address long-term pain caused by conditions such as arthritis, fibromyalgia, back pain, nerve injuries, and musculoskeletal disorders. We focus on alleviating pain, restoring mobility, and improving overall function through a combination of physical therapy, massage, manual therapy, combination therapies, and lifestyle modifications. The goal is to manage pain effectively, improve functionality, and enable patients to lead fulfilling lives.</p>
            
            <h3>What It Highlights</h3>
            <p>Chronic pain management involves a comprehensive approach that targets the physical, emotional, and psychological aspects of pain. Our program highlights:</p>
            <ul>
                <li><strong>Pain Reduction:</strong> A variety of therapies are used to manage and reduce pain, including physical therapy, manual therapy, and massage techniques.</li>
                <li><strong>Functional Restoration:</strong> We focus on restoring physical function by improving strength, mobility, and endurance, allowing individuals to regain independence in daily activities.</li>
                <li><strong>Postural Education:</strong> Often, poor posture can aggravate chronic pain, particularly in the neck, back, and shoulders. Our team provides education on posture correction techniques to reduce strain.</li>
                <li><strong>Holistic Lifestyle Modifications:</strong> Chronic pain management extends beyond physical treatment. We integrate changes in lifestyle such as stress management, sleep improvement, nutrition, and gentle exercise to promote long-term pain relief and well-being.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Pain Reduction:</strong> Through the use of various therapeutic modalities, including manual therapy, heat and cold treatments, and electrotherapy, physiotherapy aims to reduce the intensity of chronic pain. Techniques like joint mobilization and myofascial release also help release muscle tension and promote blood flow to affected areas.</li>
                <li><strong>Improved Mobility and Function:</strong> Physiotherapists work with patients to restore flexibility, range of motion, and strength in painful areas. This includes improving joint mobility, reducing stiffness, and enhancing the overall functional capacity to complete everyday activities like walking, bending, or lifting.</li>
                <li><strong>Strengthening and Conditioning:</strong> Strengthening the muscles that support painful or weak areas can reduce pain and prevent future injuries. Physiotherapists will create a customized exercise program to target specific muscle groups, improve posture, and reduce strain on the body.</li>
                <li><strong>Reduced Dependence on Medication:</strong> Many individuals with chronic pain rely on prescription medication, which may have side effects or lead to long-term dependency. Physiotherapy provides drug-free treatment options that aim to alleviate pain, thus reducing the need for painkillers and other medications.</li>
                <li><strong>Holistic Approach:</strong> Pain management requires more than just physical treatment. Our approach incorporates relaxation techniques, mindfulness, and stress reduction strategies that address the mental and emotional challenges of living with chronic pain. Additionally, sleep hygiene and healthy eating habits are encouraged to promote overall wellness.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Improved Quality of Life:</strong> Physiotherapy addresses the root causes of chronic pain and helps alleviate symptoms, allowing individuals to enjoy a better quality of life. By managing pain effectively, patients can regain their ability to perform daily tasks, enjoy hobbies, and participate in social activities.</li>
                <li><strong>Increased Independence:</strong> Chronic pain often leads to a loss of independence as it can limit mobility and make it difficult to perform even simple tasks. Our pain management techniques aim to reduce pain levels, restore function, and help patients regain their ability to carry out daily activities independently.</li>
                <li><strong>Fewer Complications:</strong> If left untreated, chronic pain can lead to additional complications such as muscle atrophy, joint stiffness, and depression. By addressing chronic pain early, physiotherapy helps prevent these secondary issues from developing.</li>
                <li><strong>Long-Term Pain Control:</strong> Physiotherapy not only provides immediate relief but also offers patients the tools and knowledge to manage their pain long-term. Patients learn techniques for controlling pain, maintaining good posture, strengthening vulnerable areas, and managing flare-ups when they occur. This long-term approach can lead to sustained relief and greater resilience.</li>
            </ul>
            
            <h3>Why Choose Us?</h3>
            <ul>
                <li><strong>Multidisciplinary Approach:</strong> Our chronic pain management program brings together the expertise of physiotherapists, massage therapists, and other specialists who work collaboratively to provide comprehensive care. This ensures that every aspect of your pain is addressed, from physical treatment to lifestyle changes.</li>
                <li><strong>Personalized Treatment Plans:</strong> Each patient's chronic pain is unique, which is why we create customized treatment plans tailored to the specific needs, goals, and conditions of the individual. Our team evaluates your symptoms, discusses your pain management goals, and designs a program that will best address your concerns.</li>
                <li><strong>Expert Physiotherapists:</strong> Our team consists of highly trained and experienced physiotherapists who specialize in the treatment of chronic pain conditions. We use the latest evidence-based practices and advanced treatment techniques to ensure the best outcomes for our patients.</li>
                <li><strong>Focus on Long-Term Solutions:</strong> We aim to provide lasting pain relief through education and empowerment. By teaching patients how to manage their symptoms and take control of their physical health, we ensure long-term benefits that extend beyond the duration of treatment.</li>
                <li><strong>Supportive Environment:</strong> We are committed to providing compassionate care in a supportive environment. We understand the impact that chronic pain can have on both the body and mind, and our team is here to offer emotional and psychological support throughout your treatment journey.</li>
            </ul>
        `
    },
    // Add other services here following the same structure
    "post-surgical": {
        title: "Post-Surgical Rehabilitation",
        content: `
            <h2>Post-Surgical Rehabilitation</h2>
            <h3>Introduction</h3>
            <p>Recovering from surgery requires careful management and rehabilitation to ensure a full recovery and minimize complications. Our Post-Surgical Rehabilitation program is designed to help patients recover as quickly, safely, and effectively as possible after surgery. Whether recovering from orthopedic, neurological, or soft tissue surgery, our team provides personalized rehabilitation plans tailored to the patient's specific needs and goals. The primary objective is to restore strength, mobility, and function, and to help patients return to their daily activities with reduced pain and improved quality of life.</p>
            
            <h3>What It Highlights</h3>
            <p>Post-surgical rehabilitation is a critical component in the recovery process. It focuses on:</p>
            <ul>
                <li><strong>Restoring Movement and Function:</strong> Physiotherapy helps restore movement, flexibility, and strength to the surgical site and surrounding areas, improving overall function.</li>
                <li><strong>Pain Management:</strong> We use various therapies to manage pain, minimize swelling, and promote healing, which can significantly improve the recovery experience.</li>
                <li><strong>Preventing Complications:</strong> After surgery, patients are at risk of complications such as muscle weakness, joint stiffness, and scar tissue formation. Our program aims to reduce these risks by promoting optimal healing and mobility.</li>
                <li><strong>Personalized Treatment Plans:</strong> Every surgery and recovery process is unique. Our rehabilitation plans are customized to address individual needs, whether it's a joint replacement, spinal surgery, or soft tissue repair.</li>
                <li><strong>Psychological Support:</strong> Surgery can be emotionally taxing. Our team provides mental and emotional support, helping patients regain confidence in their recovery.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Pain Relief:</strong> Through various treatments such as manual therapy, modalities like heat and cold therapy, and gentle stretching exercises, physiotherapists help manage pain and discomfort after surgery.</li>
                <li><strong>Restoration of Function:</strong> Post-surgical rehabilitation focuses on restoring movement and function in the area that was operated on. This includes regaining strength, flexibility, and range of motion to ensure that patients can return to their normal activities.</li>
                <li><strong>Strengthening:</strong> Physiotherapists design exercises that specifically target weakened muscles or joints to promote strength and stability. Strengthening exercises help prevent long-term complications, such as instability or muscle imbalances, and reduce the risk of re-injury.</li>
                <li><strong>Reducing Scar Tissue and Swelling:</strong> Techniques like massage and specific mobility exercises help prevent the formation of scar tissue, which can lead to stiffness and restricted movement. Reducing swelling in the affected area can also speed up the recovery process.</li>
                <li><strong>Balance and Posture Correction:</strong> Many surgeries, particularly those involving the spine, hips, or knees, may affect balance or posture. Our rehabilitation program helps correct posture, improving balance, and preventing falls or further injuries.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Faster Recovery:</strong> A structured post-surgical rehabilitation plan can significantly speed up recovery time by reducing pain, inflammation, and stiffness. This allows patients to return to their normal life activities more quickly.</li>
                <li><strong>Prevention of Long-Term Complications:</strong> Without proper rehabilitation, patients may experience long-term problems, such as joint stiffness, muscle weakness, and poor mobility. Our program aims to prevent these complications through targeted exercises and therapies that promote healing and flexibility.</li>
                <li><strong>Enhanced Strength and Mobility:</strong> Physiotherapy helps restore strength to the muscles and joints, which are often weakened or immobilized after surgery. This leads to improved mobility and a reduction in the risk of re-injury.</li>
                <li><strong>Psychosocial Benefits:</strong> Surgery can be mentally challenging. Physiotherapy provides psychological support by encouraging patients through their recovery journey. As patients progress in their rehabilitation, their confidence improves, which boosts overall mental and emotional well-being.</li>
                <li><strong>Long-Term Independence:</strong> By improving physical function and strength, post-surgical rehabilitation enables patients to regain independence in their daily lives. Patients can return to work, sports, and personal activities with reduced pain and enhanced confidence.</li>
            </ul>
            
            <h3>Why Choose Us?</h3>
            <ul>
                <li><strong>Expert Rehabilitation Team:</strong> Our team consists of experienced physiotherapists who specialize in post-surgical recovery. They have in-depth knowledge of surgical procedures and rehabilitation techniques to provide the most effective care for patients.</li>
                <li><strong>Personalized Recovery Plans:</strong> Each patient's surgical recovery process is unique. We take the time to understand the surgery performed, the patient's overall health, and their recovery goals to create a personalized rehabilitation plan. This ensures that each patient receives the best care tailored to their individual needs.</li>
                <li><strong>Multidisciplinary Approach:</strong> Post-surgical rehabilitation may involve collaboration with other healthcare professionals, such as surgeons, occupational therapists, and pain management specialists. Our team works closely with these professionals to ensure a seamless recovery process.</li>
                <li><strong>Focus on Safe and Effective Rehabilitation:</strong> We prioritize safety and effectiveness in every aspect of rehabilitation. Our physiotherapists monitor progress closely and adjust treatment plans as needed to ensure that patients are recovering at a safe and appropriate pace.</li>
                <li><strong>Holistic Approach:</strong> We believe in treating the whole person. Alongside physical rehabilitation, we provide education and guidance on lifestyle modifications, ergonomics, and mental health support to enhance the recovery process and promote long-term well-being.</li>
                <li><strong>Compassionate Support:</strong> We understand that recovering from surgery can be a challenging time. Our compassionate team provides emotional support and encouragement throughout the rehabilitation process, helping patients stay motivated and confident in their recovery.</li>
            </ul>
        `
    },
    "sports-injury": {
        title: "Sports Injury Recovery",
        content: `
            <h2>Sports Injury Recovery</h2>
            <div class="sports-icons">
                <span class="sport-icon">🏃‍♂️</span>
                <span class="sport-icon">⚽</span>
                <span class="sport-icon">🏊‍♀️</span>
                <span class="sport-icon">🏀</span>
                <span class="sport-icon">🎾</span>
            </div>
            <h3>Introduction</h3>
            <p>Sports injuries can range from minor sprains to severe ligament tears, and recovery requires a tailored approach to ensure athletes return to their sport as quickly and safely as possible. Our Sports Injury Recovery program provides comprehensive treatment and rehabilitation for both acute injuries and chronic conditions, addressing each injury with an individualized plan. Whether you're a professional athlete or a weekend warrior, we are committed to helping you recover fully, optimize performance, and reduce the risk of future injuries.</p>
            
            <h3>What It Highlights</h3>
            <p>Sports injuries can affect any part of the body, and effective rehabilitation requires addressing both the physical injury and the athlete's long-term health goals. Our program focuses on:</p>
            <ul>
                <li><strong>Acute and Chronic Injury Treatment:</strong> We address a range of sports-related injuries, from acute injuries such as sprains, fractures, and strains to chronic conditions like tendinitis or overuse injuries.</li>
                <li><strong>Movement and Performance Restoration:</strong> The goal of rehabilitation is to restore the athlete's strength, mobility, and coordination to pre-injury levels, or even enhance performance.</li>
                <li><strong>Injury Prevention:</strong> In addition to rehabilitation, we also provide injury prevention strategies that help athletes avoid future injuries by strengthening weak areas and improving biomechanics.</li>
                <li><strong>Sport-Specific Rehabilitation:</strong> Our program is designed with each sport in mind, addressing the unique physical demands of different athletic activities.</li>
                <li><strong>Mental and Psychological Support:</strong> Recovery from a sports injury can be a mentally challenging process. Our team provides guidance and support to help athletes stay motivated and focused on their recovery goals.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Pain Relief and Inflammation Reduction:</strong> Physiotherapists use a variety of methods such as ice therapy, ultrasound, manual therapy, and dry needling to reduce pain, inflammation, and swelling in the injured area.</li>
                <li><strong>Restoration of Strength and Function:</strong> Through targeted exercises and strength-building regimens, physiotherapists help restore the strength, stability, and flexibility required for athletic performance, ensuring the injured area heals properly without compromising the body's functional capacity.</li>
                <li><strong>Mobility and Range of Motion:</strong> Rehabilitative techniques such as stretching, joint mobilizations, and soft tissue therapy are used to restore the full range of motion and prevent stiffness. This is particularly important after ligament, tendon, or joint injuries.</li>
                <li><strong>Biomechanical Assessments:</strong> By analyzing an athlete's movement patterns, physiotherapists can identify imbalances or weaknesses that may have contributed to the injury. This information is used to prevent re-injury by improving body mechanics and ensuring proper technique during sport.</li>
                <li><strong>Sport-Specific Rehabilitation:</strong> The rehabilitation program is customized based on the athlete's specific sport, taking into account the demands of the activity. For example, a runner's recovery may focus more on improving lower body strength and joint mobility, while a swimmer's rehab might target shoulder flexibility and endurance.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Accelerated Recovery:</strong> With specialized physiotherapy techniques, athletes recover faster, reducing downtime and helping them return to their sport sooner without compromising their health or performance.</li>
                <li><strong>Prevention of Re-Injury:</strong> Physiotherapists focus on strengthening the injured area and addressing any underlying weaknesses or imbalances, reducing the risk of re-injury once the athlete returns to activity.</li>
                <li><strong>Improved Performance:</strong> Post-injury rehabilitation doesn't just focus on recovery—it also offers opportunities to improve performance. Through strengthening exercises, flexibility training, and technique refinement, athletes can perform better than before the injury.</li>
                <li><strong>Restored Confidence:</strong> Injuries can be mentally and emotionally taxing for athletes. Physiotherapy helps athletes regain their confidence by providing education and encouragement, allowing them to return to sport with greater confidence and a reduced fear of reinjury.</li>
                <li><strong>Holistic Recovery:</strong> The rehabilitation process addresses not only the physical recovery but also the mental and emotional aspects of injury recovery. Our team supports athletes in coping with the psychological challenges of returning to sport.</li>
            </ul>
            
            <h3>Why Choose Us?</h3>
            <ul>
                <li><strong>Experienced Physiotherapists:</strong> Our team includes highly trained physiotherapists who specialize in sports injuries and rehabilitation, offering expert care to athletes across all sports disciplines.</li>
                <li><strong>Personalized Rehabilitation Programs:</strong> Every injury is unique, and so is every athlete. Our physiotherapists develop individualized treatment plans that are specifically tailored to the athlete's injury, sport, and goals.</li>
                <li><strong>State-of-the-Art Facilities:</strong> We use the latest technologies and rehabilitation tools to enhance recovery and optimize treatment. Our clinics are equipped with advanced therapeutic equipment and tools designed for sports injury rehabilitation.</li>
                <li><strong>Injury Prevention Focus:</strong> In addition to helping athletes recover, we provide ongoing injury prevention strategies, including strength training, flexibility exercises, and education on proper warm-up and cool-down techniques.</li>
                <li><strong>Sport-Specific Expertise:</strong> Whether you are recovering from a football injury, a tennis elbow, a runner's knee, or a torn ACL, our physiotherapists are experienced in treating injuries related to specific sports and physical demands.</li>
                <li><strong>Comprehensive Care:</strong> Our approach is multidisciplinary, working alongside other healthcare providers, including sports doctors, surgeons, and nutritionists, to ensure the best outcomes for athletes. We ensure continuity of care and a coordinated approach for recovery.</li>
                <li><strong>Mental and Emotional Support:</strong> Recovering from a sports injury involves mental and emotional resilience. Our team provides a holistic approach that includes counseling, support, and motivation to help athletes stay mentally strong and focused throughout the recovery process.</li>
            </ul>
        `
    },
    // ... (keep other services) ...
    "neurological": {
        title: "Neurological Rehabilitation",
        content: `
            <h2>Neurological Rehabilitation</h2>
            <div class="neuro-icons">
                <span class="neuro-icon">🧠</span>
                <span class="neuro-icon">🚶‍♂️</span>
                <span class="neuro-icon">🏋️‍♀️</span>
                <span class="neuro-icon">🧘</span>
                <span class="neuro-icon">🗣️</span>
            </div>
            
            <h3>Introduction</h3>
            <p>Neurological conditions, such as stroke, spinal cord injury, and Parkinson's disease, can significantly impact a person's ability to perform daily activities. Our neurological rehabilitation program is specifically designed to help patients regain functional independence, improve their motor abilities, and enhance overall quality of life. Through personalized, evidence-based treatment plans, we aim to address the unique challenges presented by neurological disorders and provide comprehensive care that promotes physical, cognitive, and emotional well-being.</p>
            
            <h3>What It Highlights</h3>
            <p>Neurological rehabilitation is a multidisciplinary approach to managing and recovering from conditions that affect the nervous system. Our program is structured to:</p>
            <ul>
                <li><strong>Improve Functional Abilities:</strong> Our primary goal is to help patients regain as much independence as possible by improving motor skills, coordination, and mobility.</li>
                <li><strong>Promote Neuroplasticity:</strong> We use techniques that stimulate the brain's ability to reorganize itself and form new neural connections, helping patients recover lost functions.</li>
                <li><strong>Targeted Exercises and Activities:</strong> Tailored rehabilitation exercises are designed to improve muscle strength, flexibility, balance, and coordination, essential for daily tasks.</li>
                <li><strong>Cognitive Rehabilitation:</strong> For conditions like stroke or brain injury, we also provide cognitive training to address challenges such as memory, attention, and problem-solving.</li>
                <li><strong>Personalized Care Plans:</strong> Each patient's rehabilitation program is personalized based on their specific diagnosis, needs, and goals, ensuring the most effective care.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Improved Mobility and Balance:</strong> Through targeted exercises, we aim to enhance the patient's ability to walk, maintain balance, and reduce the risk of falls.</li>
                <li><strong>Muscle Strengthening and Coordination:</strong> Many neurological conditions result in weakened muscles or impaired coordination. Our physiotherapists work to strengthen muscles, improve motor skills, and refine movement patterns for better functional outcomes.</li>
                <li><strong>Postural Correction:</strong> Neurological conditions often affect posture. We address these issues to help patients achieve better posture and prevent associated complications like joint pain and pressure sores.</li>
                <li><strong>Functional Training:</strong> Physiotherapists provide exercises and simulations that replicate real-world activities, such as getting in and out of bed, walking on uneven surfaces, and using assistive devices, to improve overall function.</li>
                <li><strong>Neuroplasticity Stimulation:</strong> Our rehabilitation techniques, such as task-specific training, are designed to stimulate the brain's ability to rewire itself. This promotes recovery of lost motor functions and cognitive abilities.</li>
                <li><strong>Pain Management:</strong> Neurological conditions often result in pain due to muscle spasticity, nerve injury, or immobility. Our therapy modalities, including manual therapy, heat/cold therapy, and other modalities, help manage and reduce pain.</li>
                <li><strong>Speech and Swallowing Therapy:</strong> In cases where neurological conditions affect speech or swallowing, we collaborate with speech therapists to provide integrated care to address these challenges.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Enhanced Independence:</strong> The rehabilitation process helps patients regain functional abilities, allowing them to perform daily tasks with more independence and reduce reliance on caregivers.</li>
                <li><strong>Restored Mobility:</strong> Our tailored physiotherapy treatments improve movement, balance, and posture, enabling patients to walk more freely and engage in social and recreational activities.</li>
                <li><strong>Improved Cognitive Function:</strong> For patients with neurological conditions affecting cognition, our therapy includes cognitive exercises and mental stimulation that improve memory, focus, and decision-making abilities.</li>
                <li><strong>Pain Relief:</strong> Physiotherapy plays a crucial role in managing spasticity, muscle tightness, and pain, improving the patient's comfort levels and overall well-being.</li>
                <li><strong>Prevention of Secondary Complications:</strong> By improving mobility, strength, and posture, physiotherapy reduces the risk of secondary complications, such as pressure ulcers, joint contractures, and cardiovascular issues.</li>
                <li><strong>Mental and Emotional Support:</strong> Neurological rehabilitation often requires emotional resilience. Our team provides psychological support to patients and families, helping them cope with the challenges of neurological conditions.</li>
            </ul>
            
            <h3>Why Choose Us?</h3>
            <ul>
                <li><strong>Expert Physiotherapists:</strong> Our team consists of highly skilled physiotherapists who specialize in neurological conditions and have the expertise to treat a wide range of neurological impairments.</li>
                <li><strong>Personalized Treatment Plans:</strong> Each patient receives a tailored rehabilitation program, specifically designed to address their unique neurological condition and recovery goals.</li>
                <li><strong>Evidence-Based Approaches:</strong> We use the latest research and evidence-based techniques to ensure that our rehabilitation strategies are effective and safe for neurological patients.</li>
                <li><strong>Multidisciplinary Team:</strong> We work closely with neurologists, occupational therapists, speech therapists, and other healthcare providers to offer comprehensive, holistic care for neurological rehabilitation.</li>
                <li><strong>Neuroplasticity Focus:</strong> Our rehabilitation programs are designed to optimize brain recovery by encouraging neuroplasticity, helping patients regain lost functions and adapt to their condition.</li>
                <li><strong>State-of-the-Art Facilities:</strong> Our rehabilitation centers are equipped with advanced technology and therapy tools, including balance trainers, resistance equipment, and neurostimulators to accelerate recovery.</li>
                <li><strong>Family Involvement:</strong> We involve family members in the rehabilitation process, providing them with guidance and support to help them assist with exercises and ensure the patient's well-being at home.</li>
            </ul>
        `
    },
    "pediatric": {
        title: "Pediatric Physiotherapy",
        content: `
            <h2>Pediatric Physiotherapy</h2>
            <div class="pediatric-icons">
                <span class="pediatric-icon">👶</span>
                <span class="pediatric-icon">🧩</span>
                <span class="pediatric-icon">🚸</span>
                <span class="pediatric-icon">🏃‍♂️</span>
                <span class="pediatric-icon">👨‍👩‍👧‍👦</span>
            </div>
            
            <h3>Introduction</h3>
            <p>Pediatric physiotherapy is focused on providing specialized care for children with a wide range of developmental, neuromuscular, and congenital conditions. Conditions such as cerebral palsy, developmental delays, and congenital anomalies can significantly affect a child's ability to move, interact, and participate in daily activities. Our pediatric physiotherapy program aims to support children in achieving their full developmental potential, improving mobility, strength, coordination, and overall well-being. We believe in making therapy enjoyable, engaging, and effective through play-based and functional interventions.</p>
            
            <h3>What It Highlights</h3>
            <p>Pediatric physiotherapy is tailored to meet the unique needs of each child, recognizing that their bodies and brains are still developing. Our program is designed to:</p>
            <ul>
                <li><strong>Promote Healthy Development:</strong> Help children achieve appropriate motor milestones and physical development.</li>
                <li><strong>Improve Movement and Function:</strong> Focus on strengthening muscles, improving coordination, and enhancing balance to promote functional independence.</li>
                <li><strong>Address Mobility Issues:</strong> Assist children in overcoming mobility challenges and achieving movement that supports overall growth and development.</li>
                <li><strong>Support Families:</strong> We work closely with families to create individualized treatment plans that ensure continued progress outside of therapy sessions.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Motor Skill Development:</strong> Pediatric physiotherapy helps children develop essential motor skills, such as crawling, walking, running, and jumping, through targeted exercises.</li>
                <li><strong>Strength and Coordination:</strong> By focusing on improving muscle strength and coordination, physiotherapists help children engage in physical activities more effectively and participate in daily life.</li>
                <li><strong>Postural Control:</strong> Therapy aims to improve posture, which is essential for balance, sitting, standing, and walking. Strong postural control reduces the risk of future musculoskeletal issues.</li>
                <li><strong>Mobility Enhancement:</strong> Children who face mobility challenges due to conditions like cerebral palsy can benefit from physiotherapy that encourages proper movement and functional independence.</li>
                <li><strong>Injury Prevention:</strong> Through exercises that improve strength and flexibility, physiotherapy helps prevent injuries related to overuse, misalignment, or underdeveloped muscles.</li>
                <li><strong>Developmental Milestone Support:</strong> Physiotherapists help children achieve their developmental milestones on time, such as sitting, standing, walking, and fine motor skills.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Improved Mobility:</strong> Physiotherapy enhances the ability to move independently, whether through walking, running, or other activities, allowing children to engage fully in social and physical activities.</li>
                <li><strong>Increased Confidence:</strong> As children develop their physical skills and independence, their self-esteem and confidence improve, enabling them to participate in school, play, and other activities without limitation.</li>
                <li><strong>Prevention of Deformities:</strong> By promoting healthy movement patterns and posture, physiotherapy reduces the risk of musculoskeletal deformities that may arise due to conditions like cerebral palsy.</li>
                <li><strong>Enhanced Functional Abilities:</strong> Physiotherapy works to improve not just strength and movement, but also the functional abilities that allow a child to interact with their environment—whether it's in the classroom, at home, or in social settings.</li>
                <li><strong>Long-Term Benefits:</strong> Early intervention through pediatric physiotherapy can prevent long-term complications, improve quality of life, and provide lasting benefits in terms of physical function and independence.</li>
            </ul>
            
            <h3>Why Choose Us?</h3>
            <ul>
                <li><strong>Specialized Pediatric Physiotherapists:</strong> Our team includes physiotherapists who are specifically trained to work with children, understanding their developmental needs and the best ways to support them.</li>
                <li><strong>Play-Based Therapy:</strong> We incorporate fun, engaging, and interactive activities that motivate children to participate actively in their therapy, making the process enjoyable and effective.</li>
                <li><strong>Individualized Treatment Plans:</strong> Each child's treatment plan is tailored to their specific condition, developmental stage, and goals, ensuring personalized care that addresses unique needs.</li>
                <li><strong>Comprehensive Family Support:</strong> We work closely with families, providing education and guidance so they can continue to support their child's development at home, reinforcing the work done in therapy.</li>
                <li><strong>Collaborative Approach:</strong> We collaborate with other healthcare professionals, including pediatricians, occupational therapists, and speech therapists, to ensure that all aspects of a child's development are supported.</li>
                <li><strong>Early Intervention:</strong> We focus on early intervention to address physical developmental delays, which can significantly improve outcomes and help children achieve their full potential.</li>
                <li><strong>Continuous Progress Tracking:</strong> Our therapists regularly assess a child's progress and adapt treatment plans as needed to ensure ongoing improvement and achievement of developmental milestones.</li>
            </ul>
        `
    },
    "womens-health": {
        title: "Women's Health Physiotherapy",
        content: `
            <h2>Women's Health Physiotherapy</h2>
            <div class="womens-health-icons">
                <span class="womens-health-icon">🤰</span>
                <span class="womens-health-icon">💪</span>
                <span class="womens-health-icon">🧘‍♀️</span>
                <span class="womens-health-icon">🦴</span>
                <span class="womens-health-icon">❤️</span>
            </div>
            
            <h3>Introduction</h3>
            <p>Our Women's Health Physiotherapy program is dedicated to addressing the unique and diverse health concerns faced by women at different stages of life. Whether dealing with the physical challenges of pregnancy and childbirth, pelvic floor dysfunction, or managing conditions like osteoporosis, our program offers personalized, compassionate care. By providing education, exercises, and therapeutic interventions, we help women improve their health, manage pain, and enhance their overall quality of life.</p>
            
            <h3>What It Highlights</h3>
            <p>Women's health physiotherapy focuses on providing solutions for a range of conditions specific to women's health. These may include:</p>
            <ul>
                <li><strong>Prenatal Care:</strong> Tailored exercises and treatments to support women during pregnancy, helping to manage symptoms and prevent future complications.</li>
                <li><strong>Postnatal Care:</strong> Rehabilitative services to support recovery after childbirth, including strengthening exercises and pelvic floor rehabilitation.</li>
                <li><strong>Pelvic Floor Dysfunction:</strong> Addressing issues related to urinary incontinence, prolapse, and pelvic pain with targeted exercises and therapies.</li>
                <li><strong>Osteoporosis Management:</strong> Exercises and education aimed at improving bone density, posture, and balance to prevent falls and fractures.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Pelvic Floor Rehabilitation:</strong> Strengthening and restoring the pelvic muscles to improve bladder and bowel control, and reduce pelvic organ prolapse.</li>
                <li><strong>Pain Management:</strong> Providing relief from conditions like menstrual pain, pelvic pain, and postpartum discomfort through therapeutic techniques.</li>
                <li><strong>Postnatal Recovery:</strong> Helping women regain abdominal strength, improve posture, and restore pelvic health after childbirth.</li>
                <li><strong>Improved Strength and Stability:</strong> Enhancing core strength, balance, and posture, which is especially important during pregnancy and after childbirth.</li>
                <li><strong>Increased Mobility and Flexibility:</strong> Exercises to improve flexibility, reduce tension, and increase overall physical function.</li>
                <li><strong>Osteoporosis Prevention:</strong> Physiotherapy offers weight-bearing exercises to strengthen bones, improve balance, and reduce the risk of fractures due to osteoporosis.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Restores Pelvic Health:</strong> Physiotherapy helps restore normal pelvic function by improving muscle strength, reducing incontinence, and preventing prolapse.</li>
                <li><strong>Promotes Postnatal Recovery:</strong> Focused exercises help women regain strength in the abdominal and pelvic regions, reducing discomfort and helping them return to daily activities faster.</li>
                <li><strong>Improves Mental Well-being:</strong> By reducing physical pain and discomfort, physiotherapy also supports better emotional health, helping women feel more energized and less stressed.</li>
                <li><strong>Boosts Confidence:</strong> As women regain strength, flexibility, and independence, they feel more confident in managing the challenges of pregnancy, childbirth, and aging.</li>
                <li><strong>Reduces Long-Term Health Risks:</strong> By preventing or addressing conditions like pelvic floor dysfunction and osteoporosis, physiotherapy contributes to long-term health and wellness.</li>
                <li><strong>Enhances Mobility:</strong> Strengthening core and pelvic muscles not only improves posture and function but also helps reduce pain and discomfort, leading to greater mobility.</li>
            </ul>
            
            <h3>Why Choose Us?</h3>
            <ul>
                <li><strong>Specialized Care for Women:</strong> Our physiotherapists are experienced in treating women's health conditions, ensuring that all treatments are customized to each individual's unique needs.</li>
                <li><strong>Comprehensive Approach:</strong> We take a holistic approach that combines physical therapy, education, and preventative care to address a woman's overall well-being.</li>
                <li><strong>Personalized Treatment Plans:</strong> Treatment plans are tailored to meet the specific health goals of women at various life stages, including pregnancy, postpartum recovery, and menopause.</li>
                <li><strong>Supportive Environment:</strong> Our clinic offers a comfortable, compassionate environment where women feel empowered to take control of their health and wellness.</li>
                <li><strong>Collaboration with Other Healthcare Providers:</strong> We work closely with obstetricians, gynecologists, and other healthcare professionals to ensure comprehensive, multidisciplinary care.</li>
                <li><strong>Educational Resources:</strong> We provide information and guidance on managing health concerns, preventing future issues, and maintaining a healthy lifestyle throughout different phases of life.</li>
            </ul>
        `
    },
};



// Function to open modal with service details
function openModal(serviceId) {
    const service = serviceDetails[serviceId];
    if (service) {
        modalContent.innerHTML = `<h2>${service.title}</h2>${service.content}`;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }
}

// Close modal when clicking the X button
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }
}

// Update the "Our Works" section to use the modal
const ourWorksContent = `
    <h2>Our Expert Services Include</h2>
    <div class="service-list">
        <div class="service-item">
            <h3>Geriatric Physiotherapy & Fall Prevention</h3>
            <p>Our geriatric care program is designed to help older adults maintain their independence and mobility. We focus on fall prevention, balance training, and exercises to improve strength and flexibility.</p>
            <a href="#" class="learn-more" data-service="geriatric">Learn more</a>
        </div>
        <!-- Add other services with data-service attributes -->
    </div>
`;

// Then modify the loadContent function to include the ourWorksContent
// And add event listeners for the learn-more links
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('learn-more')) {
        e.preventDefault();
        const serviceId = e.target.getAttribute('data-service');
        openModal(serviceId);
    }
});



function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;
    const formData = new FormData(form);

    // Construct payload based on the provided structure
    const data = new URLSearchParams({
        "entry.2005620554": formData.get("name"), // Replace "name" with the HTML input's name attribute
        "entry.1045781291": formData.get("email"),
        "entry.1166974658": formData.get("phone"),
        "entry.1065046570": formData.get("message"),
        "emailAddress": "santhoshvaithi1234@gmail.com", // Adjust as needed
        "dlut": Date.now(), // Timestamp for the submission
        "fvv": "1",
        "partialResponse": "[null,null,\"-3710629951035604187\"]", // Static or dynamically generated
        "pageHistory": "0",
        "token": "u9O7NZQBAAA._gvEFOLQntjR-P4pbdXS0A.7vWgDK1UJdAUAxVDggSYmA", // Replace with actual token
        "fbzx": "-3710629951035604187", // Replace with actual value
        "submissionTimestamp": Date.now() // Timestamp for the form submission
    });

    // Submit the form via POST
    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRqADdkSN9dyL-35OvxxNARSCoA_mkyIBfQovE_GVZx-zUXg/formResponse", { // Replace FORM_ID with your form's ID
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("form-status").textContent = "Your appointment request has been successfully submitted!";
            document.getElementById("form-status").style.color = "green";
        } else {
            throw new Error("Form submission failed");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("form-status").textContent = "Failed to submit your request. Please try again.";
        document.getElementById("form-status").style.color = "red";
    });
}


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("introVideo").style.display = "none";
    }, 5000);
});



// Smooth scroll for navigation links
document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple form submission alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent successfully!');
});

// Load homepage content by default
document.addEventListener("DOMContentLoaded", function () {
    // Optionally, you can call loadContent('home') if you have a 'home' key
    // Or leave the static HTML in <main id="content">
});

// Add this function to load the home page content
function loadHomeContent() {
    document.getElementById("content").innerHTML = `
        <section>
          <h2>Welcome to Infinity Physio and Rehab</h2>
          <p>
            At Infinity Physio and Rehab, we are dedicated to helping you achieve your best health and mobility. Our clinic offers a wide range of physiotherapy and rehabilitation services for all ages and conditions.
          </p>
          <!-- ...repeat your home page sections here, or copy from index.html... -->
        </section>
        <!-- You can add more home content here as needed -->
    `;
}

// Logo click event to load home page content
document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    loadHomeContent();
});


document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.reload();
});

document.addEventListener("DOMContentLoaded", function () {
  const ctaBtn = document.querySelector('.cta-btn');
  
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const phoneNumber = '919600619608'; 
      const message = encodeURIComponent(
        "Hello Infinity Physio and Rehab,\nI would like to book an appointment. Please contact me with available slots."
      );

      const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
      const whatsappURL = isMobile
        ? `https://wa.me/${phoneNumber}?text=${message}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

      console.log("Redirecting to:", whatsappURL); // Debugging
      window.open(whatsappURL, '_blank');
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navBar = document.querySelector('.nav-bar');
  if (navToggle && navBar) {
    navToggle.addEventListener('click', function () {
      navBar.classList.toggle('open');
    });
    // Optional: close menu when a link is clicked
    navBar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navBar.classList.remove('open');
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navBar = document.querySelector('.nav-bar');

  if (navToggle && navBar) {
    navToggle.addEventListener('click', () => {
      navBar.classList.toggle('open'); // Toggle the open class
    });
  } else {
    console.error("Hamburger menu elements not found!");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");

  hamburger.addEventListener("click", () => {
      navBar.classList.toggle("active");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navBar = document.querySelector('.nav-bar');

  if (!toggle || !navBar) {
    console.warn('Hamburger or nav-bar not found — selector mismatch?');
    return;
  }

  // Accessibility attribute
  toggle.setAttribute('aria-expanded', 'false');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navBar.classList.toggle('active');
    const opened = navBar.classList.contains('active');
    toggle.setAttribute('aria-expanded', opened.toString());
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navBar.classList.contains('active') && !navBar.contains(e.target) && e.target !== toggle) {
      navBar.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Optional: close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navBar.classList.contains('active')) {
      navBar.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector("#nav ul.links");

  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Home link loads home content
  const homeLink = document.querySelector('.nav-bar a[href="/"]');
  if (homeLink) {
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      if (typeof loadHomeContent === "function") {
        loadHomeContent();
      }
    });
  }
});

window.location.href = "/"; // Redirect to homepage on logo click
document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "/"; // Redirect to homepage
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const fullscreenMenu = document.querySelector(".fullscreen-menu");
  const closeBtn = document.querySelector(".fullscreen-menu .close-btn");

  if (toggle && fullscreenMenu && closeBtn) {
    toggle.addEventListener("click", () => {
      fullscreenMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
      fullscreenMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });

    // Close menu when clicking a nav link
    fullscreenMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        fullscreenMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  }
});


function openHamburgerMenu() {
  const fullscreenMenu = document.querySelector('.fullscreen-menu');
  if (fullscreenMenu) {
    fullscreenMenu.classList.add('active');
    document.body.style.overflow = "hidden";
  }
}

function closeHamburgerMenu() {
  const fullscreenMenu = document.querySelector('.fullscreen-menu');
  if (fullscreenMenu) {
    fullscreenMenu.classList.remove('active');
    document.body.style.overflow = "auto";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector('.nav-toggle');
  const closeBtn = document.querySelector('.fullscreen-menu .close-btn');
  if (navToggle) {
    navToggle.addEventListener("click", openHamburgerMenu);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeHamburgerMenu);
  }
  // Optional: close menu when clicking a nav link
  document.querySelectorAll('.fullscreen-menu .nav-bar a').forEach(link => {
    link.addEventListener("click", closeHamburgerMenu);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Listen for clicks on both desktop and mobile nav links
  document.querySelectorAll(".main-nav-bar a, .mobile-nav-bar a").forEach(link => {
    link.addEventListener("click", function (event) {
      // Only handle links with a data-section attribute
      const section = this.getAttribute("data-section");
      if (section) {
        event.preventDefault();
        loadContent(section);
        // Optionally close mobile menu after click
        const fullscreenMenu = document.querySelector('.fullscreen-menu');
        if (fullscreenMenu && fullscreenMenu.classList.contains('active')) {
          fullscreenMenu.classList.remove('active');
          document.body.style.overflow = "auto";
        }
      }
    });
  });
});
  
// Modal functionality


// Show modal when Learn More is clicked
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("learn-more")) {
        e.preventDefault();
        const serviceKey = e.target.getAttribute("data-service");
        if (serviceDetails[serviceKey]) {
            modalContent.innerHTML = `
                <h2>${serviceDetails[serviceKey].title}</h2>
                ${serviceDetails[serviceKey].content}
            `;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    }
});

// Close modal when X is clicked
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

// Close modal when clicking outside of the content
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});


document.addEventListener("DOMContentLoaded", function () {
  // Modal elements
  const modal = document.getElementById("serviceModal");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.querySelector(".close");

  // Show modal when Learn More is clicked
  // document.addEventListener("click", function (e) {
  //   if (e.target.classList.contains("learn-more")) {
  //     e.preventDefault();
  //     const serviceKey = e.target.getAttribute("data-service");
  //     if (serviceDetails[serviceKey]) {
  //       modalContent.innerHTML = `
  //         <h2>${serviceDetails[serviceKey].title}</h2>
  //         ${serviceDetails[serviceKey].content}
  //       `;
  //       modal.style.display = "block";
  //       document.body.style.overflow = "hidden";
  //     }
  //   }
  // });

  // Close modal when X is clicked
  // if (closeBtn) {
  //   closeBtn.addEventListener("click", function () {
  //     modal.style.display = "none";
  //     document.body.style.overflow = "auto";
  //   });
  // }

  // Close modal when clicking outside of the content
//   window.addEventListener("click", function (e) {
//     if (e.target === modal) {
//       modal.style.display = "none";
//       document.body.style.overflow = "auto";
//     }
//   });
// });