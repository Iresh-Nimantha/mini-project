// List of crop options
let crops = [
    "Brinjal",
    "Rice",
    "Potato",
    "Carrot",
    "Lettuce",
    "Spinach",
    "Cucumber",
    "Onion",
    "Garlic",
    "Strawberry",
    "Watermelon",
    "Grapes",
    "Banana",
    "Apple",
    "Orange"
  ];
  
  // Function to populate the dropdown menu with crop options
  function populateDropdown() {
    const dropdown = document.getElementById("cropDropdown");
    dropdown.innerHTML = ""; // Clear existing options
    
    crops.forEach(crop => {
      const option = document.createElement("option");
      option.text = crop;
      dropdown.add(option);
    });
  }
  
  // Function to filter crops based on user input
  function filterCrops() {
    const searchTerm = document.getElementById("cropSearch").value.toLowerCase();
    const dropdown = document.getElementById("cropDropdown");
  
    // Clear existing options
    dropdown.innerHTML = "";
  
    crops.forEach(crop => {
      if (crop.toLowerCase().includes(searchTerm)) {
        const option = document.createElement("option");
        option.text = crop;
        dropdown.add(option);
      }
    });
  }
  
  // Function to update search box value when an option is selected
  function updateSearchBox() {
    const selectedOption = document.getElementById("cropDropdown").value;
    document.getElementById("cropSearch").value = selectedOption;
  }
  
  // Populate dropdown menu when the page loads
  populateDropdown();
  
  // Update dropdown menu when user searches for a crop
  document.getElementById("cropSearch").addEventListener("input", filterCrops);
  
  // Update search box value when an option is selected
  document.getElementById("cropDropdown").addEventListener("change", updateSearchBox);



  // List of additional crop options
  let additionalCrops = [
        "Veraiety",
      "Duration(Months)",
      "Spacing",
      "Seed Rate",
      "Fertilizer",
      "Yield",
      "Others"
  ];
  
  // Function to populate additional crop options
  function populateAdditionalCrops() {
    const additionalCropList = document.getElementById("additionalCropList");
    additionalCropList.innerHTML = ""; // Clear existing list
    
    additionalCrops.forEach(crop => {
      const listItem = document.createElement("li");
      const checkboxLabel = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = crop;
      checkboxLabel.appendChild(checkbox);
      checkboxLabel.appendChild(document.createTextNode(crop));
      listItem.appendChild(checkboxLabel);
      additionalCropList.appendChild(listItem);
    });
  }
  
  populateAdditionalCrops();
