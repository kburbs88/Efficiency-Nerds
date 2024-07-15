# <Efficiency-Nerds>

## Description

Our group was interested in creating an app that helped users accomplish or meet a personalized goal for each user. Our ideas varied so we combined most of them into Effeciency Nerds. Efficiency Nerds is a productivity social media app that allows users to create their profile, a la MySpace, and access the built-in productivity tools to be effective and efficient. We want people to connect with others to build community and meet their goals together. We are only at the profile development stage and plan to further develop additional features and connectivity opportunities. 

Throughout the process, we honed in a lot of our javascript and CSS/Bootstrap skills primarily how to effectively use GitHub and work as a team. We learned about what it’s like working with code for extended periods and the strong need to figure out the broken code.


## Installation

Follow these steps to set up and run the “Efficiency Nerds” app locally on your machine.
Prerequisites

Before you begin, ensure you have the following installed:
A modern web browser (e.g., Chrome, Firefox, Edge)

Clone the Repository
Clone the repository from GitHub to your local machine using the following command:

bash
git clone https://github.com/yourusername/efficiency-nerds.git

Navigate to the Project Directory
Change your current directory to the project directory:

bash
cd efficiency-nerds

Run the App
Open the index.html file in your web browser. You can do this by double-clicking the file or by running the following command in your terminal:

bash
open index.html - (For macOS) OR right click to open in a default browser
start index.html - (For Windows) OR right click to open in a default browser

The app will open in your default web browser and be ready to use.


## Usage
-On Landing Page, fill out all requested account information. 
-When information is entered, click "Create Account" button.
-When Create Account Button is clicked, you will be redirected to Profile Page. 
-From the profile page, you can add a Profile Image, and you will see your informatoin you entered from the Landing Page.
-In the Efficiency Nerd Tools Section, you have a ToDo List that will generate Tasks you write in the box.
-After you enter your tools, you can generate a Random Task to Work on. 
-When you have completed a task, you click "Done" button next to your completed task and the task will be removed from your list. ```md
    ![alt text](assets/images/EF-TodoExample.png)
    ```
-At the bottom of the page, you can set a 20 minute timer to work on your tasks. 
-If you complete the task before your timer runs out, click "Stop Timer" and there is a Modal that pops up with an affirmation that you finished your task!
   ```md
    ![alt text](assets/images/EF-TimerExample.png)
    ```

## Credits

Dafne Luna - https://github.com/dafnefluna
Molly Howard - https://github.com/mollyhoward319
Usama Badarr - https://github.com/usamabadarr

Bootstrap - getbootstrap.com
W3 Schools - https://www.w3schools.com/

## License

This project is currently not licensed. All rights to the “Efficiency Nerds” app are reserved by the original authors.

Future Considerations

In the future, we may consider adding an open-source license to facilitate collaboration and contributions from the community. Possible licenses we are considering include the MIT License, Apache License 2.0, and/or GNU General Public License v3.0.

If you have any questions or suggestions regarding the licensing of this project, please feel free to reach out.

Choosing a License in the Future
If we decide to add a license in the future, here are some common open-source licenses we might consider:

MIT License: Permissive and simple, allowing almost unrestricted use of your code.
Apache License 2.0: Similar to MIT but provides an explicit grant of patent rights from contributors to users.
GNU General Public License v3.0 (GPL-3.0): Strong copyleft license that requires derived works to be open-sourced under the same license.

Adding a License
When we decide to add a license, we will create a “LICENSE” file in the repository’s root directory with the full text of the chosen license.
Example License Section with Apache License 2.0 License

License
This project will be licensed under the Apache License 2.0 License. See the LICENSE file for details.


## Features

After a Nerd user registers or logs in, they will be redirected to the homepage where they will see a profile overview and different productivity features. 

The profile features the ability to upload and change your picture as many times as you like. You will also see a sticker sheet, which is a collection of sticker awards for completing tasks and meeting your goals. At the moment this feature does not work but is under development.

The heart of Efficiency Nerds is the Efficiency Nerd Tools. At the moment users can create their to-do lists by simply adding to our To-Do List form. For users who may struggle with executive dysfunction issues, we created a task randomizer that will draw from the existing to-do list and pick a task for you to do.

The last feature is the Pomodoro Timer. The Pomodoro Method is a task timing technique that gives you 20 minutes to work uninterrupted with a 5-minute break, and users can repeat that cycle as many times as needed. Our timer will run for 20 minutes, but we understand some people have complicated lives so they can stop the timer. Once the timer is stopped Nerds will be shown a congratulatory message. 

In future development, we hope to track the frequency of the Pomodoro cycle, and the number of tasks completed, to establish the sticker reward system.
