# What's this?
This is an effort to create plug and play forms.
Most of the projects I've ever worked with need a backoffice or an administration area which is usually full of forms and lists of information. Most projects start building these forms from scratch and the purpose of this repo is to accelerate this process.

# Philosophy
The philosophy behind this project is to make a "pluggable" system to build those forms. Out of the box, you'll get the UI, the validation and a connection to a datastore (whatever it is). Of course, every one of those is "pluggable", so you can take one of them out and build your own.

# How does it work?
Just send it your models! Based on the models you send, it will:
 
  1. Build a list view with pagination.
  2. Build a single item view with the options to update or delete an item.
  3. Validate every item before saving it.
  4. Show error messages you return.
  5. Call hooks in order to execute any side effect you'll need (beforeSave, afterSave).

# Current Status
*WIP*