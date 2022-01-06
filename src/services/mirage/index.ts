import { createServer, Factory, Model } from "miragejs";
import casual from "casual-browserify";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return `${casual.full_name}`;
        },
        email() {
          return casual.email.toLowerCase();
        },
        createdAt() {
          return casual.date("YYYY-MM-DD");
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");
      this.patch("/users");
      this.delete("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
