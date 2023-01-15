# Enspo
GirlCode 2023

Addressing the hackathon prompt "“How can we use technology to personalize fashion-retail while enhancing the e-commerce experience?” for the sponsor Aritzia.

## What it does
Users can click on a piece of clothing they like on the Aritzia website, and are led to an extension with a lookbook of similar styles that would go well with their choice. This gives users the ability to customize their wishlists and create a personal shopping experience. Each board displays an aesthetic depending on keywords such as “cozy” and “athletic." There will be functionality to regenerate a new aesthetic board numerous times with the same piece of clothing, as well as an option to save to their lookbook

## How it's made
The webpage was built using React, HTML, CSS and the backend architecture used a separately hosted ExpressJS server that made calls to the OpenAI APi. 
- A dataset of 40 Aritzia clothing articles was entered in a JSON format, used for generating the lookbook boards.
- The clothing articles contain 5 fields, the id, link, imglink, sale, tags. 
- The backend will take a keyword from the main clothing article and loop through the tags in the JSON file, sending an API request for the AI that generate a value. This value is the average of how closely the keyword matches each tag. The lookbook will then 
be generated based on those values.

## My Role
- Came up with the system for generating which clothes would make up the lookbook (based on the tags)
- UI design for the lookbook boards, features including regeneration and saving the board to your page
- Managed the backend system, making the API connection and call to the frontend

