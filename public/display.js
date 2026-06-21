const main = document.querySelector("main");
const spinner = document.querySelector(".spinner");

// Function to display weather data
function displayWeatherData(data) {
  const {
    location: { name, country, localtime },
    current: {
      temp_c,
      condition: { text, icon },
      feelslike_c,
      humidity,
      wind_kph,
    },
  } = data;
  main.innerHTML = `
  <div class="w-full flex justify-between items-center">
        <div class="flex gap-1.5 items-center">
          <i class="fa-solid fa-location-dot text-xl text-red-600"></i>
          <p class="font-bold text-sm text-blue-900 dark:text-blue-500 sm:text-2xl">${name}, ${country}</p>
        </div>
        <div class="font-semibold italic text-sm text-blue-700 dark:text-blue-300 sm:text-lg">
          ${localtime}
        </div>
    </div>
    
    <hr class="h-0.5 bg-white w-full border-0 rounded-2xl bg-linear-to-r from-blue-300 via-blue-600 to-blue-300"/>
      
    <div
        class="flex flex-col gap-5 py-10 px-2.5 w-full bg-linear-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/20 rounded-4xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] dark:bg-linear-to-br dark:from-gray-800/20 dark:to-gray-800/5 dark:border-gray-700/20 transition-color duration-300 ease-linear"
      >
        <div class="flex flex-col justify-center items-center gap-2.5">
          <img src="${icon}" alt="${text}" class="w-24 h-24 sm:w-36 sm:h-36" />
          <div class="temperature text-8xl font-semibold italic text-white dark:text-blue-700">
            ${temp_c}°C
          </div>
          <div class="condition text-2xl font-semibold text-white dark:text-blue-700">
            ${text}
          </div>
        </div>

        <div
          class="py-3 flex flex-col justify-center gap-5 items-center sm:flex-row sm:justify-around"
        >
          <!-- Feels like Temperature -->
          <div class="feels-like flex flex-col items-center gap-1">
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-temperature-high text-2xl text-red-600"></i>
              <p class="text-2xl font-semibold text-gray-800 dark:text-gray-300">Feels like</p>
            </div>
            <div class="text-4xl font-semibold italic text-white dark:text-blue-700">${feelslike_c}°</div>
          </div>

          <!-- Humidity -->
          <div class="humidty flex flex-col items-center gap-1">
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-droplet text-2xl text-gray-200"></i>
              <p class="text-2xl font-semibold text-gray-800 dark:text-gray-300">Humidity</p>
            </div>
            <div class="text-4xl font-semibold italic text-white dark:text-blue-700">${humidity}%</div>
          </div>

          <!-- Wind Speed -->
          <div class="wind-speed flex flex-col items-center gap-1">
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-wind text-2xl text-blue-200"></i>
              <p class="text-2xl font-semibold text-gray-800 dark:text-gray-300">Wind Speed</p>
            </div>
            <div class="text-4xl font-semibold italic text-white dark:text-blue-700">${wind_kph} KPH</div>
          </div>
        </div>
      </div>`;
}

// Function to display error messages
function displayError(message) {
  main.innerHTML = `
    <div class="w-full flex flex-col justify-center items-center gap-5 py-10 px-2.5">
      <i class="fa-solid fa-triangle-exclamation text-9xl text-red-600"></i>
      <p class="text-center text-xl font-semibold text-gray-800 dark:text-gray-300">${message}</p>
    </div>
  `;
}

// Functions to show and hide the loading spinner
function displayLoadingSpinner() {
  spinner.classList.remove("hidden");
}

function hideLoadingSpinner() {
  spinner.classList.add("hidden");
}

// Exporting the functions for use in other modules
export {
  displayWeatherData,
  displayError,
  displayLoadingSpinner,
  hideLoadingSpinner,
};
