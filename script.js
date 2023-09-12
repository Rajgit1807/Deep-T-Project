// Wait for the DOM to be fully loaded

    // Fetch the JSON data
    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            // Access the data and render it in separate HTML tags
            const titlehName = document.querySelector(".text1");
            const liName = document.querySelector(".lititle");
            const exploreText = document.querySelector(".text");
            const headerText = document.querySelector(".heading-text");
            const box1Text = document.querySelector(".box1-text");

            titlehName.textContent = `${data.tasks[0].task_title}`;
            liName.textContent =`${data.tasks[0].task_title}`;
            exploreText.textContent = `${data.tasks[0].task_description}`;
            headerText.textContent = `${data.tasks[0].assets[0].asset_title}`;
            box1Text.textContent = `${data.tasks[0].assets[0].asset_title}`;
        
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
