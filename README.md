# Pokémon Finder

Pokémon Finder is a web application that allows users to search for Pokémon and view their details. The application fetches data from a local database and the PokeAPI to provide comprehensive information about each Pokémon.

## Features

- Search for Pokémon by name
- View detailed information about each Pokémon, including stats, types, and Pokédex entries
- Navigate between Pokémon using previous and next buttons
- Responsive design with a clean and modern UI

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, React Toastify
- **Backend**: Node.js, Express, MongoDB, Mongoose, Axios
- **API**: PokeAPI

## Installation

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pokemon-finder.git
   cd pokemon-finder/backend

2. Create a `.env` file in the `backend` directory and add your MongoDB connection string.
3. Start the backend server:
   ```sh
   cd backend
   npm install  # Install dependencies
   npm start    # Start the server
   ```

## Frontend Setup
1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```
4. Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the application.

## Usage
- Enter the name of a Pokémon in the search bar and press Enter.
- View the details of the Pokémon, including its stats, types, and Pokédex entry.
- Use the previous and next buttons to navigate between Pokémon.

## Code Overview
### Backend
- **`/backend/src/routes/pokemon.js`**: Defines the API route for fetching Pokémon data. It first checks the local database and fetches from PokeAPI if the Pokémon is not found.

### Frontend
- **`/frontend/src/app/components/Pokemon/PokemonCard.tsx`**: Displays the details of a Pokémon, including its stats, types, and Pokédex entry.
- **`/frontend/src/app/App.tsx`**: Main application component that handles fetching Pokémon data and rendering the UI.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements
- [PokeAPI](https://pokeapi.co/) for providing the Pokémon data
- [React Toastify](https://fkhadra.github.io/react-toastify/) for the toast notifications
- [Font Awesome](https://fontawesome.com/) for the icons

Happy Pokémon hunting!
