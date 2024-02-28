# chatbot-prototype

Introducing our cutting-edge ChatBot platform, where customization meets versatility! This advanced system not only incorporates the power of ChatGPT for natural language understanding but also allows you to create and manage multiple projects, and create tailored chatbot for each project.

## Table of Contents

1. [Introduction](#chatbot-prototype)
2. [Prerequisites](#prerequisites)
3. [Key Features](keyfeatures)
4. [Usage](#usage)
   - [Home Page](#step-1-home-page)
   - [Edit Basic Info Page](#step-2-edit-basic-info-page)
   - [Scraping Tab](#step-3-scraping-tab)
   - [Testing](#step-4-testing)
   - [Deployment](#step-5-deployment)
   - [Widget Configuration](#step-6-widget-configuration)
   - [Seamless Widget Integration](#step-7-seamless-widget-integration)
5. [License](#license)

## Key Features:

### 1. Project Management:

Effortlessly create and manage multiple projects, . Whether you're building a customer support chatbot, an educational assistant, or a personal companion, the platform enables you to organize and customize your chatbot projects seamlessly.

### 2. Custom Output for Each Project:

Every project on our platform is independent, allowing you to define custom responses, behaviors, and interactions. Tailor the chatbot's personality and functionality to align with the goals of each individual project.

### 3. Versatile Scraping:

Experience the versatility of custom output generation through scraping methods:

- File Scraping: Upload documents, spreadsheets, or code files, and let the chatbot intelligently extract information for relevant and context-aware responses.

- URL Parsing (YouTube Integration): Provide YouTube URLs within your conversations to enrich the chatbot's knowledge base. The chatbot can extract information from the videos, offering insights beyond text-based sources.

- Audio Data Analysis: Engage in voice conversations with the chatbot, allowing it to process spoken language and respond intelligently to audio inputs.

## Prerequisites

Ensure you have Docker installed on your machine. If not, you can download and install Docker from [Docker's official website](https://www.docker.com/get-started).

To build and run the project, execute the following command in the root folder:

```bash
sudo docker-compose up
```

This will handle the installation of all necessary dependencies within the Docker containers.

## Usage

Follow these steps to install and set up the "chatbot-prototype" project:

### Step 1: Home Page

1.1 **Display User Projects:**

- Fetch user-specific projects from the backend.
- Display the projects on the home page for the logged-in user.

  1.2 **Create New Project Button:**

- Implement a "Create New Project" button on the home page.
- Redirect the user to a new project creation page upon button click.

### Step 2: Edit Basic Info Page

2.1 **Project Details:**

- Implement a page where the user can edit basic information for a specific project.
- Display the existing project details, allowing the user to modify them.

### Step 3: Scraping Tab

3.1 **Implement Scraping UI:**

- Create a tab within the project editing interface specifically for scraping.
- Include options for scraping data from URLs, YouTube URLs, audio files, and PDF files.

  3.2 **Integration with Scraping Libraries:**

- Implement the backend logic to handle scraping using libraries like `youtube-transcript` for YouTube URLs, audio analysis libraries, and PDF parsing libraries.

### Step 4: Testing

4.1 **User Testing:**

- Conduct thorough testing of the entire workflow.
- Ensure the seamless integration of the widget across different projects.

  4.2 **Bug Fixes:**

- Address any bugs or issues discovered during testing.

### Step 5: Deployment

5.1 **Deployment to Production:**

- Deploy the application to a production environment.
- Monitor and ensure the proper functioning of the entire system in a live setting.

### Step 6: Widget Configuration

6.1 **Widget Configuration:**

- Create a tab within the project editing interface for generating a code snippet.
- Generate a code snippet containing the project ID that users can copy.

  6.2 **URL Configuration:**

- Provide a field for users to enter the URL where the widget will run.
- Store this URL in the project's basic info and .env file under `CORS_ORIGINS`.

  6.3 **CORS Configuration:**

- Guide users to update the `CORS_ORIGINS` variable in the .env file if they need to modify CORS settings for the widget. This should include the webapp/site url with which the widget is integrated for this project.

### Step 7: Seamless Widget Integration

7.1 **Widget Usage:**

- Instruct users to paste the generated code snippet into the HTML of current project's websites/web apps where they want the chatbot widget.
- Ensure the code snippet includes the correct project ID and that the project ID is associated with the chatbot widget backend.

## License

This project is licensed under the [MIT License](LICENSE.md).
