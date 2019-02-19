function Reminder($scope, SpeechService, $translate, Focus) {
    // Service variable
    // Flag to check if reminders list is empty
    // Need to use the callback function because when the service is initialize,
    // the translation service is not set up.
    // Check if reminder storage already exists
    // Insert a new task in the reminder list
    // Clear the reminders list and set the empty flag to true
    // Return the reminders list
    // Set a reminder
    // Clear reminders
    // Clear reminders
}

angular.module('SmartMirror')
    .controller('Reminder', Reminder);

