export default {
  updateMessage(context, newMessage) {
    context.commit("updateMessage", newMessage);
  },
}