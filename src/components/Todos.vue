<template>
  <div id="Todo">
    <h1>Cloud Todo</h1>
    <div id="content">
      <form @keypress.enter="show('custom-template')" @submit.prevent="addTodos" id="add-todo-form">
        <b-form-input class="input" v-model="Task" placeholder="Enter your todo"></b-form-input>
      </form>

      <transition-group
        name="list"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
      >
        <b-list-group class="centerBootstrap" key="center">
          <b-list-group-item
            class="input-bootstrap"
            variant="light"
            v-for="(todo, id) in todos"
            :key="id"
          >
            {{todo.Task}}
            <i @click="deleteTodos(todo)" class="fa fa-minus-circle"></i>
          </b-list-group-item>
        </b-list-group>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { db } from "@/main";
export default {
  data: () => ({
    Task: null,
    todos: [],
    selectedEvent: {},
  }),
  mounted() {
    this.getTodos();
  },
  methods: {
    // getTodos() {
    //   db.collection("Todos")
    //     .get()
    //     .then((snapshot) => {
    //       snapshot.docs.forEach((doc) => {
    //         console.log(doc.data());
    //       });
    //     });
    // },
    show(group, type = "") {
      this.$notify({
        group,
        title: "Your Todos Have Been Successfully Added",
        type,
      });
    },

    clean(group) {
      this.$notify({ group, clean: true });
    },
    async getTodos() {
      let snapshot = await db.collection("Todos").get();
      let todos = [];
      snapshot.forEach((doc) => {
        let appData = doc.data();
        appData.id = doc.id;
        todos.push(appData);
      });
      this.todos = todos;
    },
    async addTodos() {
      if (this.Task) {
        await db.collection("Todos").add({
          Task: this.Task,
        });
        this.getTodos();
        this.Task = "";
      } else {
        alert("Your Task Is Required");
      }
    },
    // deleteTodos(todo) {
    //   db.collection("Todos")
    //     .doc(todo.id)
    //     .delete()
    //     .then(() => {
    //       console.log("Document successfully deleted!");
    //     })
    //     .catch(function (error) {
    //       console.error("Error removing document: ", error);
    //     });
    //   console.log(todo);
    // },
    async deleteTodos(todo) {
      await db.collection("Todos").doc(todo.id).delete();
      console.log("Document successfully deleted!");
    },
  },
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.centerBootstrap {
  display: flex;
  justify-content: center;
}
.input-bootstrap {
  /* max-width: 500px; */
  margin-top: 0.3rem;
  margin-left: 29.5rem;
  margin-right: 29.5rem;
  color: #2c3e50;
  transition: 100ms ease-in-out;
}

i {
  float: right;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .input-bootstrap {
    /* max-width: 500px; */
    margin-top: 0.3rem;
    margin-left: 18rem;
    margin-right: 18rem;
    color: #2c3e50;
    transition: 100ms ease-in-out;
  }
}

@media (max-width: 900px) {
  .input-bootstrap {
    /* max-width: 500px; */
    margin-top: 0.3rem;
    margin-left: 5rem;
    margin-right: 5rem;
    color: #2c3e50;
    transition: 100ms ease-in-out;
  }
}

.input {
  margin: 2rem;
}

@media (max-width: 400px) {
  .input {
    font-size: 15px;
  }
}

h1 {
  color: rgb(172, 184, 201);
  font-size: 64px;
  letter-spacing: 2px;
  margin-top: 80px;
  text-align: center;
}

.content {
  /* max-width: 960px; */
  margin: 30px auto;
  padding: 20px 30px;
  border-radius: 10px 120px 10px 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 20px;
  background: #f6f6f6;
  font-size: 20px;
  color: #555;
  position: relative;
  border-bottom: 1px solid #e6e6e6;
  height: 46px;
}

li:nth-child(even) {
  padding: 20px;
  background: #f2f2f2;
}

li span {
  display: block;
}

li span:nth-child(2) {
  font-size: 16px;
  margin-top: 6px;
  color: #999;
}

li div {
  position: absolute;
  top: 0;
  right: 0px;
  background: rgba(255, 255, 255, 0.6);
  width: 40px;
  text-align: center;
  padding: 10px 0;
  font-weight: bold;
  cursor: pointer;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
}

form input {
  outline: none;
  width: 38%;
  margin: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  border-radius: 0px 16px 0px 16px;
  margin: 0 1%;
  padding: 10px;
  display: block;
  box-sizing: border-box;
  font-size: 18px;
  transition: 300ms ease-in-out;
}

form input:focus {
  border-radius: 16px 0px 16px 0px;
  padding-bottom: 8px;
}

form:after {
  content: "";
  clear: both;
  display: block;
}

button {
  border: 0;
  background: #fff;
  border-radius: 10px;
  padding: 13px;
  width: 14%;
  box-shadow: -1px 0px 1px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  font-family: ubuntu;
  letter-spacing: 1px;
  color: #999;
}
</style>