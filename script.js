// Section 2: App State Variables
let tasks = [];

// Section 3: Cached Element References
// Initialize these with actual references to your form and table in the HTML
const taskForm = document.getElementById('taskForm');
const taskTable = document.getElementById('taskTable');

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    // Validate input fields
    if (!taskName || !taskDeadline) {
        alert('Task name and deadline are required!');
        return; // Stop the function if validation fails
    }

    // Update the tasks array
    tasks.push({
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline
    });

    // Call the render function to update the UI
    render();

    // Clear the form fields after submission for a better user experience
    document.getElementById('taskForm').reset();
}

// Function to render tasks in the table
function render() {
    taskTable.innerHTML = tasks.map(task => `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><button onclick="markTaskComplete(this)">Complete</button></td>
            <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
    `).join('');
}

// Function to initialize the table
function init() {
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// Attach the handleSubmission function to the form's submit event
// Ensure this is done only once to avoid duplicate registrations
taskForm.addEventListener('submit', handleSubmission);

// Call the init function to set up the initial state of the app
init();