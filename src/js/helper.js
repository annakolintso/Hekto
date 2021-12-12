export const createDropdown = () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownLocaleStorage = localStorage.getItem('dropdown');
    const parsedData = (dropdownLocaleStorage && JSON.parse(dropdownLocaleStorage) || {});
    dropdowns && dropdowns.forEach(dropdown => {
        const title = dropdown.querySelector('.dropdown__title');
        const dropdownName = dropdown.dataset.name;

        if (Object.prototype.hasOwnProperty.call(parsedData, dropdownName)) {
            title.textContent = parsedData[dropdownName].text;
            title.dataset.value = parsedData[dropdownName].value;
        }
        const titleValue = title.dataset.value;
        const items = dropdown.querySelectorAll('.dropdown__item');
        items && items.forEach(item => {
            const itemId = item.dataset.id;
            if (titleValue === itemId) {
                item.classList.add('active');
            }
            item.addEventListener('click', () => {
                title.textContent = item.textContent;
                let activeItem = dropdown.querySelector('.dropdown__item.active');
                activeItem.classList.remove('active');
                item.classList.add('active');
                parsedData[dropdownName] = {
                    text: item.textContent,
                    value: item.dataset.id
                };
                localStorage.setItem("dropdown", JSON.stringify(parsedData));
            });
        })
    })
}

export const createTabs = () => {
    const tabs = document.querySelectorAll(".tabs");
    tabs && tabs.forEach(tab => {
        const items = tab.querySelectorAll(".tabs-item");
        const tabList = tab.querySelector(".tabs-list");
        const activeContent = tab.querySelector(".tabs-content.active");
        tabList.style.height = activeContent.offsetHeight + "px";
        tab.classList.add("inited");
        items && items.forEach(item => {
            item.addEventListener("click", () => {
                const targetId = item.dataset.id;
                const activeItem = tab.querySelector(".tabs-item.active");
                const activeContent = tab.querySelector(".tabs-content.active");
                const targetContent = tab.querySelector(`.tabs-content[data-id="${targetId}"]`);
                activeItem.classList.remove("active");
                activeContent.classList.remove("active");
                item.classList.add("active");
                targetContent.classList.add("active");
                tabList.style.height = targetContent.offsetHeight + "px";
            })
        })
    })
}