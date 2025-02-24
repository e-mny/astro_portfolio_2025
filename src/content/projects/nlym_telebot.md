---
title: "Youth Service Telegram Bot"
hero: "~/assets/heros/pwa_intro.png"
heroAlt: "Youth Service Telegram Bot Hero Image"
description: "A Telegram bot designed to announce the weekly youth service roster and facilitate prayer requests for the church community."
pubDate: 2024-03-19
updatedDate: 2025-01-06
tags: ["telegram", "automation", "api", "python", "chatbot"]
techStack: ["Python", "AWS"]
draft: false
---

## Chapter 1: The Beginning – Why This Project?

This project began with a recurring issue within the church’s youth service team: the weekly task of checking the Google Sheets roster. Every week, the entire roster team had to visit the sheet, taking a few minutes of each person's time. Multiply that by the total number of team members, and you end up wasting quite a bit of time. I knew there had to be a better way.

- **The Idea**: A Telegram bot that would automatically announce the weekly roster and save everyone time.
- **Why It Matters**: This project wasn’t just about saving time &ndash; it was about improving the spiritual community by giving members an easy way to share prayer requests and keep up with their weekly duties.

---

## Chapter 2: The Research – Diving Into the Unknown

I started with the Telegram API documentation and tutorials. The integration of these resources helped me understand how to communicate with Telegram, fetch data, and automate messages.

The biggest challenge was managing the interaction between Google Sheets and the Telegram bot. I had to figure out how to automate fetching and displaying the roster each week.

The breakthrough came when I connected the Google Sheets API with the bot and successfully displayed the roster in the Telegram group chat. The first automated message was a huge relief.

---

## Chapter 3: The Building – The Art of Creation

Python was chosen for its ease of use and strong library and Telegram API support.
It being my first Telegram bot, I didn't understand what was 'Inline Keyboard', and the many many options that Telegram provided.

- **Milestones**: Key milestones included setting up the basic roster feature, adding the prayer request functionality, and integrating the Google Sheets API for weekly updates.
- **Unexpected Challenges**: One of the challenges was ensuring the bot could properly handle user inputs for prayer requests. I also had to make sure that data privacy was respected, especially for those submitting prayer requests anonymously.

---

## Chapter 4: The Struggles – The Darkest Hour

Every project has its tough times, and this one was no different.

- **The Hardest Moments**: One of the toughest issues was keeping the bot running consistently, especially since it was initially hosted on my home server. Downtime and performance issues were frequent problems.
- **Self-Doubt**: At times, I doubted whether the project would actually save time as planned. Would the bot be used consistently? Would the prayer box feature be helpful?
- **The Lesson**: I learned the importance of robust hosting solutions and the need to test the bot thoroughly with real users before relying on it in a live setting.

---

## Chapter 5: The Breakthrough – The Turning Point

After much effort, the turning point came when the bot started working as intended.

- **The Victory Moment**: The first time the bot successfully announced the weekly roster, and users began submitting prayer requests, I knew the project was a success.
- **Celebrating Small Wins**: Each feature that worked smoothly, from the prayer request submission to the roster updates, was a win worth celebrating.
- **Adjusting the Vision**: As the project evolved, I realized I wanted to make the bot more robust by migrating it to AWS for better scalability and reducing dependency on my home server.

---

## Chapter 6: The Resolution – The Final Outcome

The bot was fully functional and achieved its original goal: to save time and make communication within the church youth service team easier.

- **The Finished Product**: The final product is a Telegram bot that announces the weekly youth service roster and allows members to submit prayer requests, either anonymously or with their names attached. It has significantly reduced the time spent checking Google Sheets and created a community-driven prayer box.
- **The Reflection**: Looking back, I am proud of the way the bot has been received. It’s been a huge success in terms of convenience and fostering connection within the church community.
- **Key Takeaways**: One of the biggest lessons I learned was the power of automation to improve workflows and the importance of secure, reliable hosting for long-term use.

---

## Chapter 7: The Epilogue – Looking Ahead

Even with the bot fully deployed, the journey isn’t over.

- **Future Plans**: I plan to migrate the bot to AWS to make it serverless, improving scalability and availability. Additionally, I want to add features like reminders for upcoming duties and the ability for users to easily check past prayer requests.
- **Lessons Learned**: This project reinforced the value of planning for reliability, scalability, and user experience. It also taught me how important it is to get feedback from real users during the development phase.
- **Gratitude**: I’m grateful for the support of my church community and the tools that made this project possible—especially the Telegram API, Python, and the resources available for deploying and scaling the bot.

---

## Bonus Chapter: Behind-the-Scenes – Unseen Moments

Sometimes the most memorable moments of a project don’t make it to the final version.

- **Unexpected Moments**: There were funny moments along the way, like when the bot accidentally sent the prayer request list to the entire congregation instead of just the youth service team!
- **The "Aha!" Moments**: The most satisfying moment was realizing that what started as a small idea to save time would turn into something that helped people connect and share their spiritual needs more easily.

---
