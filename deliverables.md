# Phase One

> - [x] Open your terminal and cd to a location you want to install your Frigg application
> - [x] Run npx create-frigg-app {{enter-your-desired-app-name}}
> - [x] Follow the README instructions
> - [x] Start the application
> - [x] Run the Get Sample Data menu option after connecting to HubSpot

### Questions

##### What sort of use cases would this help solve?

- Frigg seems promising for rapid development of integrations between various software tools.
- Its pay-as-you-go pricing from serverless architecture make it cost-effective for low-volume integrations.

##### What would be needed to tackle use cases you’ve seen in the past?

- In some scenarios, the integrations require more complex data transformations or business logic. That might be solvable with custom modules or plugins on Frigg.
- Some integrations needed advanced error handling and logging. It would be interesting to see how Frigg handles these scenarios.

##### What is confusing or unclear so far?
There were some bumps in the road to make everything work:
- A few changes on the README.md would be helpful to make the process smoother (I struggled for a while because I created a `dev.json` file in the wrong directory) ([7c725b4](https://github.com/igorschechtel/frigg-framework-challenge/commit/7c725b4378c6ace399e1c300d985cf39f5b07c89))
- Had to add a HOC `withParams` to make the path parameters work properly ([7725b65](https://github.com/igorschechtel/frigg-framework-challenge/commit/7725b656d34689e1c3a55d8456b5e93cb17775fc))
- The application breaks after you get redirected back from the OAuth flow because the JWT is stored in the `sessionStorage` and it's lost after the redirect. I had to manually copy the link with the code and paste after logging in again. It should be stored in a persistent storage (ideally, an HTTP-only cookie).

# Phase Two

> - [x] Change the HubSpot integration so that it’s grabbing and displaying different data from the HubSpot API.

### Video
- [Loom video](https://www.loom.com/share/e4f93b8ccc4b464fbd1c500b79b41504?sid=7a3f5af8-c18d-409e-8c12-0591912ff886) demonstrating my change on the HubSpot sample data

# Phase Three

> - [x] The challenge is to see if you can get an API module working, and live sample data retrieved from the target account. 

### Video
- [Loom video](https://www.loom.com/share/5137b97127dd46a98a2303f19c66c195?sid=708b2124-7629-473c-ad26-590232d045c3)

### Reflection
> At this point, take a moment to offer more reflections (should you have any), and list any questions you have either about Frigg, about integration development, about Left Hook, or about anything else that comes to mind when considering working with Left Hook. Commit this additional reflection either to your repo or to the previously created Google Doc

One question that comes to mind is why you chose not to use TypeScript on Frigg, since it's almost a standard for libraries and frameworks nowadays. Have you tried it and decided it wasn't worth it? Or is it something you're planning to add in the future?

# Phase Four

