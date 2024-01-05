
        // Get the modal element
        var modal = document.getElementById("popup");

        // Get the current date
        var today = new Date();

        // Check if the modal has been shown today
        if (localStorage.getItem("modalShownDate") !== today.toDateString()) {
            // Show the modal after a 4-second delay
            setTimeout(function () {
                modal.classList.add("visible");
            }, 10000);
            //remove -1 from visible 
            // Set the modalShownDate in localStorage to the current date
            localStorage.setItem("modalShownDate", today.toDateString());
        }

        // Add a listener to the close button of the modal
        var closeBtn = document.getElementById("close_popup");
        closeBtn.addEventListener("click", function () {
            modal.classList.remove("visible");
        });

        // Code for Popup Small
        var modalSmall = document.getElementById("popup_small");

        // Check if the modal has been shown today
        if (localStorage.getItem("modalSmallShownDate") !== today.toDateString()) {
            // Show the modal after a 4-second delay
            setTimeout(function () {
                modalSmall.classList.add("visible");
            }, 2000);
            // Set the modalShownDate in localStorage to the current date
            localStorage.setItem("modalSmallShownDate", today.toDateString());
        }

        // Add a listener to the close button of the modal
        var closeBtnSmall = document.getElementById("close_popup_small");
        closeBtnSmall.addEventListener("click", function () {
            modalSmall.classList.remove("visible");
        });