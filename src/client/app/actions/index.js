export default class Actions {
  static exampleAction(text) {
    return {
      type: 'EXAMPLE_ACTION_TYPE',
      text,
    };
  }
}