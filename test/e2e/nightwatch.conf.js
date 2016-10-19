require('babel-register')
<<<<<<< HEAD
var config = require('../../config')
=======
>>>>>>> 6acfd24917cff792dfc4cf5556bff16d48bd0ba2

// http://nightwatchjs.org/guide#settings-file
module.exports = {
  "src_folders": ["test/e2e/specs"],
  "output_folder": "test/e2e/reports",
  "custom_assertions_path": ["test/e2e/custom-assertions"],

  "selenium": {
    "start_process": true,
<<<<<<< HEAD
    "server_path": "node_modules/selenium-server/lib/runner/selenium-server-standalone-2.53.1.jar",
=======
    "server_path": "node_modules/selenium-server/lib/runner/selenium-server-standalone-2.53.0.jar",
>>>>>>> 6acfd24917cff792dfc4cf5556bff16d48bd0ba2
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": require('chromedriver').path
    }
  },

  "test_settings": {
    "default": {
      "selenium_port": 4444,
      "selenium_host": "localhost",
<<<<<<< HEAD
      "silent": true,
      "globals": {
        "devServerURL": "http://localhost:" + (process.env.PORT || config.dev.port)
      }
=======
      "silent": true
>>>>>>> 6acfd24917cff792dfc4cf5556bff16d48bd0ba2
    },

    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
