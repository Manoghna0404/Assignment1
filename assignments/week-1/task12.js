const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// Read and print current settings
console.log(settings);

// 1. Toggle theme between "light" and "dark"
settings.theme = settings.theme === "light" ? "dark" : "light";
console.log(settings);

// 2. Turn autoSave to true
settings.autoSave = true;
console.log(settings);

// 3. Remove the notifications setting
delete settings.notifications;
console.log(settings);

// 4. Freeze the settings object so it cannot be modified
Object.freeze(settings);

// Trying to modify after freeze (will not work)
settings.language = "fr";
console.log(settings);

// List remaining keys
console.log(Object.keys(settings));


