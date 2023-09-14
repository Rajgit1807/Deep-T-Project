    // Fetch the JSON data
    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            // Access the data and render it in separate HTML tags
            const titlehName = document.querySelector(".text1");
            const liName = document.querySelector(".lititle");
            const exploreText = document.querySelector(".text");
            const headerText = document.querySelector(".heading-text");
           
                  

            titlehName.textContent = `${data.tasks[0].task_title}`;
            liName.textContent =`${data.tasks[0].task_title}`;
            exploreText.textContent = `${data.tasks[0].task_description}`;
            headerText.textContent = `${data.title}`;
            
            
            var i = 0;
            const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4');
            boxes.forEach((box, index) => {
                const assetTitleElement = box.querySelector('.boxtitle'); // Adjust the class selector as needed
                const assetDescriptionElement = box.querySelector('.boxinfo'); // Adjust the class selector as needed
    
                assetTitleElement.textContent = `${data.tasks[0].assets[i].asset_title}`;
                assetDescriptionElement.textContent = `${data.tasks[0].assets[i].asset_description}`;
                i++;
            });
            
            //Adding youtube link
            const box1Youtube = document.querySelector(".box1-imgcont iframe");
            box1Youtube.src = `${data.tasks[0].assets[0].asset_content}`; ;

            //Adding links
            const seeMoreLink = document.querySelector(".box4-seemore a");
            const seeMore2Link = document.querySelector(".box4-seemore2 a");
            seeMoreLink.href = `${data.tasks[0].assets[3].asset_content}`;
            seeMore2Link.href = `${data.tasks[0].assets[3].asset_content}`;
        
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
