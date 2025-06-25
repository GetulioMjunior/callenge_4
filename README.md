# callenge_4
📚 JavaScript Beginner Coding Challenge: Merge Library Inventory with Borrow Records

🌟 Objective

Write a JavaScript function that merges two arrays of book-related objects into one, combining inventory information with borrow status and filtering the results based on return status.

⸻

📝 Scenario

You’re working on a library system. You’re given two arrays:
	1.	bookInventory: contains metadata about books (e.g., title, author, ISBN).
	2.	borrowRecords: contains borrow status of books (e.g., whether the book is currently borrowed).

Each book has a unique isbn. Your job is to:
	1.	Merge both arrays into a single list where each item includes both the book information and borrow status.
	2.	If a book exists in bookInventory but not in borrowRecords, assume it has not been borrowed (borrowed: false).
	3.	Return only the books that are currently borrowed or have no borrow record (we want to exclude only books that were marked as returned).

⸻

✅ Requirements
	•	Create a function named mergeBorrowedBooks(bookInventory, borrowRecords).
	•	The returned array should include:
	•	All fields from each book in bookInventory
	•	A new field borrowed that is:
	•	true if there’s a matching record in borrowRecords with borrowed: true
	•	false if no record is found
	•	Exclude any books with a matching borrowRecords entry where borrowed: false.

⸻

🧪 Example

const bookInventory = [
  { isbn: 'A123', title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  { isbn: 'B456', title: 'You Don’t Know JS', author: 'Kyle Simpson' },
  { isbn: 'C789', title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
];

const borrowRecords = [
  { isbn: 'A123', borrowed: true },
  { isbn: 'B456', borrowed: false }
];

mergeBorrowedBooks(bookInventory, borrowRecords);

/* Output:
[
  { isbn: 'A123', title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', borrowed: true },
  { isbn: 'C789', title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', borrowed: false }
]
*/

