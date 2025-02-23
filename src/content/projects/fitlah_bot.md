---
title: "FitLah Bot"
hero: "~/assets/projects/fitlah_bot_1.jpg"
heroAlt: "FitLah Bot Hero Image"
description: "A Telegram bot that provides real-time public gym and pool capacity in Singapore, helping users plan their workouts efficiently."
pubDate: 2023-02-11
updatedDate: 2025-02-15
tags: ["chatbot", "python", "automation", "telegram", "api"]
techStack: ["Python", "AWS", "Supabase"]
draft: False
---

## Chapter 1: The Why?

Like many others, I found myself frustrated by the uncertainty of gym and pool availability. Showing up to an overcrowded gym meant either waiting or adjusting plans on the fly. This sparked the idea for **FitLah Bot** &ndash; a simple, automated way to check real-time capacity before heading out.

- **The Idea**: A Telegram bot that provides instant updates on gym and pool crowd levels across Singapore.
- **Why It Matters**: It saves users time and helps them plan their workouts efficiently.

---

## Chapter 2: The How?

Before building the bot, I had to understand how to access public facility data and ensure real-time updates. This involved exploring APIs, databases, and serverless architectures.

- **Learning the Basics**: I researched public APIs, AWS Lambda for automation, and Supabase for storing user preferences. I also had to learn how to use Telegram Bot's API.
- **Moment of Clarity**: When I successfully retrieved and displayed live capacity updates in a Telegram chat.

---

## Chapter 3: The What?

Once the foundations were set, it was time to bring **FitLah Bot** to life.

- **Tech Stack Choices**:
  - **Python** for backend logic and API calls.
  - **AWS Lambda** for serverless execution.
  - **Supabase** for storing capacities, weather data, user preferences and feedback.
  - **Telegram API** for seamless chatbot interactions.
- **Milestones**:
  - Connecting the bot to real-time facility data.
  - Implementing the database to store and retrieve user favorites.

---

## Chapter 4: The Huh?

I still remembered having to read through all the log files AWS Lambda would show, but it always took a while for it to load the log files.

The periods of 30 seconds wait always made me anxious &ndash; will my fix finally work? Or back to the drawing board I go?

---

## Chapter 5: The Yay!

After countless iterations and debugging sessions, things started falling into place.

- **The Victory Moment**: Successfully integrating user favorites, allowing people to check their preferred gym or pool with a single command.
- **Adjusting the Vision**: The project evolved from a simple bot to something that could potentially predict future crowdedness based on trends.

---

## Chapter 6: The Now!

At this stage, **FitLah Bot** became fully functional and ready for real-world use.

- **The Finished Product**: A Telegram bot that fetches real-time gym and pool crowd levels, saves user favorites, and provides weather updates for better planning.
- **The Reflection**: Building this bot deepened my knowledge of API integration and cloud computing.

---

## Chapter 7: The Future!

There's always room for improvement, and I make sure to consider everyone's feedback.

- **Future Plans**:
  - Implement **predictive analytics** to estimate crowdedness based on past data, time of day, and weather.
  - Improve **notification systems**, so users can get real-time alerts when their favorite facility is below a certain capacity.
- **Lessons Learned**: Balancing **real-time performance, data accuracy, and scalability** is crucial when working with automation.

---

## Appendix

Feel free to try out **FitLah Bot** on Telegram and get real-time updates on ActiveSG's gym and pool capacities.

Feedback is always appreciated! 😄

[Click here to start using FitLah Bot](https://t.me/@fitlahsg_bot)
