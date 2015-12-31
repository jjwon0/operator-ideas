function alertThanks (post) {
  alert("Thanks for submitting an idea! We'll triage it and update it with a status and comments.");
  return post;
}
Telescope.callbacks.add("postSubmitClient", alertThanks);
