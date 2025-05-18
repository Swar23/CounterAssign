A simulation of a checkout system for a hypermarket where customers are assigned to the checkout queue with the least total number of items. Built using TypeScript, HTML, and 
bundled with Vite for a modern development workflow.

Features
1) Assigns customers to the optimal checkout counter based on total items.
2) Uses a Mutex lock (async-mutex) for concurrency-safe updates.
3) Simple and interactive frontend for user input.
4) Realtime visual representation of checkout queues.

Running the Project -- npm run dev

Logic Implemented 
1) Each checkout queue starts empty.
2) When a customer inputs item count and clicks Assign, they are sent to the counter with the lowest current total.
3) If multiple counters have the same total, the leftmost one is chosen.
4) We can set the number of queues needed from the main.ts file constructor

Note- For CSS  i did some search on Google and the Bootstrap site, as I basically work as Fullstack(Python,React,Typescript) so interaction with css is limited   
