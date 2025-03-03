# Expense Tracker CLI

A simple command-line interface (CLI) application to track expenses, built with Node.js and TypeScript.
https://roadmap.sh/projects/expense-tracker

## Features
- Add expenses with a description and amount
- List all expenses
- Update an expense by ID
- Delete an expense by ID
- View a summary of expenses for a specific month

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/sayyedaaman2/expense-tracker-cli.git
   ```
2. Navigate to the project folder:
   ```sh
   cd expense-tracker-cli
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Build the project:
   ```sh
   npm run build
   ```
5. Link the CLI globally:
   ```sh
   npm link
   ```

## Usage

After installation, use the CLI commands as follows:

### List Expenses
```sh
mycli list
```

### Add an Expense
```sh
mycli add --description "Groceries" --amount 50.75
```

### Update an Expense
```sh
mycli update --id 1 --description "Dinner" --amount 30.00
```

### Delete an Expense
```sh
mycli delete --id 1
```

### View Expense Summary for a Month
```sh
mycli summary --month 2
```

## Development

To run the project in development mode:
```sh
npm run dev
```

To build the project:
```sh
npm run build
```

To start the project after building:
```sh
npm start
```

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the ISC License.

## Contact
For any issues, check the [GitHub Issues](https://github.com/sayyedaaman2/expense-tracker-cli/issues) page.

