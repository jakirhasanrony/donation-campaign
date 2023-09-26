<<<<<<< HEAD
=======
![samuel-regan-asante-JjlkGAc4OUM-unsplash](https://github.com/programming-hero-web-course-4/b8a8-donation-campaign-jakirhasanrony/assets/99494672/0859e8b0-94ed-4b0d-b175-b068455af916)
---
# The Features of this projects
**First Feature: Unique Donation Tracking**

* To ensure each card can only be donated once, you can implement a client-side check. When a user clicks the "Donate" button, the system should first verify if the card has already been donated by checking a flag associated with that card in local storage.
* If the card has not been donated before, mark it as donated by setting the flag to "donated" and store this information in local storage.
* If the card has already been donated (the flag is set to "donated"), display a message to the user indicating that this card has already been donated and cannot be donated again.
---
**Second Feature: Local Storage Integration**
* When a user clicks the "Donate" button on a card, save relevant information about the donated card (such as category, details, etc.) in local storage. You can use the card's unique identifier or a generated donation ID as a key to store this data.
* Implement a synchronization mechanism that periodically checks for an internet connection. When the connection is available, send the locally stored donation data to the server to update the central database with the donations.
* Keep track of the synchronized donations and remove them from local storage once they have been successfully sent to the server to avoid duplication.
--- 
**Third Feature: Statistics Visualization**
* Create a statistics page that displays a pie chart representing the percentage of remaining cards and donated cards for each of the four categories (health, education, basic, and food).
* Use a charting library (e.g., Chart.js or D3.js) to generate the pie chart. The chart should dynamically update as cards are donated, reflecting the changing percentages.
* Implement a real-time data update mechanism that listens for changes in the donated cards' status and updates the chart accordingly. When a card is donated, the chart should visually reflect the increase in the "donated" segment and decrease in the "remaining" segment for the respective category.
---
![katt-yukawa-K0E6E0a0R3A-unsplash](https://github.com/programming-hero-web-course-4/b8a8-donation-campaign-jakirhasanrony/assets/99494672/d47fad27-3305-4b2c-878f-cf19ed22d587)
---
>>>>>>> d4bb67fc62d139f919e01b0c30f9604d734cf075
