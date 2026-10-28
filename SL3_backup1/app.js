const EVENT_DATA = {
  registration: {
    deadline: "2027-01-15T23:59:59",
    url: "https://example.com/hyperthesis-registration",
    fee: "$15",
    teamSize: "2–4",
    venue: "Stanford University, California",
  },
  missions: [
    {
      id: "01", name: "AI FOR GOOD", category: "software", format: "SOFTWARE",
      summary: "Make the maze of academic resources feel more human.",
      problem: "Build an AI assistant that helps students navigate complex academic resources, discover opportunities, and create personalized learning plans.",
      context: "Academic resources can be scattered and difficult to navigate. A thoughtful guide could help students find relevant support and opportunities.",
      why: "Useful AI should make information easier to reach without taking away a student's agency or privacy.",
      deliverable: "A working assistant prototype with a sample resource collection, accessible interface, transparent recommendations, and a clear privacy approach.",
      tech: ["Python", "LLMs", "RAG", "React", "Vector databases"],
      criteria: ["Usefulness & clarity", "Privacy safeguards", "Accessibility", "Prototype quality"],
      difficulty: "★★☆", level: "INTERMEDIATE",
    },
    {
      id: "02", name: "CLIMATE COMMAND", category: "software", format: "SOFTWARE + IoT",
      summary: "Give buildings a dashboard for wasting less energy.",
      problem: "Develop a real-time energy intelligence platform that detects inefficient energy usage in buildings and recommends ways to reduce consumption. Simulate sensor data if physical hardware is unavailable.",
      context: "Buildings use energy in patterns that are not always easy to see. Useful feedback can help people identify where changes may matter.",
      why: "Clear, timely information can turn energy use from an invisible bill into something people can understand and improve.",
      deliverable: "A dashboard that ingests or simulates sensor readings, highlights unusual usage, and presents actionable recommendations.",
      tech: ["Python", "Time-series analytics", "Dashboards", "MQTT", "IoT APIs"],
      criteria: ["Signal quality", "Actionable insights", "Responsible assumptions", "Reliability"],
      difficulty: "★★☆", level: "INTERMEDIATE",
    },
    {
      id: "03", name: "ACCESSIBILITY REIMAGINED", category: "hybrid", format: "SOFTWARE + HARDWARE",
      summary: "Build an assistive tool around real independence.",
      problem: "Create an affordable assistive technology prototype that helps people with visual, auditory, or mobility impairments interact more independently with their surroundings. Possible concepts include obstacle alerts, accessible interfaces, or environmental notifications.",
      context: "Different people encounter different barriers. Good assistive design starts with a specific need, user agency, and thoughtful testing.",
      why: "Technology can make everyday interactions more accessible when it's designed with people, not just for them.",
      deliverable: "A small working prototype or accessible interface demonstrating one clearly defined assistive use case.",
      tech: ["Arduino", "ESP32", "Sensors", "Haptics", "Computer vision"],
      criteria: ["User-centered design", "Accessibility", "Safety", "Affordability"],
      difficulty: "★★★", level: "ADVANCED",
    },
    {
      id: "04", name: "AUTONOMOUS ROBOTICS", category: "hardware", format: "HARDWARE",
      summary: "Get a tabletop robot from here to there. Safely.",
      problem: "Build a small autonomous robot that navigates a tabletop obstacle course, detects objects, and completes a delivery or retrieval task. Evaluate accuracy, safety, energy efficiency, and reliability.",
      context: "Robots need to sense, plan, and act around a changing environment. A tabletop course makes those tradeoffs tangible.",
      why: "Reliable autonomy depends on more than a clever route: it needs good sensing, safe behavior, and repeatable results.",
      deliverable: "A robot that attempts a defined course task, with a short demonstration and basic measures of performance.",
      tech: ["ESP32", "Arduino", "Raspberry Pi", "Ultrasonic sensors", "Motor drivers", "Computer vision"],
      criteria: ["Navigation accuracy", "Safety", "Energy efficiency", "Reliability"],
      difficulty: "★★★", level: "ADVANCED",
    },
    {
      id: "05", name: "SMART RESCUE SYSTEMS", category: "hybrid", format: "HARDWARE + SOFTWARE",
      summary: "Help responders spot simulated hazards sooner.",
      problem: "Design a disaster-response prototype that detects simulated environmental hazards, monitors sensor readings, and sends alerts through a reliable communication system. Demonstrate how it could help responders make faster decisions.",
      context: "During emergencies, responders may need to make decisions with incomplete information and unreliable connectivity.",
      why: "Timely, understandable alerts can support better decisions when every minute and every signal counts.",
      deliverable: "A sensor-driven hazard demo with a dashboard or alert channel, simulated conditions, and a clear failure-mode explanation.",
      tech: ["ESP32", "Gas or temperature sensors", "LoRa or Wi-Fi", "Dashboards", "Embedded C/C++"],
      criteria: ["Alert clarity", "Communication reliability", "Safe simulation", "Decision usefulness"],
      difficulty: "★★★", level: "ADVANCED",
    },
    {
      id: "06", name: "EDGE INTELLIGENCE", category: "hardware", format: "HARDWARE + AI",
      summary: "Put a useful bit of intelligence right at the edge.",
      problem: "Develop an edge-AI device that performs a useful task locally, such as detecting machine anomalies, recognizing recyclable materials, or identifying unusual environmental conditions. Prioritize low latency, privacy, and efficient power usage.",
      context: "Local inference can keep data close to where it is collected and continue working with limited connectivity.",
      why: "Smaller, more efficient AI can be more private, responsive, and practical in the real world.",
      deliverable: "A working local inference demo for one narrow task, with a simple latency, privacy, and power discussion.",
      tech: ["Raspberry Pi", "Microcontrollers", "TinyML", "TensorFlow Lite", "Cameras or other sensors"],
      criteria: ["Latency", "Privacy", "Efficiency", "Real-world usefulness"],
      difficulty: "★★★", level: "ADVANCED",
    },
  ],
  timeline: [
    ["JAN 23", "09:00 AM", "Check-in & opening ceremony", "Get your bearings. Meet the crew. Let the mission begin."],
    ["JAN 23", "10:00 AM", "Team formation & challenge briefing", "Find your people and choose a proposed mission."],
    ["JAN 23", "11:00 AM", "Hacking begins", "Sketch it, scope it, start building."],
    ["JAN 23", "02:00 PM", "Hardware lab & prototyping workshop", "A proposed hands-on session at the workbench."],
    ["JAN 23", "07:00 PM", "Mentor sessions & progress check", "Compare notes and pick your next experiment."],
    ["JAN 24", "09:00 AM", "Final building sprint", "One more focused push toward a working demo."],
    ["JAN 24", "11:00 AM", "Prototype submission", "Package the build and tell us what you learned."],
    ["JAN 24", "01:00 PM", "Project demos & judging", "Show the idea, the prototype, and the thinking."],
    ["JAN 24", "03:00 PM", "Awards & closing ceremony", "Celebrate the experiments and the people behind them."],
  ],
  prizes: [
    ["01", "OVERALL WINNER", "$1,500", "The whole package: idea, craft, and impact."],
    ["02", "RUNNER-UP", "$750", "A standout build with room to go further."],
    ["03", "BEST HARDWARE", "$500", "For excellent engineering at the workbench."],
    ["04", "BEST AI PROJECT", "$500", "For thoughtful, useful, responsible intelligence."],
    ["05", "BEST SOCIAL IMPACT", "$500", "For a prototype built around meaningful change."],
    ["06", "PEOPLE'S CHOICE", "$250", "The crowd-favorite idea with serious heart."],
  ],
  mentors: [
    { name: "THE SYSTEMS THINKER", role: "Embedded systems · prototyping", bio: "Demo profile. A proposed mentor archetype to help teams map a complex idea into small, testable system parts." },
    { name: "THE HUMAN-CENTERED BUILDER", role: "Product design · accessibility", bio: "Demo profile. A proposed mentor archetype to help teams ask who a prototype serves and how they'll learn from people." },
    { name: "THE MODEL TINKERER", role: "Applied AI · data", bio: "Demo profile. A proposed mentor archetype to help teams choose an appropriately scoped model and evaluate it thoughtfully." },
  ],
  workshops: ["Robotics", "Embedded systems", "Applied AI", "Rapid prototyping", "CAD", "Product design", "Pitching"],
  faqs: [
    ["Who can participate?", "The current proposal is for university students aged 18 or older. Final eligibility rules are still to be confirmed by the organizers."],
    ["Can I join without a team?", "Team size is provisionally 2–4 participants. Whether solo registrants can find teammates will be announced with the final event details."],
    ["Will hardware be provided?", "Hardware availability has not been confirmed. Teams should plan to simulate sensor data when physical hardware is unavailable."],
    ["Can we use AI tools?", "The event's AI-tool policy is still being finalized. Teams should disclose tool use in their project notes and follow the published rules once confirmed."],
    ["How do I register?", "Registration is expected to close January 15, 2027. The current link is a placeholder, not a working event registration backend. Verify the official link before submitting details or payment."],
    ["What does it cost?", "The proposed student fee is $15 per participant. This amount is not confirmed; check the official registration page before paying."],
    ["Are meals included?", "Meals are a proposed inclusion, subject to final confirmation. Dietary accommodation details have not been announced."],
    ["Is accommodation provided?", "Accommodation information has not been confirmed. The event is proposed as in-person at Stanford University; the exact building and lodging details are pending."],
    ["How will projects be judged?", "Evaluation criteria are proposed within each mission brief. Final judging criteria, judges, and award rules are yet to be confirmed."],
    ["Who owns the projects?", "Intellectual-property terms have not been confirmed. Organizers should publish clear rules before registration opens; ask for clarification before sharing sensitive work."],
    ["Who can I contact for support?", "organizers@example.com is an editable placeholder, not a verified contact. Replace it with an organizer-approved support address before publishing."],
  ],
};

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[char]));

const toast = (message) => {
  const element = document.querySelector("#site-toast");
  element.textContent = message;
  element.classList.add("is-visible");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => element.classList.remove("is-visible"), 2800);
};

function renderMissions(filter = "all") {
  const list = document.querySelector("#mission-list");
  const missions = EVENT_DATA.missions.filter((mission) => filter === "all" || mission.category === filter);
  document.querySelector("#mission-count").textContent = `SHOWING ${String(missions.length).padStart(2, "0")} / 06`;
  list.innerHTML = missions.map((mission) => `
    <article class="mission-item" data-id="${mission.id}">
      <button class="mission-select" type="button" data-mission="${mission.id}" aria-label="Select mission ${mission.id}: ${escapeHTML(mission.name)}">
        <span class="mission-id">M-${mission.id}</span><span class="mission-card-title">${escapeHTML(mission.name)}</span>
        <span class="mission-summary">${escapeHTML(mission.summary)}</span>
        <span class="mission-item-meta"><span>${escapeHTML(mission.format)}</span><span>${escapeHTML(mission.level)} · ${mission.difficulty}</span></span>
      </button>
      <button class="mission-view" type="button" data-brief="${mission.id}">VIEW MISSION BRIEF <span aria-hidden="true">↗</span></button>
    </article>`).join("");
  list.querySelectorAll("[data-brief]").forEach((button) => button.addEventListener("click", () => showMission(button.dataset.brief)));
  list.querySelectorAll(".mission-select").forEach((button) => button.addEventListener("click", () => showMission(button.dataset.mission)));
  const active = EVENT_DATA.missions.find((mission) => mission.category === filter) || EVENT_DATA.missions[0];
  showMission(active.id);
}

function showMission(id) {
  const mission = EVENT_DATA.missions.find((item) => item.id === id);
  if (!mission) return;
  document.querySelectorAll(".mission-item").forEach((item) => item.classList.toggle("is-selected", item.dataset.id === id));
  const detail = document.querySelector("#mission-detail");
  detail.innerHTML = `
    <div class="detail-topline"><span>MISSION ${mission.id} / PROPOSED BRIEF</span><button class="detail-close" type="button" aria-label="Close mission brief">×</button></div>
    <p class="detail-category">${escapeHTML(mission.format)} <span>·</span> ${escapeHTML(mission.level)}</p>
    <h3>${escapeHTML(mission.name)}</h3><p class="detail-problem">${escapeHTML(mission.problem)}</p>
    <div class="brief-block"><h4>THE REAL-WORLD CONTEXT</h4><p>${escapeHTML(mission.context)}</p></div>
    <div class="brief-block"><h4>WHY IT MATTERS</h4><p>${escapeHTML(mission.why)}</p></div>
    <div class="brief-block"><h4>EXPECTED PROTOTYPE</h4><p>${escapeHTML(mission.deliverable)}</p></div>
    <div class="brief-columns"><div class="brief-block"><h4>TOOLKIT SUGGESTIONS</h4><ul>${mission.tech.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div><div class="brief-block"><h4>PROPOSED EVALUATION</h4><ul>${mission.criteria.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div></div>
    <div class="brief-bottom"><span>DIFFICULTY <b>${mission.difficulty}</b></span><button class="button button-yellow mission-choose" type="button" data-choose="${mission.id}">SELECT YOUR MISSION <span aria-hidden="true">↗</span></button></div>`;
  detail.querySelector(".detail-close").addEventListener("click", () => {
    detail.classList.toggle("is-collapsed");
    const closed = detail.classList.contains("is-collapsed");
    detail.querySelector(".detail-close").setAttribute("aria-label", closed ? "Expand mission brief" : "Close mission brief");
  });
  detail.querySelector("[data-choose]").addEventListener("click", () => {
    detail.querySelectorAll(".mission-choose").forEach((button) => {
      button.textContent = button.dataset.choose === id ? "MISSION SELECTED ✓" : "SELECT YOUR MISSION ↗";
      button.disabled = button.dataset.choose === id;
    });
    toast(`MISSION ${id} SELECTED · NO REGISTRATION SUBMITTED`);
  });
}

function renderTimeline() {
  document.querySelector("#timeline").innerHTML = EVENT_DATA.timeline.map(([day, time, title, note], index) => `
    <article class="timeline-item ${index === 0 || day !== EVENT_DATA.timeline[index - 1][0] ? "day-start" : ""}">
      <span class="timeline-index">${String(index + 1).padStart(2, "0")}</span><div class="timeline-marker" aria-hidden="true"><i></i></div>
      <div class="timeline-card"><span class="timeline-time">${day} <b>·</b> ${time}</span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(note)}</p></div>
    </article>`).join("");
}

function renderPrizes() {
  document.querySelector("#prize-grid").innerHTML = EVENT_DATA.prizes.map(([number, title, amount, description], index) => `
    <article class="prize-card ${index === 0 ? "prize-featured" : ""}"><span class="prize-number">VAULT / ${number}</span><span class="prize-icon" aria-hidden="true">${index === 0 ? "✦" : index === 5 ? "♥" : "✳"}</span><h3>${escapeHTML(title)}</h3><strong>${escapeHTML(amount)}</strong><p>${escapeHTML(description)}</p><span class="prize-status">PROPOSED</span></article>`).join("");
}

function renderMentors() {
  document.querySelector("#mentor-list").innerHTML = EVENT_DATA.mentors.map((mentor, index) => `
    <details class="mentor-item"><summary><span class="mentor-avatar" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><span><b>${escapeHTML(mentor.name)}</b><small>${escapeHTML(mentor.role)}</small></span><span class="mentor-toggle" aria-hidden="true">+</span></summary><p>${escapeHTML(mentor.bio)}</p></details>`).join("");
}

function renderFAQs() {
  document.querySelector("#faq-list").innerHTML = EVENT_DATA.faqs.map(([question, answer], index) => `
    <details class="faq-item"><summary><span class="faq-number">${String(index + 1).padStart(2, "0")}</span><span>${escapeHTML(question)}</span><i aria-hidden="true">+</i></summary><p>${escapeHTML(answer)}</p></details>`).join("");
}

function startCountdown() {
  const deadline = new Date(EVENT_DATA.registration.deadline).getTime();
  const countdown = document.querySelector("#countdown");
  const tick = () => {
    if (!Number.isFinite(deadline)) {
      countdown.innerHTML = "<p class='countdown-message'>DEADLINE TO BE ANNOUNCED</p>";
      window.clearInterval(countdown.timer);
      return;
    }
    const difference = deadline - Date.now();
    if (difference <= 0) {
      countdown.innerHTML = "<p class='countdown-message'>REGISTRATION DEADLINE PASSED</p>";
      window.clearInterval(countdown.timer);
      return;
    }
    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference % 86400000) / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);
    const seconds = Math.floor((difference % 60000) / 1000);
    document.querySelector("#count-days").textContent = String(days).padStart(2, "0");
    document.querySelector("#count-hours").textContent = String(hours).padStart(2, "0");
    document.querySelector("#count-minutes").textContent = String(minutes).padStart(2, "0");
    document.querySelector("#count-seconds").textContent = String(seconds).padStart(2, "0");
  };
  tick();
  countdown.timer = window.setInterval(tick, 1000);
}

function setupInteractions() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      renderMissions(button.dataset.filter);
    });
  });
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  menu.addEventListener("click", () => {
    const expanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!expanded));
    menu.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !expanded);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  }));
  document.querySelector("#registration-link").href = EVENT_DATA.registration.url;
}

renderMissions();
renderTimeline();
renderPrizes();
renderMentors();
renderFAQs();
setupInteractions();
startCountdown();
