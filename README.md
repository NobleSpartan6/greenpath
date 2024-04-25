# Green Path Homepage

Welcome to Green Path, an educational portal designed for students at Cornell University. The website offers a platform to explore courses, understand major requirements, and connect with sustainability initiatives through Living Labs. This project is structured using React and Material-UI.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Before setting up the project, ensure you have Node.js installed on your machine. Then, follow these steps:

```bash
# Clone the repository
git clone https://github.com/NobleSpartan6/greenpath

# Go into the project directory
cd greenpath/green-path-homepage

# Install dependencies
npm install

# Start the development server
npm start
```

The application will be available at `http://localhost:3000`.

## Features

- **Course Browsing:** Users can filter and search for courses based on department, credit, semester, and faculty.
- **Major Requirements:** Provides detailed information on major-specific requirements and sustainability-focused courses.
- **About Green Path:** Learn about the motivations behind Green Path and its contributions to sustainability education.
- **Responsive Navbar:** Adaptive links for easy navigation throughout the site.

## Usage

Here are some quick directions on how to navigate the website:

- **Home Page:** Get started here to learn about Green Path and its mission.
- **Browse Courses:** Access the course search functionality to find classes that match your interests.
- **Major Requirements:** Select your major to view specific requirements and relevant courses.
- **About:** Discover more about the project and its background.

## Contributing

Contributions to the project are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

Please ensure you update tests as appropriate.

## Data Management for Green Path

Curerntly, the website sources the course catalog data using categorized .csv files. We opted for this approach as a means to speed up
the development of our prototype.

## Source of Data

The Green Path website uses structured data in CSV files to store information about sustainability courses related to various engineering majors at Cornell University. These files are crucial for the Courses Page and Major Requirements components of the website.

## Updating CSV Files

To ensure the website's course listings are up-to-date, follow these steps to update the corresponding CSV files:

### 1. Locate the Correct CSV File

- Find the CSV file that needs updating. The files are named after the major they represent, such as `Sustainability_Classes_Mechanical_Engineering.csv` for Mechanical Engineering.

### 2. Edit the CSV File

- Open the CSV file with a spreadsheet program that supports CSV formats, like Microsoft Excel or Google Sheets.
- Keep the data structure intact: headers, column order, and format.
- Common columns include `Title`, `Dept`, `Course #`, `Credit`, `Semester`, `Faculty`, and `Crosslists`. Do not change these headers.

### 3. Save and Validate

- Save the file with UTF-8 encoding.
- Validate the data to ensure all entries are correct and consistent, especially in key fields like `Dept` or `Semester`.

### 4. Test Locally

- Import the CSV file into your local development environment to test.
- Check that the website parses the updated file and displays the information correctly.

### 5. Upload the Updated File

- Upload the updated CSV, replacing the old file in the correct directory.
- Verify the file permissions for the website's server read access.

### 6. Deploy and Verify

- Redeploy the application or clear server caches if needed.
- Confirm that the updates are visible and correct on the live site.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

