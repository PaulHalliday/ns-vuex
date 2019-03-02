<template>
  <Page>
    <ActionBar :title="selectedProject.name">
      <ActionItem
        ios.systemIcon="4"
        ios.position="right"
        android.systemIcon="btn_plus"
        android.position="actionBar"
        @tap="addTodo"
      />
    </ActionBar>
    <ListView for="todo in todos" class="list-group" @itemTap="removeTodo">
      <v-template>
        <Label class="list-group-item" :text="todo.name"/>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import * as dialogs from "tns-core-modules/ui/dialogs";

import * as fromTodo from "../store/modules/Todo/mutation-types";

export default {
  props: ["selectedProject"],
  created() {
    this.GET_TODOS();
  },
  methods: {
    ...mapActions("Todo", [
      fromTodo.ADD_TODO,
      fromTodo.GET_TODOS,
      fromTodo.REMOVE_TODO
    ]),
    addTodo() {
      prompt({
        title: "New Task",
        message: "Task name:",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        defaultText: "",
        inputType: dialogs.inputType.text
      }).then(result => {
        this.ADD_TODO({
          name: result.text,
          projectId: this.selectedProject.id
        });
      });
    },
    removeTodo(event) {
      const item = event.item;

      this.REMOVE_TODO(item);
    }
  },
  computed: {
    ...mapGetters("Todo", [fromTodo.GET_TODOS_BY_PROJECT_ID]),
    todos() {
      return this.getTodosByProjectId(this.selectedProject.id);
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
