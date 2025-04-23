// Store already used countries across game sessions
let usedCountryCodes = new Set();


export async function fetchCountryData(limit = 8) {
  try {
    // Fetch data from REST Countries API
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error("Failed to fetch country data");
    }

    const data = await response.json();

    // Filter out countries that have already been shown
    const availableCountries = data.filter(
      (country) => !usedCountryCodes.has(country.cca2)
    );

    // If we're running out of countries, reset the used countries set
    if (availableCountries.length < limit) {
      console.log("Resetting country pool - all countries have been used");
      usedCountryCodes.clear();
      // Now all countries are available again
      return fetchCountryData(limit);
    }

    // Select random countries and extract only needed data
    const selectedCountries = availableCountries
      .sort(() => 0.5 - Math.random()) // Shuffle array
      .slice(0, limit) // Take only the number of countries specified by limit
      .map((country) => {
        // Add to used countries set
        usedCountryCodes.add(country.cca2);

        return {
          id: country.cca2.toLowerCase(), // Country code as unique ID
          name: country.name.common,
          flagUrl: `https://flagcdn.com/${country.cca2.toLowerCase()}.svg`,
        };
      });

    return selectedCountries;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return [];
  }
}

/**
 * Resets the list of used countries (useful for starting a new game)
 */
export function resetUsedCountries() {
  usedCountryCodes.clear();
}
