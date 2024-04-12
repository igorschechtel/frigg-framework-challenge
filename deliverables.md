# Phase One

> - [x] Open your terminal and cd to a location you want to install your Frigg application
> - [x] Run npx create-frigg-app {{enter-your-desired-app-name}}
> - [x] Follow the README instructions
> - [x] Start the application
> - [x] Run the Get Sample Data menu option after connecting to HubSpot

### Questions

##### What sort of use cases would this help solve?

- Frigg seems promising for rapid development of integrations between various software tools.
- Its serverless architecture make it easy to deploy, cost-effective for low-volume integrations, while also being scalable for high-volume ones.

##### What would be needed to tackle use cases you’ve seen in the past?

- In some scenarios, the integrations require more complex data transformations or business logic. That might be solvable with custom modules or plugins on Frigg.
- Some integrations needed advanced error handling and logging. It would be interesting to see how Frigg handles these scenarios.

##### What is confusing or unclear so far?

There were some bumps in the road to make everything work:

- A few changes on the README.md would be helpful to make the process smoother (I struggled for a while because I created a `dev.json` file in the wrong directory) ([7c725b4](https://github.com/igorschechtel/frigg-framework-challenge/commit/7c725b4378c6ace399e1c300d985cf39f5b07c89))
- Had to add a HOC `withParams` to make the path parameters work properly ([7725b65](https://github.com/igorschechtel/frigg-framework-challenge/commit/7725b656d34689e1c3a55d8456b5e93cb17775fc))

---

# Phase Two

> - [x] Change the HubSpot integration so that it’s grabbing and displaying different data from the HubSpot API.

### Video

- [Loom video](https://www.loom.com/share/e4f93b8ccc4b464fbd1c500b79b41504?sid=7a3f5af8-c18d-409e-8c12-0591912ff886) demonstrating my change on the HubSpot sample data

---

# Phase Three

> - [x] The challenge is to see if you can get an API module working, and live sample data retrieved from the target account.

### Video

- [Loom video](https://www.loom.com/share/5137b97127dd46a98a2303f19c66c195?sid=708b2124-7629-473c-ad26-590232d045c3)

### Reflection

> At this point, take a moment to offer more reflections (should you have any), and list any questions you have either about Frigg, about integration development, about Left Hook, or about anything else that comes to mind when considering working with Left Hook. Commit this additional reflection either to your repo or to the previously created Google Doc

One question that comes to mind is why you chose not to use TypeScript on Frigg, since it's almost a standard for libraries and frameworks nowadays. Have you tried it and decided it wasn't worth it? Or is it something you're planning to add in the future?

---

# Phase Four

> - [x] Before writing any code, create or find a Postman collection for your given API.
> - [x] Fork the Frigg API Module Library repo and create a branch based off of main to add your API module to the library (see documentation draft for example references)
> - [x] Implement/refactor/test authentication and authorization mechanisms for your API module(s).
> - [x] Define at least three API methods that perform various operations related to your chosen module. We recommend at least one GET data retrieval endpoint for the easiest use.
> - [x] Ensure proper validation and error handling for each endpoint
> - [x] Testing
> - [x] Documentation

### Deliverables

- [Postman collection](https://www.postman.com/speeding-comet-706045/workspace/igor-s-public-workspace/collection/6632047-d14634b7-449b-42a5-953d-fde3a16612e4?action=share&creator=6632047)
- [Loom video](https://www.loom.com/share/11f160424be1475f94e1f204367fc216?sid=36f40ace-244a-4951-82f6-e9c35b1cbd1c)
- Bonus: [PR on the Frigg API Module Library](https://github.com/friggframework/api-module-library/pull/2)

---

# Phase Five

> - [x] In your Frigg Instance, create an Integration definition file that imports and uses your API module as though it were published, using `npm link` to achieve the desired functionality (see README in your copied Frigg instance repo)
> - [x] Create a getSampleData method that retrieves some data from your API module.
> - [x] Test it out live to confirm data is being returned

### Video

[Loom video](https://www.loom.com/share/52b9839a25c34891bd4112b2dbc44011?sid=535801be-0149-4aec-990d-2f0e17d88efe)

### Reflection

> Pause and reflect here: What challenges have you faced so far? Have there been any “aha!” moments for you? What sort of things would you like to see added to the project (Frigg at large, or your local Frigg instance)? Now that we’re nearing the end of the challenge, what things would you like to know more about (Frigg, Left Hook, integration dev, your potential work, etc.)?

##### JavaScript vs TypeScript

It was a bit challenging to work with plain JavaScript, after many years of the TypeScript compiler preventing me from making silly mistakes. I had to be extra careful with types and data structures, and I missed the autocompletion and type checking that TypeScript provides.

I think it would be a great addition to Frigg to support TypeScript, as it would make the development process smoother and less error-prone.

##### Tests

Since I was supposed to work with unit tests, using mocks, it was hard for me to think of what I should be testing on the API module.

As an integration framework, Frigg is more focused on connecting services and data, so the business logic is usually on the services themselves.

My thought for the use cases that could be tested without making API calls was to test the data transformation and validation functions, but there wasn't much of that on my module.

##### Questions

I'm curious about what is the roadmap for Frigg. Are you planning to add more features to the framework? What are the most requested features? Are you planning to support TypeScript in the future?
