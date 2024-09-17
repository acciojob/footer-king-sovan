cy.visit("http://localhost:3000/");
cy.wait(500); // Add a small wait to allow page to load
cy.get(".media-icons").should("have.css", "display", "flex");
cy.get(".media-icons a").should("have.length", 5);
