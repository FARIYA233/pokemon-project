# Pokémon Explorer

A lightweight, client-side Pokémon Explorer built with **HTML, CSS, and vanilla JavaScript**.

The application uses the **PokéAPI** to fetch Pokémon data and presents the information through a simple, interactive, and responsive interface.

The project is intentionally framework-free. It does not require a frontend framework, backend server, database, build system, or API key.

## Live Demo

**GitHub Repository:**
https://github.com/FARIYA233/pokemon-project

## Features

### Pokémon Search

* Search for Pokémon by name.
* Search using the National Pokédex ID.
* Input is trimmed and normalized before searching.
* Displays a loading state while data is being fetched.
* Displays an error message when a Pokémon cannot be found.
* Includes quick-search buttons for commonly used Pokémon.
* Loads Pikachu automatically when the application starts.

### Pokémon Information

The application displays important Pokémon information including:

* Pokémon name
* National Pokédex ID
* Pokémon types
* Height
* Weight
* Base experience
* Pokémon artwork
* Shiny artwork

The main Pokémon card also displays the Pokémon's primary type and type badges.

### Pokémon Moves

The Moves section displays available moves for the selected Pokémon.

Move information may include:

* Move name
* Move type
* Damage category
* Power
* Accuracy
* PP
* Learn method
* Learning level
* Move effect description

Moves can be loaded progressively to keep the interface responsive when a Pokémon has a large number of moves.

### Base Stats

The application displays the six base statistics of a Pokémon:

* HP
* Attack
* Defense
* Special Attack
* Special Defense
* Speed

Each statistic is displayed using a visual progress bar.

The total base stat value is also calculated and displayed.

### Interactive Pokémon Sprites

The application provides different Pokémon image variations where available.

Users can explore:

**Gender**

* Male
* Female, when available

**Variant**

* Default
* Shiny

**Image Source**

* Standard Sprite
* Official Artwork
* Official Shiny Artwork
* Dream World

Unavailable image combinations are automatically handled by the application.

### Responsive Design

The application is designed to work across different screen sizes:

* Desktop
* Laptop
* Tablet
* Mobile devices

The layout adapts to smaller screens so that the search area, Pokémon information, tabs, statistics, moves, and image controls remain easy to use.

## Technology Stack

| Technology | Purpose                                               |
| ---------- | ----------------------------------------------------- |
| HTML5      | Page structure and content                            |
| CSS3       | Styling, layout, and responsive design                |
| JavaScript | Application logic, API requests, and DOM manipulation |
| PokéAPI    | Pokémon data and image references                     |

No frontend framework or external JavaScript library is required.

There is also no backend server or database.

## API

This project uses **PokéAPI** to retrieve Pokémon information.

API Endpoint:

```text
https://pokeapi.co/api/v2/pokemon/
```

PokéAPI provides Pokémon-related information such as:

* Pokémon details
* Types
* Abilities
* Moves
* Base statistics
* Sprites and artwork

## Project Structure

```text
pokemon-project/
│
├── index.html       # Main HTML structure
├── style.css        # Application styling
├── script.js        # Application logic and API integration
└── README.md        # Project documentation
```

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/FARIYA233/pokemon-project.git
```

### 2. Open the project folder

```bash
cd pokemon-project
```

### 3. Run the project

Open `index.html` in a web browser.

For the best development experience, the project can also be opened using **Visual Studio Code** with a local development extension such as Live Server.

## Example Pokémon

The application can be used to search for Pokémon such as:

* Pikachu
* Charizard
* Bulbasaur
* Mewtwo

## Project Goals

The main goals of this project are:

* Practice working with REST APIs.
* Learn how to fetch and process JSON data using JavaScript.
* Practice DOM manipulation.
* Build an interactive web application without a framework.
* Create a responsive user interface.
* Improve understanding of asynchronous JavaScript and API requests.

## Learning Outcomes

Through this project, I practiced:

* JavaScript Fetch API
* REST API integration
* JSON data handling
* Asynchronous programming
* DOM manipulation
* Event handling
* Responsive web design
* HTML and CSS organization
* Error and loading state handling

## Author

**Fariya Mustakin Aditi**

Computer Science and Engineering Student
Bangladesh Army University of Engineering & Technology (BAUET)

GitHub:
https://github.com/FARIYA233

## Acknowledgements

* **PokéAPI** — For providing the Pokémon data and resources.
* **GitHub** — For repository hosting and version control.

## License

This project is created for educational and learning purposes.
