export function educationAgent(query) {
  // Quiz related queries
  if (query.includes("quiz")) {
    return "Go to the Education module and press 'Start Quiz' to begin.";
  }

  // Lesson related queries
  if (query.includes("lesson") || query.includes("math")) {
    return "Lesson 1: Basic math. Addition and subtraction of 2-digit numbers.";
  }

  // General educational queries
  if (query.includes("study") || query.includes("study habits")) {
    return "To improve your study habits, try breaking your study sessions into 25-minute blocks with short breaks in between (Pomodoro Technique).";
  }

  if (query.includes("algebra")) {
    return "Algebra: Solving for x involves isolating the variable. For example, in the equation 2x + 5 = 11, subtract 5 from both sides and then divide by 2.";
  }

  if (query.includes("trigonometry")) {
    return "Trigonometry: The three main functions are sine, cosine, and tangent. They relate the angles of a triangle to the lengths of its sides.";
  }

  if (query.includes("multiplication")) {
    return "Multiplication: To multiply two numbers, you add a number to itself multiple times. For example, 4 x 3 is the same as 4 + 4 + 4.";
  }

  if (query.includes("division")) {
    return "Division: This is the process of splitting a number into equal parts. For example, 12 ÷ 4 means splitting 12 into 4 equal parts, each of size 3.";
  }

  if (query.includes("history")) {
    return "History: The ancient Egyptian civilization is one of the oldest, known for its pyramids, hieroglyphics, and advanced engineering.";
  }

  if (query.includes("science") || query.includes("photosynthesis")) {
    return "Photosynthesis: This process in plants converts sunlight into chemical energy. Plants take in carbon dioxide and water to produce glucose and oxygen.";
  }

  if (query.includes("language") || query.includes("grammar")) {
    return "Grammar: A sentence typically has a subject and a predicate. For example, 'The cat (subject) sleeps (predicate).'";
  }

  if (query.includes("memorization")) {
    return "To improve memorization, use techniques like repetition, chunking information, and creating mnemonic devices.";
  }

  if (query.includes("focus")) {
    return "To stay focused during study, try minimizing distractions, setting a timer for study blocks, and taking regular breaks.";
  }

  if (query.includes("exam") || query.includes("test")) {
    return "When preparing for exams, review key topics, practice problems, and rest well the night before the test.";
  }

  if (query.includes("problem-solving")) {
    return "Problem-solving: Break the problem down into smaller steps. Understand the question, identify what is given, and determine the best method to solve it.";
  }

  if (query.includes("math practice")) {
    return "Math practice: Try solving different types of problems, such as algebra, geometry, or word problems. Consistent practice will improve your skills.";
  }

  // New extended educational queries
  if (query.includes("art") || query.includes("painting")) {
    return "Art: The basics of painting include learning about colors, brushes, and different painting techniques like watercolor and oil painting.";
  }

  if (query.includes("geography") || query.includes("maps")) {
    return "Geography: Maps are representations of the Earth's surface. They can show political boundaries, physical features, and more.";
  }

  if (query.includes("literature") || query.includes("novels")) {
    return "Literature: A novel is a long, fictional narrative. Examples include 'Pride and Prejudice' by Jane Austen and '1984' by George Orwell.";
  }

  return "I'm your education assistant. Ask me about quizzes, lessons, or specific topics in math, science, history, literature, and more!";
}

export function agricultureAgent(query) {
  // Crop-related queries
  if (query.includes("crop") || query.includes("plant")) {
    return "For tropical regions, consider crops like rice, corn, and bananas, which thrive in warm climates.";
  }

  // Soil and irrigation related queries
  if (query.includes("soil") || query.includes("fertility")) {
    return "To improve soil fertility, consider adding organic matter like compost and manure. Crop rotation also helps maintain healthy soil.";
  }

  if (query.includes("irrigation")) {
    return "Drip irrigation is a water-efficient method that delivers water directly to the roots. It's ideal for arid regions or water-scarce areas.";
  }

  // Pest control related queries
  if (query.includes("pest") || query.includes("pesticide")) {
    return "Natural pest control methods include using neem oil, introducing beneficial insects like ladybugs, or applying organic insecticidal soap.";
  }

  // Farming methods related queries
  if (query.includes("organic farming")) {
    return "Organic farming focuses on growing crops without synthetic fertilizers or pesticides. Use crop rotation, compost, and natural pest control methods.";
  }

  // Weather-related queries
  if (query.includes("weather") || query.includes("climate")) {
    return "To adapt to weather changes, monitor local forecasts and implement crop varieties suited to your area's climate. Mulching helps retain moisture during dry spells.";
  }

  // Fertilizer-related queries
  if (query.includes("fertilizer")) {
    return "Natural fertilizers include compost, manure, and fish emulsion. For synthetic options, use balanced fertilizers with equal parts nitrogen, phosphorus, and potassium.";
  }

  // Irrigation and water-related queries
  if (query.includes("rainwater") || query.includes("water")) {
    return "Set up a rainwater harvesting system by collecting water from the roof in barrels or tanks. This can be used for irrigation during dry periods.";
  }

  // Crop rotation and seasonal farming
  if (query.includes("crop rotation")) {
    return "Crop rotation helps maintain soil fertility and prevents pest build-up. After planting one crop, rotate with another crop to balance nutrient use.";
  }

  if (query.includes("harvest") || query.includes("yield")) {
    return "To maximize yield, make sure your crops have adequate sunlight, water, and nutrients. Harvest at the right time for optimal quality.";
  }

  // Plant disease-related queries
  if (query.includes("disease") || query.includes("fungus")) {
    return "To prevent plant diseases, ensure proper spacing between plants, practice crop rotation, and use disease-resistant plant varieties.";
  }

  // Sustainable farming
  if (query.includes("sustainable farming") || query.includes("eco-friendly")) {
    return "Sustainable farming uses methods that protect the environment, such as minimizing chemical use, conserving water, and encouraging biodiversity.";
  }

  // Pest management
  if (query.includes("pest management") || query.includes("pesticides")) {
    return "Integrated pest management (IPM) combines biological, physical, and chemical methods to control pests in an eco-friendly way.";
  }

  // Greenhouse farming
  if (query.includes("greenhouse") || query.includes("indoor farming")) {
    return "Greenhouse farming provides a controlled environment for growing crops, allowing you to extend the growing season and protect plants from extreme weather.";
  }

  // Weather preparedness for farmers
  if (query.includes("drought") || query.includes("flood")) {
    return "To prepare for drought, use drought-resistant crops, efficient irrigation systems, and mulch to retain soil moisture. For floods, ensure proper drainage and elevate crops where possible.";
  }

  // Agricultural technology
  if (query.includes("agriculture technology") || query.includes("smart farming")) {
    return "Smart farming includes using technology like GPS-guided equipment, drones, and sensors to improve efficiency and optimize crop production.";
  }

  // New extended agriculture queries
  if (query.includes("aquaculture") || query.includes("fish farming")) {
    return "Aquaculture: It's the farming of fish, shellfish, and other aquatic organisms. Techniques include pond farming, cage farming, and recirculating systems.";
  }

  if (query.includes("vertical farming") || query.includes("indoor agriculture")) {
    return "Vertical farming uses vertically stacked layers to grow crops, often in indoor environments, using controlled conditions for efficiency.";
  }

  return "I'm your agriculture assistant. Ask me about crops, soil, pests, irrigation, sustainable farming, and more!";
}

export function healthcareAgent(query) {
  // General health-related queries
  if (query.includes("diet") || query.includes("nutrition")) {
    return "A balanced diet includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Stay hydrated and avoid processed foods.";
  }

  // Exercise and fitness related queries
  if (query.includes("exercise") || query.includes("workout")) {
    return "For a basic workout, try a mix of cardio, strength training, and flexibility exercises. Aim for at least 30 minutes of moderate exercise most days of the week.";
  }

  // Sleep-related queries
  if (query.includes("sleep") || query.includes("insomnia")) {
    return "Good sleep hygiene includes sticking to a regular sleep schedule, avoiding screens before bed, and creating a calm, dark environment for sleep.";
  }

  // Mental health queries
  if (query.includes("mental health") || query.includes("stress")) {
    return "To reduce stress, try deep breathing, meditation, regular physical activity, and connecting with loved ones. Don't hesitate to talk to a professional if needed.";
  }

  // First-aid related queries
  if (query.includes("first aid") || query.includes("emergency")) {
    return "For minor cuts and bruises, clean the area with water, apply an antiseptic, and bandage it. For major injuries, seek medical help immediately.";
  }

  // Fitness and exercise routine queries
  if (query.includes("fitness") || query.includes("training")) {
    return "Start with bodyweight exercises like squats, lunges, and push-ups. Gradually increase the intensity and focus on both strength and endurance.";
  }

  // Hydration-related queries
  if (query.includes("hydration") || query.includes("water")) {
    return "Drink at least 8 cups of water a day. Hydration is key to maintaining energy levels, aiding digestion, and supporting overall body function.";
  }

  // Immune system related queries
  if (query.includes("immune system") || query.includes("boost")) {
    return "Boost your immune system with vitamin C-rich foods like citrus fruits, along with plenty of sleep, regular exercise, and managing stress.";
  }

  // Weight management queries
  if (query.includes("weight") || query.includes("lose weight")) {
    return "To lose weight, focus on a balanced diet, increase physical activity, and ensure you're consuming fewer calories than you're burning.";
  }

  // Skin care queries
  if (query.includes("skin") || query.includes("acne")) {
    return "For healthy skin, clean your face gently, avoid harsh chemicals, drink water, and use sunscreen to protect from UV damage.";
  }

  // Common health symptoms queries
  if (query.includes("cold") || query.includes("flu")) {
    return "For cold symptoms, stay hydrated, rest, and try over-the-counter remedies like decongestants. If symptoms persist, see a doctor.";
  }

  // Vaccination queries
  if (query.includes("vaccination") || query.includes("vaccine")) {
    return "Vaccines help protect against serious diseases. It's important to stay up to date with the recommended vaccination schedule.";
  }

  // Fitness goals queries
  if (query.includes("fitness goals") || query.includes("exercise goals")) {
    return "Set realistic goals, track progress, and adjust as needed. Start with achievable targets and gradually increase intensity as you get stronger.";
  }

  // Healthy lifestyle queries
  if (query.includes("healthy lifestyle") || query.includes("wellness")) {
    return "A healthy lifestyle includes regular exercise, a balanced diet, stress management, adequate sleep, and regular health check-ups.";
  }

  // Healthy eating habits queries
  if (query.includes("healthy eating") || query.includes("meal planning")) {
    return "Plan meals that include a balance of vegetables, proteins, and whole grains. Avoid skipping meals and limit your intake of processed foods.";
  }

  // New extended healthcare queries
  if (query.includes("mental wellness") || query.includes("meditation")) {
    return "Meditation helps reduce stress, improve focus, and enhance overall mental health. Try practicing mindfulness for 10-15 minutes daily.";
  }

  if (query.includes("chronic illness") || query.includes("long-term disease")) {
    return "Chronic illnesses require ongoing management, including medication, regular doctor visits, and lifestyle changes to manage symptoms effectively.";
  }

  return "I'm your healthcare assistant. Ask me about diet, fitness, mental health, first aid, and more!";
}

