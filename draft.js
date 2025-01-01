const chipContainer = document.getElementById("chip-container");

chips.forEach(category => {
    // Create a category div
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    // Add category title
    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category.categoryTitle;
    categoryDiv.appendChild(categoryTitle);

    category.subs.forEach(sub => {
        // Add subsection title
        const subTitle = document.createElement("h3");
        subTitle.textContent = sub.title;
        subTitle.classList.add("title");
        categoryDiv.appendChild(subTitle);

        // Create a list for the chips
        const chipList = document.createElement("ul");
        chipList.classList.add("chip-list");

        sub.List.forEach(chip => {
            const chipItem = document.createElement("li");
            chipItem.classList.add("chip-item");
            chipItem.textContent = `${chip.ic}: ${chip.desc}`;
            chipList.appendChild(chipItem);
        });

        categoryDiv.appendChild(chipList);
    });

    chipContainer.appendChild(categoryDiv);
});