/* prettier-ignore */
/* English */
module.exports = {
	"locale": {
		"code": "en",
	},

    "tray": {
		"show_app": "Show App",
		"hide_app": "Hide App",
		"settings": "Settings",
		"exit_app": "Exit App",
	},

	"menu": {
		"file": "File",
		"show_app": "Show App",
		"hide_app": "Hide App",
		"settings": "Settings",
		"exit": "Exit",
		"view": "View",
		"reset": "Reset Zoom",
		"zoom_in": "Zoom In",
		"zoom_out": "Zoom Out",
		"tools": "Tools",
		"edit_codes": "Edit Codes",
		"import": "Import",
		"export": "Export",
		"help": "Help",
		"documentation": "Documentation",
		"release_notes": "Release Notes",
		"support_development": "Support",
		"about": "About",
		"show_licenses": "Licenses",
		"update": "Update",
		"info": "Version",
	},

	"dialog": {
		"error": "Error occurred while running Authme.",
		"integrity": "Failed to check the integrity of the files. \n\nYou or someone messed with the settings file, shutting down for security reasons!",
		"support": "Authme is a free, open source software. \n\nIf you like the app, please consider supporting!",
		"feedback": "Thank you for providing feedback! \n\nPlease report issues or feature requests on GitHub or by Email.",
		"docs": "You can view the Authme Docs in the browser. \n\nClick open to view it in your browser.",
		"license": "This software is licensed under GPL-3.0 \n\nCopyright © 2020 Lőrik Levente",
		"no_update_available": "No update available: \n\nYou are running the latest version! \n\nYou are currently running:",
		"update_error": "Error during auto update. \n\nTry to restart Authme and check your network connection.",
	},

	"button": {
		"yes": "Yes",
		"no": "No",
		"cancel": "Cancel",
		"close": "Close",
		"more": "More",
		"open": "Open",
		"copy": "Copy",
		"copied": "Copied",
		"help": "Help",
		"exit": "Exit",
		"report": "Report"
	},

	"text": {
		"name": "Name",
		"code": "Code",
		"time": "Time",
		"latest_save": "Latest save",
		"display": "Display",
		"default": "Default",
		"quick_shortcuts": "Please save your 2FA codes on the main page and click reload to be able to create quick shortcuts!",
		"refresh": "Refresh",
	},

	"landing": [
		"Create password",
		"Create a strong password to encrypt your 2FA codes!",
		"Password",
		"Confirm password",
		"Confirm",
		"More options",
		"Don't require password",
		"If you don't want to type in your password every time you launch Authme.",
		"Confirm",
		"Window capture",
		"Allows screenshots and screen capture. You can record or screenshot the app until you restart Authme.",
	],

	"landing_dialog": {
		"no_password": "Are you sure? \n\nThis way everyone with access to your computer can access your 2FA codes too.",
	},

	"landing_text": {
		"maximum_password": "Maximum password length is 64 characters!",
		"minimum_password": "Minimum password length is 8 characters!",
		"passwords_match":  "Passwords match! Please wait!",
		"top_1000_password": "This password is on the list of the top 1000 most common passwords. Please choose a more secure password!",
		"passwords_dont_match": "Passwords don't match! Try again!",
		"please_wait": "Please wait!",
	},

	"confirm": [
		"Confirm password",
		"Please enter your password to continue!",
		"Password",
		"Confirm",
		"More options",
		"Window capture",
		"Allows screenshots and screen capture. You can record or screenshot the app until you restart Authme.",
	],

	"confirm_text": {
		"try_again": "Try again!",
		"locked": "Authme is locked. Please try again in 5 seconds!",
	},

	"application": [
		"New Authme version available. Starting the update...",
		"Restart",
		"Release notes",
		"Enjoying Authme?",
		"Rate on Microsoft Store",
		"Star on GitHub",
		"Provide feedback",
		"Choose your import file",
		"If you don't have an import file containing your 2FA codes please create one!",
		"Choose import file",
		"Create import file",
		"Getting started",
		"Importing files",
		"Help",
		"Sample import file",
		"Useful options",
		"Settings",
		"Support",
		"Save codes",
		"Save your 2FA codes to your computer for future use.",
		"Save codes",
		"Name",
		"Description",
	],

	"application_dialog": {
		"choose_import_file" : "Import from Authme import file",
		"authme_file": "Authme file",
		"old_file_0": "This file is an Authme",
		"old_file_1": "file! \n\nYou need an Authme export or import file!",
		"codes_saved": "Loaded 2FA codes saved! \n\nIf you want to add more codes or delete codes go to Edit codes under Tools!",
	},

	"application_text": {
		"no_results": "No search results found!",
		"not_found_results": "Not found search results for"
	},

	"settings": [
		"General",
		"Codes",
		"Shortcuts",
		"Experimental",
		"Feedback",
		"Version",
		"New Authme version available. Starting the update...",
		"Restart",
		"Release notes",
		"Enjoying Authme?",
		"Rate on Microsoft Store",
		"Star on GitHub",
		"Provide feedback",
		"Settings",
		"You can configure the app settings here.",
		"Close window",
		"Launch on startup",
		"Start Authme after your computer started. Authme will start on the system tray.",
		"Close app to tray",
		"When closing Authme the app will not quit. You can open Authme from the system tray.",
		"Window capture",
		"Allows screenshots and screen capture. You can record or screenshot the app until you restart Authme.",
		"Hardware acceleration",
		"Uses GPU for smoother experience. Enable this option if you experience frame drops or lags.",
		"Language",
		"Choose which language should Authme use by default. The translations are not perfect and changing the language requires a restart.",
		"Default display",
		"Choose which display should Authme open by default. Authme will fall back to the primary display if the chosen one is not available.",
		"Clear data",
		"Clear password, 2FA codes and all other settings. Be careful.",
		"Clear data",
		"Open folders",
		"You can open the folders Authme uses. Editing or deleting files might cause problems.",
		"Authme folder",
		"Settings folder",
		"Cache folder",
		"Logs",
		"You can view the logs for debugging. You can view all the logs in the settings folder.",
		"Latest log",
		"Logs folder",
		"Sort codes",
		"You can choose how to sort the codes. By default codes are sorted by importing order.",
		"Codes description",
		"The saved codes description will be visible. You can copy it after clicking it.",
		"Blur codes",
		"Blur the saved codes. You can still copy the codes or hover over the codes to show them.",
		"Search history",
		"Save the latest code you searched for. Works even after restart.",
		"Reset search after copy",
		"Reset the search bar after you copied a code. Useful if you copy and search for a lot of codes.",
		"Quick copy shortcuts",
		"You can create a shortcut for your most used codes to copy quickly. Shortcuts not work on this tab, go to any other settings tab to reactivate them!",
		"Shortcuts",
		"You can modify the shortcuts here, read the documentation for more information. Shortcuts not work on this tab, go to any other settings tab to reactivate them!",
		"Global shortcuts",
		"You can modify the global shortcuts here, read the documentation for more information. Shortcuts not work on this tab, go to any other settings tab to reactivate them!",
		"These features are under development and can be unstable! Use it at your own risk!",
		"Features",
    ],

	"settings_dialog": {
		"restart": "If you want to change this setting you have to restart the app. \n\nDo you want to restart it now?",
		"clear_data": "Are you sure you want to clear all data? \n\nThis cannot be undone!",
		"confirm_clear_data": "Are you absolutely sure? \n\nThere is no way back!",
	},

    "import": [
		"You can create your import file here, see supported QR codes for more information.",
		"Close window",
		"Supported QR codes",
		"List of the currently supported QR codes. You can import from more types at the same time.",
		"Examples",
		"TOTP 2FA QR code",
		"A TOTP QR code is that you find mostly everywhere if you want to setup 2FA.",
		"Example: (Google, Facebook, Microsoft).",
		"Starts with: (otpauth://totp/).",
		"Detailed steps",
		"Migration 2FA QR code",
		"A migration QR code is what you can export, and contains all of your already imported codes.",
		"Example: (Google Authenticator).",
		"Starts with: (otpauth-migration://).",
		"Detailed steps",
		"Create import file",
		"Create your import file here. Choose the most convenient way for you.",
		"Choose images",
		"Choose images that contain a 2FA QR code.",
		"Use webcam",
		"Use your webcam to scan 2FA QR codes.",
		"Capture screen",
		"Capture a 2FA QR code from your screen.",
		"Stop"
    ],

	"import_dialog": {
		"choose_images": "Choose images",
		"image_file": "Image file",
		"save_file": "Save file",
		"no_webcam": "Not found webcam! \n\nPlease check if your webcam is working correctly or not used by another application.",
		"wrong_qrcode": "Wrong QR code found! \n\nMake sure this is a correct QR code and try again!",
		"qrcode_found": "QR code(s) found! \n\nNow select where do you want to save the file!",
		"webcam_used": "Webcam in use! \n\nPlease check if your webcam is not used by another application.",
		"no_qrcode_found_0": "No QR code found on the picture:",
		"no_qrcode_found_1": "\n\nTry to take a better picture and try again!",
		"correct_qrcode_found_0": "QR codes imported, you have saved codes, so you can add your new codes under Edit codes.",
		"correct_qrcode_found_1": "\n\nNow select where do you want to save the file!",
		"correct_qrcode_found_2": "QR codes imported, go back to the main page to see codes!",
		"correct_qrcode_found_3": "\n\nDo you want to save to file for a backup?",
		"wrong_qrcode_found_0": "Wrong QR code found on the picture:",
		"wrong_qrcode_found_1": "\n\nMake sure this is a correct QR code and try again!",
		"capture_error": "Error starting capture!",
	},

	"export": [
		"You can export the 2FA codes you saved.",
		"Close window",
		"Export codes",
		"If you saved your codes you can export the secrets and the saved QR codes.",
		"Save exported codes",
		"Save your exported 2FA codes to use it elsewhere.",
		"Export .authme file",
		"Ideal to import for Authme or other Authme apps.",
		"Export .html file",
		"Ideal for scanning the QR codes or for security backup.",
	],

	"export_dialog": {
		"text_file": "Text file",
		"html_file": "HTML file",
		"no_save_found": "No save file found. \n\nGo back to the main page and save your codes!",
	},

	"edit": [
		"Edit codes",
		"You can edit or delete your existing codes and you can add more codes.",
		"Close window",
		"Restore",
		"You can restore the latest save. If you load your codes below it will overwrite the current save!",
		"Restore",
		"Load saved codes",
		"You can load the 2FA codes you saved. After that you can edit or delete them and you can add more codes.",
		"Load codes",
		"Edit mode",
		"Now you can modify existing codes or add more codes.",
		"Save modifications",
		"Add codes",
		"More options",
		"Revert changes",
		"Delete codes",
	],

	"edit_dialog": {
		"load_rollback": "Are you sure you want to rollback to the latest save? \n\nThis will overwrite your saved codes!",
		"rollback_successful": "Rollback successful! \n\nGo back to the main page to check out the changes!",
		"delete_code": "Are you sure you want to delete this code? \n\nIf you want to revert this, click more options and revert changes.",
		"create_save": "Are you sure you want to save the modified code(s)? \n\nThis will overwrite your saved codes!",
		"codes_added": "Code(s) added! \n\nScroll down to view them!",
		"load_codes": "Are you sure you want to load your currently saved codes? \n\nThis will overwrite your latest rollback!",
		"revert_changes": "Are you sure you want to revert all current change(s)? \n\nYou will lose all current changes!",
		"delete_all_codes": "Are you sure you want to delete all codes? \n\nYou can revert this with a rollback.",
	},

	"popup": {
		"downloading_update": "Downloading update:",
		"update_downloaded": "Successfully downloaded update! Please restart the app, Authme will install the updates in the background and restart automatically.",
	},

	"info_bar": {
		"feedback": "Do you have any ideas or found a bug?",
		"feedback_link": "Feedback",
		"rate": "Enjoying Authme?",
		"rate_link": "Rate on Microsoft Store",
		"translate": "Do you want to see Authme in another language?",
		"translate_link": "Translation",
	},
}
