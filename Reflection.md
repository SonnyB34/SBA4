# Reflection

Building this task manager the biggest challenge I faced was add and deleting items from local storage. The deleting items from local storage was a bit of a challenge for me. At first, clicking Delete removed a task from the page, but the item came back after I refreshed, and the last deleted item kept reappearing. I realized localStorage only changes when I call setItem again, so removing something from the display was not enough.

To solve it I used the browser DevTools to inspect what was saved, then updated my delete handler to remove the task fro mthe task array, save the updated array back to localStorage and re-render the list.

If I had more time, I would add more functionality, editing existing tasks, sorting by deadline, automatically marking tasks as overdue based on today's date. I would also validate empty inputs and improve the styling for smaller screens.