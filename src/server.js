import { Server, Model, Factory } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      todo: Model,
    },

    factories: {
      todo: Factory.extend({
        text(i) {
          return `Todo ${i + 1}`;
        },

        isDone: false,
      }),
    },

    seeds(server) {
      server.create("todo", { text: "Buy groceries", isDone: false });
      server.create("todo", { text: "Walk the dog", isDone: false });
      server.create("todo", { text: "Do laundry", isDone: false });
    },

    routes() {
      this.namespace = "api";

      this.get("/test-todos", (schema) => {
        return schema.todos.all();
      });
      this.post("/todos", (schema, request) => {
        let attrs = JSON.parse(request.requestBody).todo;

        return schema.todos.create(attrs);
      });

      this.delete("/todos/:id", (schema, request) => {
        return schema.todos.find(request.params.id).destroy();
      });
    },
  });

  return server;
}
