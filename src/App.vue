<template>
  <div id="app">
    <notifications
      group="custom-template"
      :duration="5000"
      :width="500"
      animation-name="v-fade-left"
      position="top left"
    >
      <template slot="body" slot-scope="props">
        <div class="custom-template">
          <div class="custom-template-icon">
            <i class="fa fa-right-circle"></i>
          </div>
          <div class="custom-template-content">
            <h2 class="custom-template-title">{{props.item.title}}</h2>
          </div>
          <div class="custom-template-close" @click="props.close">
            <i class="fa fa-close"></i>
          </div>
        </div>
      </template>
    </notifications>
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todos";
export default {
  name: "App",
  data() {
    return {
      id: 0,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2],
        },
        leave: {
          opacity: 0,
          height: 0,
        },
      },
    };
  },
  components: {
    Todo,
  },
};
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #2c3e50;
  color: #2c3e50;
}

body {
  background: #2c3e50 !important;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  padding-top: 80px;
  margin: 0;
}

body h2 {
  font-weight: 300;
}

body h2 a {
  color: black;
  font-size: 12px;
}

body button {
  display: inline-block;
  box-sizing: border-box;
  border: 0;
  border-radius: 3px;
  color: white;
  vertical-align: top;
  text-decoration: none;
  font-size: 12px;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  transition: all 500ms;
  padding: 12px;
  box-shadow: none;
  background: #02ccba;
  font-weight: 600;
  width: 100%;
  letter-spacing: 1px;
  box-shadow: 0 5px 15px 0px rgba(46, 61, 73, 0.1);
}

body button.success {
  background: #68cd86;
}

body button.warn {
  background: #ffb648;
}

body button.error {
  background: #e54d42;
}

body button:active {
  opacity: 0.8;
}

body #app {
  text-align: center;
  color: #2c3e50;
}

body #app .content {
  margin: 0 auto;
  max-width: 420px;
}

.sub-button {
  display: inline-block;
  background: #e54d42;
  padding: 4px;
  box-shadow: 0 5px 15px 0px rgba(46, 61, 73, 0.1);
}

/*
  EXAMPLES
*/
.notification.n-light {
  margin: 10px;
  margin-bottom: 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 10px 20px;
  color: #495061;
  background: #eaf4fe;
  border: 1px solid #d4e8fd;
}

.notification.n-light .notification-title {
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 10px;
  color: #2589f3;
}

.custom-template {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: left;
  font-size: 13px;
  margin: 5px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  background: #e8f9f0;
  border: 2px solid #d0f2e1;
}

.custom-template,
.custom-template > div {
  box-sizing: border-box;
}

.custom-template .custom-template-icon {
  flex: 0 1 auto;
  color: #15c371;
  font-size: 32px;
  padding: 0 10px;
}

.custom-template .custom-template-close {
  flex: 0 1 auto;
  padding: 0 20px;
  font-size: 16px;
  opacity: 0.2;
  cursor: pointer;
}

.custom-template .custom-template-close:hover {
  opacity: 0.8;
}

.custom-template .custom-template-content {
  padding: 10px;
  flex: 1 0 auto;
}

.custom-template .custom-template-content .custom-template-title {
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
}

.v-fade-left-enter-active,
.v-fade-left-leave-active,
.v-fade-left-move {
  transition: all 0.5s;
}

.v-fade-left-enter,
.v-fade-left-leave-to {
  opacity: 0;
  transform: translateX(-500px) scale(0.2);
}
</style>
