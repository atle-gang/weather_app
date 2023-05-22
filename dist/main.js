/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData)\n/* harmony export */ });\n// Create function that processes JSON data and returns the object for the required data\nfunction selectedWeatherData(weatherData) {\n    const {\n        location: { name: locationName, country },\n        current: {\n            temp_c: temperatureCelsius,\n            condition: { text: conditionText },\n            humidity,\n            wind_kph: windSpeedKph,\n            wind_dir: windDirection,\n        },\n    } = weatherData;\n\n  return {\n    location: { name: locationName, country },\n    current: {\n      temperature: { celsius: temperatureCelsius },\n      condition: conditionText,\n      humidity,\n      wind: { speed_kph: windSpeedKph, direction: windDirection },\n    },\n  };\n}\n\n\n// Create function that hits API server\n// Function takes location(city) and returns weather data for said city\nasync function fetchWeatherData(city) {\n    try {\n        const apiKey = 'f7d08dafee3f42bd92c101550231105';\n        const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;\n\n        // Make API request\n        const response = await fetch(apiURL, { mode: 'cors' });\n        const data = await response.json();\n\n        const selectedData = selectedWeatherData(data);\n        // Log json in console\n        console.log('Selected weather data:', selectedData);\n\n        // Return data\n        return data;\n    }   catch (error) {\n        // Handle any errors that occur during the search   \n        console.error('Error fetching weather data', error);\n    }   \n};\n\n\n\n//# sourceURL=webpack://weather_app/./src/api.js?");

/***/ }),

/***/ "./src/displayInfo.js":
/*!****************************!*\
  !*** ./src/displayInfo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayInfo: () => (/* binding */ displayInfo)\n/* harmony export */ });\nconst displayInfo = (() => {\n    function displaySearchInfo(weatherData) {\n        if (!weatherData) return; \n\n        const searchResult = document.getElementById(\"searchResult\");\n        searchResult.classList.add(\"active\");\n\n        const cityName = document.getElementById(\"cityName\");\n        const temperature = document.getElementById(\"temperature\");\n        const condition = document.getElementById(\"condition\");\n        const wind = document.getElementById(\"windSpeed\");\n        const windDirection = document.getElementById(\"windDirection\");\n        const humidity = document.getElementById(\"humidity\");\n\n\n\n        cityName.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;\n        temperature.textContent = `${weatherData.current.temp_c} °C`;\n        condition.textContent = `Condition: ${weatherData.current.condition.text}`;\n        wind.textContent = `Wind: ${weatherData.current.wind_kph} km/h`;\n        windDirection.textContent = `Wind Direction: ${weatherData.current.wind_dir}`;\n        humidity.textContent = `Humidity: ${weatherData.current.humidity} %`;\n    }\n    return { displaySearchInfo };\n})();\n\n\n//# sourceURL=webpack://weather_app/./src/displayInfo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _displayInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayInfo.js */ \"./src/displayInfo.js\");\n\n\n\nconst searchForm = document.getElementById(\"searchForm\");\nconst searchInput = document.getElementById(\"searchInput\");\nconst searchBtn = document.getElementById(\"searchBtn\");\n\nsearchForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n});\n\nsearchBtn.addEventListener(\"click\", async () => {\n  if (searchInput.value === \"\") return;\n  const weatherData = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(searchInput.value);\n  _displayInfo_js__WEBPACK_IMPORTED_MODULE_1__.displayInfo.displaySearchInfo(weatherData);\n});\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;